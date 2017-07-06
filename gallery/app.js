// let heading = document.getElementsByTagName('h1');




// console.log(heading);



// // heading.style.backgroundColor = '#7FFF00';//first sample for styling
// heading.style.border = 'groove';
// // heading.title = 'this is a sample';
// heading.innerHTML = 'this is a sample';




//adding h2 using javascript
// let elem = document.createElement('h2');
// elem.innerHTML = "Hello kenya";
// console.log(elem);


// let body = document.querySelector('body'); 
// body.appendChild(elem);



//the big image.
let images = document.querySelectorAll('.thumbnails img');

let largeimage = document.createElement('img');
let viewer= document.querySelector('.viewer');

viewer.appendChild(largeimage);



images.forEach(function (image) {

	 image.onmousemove =function hover(event){
	   let img = event.target;
	   largeimage.src = img.src;
	}

})











