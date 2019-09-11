const album1 = [
	'photo1',
	'photo12',
	'photo15',
	'photo18',
	'photo20',
	'photo23',
	'photo26',
	'photo29',
	'photo31',
	'photo34',
	'photo6'
];

const album2 = [
	'photo24',
	'photo27',
	'photo10',
	'photo13',
	'photo16',
	'photo19',
	'photo21',
	'photo3',
	'photo32',
	'photo4',
	'photo7',
	'photo9'
];

const album3 = [
	'photo11',
	'photo14',
	'photo17',
	'photo2',
	'photo22',
	'photo25',
	'photo28',
	'photo30',
	'photo33',
	'photo5',
	'photo8'
];

const album = a => {
	let img = '';
	a.forEach(el => {
		img += `<img src="./image/photography/${el}.jpeg" class="zoomout-img" loading="lazy" alt=${el} />`;
	});
	return `
  				<div class="w3-third">
					${img}
				  </div>
  `;
};

const myGrid = document.getElementById('myGrid');
myGrid.innerHTML = album(album1) + album(album2) + album(album3);

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
