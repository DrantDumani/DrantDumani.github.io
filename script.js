let projects = [
	"Guardian_Artwork.png",
	"guardian_screenshot.jpg",
	"guardian_nendo.jpg",
	"guardian_amiibo.jpg",
	"Link.jpg"
]

let curr = 0
var slides = document.getElementById("slides")
slides.setAttribute("src", projects[curr])
document.getElementById("change").onclick = function() {
	if (curr + 1 < projects.length)
	{
		curr+=1
		slides.setAttribute("src", projects[curr])
	}
	else
	{
		curr = 0
		slides.setAttribute("src", projects[curr])
	}
}
