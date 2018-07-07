let searchEnter = document.querySelector('.searchStyle');
let hamBtn = document.querySelectorAll('.fas');
let mobNavbar = document.querySelector('.navbarMob');
let aboutBtn = document.getElementById('aboutBtn');
let toggles = document.querySelector('.toggleList');
const inputValue = document.getElementById('inputValue');
const postCommentBtn = document.getElementById('postComment');
const commentBox = document.querySelector('.commentBox')



searchEnter.addEventListener("keypress", () => {
	let x = event.keyCode;
	if(x === 13 && searchEnter.value.length > 0){
		searchEnter.value = "";
	}
});


//===============Mobile Navbar=====================

//=========Hides X button
hamBtn[1].style.display = 'none';


//=========Toggle Navbar Buttons=============

//===hamBtn[0] = Hamburger Icon=================
hamBtn[0].addEventListener("click", () => {
	hamBtn[1].style.display = 'block';
	hamBtn[0].style.display = 'none';
	mobNavbar.style.display = 'block';
})
//===hamBtn[1] = Times(X) Icon=================
hamBtn[1].addEventListener("click", () => {
	hamBtn[0].style.display = 'block';
	hamBtn[1].style.display = 'none';
	mobNavbar.style.display = 'none';
})

//==========================


//------Toggle mobile Navbar when click "About mE"
aboutBtn.addEventListener('click', ()=>{
	if (toggles.style.display === "block") {
		toggles.style.display = "none";
	} else {
		toggles.style.display = "block";
	}

})

//========Create InputeVale as list======

function createListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(inputValue.value));
	li.classList = "comments"
	commentBox.appendChild(li);
	inputValue.value = "";
}

//========Add comment as LI===========
inputValue.addEventListener("keypress", () => {
	let x = event.keyCode;
	if(x === 13 && inputValue.value.length > 0){
		createListElement();
	}
});

//======Add comment when click button "Post"

postCommentBtn.addEventListener('click', () => {
	createListElement();
});