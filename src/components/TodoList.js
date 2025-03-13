export default function TodoList() {
	const date = new Date();
	const month = date.toLocaleString("default", { month: "long" });
	const day = date.getDate();
	const year = date.getFullYear();
	return (
		<>
			<div className="w-full">
				<h1 className="text-3xl font-bold">
					Today {day} {month} {year}
				</h1>
				<input
					className="w-full my-5 p-3 border border-gray-300 rounded-3xl"
					type="text"
					placeholder="Add a new task"
				/>
			</div>
		</>
	);
}
