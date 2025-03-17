"use client";
import React, { useState } from "react";
import DaySelector from "./DaySelector";
import CalendarButton from "./CalendarButton";
import "../styles/Calendar.scss";

export default function TodoList() {
	const [startDate, setStartDate] = useState(new Date());
	const [selectedDay, setSelectedDay] = useState(
		startDate.toLocaleDateString("it-IT", { weekday: "short" })
	);
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState("");

	const handleDateChange = (date) => {
		setStartDate(date);
		setSelectedDay(date.toLocaleDateString("it-IT", { weekday: "short" }));
	};

	const handleAddTask = (e) => {
		e.preventDefault();
		if (newTask.trim()) {
			setTasks([...tasks, newTask]);
			setNewTask("");
		}
	};

	const date = new Date();
	const month = date.toLocaleString("default", { month: "long" });
	const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
	const day = date.getDate();
	const year = date.getFullYear();

	return (
		<div className="w-full">
			<div className="flex justify-between items-center">
				<h1 className="text-3xl font-bold">
					Today {day} {capitalizedMonth} {year}
				</h1>
				<CalendarButton
					startDate={startDate}
					handleDateChange={handleDateChange}
				/>
			</div>
			<form onSubmit={handleAddTask}>
				<input
					className="w-full my-5 p-2.5 border border-gray-300 rounded-3xl"
					type="text"
					placeholder="Add a new task"
					value={newTask}
					onChange={(e) => setNewTask(e.target.value)}
				/>
			</form>
			<DaySelector
				selectedDay={selectedDay}
				setSelectedDay={setSelectedDay}
				startDate={startDate}
			/>
			<ul>
				{tasks.map((task, index) => (
					<li
						key={index}
						className="my-2 p-2 border border-gray-300 rounded-3xl"
					>
						{task}
					</li>
				))}
			</ul>
		</div>
	);
}
