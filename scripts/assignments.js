
const learningCard = document.getElementById('learning');
const fileName = 'data/assignment.json';
const ul = document.createElement("ul");



function createLearningActivities(data) {
    data.weeks.forEach((element) => {
        let li = document.createElement("li");
        let p = document.createElement("p");
        p.textContent = `${element.label}:`; 
        let linkCount = element.links.length;
        for (let i = 0; i < linkCount; i++) {
            let link = element.links[i];
            let a = document.createElement("a");
            let span = document.createElement("span");
            a.textContent = link.tag;
            a.setAttribute("href", link.html);
            span.appendChild(a);
            p.appendChild(span);
            }
        li.appendChild(p);
        ul.appendChild(li);
    });
    learning.appendChild(ul);
}


async function apiFetch() {
    try {
      const response = await fetch(fileName);
      if (response.ok) {
        const data = await response.json();
        createLearningActivities(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  

  apiFetch();