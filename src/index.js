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
const templateTop10Details = document.getElementById('top10Details')
const movieDetail = document.getElementById('movieDetails')




for (var i = 0; i < athletes.length; i++) {
  var athlete = athletes[i];
  if (athletes[i].NOC == " Switzerland") {
    const newAthlete = athleteListItemTemplate.content.cloneNode(true) // true pour cloner également les enfants du node
    // On modifie le lien pour lui mettre un href du style "#artists-id"
    newAthlete.querySelector('a').href = '#athlete-' + i
    // On set la bonne image
    newAthlete.querySelector('img').src = "img/athletes/" + athletes[i].NAME.split(' ')[0] + ".png"
    //alert(athletes[i].NAME.split(' ')[0]);
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


// ---------------------- Pie chart --------------------------------------

// set the dimensions and margins of the graph
const widthPie = 450,
  heightPie = 450,
  marginPie = 40;

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
const radius = Math.min(widthPie, heightPie) / 2 - marginPie

// append the svg object to the div called 'my_dataviz'
const svgPie = d3.select("#my_dataviz")
  .append("svg")
  .attr("width", widthPie)
  .attr("height", heightPie)
  .append("g")
  .attr("transform", `translate(${widthPie / 2}, ${heightPie / 2})`);

// Create dummy data
var sportArray = new Set();
for (var i = 0; i < athletes.length; i++) {
  if (athletes[i].NOC == " Switzerland") {
    sportArray.add(athletes[i].SPORTS);
  }
}
var data = {};
for (let sportName of sportArray) {
  var counter = 0;
  for (var i = 0; i < athletes.length; i++) {
    if (athletes[i].NOC == " Switzerland") {
      if (athletes[i].SPORTS == sportName) {
        counter++;
      }
    }
  }
  data[sportName] = counter;
}


// set the color scale
const color = d3.scaleOrdinal()
  .range(d3.schemeSet2);

// Compute the position of each group on the pie:
const pie = d3.pie()
  .value(function(d) {
    return d[1]
  })
const data_ready = pie(Object.entries(data))
// Now I know that group A goes from 0 degrees to x degrees and so on.

// shape helper to build arcs:
const arcGenerator = d3.arc()
  .innerRadius(0)
  .outerRadius(radius)

// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svgPie
  .selectAll('mySlices')
  .data(data_ready)
  .join('path')
  .attr('d', arcGenerator)
  .attr('fill', function(d) {
    return (color(d.data[0]))
  })
  .attr("stroke", "black")
  .style("stroke-width", "2px")
  .style("opacity", 0.7)

// Now add the annotation. Use the centroid method to get the best coordinates
svgPie
  .selectAll('mySlices')
  .data(data_ready)
  .join('text')
  .text(function(d) {
    return "Discipline " + d.data[0]
  })
  //
  //Change text
  //
  .attr("transform", function(d) {
    return `translate(${arcGenerator.centroid(d)})`
  })
  .style("text-anchor", "middle")
  .style("font-size", 17)




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
  .attr("data-name", function(d, i) {
    return tabPays[i];
  })
  .attr("x", function(d, i) {
    return xScale(tabPays[i]);
  })
  .attr("y", function(d) {
    return yScale(d);
  })
  .attr("width", xScale.bandwidth())
  .attr("height", function(d) {
    return height - yScale(d);
  })
  .on("click", function(event, d) {
    var namePays = event.target.getAttribute("data-name");
    renderTop10DetailsPerCountry(namePays, d);
  });
//.attr("transform", "translate(" + 100 + "," + 100 + ")");



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


function renderTop10DetailsPerCountry(name, medal) {
  var gold;
  var silver;
  var bronze;
  for (var i = 0; i < pays.length; i++) {
    if (pays[i].NOC == name) {
      gold = pays[i].Gold;
      silver = pays[i].Silver;
      bronze = pays[i].Bronze;
    }
  }
  document.getElementById("movieDetails").style.display = "block";
  const newMovieDetail = templateTop10Details.content.cloneNode(true);
  newMovieDetail.querySelector('h2').textContent = name;
  newMovieDetail.querySelector('.gold-list-item-info').innerHTML += '<img alt="image" src="https://cdn-icons-png.flaticon.com/512/179/179249.png" width="50"> <span>' + gold + '</span>';
  newMovieDetail.querySelector('.silver-list-item-info').innerHTML += '<img alt="image" src="https://cdn-icons-png.flaticon.com/512/179/179251.png" width="50"><span>' + silver + '</span>';
  newMovieDetail.querySelector('.bronze-list-item-info').innerHTML += '<img alt="image" src="https://cdn-icons-png.flaticon.com/512/179/179250.png" width="50"><span>' + bronze + '</span>';
  movieDetail.replaceChildren(newMovieDetail);
  movieDetail.classList.remove('hidden');

  //console.log(data);
  //console.log(data.length);

}