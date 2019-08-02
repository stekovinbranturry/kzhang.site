// Modal Image Gallery
const ZOOMOUT_IMG = document.getElementsByClassName('zoomout-img');
const ALBUM_MODAL = document.getElementById('album_modal');
for (const el of ZOOMOUT_IMG) {
	el.addEventListener('click', e => {
		document.getElementById('img01').src = e.target.src;
		ALBUM_MODAL.style.display = 'block';
		document.getElementById('caption').innerHTML = e.target.alt;
	});
}

ALBUM_MODAL.addEventListener('click', () => {
	ALBUM_MODAL.style.display = 'none';
});

const myFunction = () => {
	const navbar = document.getElementById('myNavbar');
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		navbar.classList.add('kzhang-card', 'kzhang-animate-top', 'kzhang-white');
	} else {
		navbar.classList.remove('kzhang-card', 'kzhang-animate-top', 'kzhang-white');
	}
};

// Change style of navbar on scroll
window.onscroll = function() {
	myFunction();
};

// Used to toggle the menu on small screens when clicking on the menu button
const TOGGLE_BAR = document.querySelector('.toggle-bar');
const NAV_DEMO = document.getElementById('navDemo');
TOGGLE_BAR.addEventListener('click', e => {
	e.preventDefault();
	NAV_DEMO.style.display = NAV_DEMO.style.display === 'none' ? 'block' : 'none';
});

const BAR_ITEMS = document.querySelectorAll('#navDemo a');
for (const el of BAR_ITEMS) {
	el.addEventListener('click', () => {
		NAV_DEMO.style.display = 'none';
	});
}
