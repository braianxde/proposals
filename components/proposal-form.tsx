import Button from '@/components/ui/button';
import FormInput from '@/components/ui/form-input';
import Notification from '@/components/ui/notification';
import Link from 'next/link';
import { FormEvent, useState } from 'react';

interface ProposalFormProps {
	onSubmit: (title: string, description: string) => Promise<void>;
	isLoading: boolean;
	error?: string;
	txId?: string | null;
}

const ProposalForm = ({
	onSubmit,
	isLoading,
	error,
	txId,
}: ProposalFormProps) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isCompleted, setIsCompleted] = useState(false);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			await onSubmit(title, description);
			// Reset form
			setTitle('');
			setDescription('');
			setIsCompleted(true);
			// Reset completion status after 3 seconds
			setTimeout(() => setIsCompleted(false), 3000);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className='w-full'>
			{error && <Notification type='error'>{error}</Notification>}

			{txId && (
				<Notification type='success'>
					Transaction submitted!{' '}
					<a
						href={`https://etherscan.io/tx/${txId}`}
						target='_blank'
						rel='noopener noreferrer'
						className='underline hover:text-purple-800 transition-colors duration-300'
					>
						Sepolia Etherscan
					</a>
				</Notification>
			)}

			{isCompleted && (
				<Notification type='success'>
					Proposal created successfully!
					<Link href='/'>View Proposals</Link>
				</Notification>
			)}

			<form
				onSubmit={handleSubmit}
				className='space-y-4'
			>
				<FormInput
					id='title'
					label='Title'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder='Enter proposal title'
					required
					disabled={isLoading}
				/>

				<FormInput
					id='description'
					label='Description'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					placeholder='Enter proposal description'
					type='textarea'
					required
					disabled={isLoading}
				/>

				<Button
					type='submit'
					fullWidth
					isLoading={isLoading}
					disabled={isLoading || isSubmitting}
				>
					Create Proposal
				</Button>
			</form>
		</div>
	);
};

export default ProposalForm;
