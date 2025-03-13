import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="bg-gray-950 text-white p-4 shadow-md">
			<div className="container mx-auto flex justify-between">
				<Link href="/" className="font-bold text-lg">
					To-Do List
				</Link>
			</div>
		</nav>
	);
}
