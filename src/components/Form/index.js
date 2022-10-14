import './Form.css'
import TextField from '../TextField'
import DropDownList from '../DropDownList'
import Boton from '../Button'
import { useState } from 'react'

const Form = (props) =>{
    const [nome, setNome] = useState('')
    const [nick, SetNick] = useState('')
    const [imagem, setImagem] = useState('')
    const [times, setTime] = useState('')

const createCard = (evento) => {
        evento.preventDefault()
        props.novoJogador ({
            nome,
            nick,
            imagem,
            times
        })
    }


    return(
        <section className='formulario'>
            <form onSubmit={createCard}>
            <h2 className='titulo-formulario'> 
            Prencha os dados para criar o card.</h2>
            <TextField obrigatorio={true} 
                label='Nome' 
                placeholder="Digite seu nome..."
                valor = {nome}
                aoAlterado ={ valor => setNome(valor)}
             />
            <TextField obrigatorio={true} label='Nick'
                placeholder="Digite seu nick de jogador..."
                valor = {nick}
                aoAlterado ={ valor => SetNick(valor)}/>
            <TextField  label='Imagem'
                placeholder="Digite o endereço da imagem..."
                valor = {imagem}
                aoAlterado ={ valor => setImagem(valor)}/>
            <DropDownList obrigatorio ={true} label='Estilo de jogo'
                itens={props.times} 
                valor = {times}
                aoAlterado = {valor => setTime(valor)}/>
            <Boton onSubmit>
                Criar Card
            </Boton>
            </form>
        </section>
    )

}

export default Form