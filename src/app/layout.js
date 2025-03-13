import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
	title: "To-do List",
	description: "Gestisci le tue attività con Next.js",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
				<Navbar />
				<main className="flex-grow container mx-auto p-4">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
