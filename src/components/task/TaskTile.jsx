import React from "react";
import "../../styles/task.scss";

const TaskTile = ({ task }) => {
	console.log(task);
	return (
		<div className="taskTileContainer">
			<p>{task.title}</p>
			<button className="taskTileButton">✓</button>
		</div>
	);
};

export default TaskTile;
