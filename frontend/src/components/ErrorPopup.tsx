import { useEffect, useState, type ReactNode } from 'react';

interface ErrorPopupProps {
	children: ReactNode;
    duration?: number;
    className? : string;
}

const ErrorPopup = ({ children, duration = 5000, className= ''}: ErrorPopupProps) => {
    const [active, setActive] = useState<boolean>(false)

    useEffect(() => {
        setActive(true) 
        setTimeout(() => {
            setActive(false)
        }, duration)
    },[])
	return (
        (active && 
        <div onClick={() => setActive(false)} className= {` min-h-32 w-96 bg-errorColor text-white p-4 ${className}`}>
            <h1 className=' font-mono font-bold text-xl'>Error Ocurred :</h1>
            <p>{children}</p>
        </div>)
    );
};

export default ErrorPopup