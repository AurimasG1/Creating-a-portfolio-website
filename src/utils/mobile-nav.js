const mobileNav = () => {
	const mobileNav = document.querySelector('.mobile-nav');
	const headerBtn = document.querySelector('.header__bars');
	const mobileLinks = document.querySelectorAll('.mobile-nav__link');

	// State
	let isMobileNavOpen = false;

	const updateMobileNavDisplay = () => {
		const viewportWidth = window.innerWidth;
		mobileNav.style.display =
			isMobileNavOpen && viewportWidth <= 768 ? 'flex' : 'none';
		document.body.style.overflowY =
			isMobileNavOpen && viewportWidth <= 768 ? 'hidden' : 'auto';
	};

	headerBtn.addEventListener('click', () => {
		isMobileNavOpen = !isMobileNavOpen;
		updateMobileNavDisplay();
	});

	// Close mobile nav if resized above 768px
	window.addEventListener('resize', () => {
		const viewportWidth = window.innerWidth;
		if (viewportWidth >= 768 && isMobileNavOpen) {
			isMobileNavOpen = false;
			updateMobileNavDisplay();
		}
	});
	mobileLinks.forEach(link => {
		link.addEventListener('click', () => {
			isMobileNavOpen = false;
			updateMobileNavDisplay();
		});
	});
};

export default mobileNav;
