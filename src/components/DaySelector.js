import React from "react";

const days = Array.from({ length: 7 }, (_, i) => {
	const date = new Date();
	date.setDate(date.getDate() + i);
	return {
		name: date.toLocaleDateString("it-IT", { weekday: "short" }),
		number: date.getDate(),
	};
});

export default function DaySelector({ selectedDay, setSelectedDay }) {
	return (
		<div className="flex justify-between gap-2 mb-4">
			{days.map((day, index) => (
				<button
					key={index}
					className={`flex flex-col items-center w-12 h-16 p-2 rounded-lg shadow-md ${
						selectedDay === day.name ? "bg-blue-500 text-white" : "bg-gray-900"
					}`}
				>
					<span className="text-sm font-bold">{day.name}</span>
					<span className="text-lg font-semibold">{day.number}</span>
				</button>
			))}
		</div>
	);
}
