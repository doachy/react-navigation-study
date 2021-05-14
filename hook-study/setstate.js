import React, { useState} from 'react';

export default function App(){
	const {task, setTask} = useState();
	
	const handleAddTask = () => {
		console.log(task);
	}
	
	
	// input 안에 들어가야 하는 것들
	value = {task} onChangeText = { text => setTask(text)}
}