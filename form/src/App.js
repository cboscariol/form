import './App.css';
import DadosPessoais from './Components/DadosPessoais'
import DadosUsuario from './Components/DadosUsuarios';
import DadosEntrega from './Components/DadosEntrega'
import { Typography, Container, Stepper, Step, StepLabel } from '@material-ui/core';
import { useState } from 'react'




function App() {

  const [etapaAtual, setEtapaAtual] = useState(0)

  const formularios = [
    <DadosUsuario onSubmit={nextPage} />,
    <DadosPessoais onSubmit={nextPage} />,
    <DadosEntrega onSubmit={nextPage} />,
    <Typography variant='h5'>CADASTRO FINALIZADO, OBRIGADO!</Typography>
  ]



  function nextPage() {
    setEtapaAtual(etapaAtual + 1)
  }

  return (
    <>
      <Container component='article' className="App" maxWidth='sm' >
        <Typography variant='h4' component='h1' align='center' >Formulário de cadastro</Typography>
        <Stepper activeStep={etapaAtual}>
          <Step> <StepLabel> Login  </StepLabel>  </Step>
          <Step> <StepLabel> Dados Pessoais </StepLabel> </Step>
          <Step> <StepLabel> Dados de entrega </StepLabel> </Step>
          <Step> <StepLabel> Finalização </StepLabel> </Step>
        </Stepper>
        {formularios[etapaAtual]}
      </Container>
    </>
  );
}

export default App;
