const timer = {
	pomodoro: 15,
	pause: 5,
	longPause: 15
}

function runTimer(timer) {
	let aux = timer;
	
	const interval = setInterval(() => {
		document.querySelector('.js-timer').innerHTML = aux;
		aux --;
		
		if(aux < 0) {
			clearInterval(interval);
		}
	}, 1000);
}