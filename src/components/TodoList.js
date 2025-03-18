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

	// Carica le task da localStorage all'avvio (solo lato client)
	useEffect(() => {
		if (typeof window !== "undefined") {
			try {
				const savedTasks = localStorage.getItem("tasks");
				if (savedTasks) {
					const parsedTasks = JSON.parse(savedTasks);
					if (typeof parsedTasks === "object" && parsedTasks !== null) {
						setTasks(parsedTasks);
					} else {
						console.warn(
							"Dati salvati non validi, reimposto tasks come oggetto vuoto."
						);
						setTasks({});
						localStorage.removeItem("tasks"); // Rimuovi dati corrotti
					}
				} else {
					console.log("Nessun dato trovato in localStorage.");
				}
			} catch (error) {
				console.error("Errore nel parsing delle task salvate:", error);
				setTasks({});
			}
		}
	}, []);

	// Salva le task in localStorage ogni volta che cambiano (solo lato client)
	useEffect(() => {
		if (typeof window !== "undefined") {
			try {
				localStorage.setItem("tasks", JSON.stringify(tasks));
				console.log("Tasks salvati correttamente:", tasks);
			} catch (error) {
				console.error("Errore nel salvataggio delle task:", error);
			}
		}
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
		// Assicurati che il formato della data sia coerente
		const dateKey = startDate.toLocaleDateString("it-IT");
		setSelectedDay(dateKey);
	}, [startDate]);

	useEffect(() => {
		// Formatta la data per l'intestazione
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
