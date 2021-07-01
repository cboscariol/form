import './App.css';
import Form from './Components/Form'
import Container from '@material-ui/core/Container';

function App() {
  return (
    <Container component='article' className="App" maxWidth='sm'>
      <Form />
    </Container>
  );
}

export default App;
