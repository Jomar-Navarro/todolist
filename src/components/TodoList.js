"use client";

import React, { useState, useEffect } from "react";
import DaySelector from "./DaySelector";
import CalendarButton from "./CalendarButton";
import "../styles/Calendar.scss";

export default function TodoList() {
	const [startDate, setStartDate] = useState(() => new Date());
	const [selectedDay, setSelectedDay] = useState(() =>
		new Date().toLocaleDateString("it-IT")
	);
	const [tasks, setTasks] = useState({});
	const [newTask, setNewTask] = useState("");
	const [formattedDate, setFormattedDate] = useState(""); // Stato per evitare mismatch

	const handleDateChange = (date) => {
		setStartDate(date);
		setSelectedDay(date.toLocaleDateString("it-IT"));
	};

	const handleAddTask = (e) => {
		e.preventDefault();
		if (newTask.trim()) {
			const dateKey = selectedDay;
			setTasks((prevTasks) => ({
				...prevTasks,
				[dateKey]: [...(prevTasks[dateKey] || []), newTask],
			}));
			setNewTask("");
		}
	};

	useEffect(() => {
		const dateKey = startDate.toLocaleDateString("it-IT");
		setSelectedDay(dateKey);
	}, [startDate]);

	useEffect(() => {
		const date = new Date();
		const month = date.toLocaleString("it-IT", { month: "long" });
		const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
		const day = date.getDate();
		const year = date.getFullYear();

		setFormattedDate(`Today ${day} ${capitalizedMonth} ${year}`);
	}, []);

	const tasksForSelectedDay = tasks[selectedDay] || [];

	return (
		<div className="w-full">
			<div className="flex justify-between items-center">
				<h1 className="text-3xl font-bold">
					Today {formattedDate || "Loading..."}
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

			{/* TODO: Fare un componente per visualizzare le task e inserire la logica all'interno del componente */}
			{/* TODO: Creare un componente per eliminare o modificare le task */}
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
		</div>
	);
}
