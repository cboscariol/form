import React from 'react'
import { useState } from 'react'
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';


function DadosPessoais({ onSubmit }) {
	const [error, setError] = useState({ cpf: { valido: true, texto: "" } })
	const [values, setValues] = useState({
		nome: '', sobrenome: '', cpf: ''
	});

	const [checked, setChecked] = useState({
		promocoes: true, novidades: true
	});


	const validarCpf = (cpf) => {
		if (cpf.length !== 11) {
			return { valido: false, texto: "CPF deve ter 11 dígitos." }
		} else {
			return { valido: true, texto: "" }
		}
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit()

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
			<form action="" onSubmit={handleSubmit}>
				<TextField id="nome" label="Nome" variant="outlined" fullWidth margin='normal' name='nome' value={values.nome} onChange={handleChange} required />
				<TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth margin='normal' name='sobrenome' value={values.sobrenome} onChange={handleChange} required />
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
					onBlur={onBlur}
					required />

				<FormControlLabel label='Promoções' control={<Switch name="promocoes" color="primary" checked={checked.promocoes} onChange={handleChecked} />} />
				<FormControlLabel label='Novidades' control={<Switch name="novidades" color="primary" checked={checked.novidades} onChange={handleChecked} />} />
				<Button type='submit' variant="contained" color="primary" > Próximo </Button>

			</form>
		</>
	)
}

export default DadosPessoais
