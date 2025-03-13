import "./globals.css";
import Footer from "../components/Footer";

export const metadata = {
	title: "To-do List",
	description: "Gestisci le tue attività con Next.js",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
					integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
					crossorigin="anonymous"
				/>
			</head>
			<body className="min-h-screen flex flex-col">
				<main className="flex-grow container mx-auto p-4">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
