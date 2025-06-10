const toggleDarkMode = () => {
	const themeToggleBtns = document.querySelectorAll('#theme-toggle');

	// State
	const theme = localStorage.getItem('theme', 'light-mode');

	// On Mount
	theme
		? document.body.classList.toggle('light-mode')
		: document.body.classList.remove('light-mode');

	// Handlers
	const handaleThemeToggle = () => {
		document.body.classList.toggle('light-mode');
		document.body.classList.contains('light-mode')
			? localStorage.setItem('theme', 'light-mode')
			: (localStorage.removeItem('theme'), document.body.removeAttribute('class'));
	};

	themeToggleBtns.forEach(btn => btn.addEventListener('click', handaleThemeToggle));
};

export default toggleDarkMode;
// This function toggles the 'light-mode' class on the body element when the theme toggle button is clicked.
