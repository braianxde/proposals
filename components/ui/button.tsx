import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	isLoading?: boolean;
	variant?: 'primary' | 'secondary';
	fullWidth?: boolean;
}

const Button = ({
	children,
	isLoading = false,
	variant = 'primary',
	fullWidth = false,
	className = '',
	disabled,
	...props
}: ButtonProps) => {
	const baseStyles =
		'py-2 px-4 rounded-md cursor-pointer transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md font-bold disabled:cursor-not-allowed';

	const variantStyles = {
		primary:
			'bg-blue-600 text-white hover:text-purple-200 disabled:bg-blue-400',
		secondary:
			'bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400',
	};

	const widthStyles = fullWidth ? 'w-full' : '';

	return (
		<button
			className={`${baseStyles} ${variantStyles[variant]} ${widthStyles} ${className}`}
			disabled={disabled || isLoading}
			{...props}
		>
			{isLoading ? (
				<span className='flex items-center justify-center'>
					<span className='w-4 h-4 border-2 border-white rounded-full border-t-transparent animate-spin mr-2'></span>
					Loading...
				</span>
			) : (
				children
			)}
		</button>
	);
};

export default Button;
