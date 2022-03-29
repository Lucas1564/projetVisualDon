import * as d3 from 'd3';
import athletes from '../assets/data/Medalists.csv';
import pays from '../assets/data/Medals_Standing.csv';
import agenda from '../assets/data/Olympic Schedule.csv';
//import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import renderCalSection from './sections/cal'

console.log(athletes);
console.log(pays);
console.log(agenda);


// Les tags dont nous avons besoin pour afficher les athletes
const athleteList = document.querySelector('.athlete-list')
const athleteListItemTemplate = document.querySelector('#athlete-list-item-template')



for (var i = 0; i < athletes.length; i++) {
  var athlete = athletes[i];
  if (athletes[i].NOC == " Switzerland") {
    const newAthlete = athleteListItemTemplate.content.cloneNode(true) // true pour cloner également les enfants du node
    // On modifie le lien pour lui mettre un href du style "#artists-id"
    newAthlete.querySelector('a').href = '#athlete-' + i
    // On set la bonne image
    newAthlete.querySelector('img').src = "https://upload.wikimedia.org/wikipedia/fr/thumb/a/ab/Logo_JP_d%27hiver_-_P%C3%A9kin_2022.svg/1200px-Logo_JP_d%27hiver_-_P%C3%A9kin_2022.svg.png"
    newAthlete.querySelector('.athlete-list-item-title').innerText = athlete.NAME
    athleteList.append(newAthlete)
  }
}

for (var i = 0; i < pays.length; i++) {
  console.log(pays[i].NOC + " " + pays[i].Gold)
}

// Les tags dont nous avons besoin pour afficher le calendrier
const calist = document.querySelector('.cal-list')
const calListItemTemplate = document.querySelector('#cal-list-item-template')

for (var i = 0; i < agenda.length; i++) {
  var cal = (Object.keys(agenda[i]).length) - 2;
}
for (var j = 1; j < cal; j++) {
  var day = "Day " + j;
  const newCal = calListItemTemplate.content.cloneNode(true) // true pour cloner également les enfants du node
  // On modifie le lien pour lui mettre un href du style "#cal-id"
  newCal.querySelector('a').href = '#calendrier-' + j
  newCal.querySelector('.cal-list-item-title').innerText = day
  calist.append(newCal)
}



// Affichage d'une section
function displaySection() {
  // S'il n'y a pas de hash (par ex, on est sur "localhost:8080/"), le défaut devient '#home'
  const section = window.location.hash || '#home'
  const sectionSplit = section.split('-')


  // Chargement des éléments custom par section
  switch (sectionSplit[0]) {
    case '#calendrier':
      if (sectionSplit[1]) {
        renderCalSection(sectionSplit[1]);
      } else {
        alert("Calendrier")
      }
      break;
    case '#athlete':
      if (sectionSplit[1]) {
        alert("athlete" + sectionSplit[1])
      } else {
        alert("athletes")
      }
      break;
    case '#home':
      renderCalSection(1);
      break;
  }
}

// On link la fonction "displaySection" à l'événement hashchange pour être averti d'un changement de hash dans l'url
window.addEventListener('hashchange', displaySection)

// Affichage au chargement pour traiter l'url en cours (exemple: on ouvre un lien dans un nouvel onglet)
displaySection()