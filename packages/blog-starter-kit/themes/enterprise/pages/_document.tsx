import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body className='dark:bg-[#020617]'>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
