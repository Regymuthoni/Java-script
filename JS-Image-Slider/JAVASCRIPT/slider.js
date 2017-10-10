let carousels = document.getElementsByClassName('slideshow-container');

[].forEach.call(carousels, function (c) {
	// body...


	let next = c.getElementsByClassName('next')[0],
		prev = c.getElementsByClassName('prev')[0],
		bubblesContainer = c.getElementsByClassName('bubbles')[0],
		inner = c.getElementsByClassName('inner')[0],
		imgs = c.getElementsByClassName('img')[0],
		currentImageIndex = 0,
		bubbles = [];
		width = 400;

	for (let i = 0; i < imgs; i++) {
		let b = document.createElement('span')
		b.classList.add('bubble');
		bubblesContainer.appendChild(b);
		bubbles.push(b);
		
	}

		function switchImg() {
			inner.style.left = -width * currentImageIndex + 'px';


			bubbles. forEach(function (b, i) {
				if(i === currentImageIndex){
					b.classList.add('active');
				}

				else{
					b.classList.remove('active');
				}
				// body...
			});

		}

		next.addEventListener('click', function () {
			currentImageIndex++;

			if (currentImageIndex >=imgs){
				currentImageIndex = 0
			}

			switchImg();
		});

		prev.addEventListener('click', function () {
			currentImageIndex--;

			if (currentImageIndex < 0){
				currentImageIndex = imgs -1;
			}

			switchImg();
		});

		console.log('slider')



});
