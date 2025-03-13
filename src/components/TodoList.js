export default function TodoList() {
	const date = new Date();
	const month = date.toLocaleString("default", { month: "long" });
	const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
	const day = date.getDate();
	const year = date.getFullYear();
	return (
		<>
			<div className="w-full">
				<h1 className="text-3xl font-bold">
					Today {day} {capitalizedMonth} {year}
				</h1>
				<input
					className="w-full my-5 p-2.5 border border-gray-300 rounded-3xl"
					type="text"
					placeholder="Add a new task"
				/>
			</div>
		</>
	);
}
