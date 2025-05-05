import { ReactNode } from 'react';

type NotificationType = 'success' | 'error' | 'info';

interface NotificationProps {
	type: NotificationType;
	children: ReactNode;
	className?: string;
}

const Notification = ({
	type,
	children,
	className = '',
}: NotificationProps) => {
	const typeStyles = {
		success: 'bg-green-100 border-green-400 text-green-700',
		error: 'bg-red-100 border-red-400 text-red-700',
		info: 'bg-blue-100 border-blue-400 text-blue-700',
	};

	return (
		<div className={`mb-4 p-3 border rounded ${typeStyles[type]} ${className}`}>
			{children}
		</div>
	);
};

export default Notification;
