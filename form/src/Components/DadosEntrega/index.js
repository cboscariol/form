import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { useState } from 'react';

function DadosEntrega({ onSubmit }) {
	const [getDados, setGetDados] = useState({
		cep: '', endereco: '', numero: '', cidade: '', estado: ''
	})

	const handleChange = (event) => {
		setGetDados({ ...getDados, [event.target.name]: event.target.value })
	}


	return (
		<div>
			<form onSubmit={(e) => {
				e.preventDefault();
				onSubmit()

			}}>
				<TextField
					id='cep'
					label='CEP'
					type='number'
					variant="outlined"
					margin='normal'
					name='cep'
					value={getDados.cep}
					onChange={handleChange}
					required />
				<TextField
					id='endereco'
					label='Endereço'
					type='text'
					variant="outlined"
					fullWidth
					margin='normal'
					name='endereco'
					value={getDados.endereco}
					onChange={handleChange}
					required />
				<TextField
					id='numero'
					label='Número'
					type='number'
					variant="outlined"
					margin='normal'
					name='numero'
					value={getDados.numero}
					onChange={handleChange}
					required />
				<TextField
					id='cidade'
					label='Cidade'
					type='text'
					variant="outlined"
					margin='normal'
					name='cidade'
					value={getDados.cidade}
					onChange={handleChange}
					required />
				<TextField
					id='estado'
					label='Estado'
					type='text'
					variant="outlined"
					margin='normal'
					name='estado'
					value={getDados.estado}
					onChange={handleChange}
					required />

				<Button type='submit' variant="contained" color="primary" fullWidth>Finalizar cadastro</Button>
			</form>

		</div>
	)
}

export default DadosEntrega
