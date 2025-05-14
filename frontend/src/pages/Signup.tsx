import { useState } from "react"
import { useGlobalContext } from "../context/GlobalContext"
import { createUser, signInGoogle } from "../utils/auth"
import { Navigate } from "react-router"

const Signup = () => {
    const context = useGlobalContext()
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [isSigning, setIsSigning] = useState<boolean>(false)


    const handleSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(!isSigning){
            setIsSigning(true)
            await createUser(email, password).catch((e) => {
                console.error("Error during sign in:", e.message)
                alert("Failed to sign up. Please check your credentials and try again.")
            })
            setIsSigning(false)
        }
    }

    const onGoogleSignIn = async () => {
        if(!isSigning){
            setIsSigning(true)
            await signInGoogle().catch((e) => {
                setIsSigning(false)
                console.log(e)
            })  
            alert("sign in successful")
        }
    }

    if(!context){
        return (
            <>Loading...</>
        )
    }
    
    return(
        <div>
            {context.loggedIn && (<Navigate to='/' replace={true}/>)}
            <form onSubmit={handleSubmit}>
                <input name="email" placeholder="Enter Email" onChange={(e) => {setEmail(e.target.value)}} value={email}/>
                <input name="password" placeholder="Enter Email" onChange={(e) => {setPassword(e.target.value)}} value={password} type="password"/>
                <button type="submit">SUBMIT</button>
            </form>
            <button onClick={onGoogleSignIn}>Google Sign IN</button>
        </div>
    )
}

export default Signup