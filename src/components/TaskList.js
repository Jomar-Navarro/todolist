import React from "react";

export default function TaskList({ tasks, selectedDay }) {
	const tasksForSelectedDay = tasks[selectedDay] || [];

	return (
		<div className="my-10">
			<h2 className="text-xl font-bold mt-5">Tasks for {selectedDay}</h2>
			<ul>
				{tasksForSelectedDay.map((task, index) => (
					<li
						key={index}
						className="my-2 p-2 border border-gray-300 rounded-xl"
					>
						{task}
					</li>
				))}
			</ul>
		</div>
	);
}
