let loader = document.querySelector('.loader-wrapper');

window.addEventListener('load', function () {
	setTimeout(() => {
		loader.classList.add('disappear');
	}, 1000);

	setTimeout(() => {
		loader.style.display = 'none';
	}, 2000);
});
