interface ProposalCardProps {
	title: string;
	description: string;
	onClick?: () => void;
}

const ProposalCard = ({ title, description, onClick }: ProposalCardProps) => {
	return (
		<li
			onClick={onClick}
			className='border border-white/20 rounded-lg p-4 shadow-sm hover:text-purple-800 transition-colors duration-300 cursor-pointer'
		>
			<h3 className='font-semibold text-lg'>{title}</h3>
			<p className='mt-2'>{description}</p>
		</li>
	);
};

export default ProposalCard;
