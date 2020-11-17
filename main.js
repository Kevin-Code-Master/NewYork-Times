//Function for opening and closing the side bar menu
document.getElementById("menu").addEventListener("click", sideBarDisplay);

function sideBarDisplay (){
	let x = document.getElementById("side-bar");
	if (x.style.display === "none") {
		x.style.display = "block"
	}
	else{
		x.style.display="none";
	}
}
