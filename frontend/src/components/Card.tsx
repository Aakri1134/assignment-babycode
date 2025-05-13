import { type ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
}

const Card = ({ children }: CardProps) => {
    return (
        <div>
            {children}
        </div>
    );
}

export default Card;