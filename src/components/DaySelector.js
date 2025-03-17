"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const generateDays = (startDate) => {
	return Array.from({ length: 7 }, (_, i) => {
		const date = new Date(startDate);
		date.setDate(date.getDate() + i);
		return {
			name: date.toLocaleDateString("it-IT", { weekday: "short" }),
			number: date.getDate(),
			fullDate: date.toLocaleDateString("it-IT"),
		};
	});
};

export default function DaySelector({
	selectedDay,
	setSelectedDay,
	startDate,
}) {
	const [days, setDays] = useState(() => generateDays(startDate));

	useEffect(() => {
		setDays(generateDays(startDate));
	}, [startDate]);

	return (
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
			{days.map((day, index) => (
				<SwiperSlide key={index}>
					<button
						className={`flex flex-col items-center w-full h-16 p-2 rounded-lg shadow-md ${
							selectedDay === day.fullDate
								? "bg-blue-500 text-white"
								: "bg-gray-900"
						}`}
						onClick={() => setSelectedDay(day.fullDate)}
					>
						<span className="text-sm font-bold">{day.name}</span>
						<span className="text-lg font-semibold">{day.number}</span>
					</button>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
