import * as d3 from 'd3';
import athletes from '../assets/data/Medalists.csv';
import pays from '../assets/data/Medals_Standing.csv';
import agenda from '../assets/data/Olympic Schedule.csv';
//import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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

for (var i = 0; i < agenda.length; i++) {
  console.log(agenda[i])
}