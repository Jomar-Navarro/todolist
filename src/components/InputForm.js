import React from "react";

export default function TaskForm({ newTask, setNewTask, handleAddTask }) {
	return (
		<form onSubmit={handleAddTask}>
			<input
				className="w-full my-5 p-2.5 border border-gray-300 rounded-3xl"
				type="text"
				placeholder="Add a new task"
				value={newTask}
				onChange={(e) => setNewTask(e.target.value)}
			/>
		</form>
	);
}
