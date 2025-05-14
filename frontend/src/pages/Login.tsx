import { useState } from "react"
import { useGlobalContext } from "../context/GlobalContext"
import { signIn, signInGoogle } from "../utils/auth"
import { Navigate } from "react-router"
import ModeToggle from "../components/ModeToggle"
import ErrorPopup from "../components/ErrorPopup"

const Login = () => {
  const context = useGlobalContext()
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [isSigning, setIsSigning] = useState<boolean>(false)
  const [errorPopup, setErrorPopup] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>("")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!isSigning) {
      setIsSigning(true)
      await signIn(email, password).catch(() => {
        setErrorPopup(true)
        setTimeout(() => {
          setErrorPopup(false)
        }, 5000)
        setErrorMessage("Failed to sign in. Please check your credentials and try again.")
      })
      setIsSigning(false)
    }
  }

  const onGoogleSignIn = async () => {
    if (!isSigning) {
      setIsSigning(true)
      await signInGoogle().catch((e) => {
        setIsSigning(false)
        console.log(e)
      })
    }
  }

  if (!context) {
    return <>Loading...</>
  }

  return (
    <div className=" h-screen">
    <div
      className={` ${context.mode} flex justify-center items-center h-screen flex-col bg-backgroundPrimary`}
    >
      {context.loggedIn && <Navigate to="/" replace={true} />}
      <h1 className=" font-mono text-5xl pb-6 font-bold">Login Page</h1>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col w-96 h-80 bg-backgroundSecondary justify-center gap-6 items-center rounded-3xl border-4 border-borderColor"
      >
        <input
          name="email"
          placeholder="Enter Email"
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          value={email}
          className=" h-[6dvh] border-2 w-[80%] rounded-xl text-center"
        />
        <input
          name="password"
          placeholder="Enter Password"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          value={password}
          className=" h-[6dvh] border-2 w-[80%] rounded-xl text-center"
          type="password"
        />
        <button
          type="submit"
          className=" bg-primaryColor w-32 h-8 rounded-md border-black border-2"
        >
          SUBMIT
        </button>
        <button onClick={onGoogleSignIn}>Google Sign IN</button>
      </form>
    </div>
    </div>
  )
}

export default Login
