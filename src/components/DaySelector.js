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
		<div className="flex flex-wrap justify-between gap-2 mb-4 sm:flex-nowrap">
			{days.map((day, index) => (
				<button
					key={index}
					className={`flex flex-col items-center w-12 h-16 p-2 rounded-lg shadow-md ${
						selectedDay === day.name ? "bg-blue-500 text-white" : "bg-gray-900"
					} sm:w-16 sm:h-20`}
				>
					<span className="text-sm font-bold sm:text-base">{day.name}</span>
					<span className="text-lg font-semibold sm:text-xl">{day.number}</span>
				</button>
			))}
		</div>
	);
}
