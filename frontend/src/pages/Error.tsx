import { Link } from "react-router"

const ErrorPage = () => {
    return(
        <div>
            <h1>Invalid URL</h1>
            <Link to='/'>Return to home</Link>
        </div>
    )
}

export default ErrorPage