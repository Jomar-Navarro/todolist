"use client";
import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DaySelector from "./DaySelector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const CustomInput = forwardRef(({ value, onClick }, ref) => (
	<button
		className="flex items-center justify-center w-full h-14 p-3 rounded-lg shadow-md bg-gray-900 text-white"
		onClick={onClick}
		ref={ref}
	>
		<span className="text-4xl font-bold">
			<FontAwesomeIcon icon={faCalendarDays} />
		</span>
	</button>
));

export default function TodoList() {
	const [startDate, setStartDate] = useState(new Date());
	const [selectedDay, setSelectedDay] = useState(
		startDate.toLocaleDateString("it-IT", { weekday: "short" })
	);

	const handleDateChange = (date) => {
		setStartDate(date);
		setSelectedDay(date.toLocaleDateString("it-IT", { weekday: "short" }));
	};

	const date = new Date();
	const month = date.toLocaleString("default", { month: "long" });
	const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
	const day = date.getDate();
	const year = date.getFullYear();

	return (
		<>
			<div className="w-full">
				<div className="flex justify-between items-center">
					<h1 className="text-3xl font-bold">
						Today {day} {capitalizedMonth} {year}
					</h1>
					<div className="z-10">
						<DatePicker
							selected={startDate}
							onChange={handleDateChange}
							customInput={<CustomInput />}
							className="z-10"
						/>
					</div>
				</div>
				<input
					className="w-full my-5 p-2.5 border border-gray-300 rounded-3xl"
					type="text"
					placeholder="Add a new task"
				/>

				<DaySelector
					selectedDay={selectedDay}
					setSelectedDay={setSelectedDay}
					startDate={startDate} // Passa startDate come prop
				/>
			</div>
		</>
	);
}
