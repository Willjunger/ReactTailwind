import Input from "../Input/Input";

const Form = ({onSubmit}) =>{
    const safeSubmit = event => {
        event.preventDefault();
        event.stopPropagation();

        const name = event.target[0].value;
        const email = event.target[1].value;
        onSubmit({name, email})
    }
    return <form onSubmit={safeSubmit} className="h-full flex flex-col items-center justify-center gap-10 -mt-20 mx-5">
        <Input required type="text" placeholder="Insira seu nome..."/>
        <Input required type="email" placeholder="Insira seu e-mail..."/>
        <button className="py-1 px-5 bg-alura-100 dark:bg-dark-200 rounded-full text-gray-200 uppercase outline-none w-full max-w-sm hover:animate-pulse hover:shadow-md hover:shadow-gray-500 hover:dark:shadow-black" type="submit">Seguir</button>
    </form>
}

export default Form;