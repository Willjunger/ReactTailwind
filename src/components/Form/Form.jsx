// import Input from "../Input/Input";

const Form = ({onSubmit}) =>{
    const safeSubmit = event => {
        event.preventDefault();
        event.stopPropagation();

        const name = event.target[0].value;
        const email = event.target[1].value;
        onSubmit({name, email})
    }
    return <form onSubmit={safeSubmit} className="h-full flex flex-col items-center justify-center gap-10 -mt-20 mx-5">
        <input className="alura-input" required type="text" placeholder="Insira seu nome..."/>
        <input className="alura-input" required type="email" placeholder="Insira seu e-mail..."/>
        <button className="alura-button" type="submit">Seguir</button>
    </form>
}

export default Form;