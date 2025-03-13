import "./globals.css";

export const metadata = {
	title: "To-do List",
	description: "Gestisci le tue attività con Next.js",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`antialiased`}>{children}</body>
		</html>
	);
}
