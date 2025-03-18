import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function RemoveTask({
	tasks,
	setTasks,
	selectedDay,
	taskIndex,
}) {
	const handleRemoveTask = () => {
		if (typeof setTasks !== "function") {
			console.error("setTasks is not a function");
			return;
		}

		// Rimuovi la task dall'elenco
		const updatedTasks = { ...tasks };
		updatedTasks[selectedDay] = updatedTasks[selectedDay].filter(
			(_, index) => index !== taskIndex
		);

		// Se non ci sono più task per il giorno selezionato, rimuovi la chiave
		if (updatedTasks[selectedDay].length === 0) {
			delete updatedTasks[selectedDay];
		}

		setTasks(updatedTasks);
	};

	return (
		<button
			className="px-2.5 py-1 text-lg text-white bg-red-500 rounded-lg hover:bg-red-600"
			onClick={handleRemoveTask}
		>
			<FontAwesomeIcon icon={faTrashCan} />
		</button>
	);
}
