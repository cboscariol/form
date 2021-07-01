import React from 'react'
import { useState } from 'react'
import { Button, TextField, Switch, FormControlLabel, Typography } from '@material-ui/core';


function Form() {
	const [error, setError] = useState({ cpf: { valido: true, texto: "" } })
	const [values, setValues] = useState({
		nome: '', sobrenome: '', cpf: ''
	});

	const [checked, setChecked] = useState({
		promocoes: true, novidades: true
	});

	const validarCpf = (cpf) => {
		if (cpf.length !== 11) {
			return { valido: false, texto: "CPF deve ter 11 digitos." }
		} else {
			return { valido: true, texto: "" }
		}
	}


	const onSubmit = (event) => {
		event.preventDefault();
	}

	const handleChange = (event) => {
		setValues({ ...values, [event.target.name]: event.target.value })
	}

	const handleChecked = (event) => {
		setChecked({ ...checked, [event.target.name]: event.target.checked })
	}

	const onBlur = (event) => {
		const ehValido = validarCpf(event.target.value)
		setError({ cpf: ehValido })

	}

	return (
		<>
			<Typography variant='h4' component='h1' align='center' >Formulário de cadastro</Typography>
			<form action="" onSubmit={onSubmit}>
				<TextField id="nome" label="Nome" variant="outlined" fullWidth margin='normal' name='nome' value={values.nome} onChange={handleChange} />
				<TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth margin='normal' name='sobrenome' value={values.sobrenome} onChange={handleChange} />
				<TextField
					id="cpf"
					label="CPF"
					variant="outlined"
					fullWidth
					margin='normal'
					type='number'
					name='cpf'
					value={values.cpf}
					onChange={handleChange}
					error={!error.cpf.valido}
					helperText={error.cpf.texto}
					onBlur={onBlur} />
				<FormControlLabel label='Promoções' control={<Switch name="promocoes" color="primary" checked={checked.promocoes} onChange={handleChecked} />} />
				<FormControlLabel label='Novidades' control={<Switch name="novidades" color="primary" checked={checked.novidades} onChange={handleChecked} />} />
				<Button type='submit' variant="contained" color="primary" > Cadastrar </Button>

			</form>
		</>
	)
}

export default Form
