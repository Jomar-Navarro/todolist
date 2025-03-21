"use client";

import React, { useState, useEffect } from "react";
import DaySelector from "./DaySelector";
import Calendar from "./CalendarButton";
import TaskList from "./TaskList";
import InputForm from "./InputForm";
import "../styles/Calendar.scss";

export default function TodoList() {
	const [startDate, setStartDate] = useState(() => new Date());
	const [selectedDay, setSelectedDay] = useState(() =>
		new Date().toLocaleDateString("it-IT")
	);
	const [tasks, setTasks] = useState({});
	const [newTask, setNewTask] = useState("");
	const [formattedDate, setFormattedDate] = useState("");

	// Carica le task da localStorage all'avvio
	useEffect(() => {
		if (typeof window !== "undefined") {
			const savedTasks = localStorage.getItem("tasks");
			console.log("Task salvate trovate in localStorage:", savedTasks);
			if (savedTasks) {
				try {
					setTasks(JSON.parse(savedTasks));
				} catch (error) {
					console.error("Errore nel parsing delle task salvate:", error);
					setTasks({});
				}
			}
		}
	}, []);

	// Salva le task in localStorage ogni volta che cambiano
	useEffect(() => {
		console.log("Salvataggio delle task in localStorage:", tasks);
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

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

	return (
		<div className="w-full">
			<div className="flex justify-between items-center">
				<h1 className="text-3xl font-bold">{formattedDate || "Loading..."}</h1>
				<Calendar startDate={startDate} handleDateChange={handleDateChange} />
			</div>
			<InputForm
				newTask={newTask}
				setNewTask={setNewTask}
				handleAddTask={handleAddTask}
			/>
			<DaySelector
				selectedDay={selectedDay}
				setSelectedDay={setSelectedDay}
				startDate={startDate}
			/>
			<TaskList tasks={tasks} setTasks={setTasks} selectedDay={selectedDay} />
		</div>
	);
}
