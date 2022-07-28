import Message from './Components/Message/message'
import './index.css'
import Button from './Components/Button/button'

function App() {
  return (
    <>
        <Message title='Estado: Bahia' name='Capital: Salvador' />

        <Button label='Clique para comprar passagem'/>

        <Message title='Estado: Alagoas' name='Capital: Maceió'/>

        <Button label='Clique para comprar passagem'/>

        <Message title='Estado: Sergipe' name='Capital: Aracaju' />

        <Button label='Clique para comprar passagem'/>

    </>
  );
}

export default App;
