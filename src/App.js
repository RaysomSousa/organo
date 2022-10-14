import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Time from './components/Time';

function App() {
const times = [
    {
        nome: 'Camper'
    },
    {
        nome: 'Sniper'
    },
    {
        nome: 'Rush'
    }   
]
const [jogadores, setJogadores] = useState([])
const novoJogador = (jogador) => {
    console.log(jogador)
    setJogadores([...jogadores, jogador])
}

    return (
        <div className="App">
            <Banner />
            <Form  times={times.map(time => time.nome )} novoJogador= {jogador => novoJogador(jogador)}/>
            {times.map(time => <Time key={time.nome} nome={time.nome} />)}
           
            
        </div>
    )
}

export default App