"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

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
	);
}
