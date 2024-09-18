'use strict'

document.addEventListener('DOMContentLoaded', () => {
	const formBtn = document.querySelector('.form__btn'),
			inputs = document.querySelectorAll('.form__input'),
			errors = ['First Name', 'Last Name', 'Email', 'Password'],
			emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	formBtn.addEventListener('click', (e) => {
		e.preventDefault();

		let arr = [];

		inputs.forEach((input, i) => {
			if (input.value.trim() === '' || input.value.trim() == null){
				arr.push(errors[i]);
				unvalidInput(input);
			} else checkMail(inputs[2]);
		});

		if (arr.length !== 0){
			alert(`Please fill next fields: ${arr.join(', ')}`);
		};

		

	});

	function unvalidInput(input){
		input.classList.add('error');
				input.addEventListener('input', (e) => {
					e.target.classList.remove('error');
				})
	}

	function checkMail(input){
		if (!emailPattern.test(input.value.trim())){
			alert('Please entry valid Email Address');
			unvalidInput(input);
		}
	};
})