import React from "react";
import RemoveTask from "./RemoveTask";

export default function TaskList({ tasks, setTasks, selectedDay }) {
	const tasksForSelectedDay = tasks[selectedDay] || [];

	return (
		<div className="my-10">
			<h2 className="text-xl font-bold mt-5">Tasks for {selectedDay}</h2>
			<ul>
				{tasksForSelectedDay.map((task, index) => (
					<li
						key={index}
						className="flex justify-between items-center my-2 p-2 border border-gray-300 rounded-xl"
					>
						<span>{task}</span>
						<RemoveTask
							tasks={tasks}
							setTasks={setTasks}
							selectedDay={selectedDay}
							taskIndex={index}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}
