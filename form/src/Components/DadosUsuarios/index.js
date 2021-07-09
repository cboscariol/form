import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { useState } from 'react';


function DadosUsuario({ onSubmit }) {
    const [error, setError] = useState({ password: { valido: true, texto: "" } })
    const [getDados, setGetDados] = useState({
        email: '', password: ''
    })

    const handleChange = (event) => {
        setGetDados({ ...getDados, [event.target.name]: event.target.value })
    }

    const validarSenha = (password) => {
        if (password.length < 4 || password.length > 72) {
            return { valido: false, texto: "A senha deve ter entre 4 e 72 dígitos" }
        } else {
            return { valido: true, texto: "" }
        }
    }

    const onBlur = (event) => {
        const ehValido = validarSenha(event.target.value)
        setError({ password: ehValido })

    }


    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onSubmit()

        }}>
            <TextField
                id='email'
                label='E-mail'
                type='email'
                variant="outlined"
                fullWidth
                margin='normal'
                name='email'
                value={getDados.email}
                onChange={handleChange}
                onBlur={onBlur}
                required />
            <TextField
                id='password'
                label='Senha'
                type='password'
                variant="outlined"
                fullWidth
                margin='normal'
                name='password'
                value={getDados.password}
                onChange={handleChange}
                error={!error.password.valido}
                helperText={error.password.texto}
                required />
            <Button type='submit' variant="contained" color="primary">Próximo</Button>
        </form>
    )
}

export default DadosUsuario
