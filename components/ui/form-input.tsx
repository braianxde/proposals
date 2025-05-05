import { ChangeEvent } from 'react';

interface FormInputProps {
	id: string;
	label: string;
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	placeholder?: string;
	required?: boolean;
	disabled?: boolean;
	type?: 'text' | 'textarea';
	className?: string;
}

const FormInput = ({
	id,
	label,
	value,
	onChange,
	placeholder,
	required = false,
	disabled = false,
	type = 'text',
	className = '',
}: FormInputProps) => {
	return (
		<div className='space-y-2'>
			<label
				htmlFor={id}
				className='block font-medium'
			>
				{label}
			</label>
			{type === 'textarea' ? (
				<textarea
					id={id}
					value={value}
					onChange={onChange}
					className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 placeholder:text-gray-400 focus:ring-blue-500 text-black resize-none h-32 ${className}`}
					placeholder={placeholder}
					required={required}
					disabled={disabled}
				/>
			) : (
				<input
					id={id}
					type='text'
					value={value}
					onChange={onChange}
					className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 placeholder:text-gray-400 focus:ring-blue-500 text-black ${className}`}
					placeholder={placeholder}
					required={required}
					disabled={disabled}
				/>
			)}
		</div>
	);
};

export default FormInput;
