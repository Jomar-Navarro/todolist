"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import DatePicker from "react-datepicker";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "react-datepicker/dist/react-datepicker.css";

const generateDays = (startDate) => {
	return Array.from({ length: 7 }, (_, i) => {
		const date = new Date(startDate);
		date.setDate(date.getDate() + i);
		return {
			name: date.toLocaleDateString("it-IT", { weekday: "short" }),
			number: date.getDate(),
		};
	});
};

export default function DaySelector({ selectedDay, setSelectedDay }) {
	const [startDate, setStartDate] = useState(new Date());
	const days = generateDays(startDate);

	const handleDateChange = (date) => {
		setStartDate(date);
		setSelectedDay(date.toLocaleDateString("it-IT", { weekday: "short" }));
	};

	return (
		<>
			<Swiper
				spaceBetween={10}
				slidesPerView={4}
				breakpoints={{
					640: {
						slidesPerView: 5,
					},
					768: {
						slidesPerView: 7,
					},
				}}
			>
				<SwiperSlide>
					<DatePicker
						selected={startDate}
						onChange={handleDateChange}
						customInput={
							<button className="flex items-center justify-center w-full h-16 p-2 rounded-lg shadow-md bg-gray-900 text-white">
								<span className="text-sm font-bold">Calendario</span>
							</button>
						}
					/>
				</SwiperSlide>
				{days.map((day, index) => (
					<SwiperSlide key={index}>
						<button
							className={`flex flex-col items-center w-full h-16 p-2 rounded-lg shadow-md ${
								selectedDay === day.name
									? "bg-blue-500 text-white"
									: "bg-gray-900"
							}`}
						>
							<span className="text-sm font-bold">{day.name}</span>
							<span className="text-lg font-semibold">{day.number}</span>
						</button>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
