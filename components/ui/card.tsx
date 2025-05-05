import { ReactNode } from 'react';

interface CardProps {
	children: ReactNode;
	className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
	const baseStyles =
		'p-6 rounded-lg shadow-lg backdrop-blur-sm bg-opacity-80 text-black';

	return <div className={`${baseStyles} ${className}`}>{children}</div>;
};

export default Card;
