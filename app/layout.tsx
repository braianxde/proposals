import type { Metadata } from 'next';
import './globals.css';
import LayoutClient from './layout-client';

export const metadata: Metadata = {
	title: 'Proposals',
	description: 'Proposals',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`antialiased`}>
				<LayoutClient>{children}</LayoutClient>
			</body>
		</html>
	);
}
