import './TextField.css'


const TextField = (props) =>{


    const Aodigit = (event) => {
        props.aoAlterado(event.target.value)
    }

    return( 
        
        <div className='TextField'>
            <label>{props.label}</label>
            <input valor ={props.valor} onChange={Aodigit}
             required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default TextField