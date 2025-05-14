import type { ReactNode } from "react"

interface props {
    children : ReactNode
    className? : string
}

const Heading = ({children, className=""} : props) => {
    return(
        <h1 >{children}</h1>
    )
}

export default Heading