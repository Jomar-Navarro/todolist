import React, { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import "../styles/Calendar.scss";

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

export default function Calendar({ startDate, handleDateChange }) {
	return (
		<div className="relative z-10">
			<DatePicker
				selected={startDate}
				onChange={handleDateChange}
				customInput={<CustomInput />}
				className="z-10"
			/>
		</div>
	);
}
