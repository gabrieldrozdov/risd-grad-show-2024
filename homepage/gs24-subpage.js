// Generate subpagepage genart
function generateSubpageImages() {	
	let subpageImages = [];
	let totalSubpageImages = Math.round(Math.random()*5)+2;
	for (let i=0; i<totalSubpageImages; i++) {
		let randomImage = `gs24-img${Math.round(Math.random()*34)}.jpg`;
		subpageImages.push(randomImage);
	}

	const subpageGenart = document.querySelector('.gs24-subpage-genart');
	let subpageGenartTemp = '';
	let totalDivisions = Math.round(Math.random()*12+4);
	for (let col=0; col<totalDivisions; col++) {
		// Set random number of rows for col
		let rows = Math.round(Math.random()*12+4);
		subpageGenartTemp += `<div class="gs24-subpage-genart-col">`;
	
		// Generate rows in column
		for (let row=0; row<rows; row++) {
	
			// Generate slices in row
			let slices = Math.round(Math.random()*12+4);
			let slicesTemp = '';
			const randomImage = subpageImages[Math.floor(Math.random()*subpageImages.length)];

			for (let slice=0; slice<slices; slice++) {
				slicesTemp += `<div class="gs24-subpage-genart-slice" style="background-image:url('http://risdgradshow2024.noreplica.com/assets/images/${randomImage}'); animation: background-shift 600s -${Math.random()*10}s infinite linear;"><div class="gs24-subpage-genart-slice-overlay"></div></div>`;
			}

			subpageGenartTemp += `<div class="gs24-subpage-genart-row"><div class="gs24-subpage-genart-slices">${slicesTemp}</div></div>`;
		}
		subpageGenartTemp += `</div>`;
	}
	subpageGenart.innerHTML = subpageGenartTemp;

	// Reveal slices
	for (let sliceOverlay of subpageGenart.querySelectorAll('.gs24-subpage-genart-slice-overlay')) {
		setTimeout(() => {
			sliceOverlay.style.opacity = 0;
			setTimeout(() => {
				sliceOverlay.style.opacity = 1;
			}, Math.random()*1000+3000)
		}, Math.random()*1000)
	}

	// Rerun code
	setTimeout(() => {
		generateSubpageImages();
	}, 5500)
}