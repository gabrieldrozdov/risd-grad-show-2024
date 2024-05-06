// FOOTER
function generateFooter() {
	// Pick images to use
	let images = [];
	let totalImages = Math.round(Math.random()*5)+2;
	for (let i=0; i<totalImages; i++) {
		let randomImage = `img${Math.round(Math.random()*34)}.jpg`;
		images.push(randomImage);
	}

	// Generate title animation
	const title = document.querySelector('.gs24-footer-title-text');
	for (let span of title.querySelectorAll('span')) {
		let spanTemp = '';
		for (let letter of span.innerText) {
			spanTemp += `<span style="animation-duration: ${Math.floor(Math.random()*20+5)}s;">${letter}</span>`;
		}
		span.innerHTML = spanTemp;
	}

	// Generate title background
	const footerTitleBackground = document.querySelector('.gs24-footer-title-background');
	let footerGenartTemp = '';
	for (let col=0; col<Math.round(200/(1.25/2)); col++) {
		footerGenartTemp += `
			<div class="gs24-footer-title-background-col" style="background-image: url('https://gabrieldrozdov.github.io/grad-show/poster/assets/images/${images[Math.floor(Math.random()*images.length)]}'); animation: gs24-footer-background-shift 600s -${Math.random()*10}s infinite linear;"></div>
		`;
	}
	footerTitleBackground.innerHTML = footerGenartTemp;

	// Generate footer backgrounds
	for (let footerLink of document.querySelectorAll('.gs24-footer-link')) {
		const footerLinkLabel = footerLink.querySelector('.gs24-footer-link-label');
		footerLinkLabel.style.animationDelay = `-${(Math.random()*2).toFixed(2)}s`;
		footerLink.innerHTML += `
			<div class="gs24-footer-link-background" style="background-image: url('https://gabrieldrozdov.github.io/grad-show/poster/assets/images/${images[Math.floor(Math.random()*images.length)]}'); animation: gs24-footer-background-shift 600s -${Math.random()*10}s infinite linear;"></div>
		`;
	}
}
generateFooter();