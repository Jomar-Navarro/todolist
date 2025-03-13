import "./globals.css";
import Footer from "../components/Footer";

export const metadata = {
	title: "To-do List",
	description: "Gestisci le tue attività con Next.js",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="min-h-screen flex flex-col">
				<main className="flex-grow container mx-auto p-4">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
