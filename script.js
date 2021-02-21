let projects = [
  {
    thumbnail: "https://raw.githubusercontent.com/DrantDumani/Free-code-camp_projects/master/Screenshot_2019-12-05%20CodePen%20-%20Susanna%20Patrya%20Haltmann%20Tribute%20Page(1).png",
    title: "Susana Haltmann Tribute Page",
    text: "Tribute page for the former secretary and current CEO of Haltmann Works Co.",
    link: "https://codepen.io/Elemeandor/full/gqZwNj",
  },
  {
    thumbnail: "https://raw.githubusercontent.com/DrantDumani/Free-code-camp_projects/master/Screenshot_2019-12-05%20CodePen%20-%20Survey%20form%202%200.png",
    title: "Movie Survey Form",
    text: "Survey Form project for FreeCodeCamp",
    link: "https://codepen.io/Elemeandor/full/QojzPx",
  },
  {
    thumbnail: "https://raw.githubusercontent.com/DrantDumani/Free-code-camp_projects/master/Screenshot_2019-12-05%20CodePen%20-%203rd%20attempt.png",
    title: "Product Landing Page",
    text: "Product Landing Page project for FreeCodeCamp",
    link: "https://codepen.io/Elemeandor/full/WWEPmw",
  },
  {
    thumbnail: "https://raw.githubusercontent.com/DrantDumani/Free-code-camp_projects/master/Screenshot_2019-12-05%20CodePen%20-%20FCC%20Technical%20Documentation%20Page%20(Finished%20).png",
    title: "Pokken Technical Documentation",
    text: "Technical Documentation Page for Machamp from Pokken Tournament",
    link: "https://codepen.io/Elemeandor/full/YveLQm",
  }
]

let curr = 0;
let next_project = function() {	
  if (projects[curr+1])
	{		
		curr+=1		
		slides.setAttribute("src", projects[curr].thumbnail)
    slide_title.textContent = projects[curr].title
    slide_text.textContent = projects[curr].text
    slide_link.setAttribute("href", projects[curr].link)
	}	
	else	
	{		
		curr = 0
		slides.setAttribute("src", projects[curr].thumbnail)
    slide_title.textContent = projects[curr].title
    slide_text.textContent = projects[curr].text
    slide_link.setAttribute("href", projects[curr].link)
	}
}

var slides = document.getElementById("slides");
var slide_title = document.getElementById("project-title");
var slide_text = document.getElementById("project-text");
var slide_link = document.getElementById("project-link");
slides.setAttribute("src", projects[curr].thumbnail)
slide_link.setAttribute("href", projects[curr].link)
slide_title.textContent = projects[curr].title
slide_text.textContent = projects[curr].text
document.getElementById("change").onclick = next_project;

setInterval(next_project, 5000);