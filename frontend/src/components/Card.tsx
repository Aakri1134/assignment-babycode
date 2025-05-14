import { type ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
}

const Card = ({ children }: CardProps) => {
    return (
        <div className=' '>
            {children}
        </div>
    );
}

export default Card;