import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

const Formulario = () =>{
    const times = [
        'Camper',
        'Sniper',
        'Rushador',
        'Perdido'

    ]
const aoSalvar = (evento) =>{
    evento.preventDefaut()
    console.log('Forn foi submetido')
}
    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
            <h2 className='titulo-formulario'>Prencha os dados para criar o card.</h2>
            <CampoTexto obrigatorio={true} label='Nome'  placeholder="Digite seu nome..."/>
            <CampoTexto obrigatorio={true} label='Nick' placeholder="Digite seu nick de jogador..."/>
            <CampoTexto  label='Imagem' placeholder="Digite o endereço da imagem..."/>
            <ListaSuspensa label='Time' itens={times}/>
            <Botao>
                Criar card
            </Botao>
            </form>
        </section>
    )

}

export default Formulario