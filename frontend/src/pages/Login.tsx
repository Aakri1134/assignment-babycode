import { useState } from "react"
import { useGlobalContext } from "../context/GlobalContext"

const Login = () => {
    const context = useGlobalContext()
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")


    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(email)
        console.log(password)
    }

    if(!context){
        return (
            <>Loading...</>
        )
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input name="email" placeholder="Enter Email" onChange={(e) => {setEmail(e.target.value)}} value={email}/>
                <input name="password" placeholder="Enter Email" onChange={(e) => {setPassword(e.target.value)}} value={password} type="password"/>
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default Login