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


function renderPopup(athlete) {
  document.querySelector('.namePopup').innerText = athletes[athlete].NAME;
  document.querySelector('.sportPopup').innerText = athletes[athlete].SPORTS;
  document.querySelector('.eventPopup').innerText = athletes[athlete].EVENT;
  document.querySelector('.medalPopup').innerText = athletes[athlete].MEDAL;
  document.getElementById("abc").style.display = "block";
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
        renderPopup(sectionSplit[1]);
        window.location.hash = '';

      } else {
        alert("athletes")
      }
      break;
    case '#home':
      renderCalSection(1);
      //alert("Home")
      break;
  }
}

// On link la fonction "displaySection" à l'événement hashchange pour être averti d'un changement de hash dans l'url
window.addEventListener('hashchange', displaySection)

// Affichage au chargement pour traiter l'url en cours (exemple: on ouvre un lien dans un nouvel onglet)
displaySection()


// ---------------------- Top 10 medals --------------------------------------

const WIDTH = 800
const HEIGHT = 800
d3.select("body").append("div").attr("class", "barChart");
d3.select(".barChart").append("svg");
const myDiv2 = d3.select("svg").attr("width", WIDTH).attr("height", HEIGHT)

//Sort by number of medals
var sortedTabPays = pays.sort(function(a, b) {
  return b.Total - a.Total
});

let tabPays = [];
let tabNbMedaillesPays = [];

for (var i = 0; i < 10; i++) {
  //console.log("Médailles gold par pays : "+ pays[i].NOC + " " + pays[i].Total)
  //console.log("Nbr de colonnes : " + i);
  tabPays[i] = sortedTabPays[i].NOC;
  tabNbMedaillesPays[i] = sortedTabPays[i].Total;
}

var svg = d3.select("svg"),
  margin = 200,
  width = svg.attr("width") - margin,
  height = svg.attr("height") - margin


var xScale = d3.scaleBand().range([0, width]).padding(0.5),
  yScale = d3.scaleLinear().range([height, 0]);

var g = svg.append("g")
  .attr("transform", "translate(" + 100 + "," + 100 + ")");


xScale.domain(tabPays);
yScale.domain([0, (d3.max(tabNbMedaillesPays) + 3)]);

g.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(xScale).tickFormat(function(d) {
    return d;
  }));

g.append("g")
  .call(d3.axisLeft(yScale).tickFormat(function(d) {
    return d;
  }).ticks(4));


g.selectAll(".bar")
  .data(tabNbMedaillesPays)
  .enter().append("rect")
  .attr("class", "bar")
  .attr("x", function(d, i) {
    return xScale(tabPays[i]);
  })
  .attr("y", function(d) {
    return yScale(d);
  })
  .attr("width", xScale.bandwidth())
  .attr("height", function(d) {
    return height - yScale(d);
  });