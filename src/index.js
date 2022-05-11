import * as d3 from 'd3';
import athletes from '../assets/data/Medalists.csv';
import pays from '../assets/data/Medals_Standing.csv';
import agenda from '../assets/data/Olympic Schedule.csv';
import 'bootstrap/dist/css/bootstrap.min.css';
import renderCalSection from './sections/cal'

//console.log(athletes);
//console.log(pays);
//console.log(agenda);


//En cas de refresh, retour au hash de base
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  window.location.hash = '';
} else {

}


// Les tags dont nous avons besoin pour afficher les athletes
const athleteList = document.querySelector('.athlete-list')
const athleteListItemTemplate = document.querySelector('#athlete-list-item-template')
const templateTop10Details = document.getElementById('top10Details')
const toggleTop10Details = document.getElementById('toggleTop10Details')
//creating a default Array constructor
const athleteArray = new Set();

//Traite tous les athlete suisses et les mets dans un tableau
for (var i = 0; i < athletes.length; i++) {
  if (athletes[i].NOC == " Switzerland") {
    athleteArray.add(athletes[i].NAME);
  }
}
//Parcourt ce tableau de suisses et y ajoute les images correspondantes
for (let athleteName of athleteArray) {
  for (var i = 0; i < athletes.length; i++) {
    if (athletes[i].NAME == athleteName) {
      const newAthlete = athleteListItemTemplate.content.cloneNode(true) // true pour cloner également les enfants du node
      // On modifie le lien pour lui mettre un href du style "#athlete-i"
      newAthlete.querySelector('a').href = '#athlete-' + i
      // On set la bonne image
      newAthlete.querySelector('img').src = "img/athletes/" + athletes[i].NAME.split(' ')[0] + ".png"
      newAthlete.querySelector('.athlete-list-item-title').innerText = athleteName
      athleteList.append(newAthlete)
      break;
    }
  }
}

//Controle la longueur du calendrier des JO
for (var i = 0; i < agenda.length; i++) {
  var cal = (Object.keys(agenda[i]).length) - 2;
}
for (var j = 1; j < cal; j++) {
  var day = "Day" + j;
  var jour = j + 1;
  // On modifie le lien pour lui mettre un href du style "#cal-id"
  document.querySelector("." + day).href = '#calendrier-' + j
  document.querySelector("." + day).innerText = jour
}

// Popup onclick athlètes
function renderPopup(athlete) {
  document.querySelector('.medalPopup').innerHTML = "";
  document.querySelector('.eventPopup').innerHTML = "";
  document.querySelector('.namePopup').innerText = athletes[athlete].NAME;
  document.querySelector('.namePopup2').innerText = athletes[athlete].NAME;
  document.querySelector('.imgPopup').src = "img/athletes/" + athletes[athlete].NAME.split(' ')[0] + ".png"
  document.querySelector('.sportPopup').innerText = athletes[athlete].SPORTS;
  var imgSport = document.createElement('img');
  imgSport.className = "imgSport";
  var spaceSport = athletes[athlete].SPORTS.replace(" ", '');
  var tiretSport = spaceSport.replace(" ", '-');
  imgSport.src = "img/sports/" + tiretSport + ".png";
  document.querySelector('.sportPopup').appendChild(imgSport)
  for (var i = 0; i < athletes.length; i++) {
    if (athletes[i].NAME == athletes[athlete].NAME) {
      document.querySelector('.eventPopup').innerHTML += "<p>" + athletes[i].EVENT + "</p>";
      var html;
      if (athletes[i].MEDAL == "Gold") {
        html = '<img title="' + athletes[i].EVENT + '" src="https://cdn-icons-png.flaticon.com/512/179/179249.png" width="50px">'
      } else if (athletes[i].MEDAL == "Silver") {
        html = '<img title="' + athletes[i].EVENT + '" src="https://cdn-icons-png.flaticon.com/512/179/179251.png" width="50px">'
      } else if (athletes[i].MEDAL == "Bronze") {
        html = '<img title="' + athletes[i].EVENT + '" src="https://cdn-icons-png.flaticon.com/512/179/179250.png" width="50px">'
      }
      document.querySelector('.medalPopup').innerHTML += html;
    }
  }

  document.getElementById("abc").style.display = "block";
}


// Affichage d'une section
function displaySection() {
  const section = window.location.hash || '#home'
  const sectionSplit = section.split('-')


  // Chargement des éléments custom par section
  switch (sectionSplit[0]) {
    case '#calendrier':
      if (sectionSplit[1]) {
        renderCalSection(sectionSplit[1]);
        const currents = document.querySelectorAll('.events');

        currents.forEach(current => {
          // Remove class from each element
          current.classList.remove('current-day');
        });
        document.querySelector(".day" + sectionSplit[1]).classList.add("current-day")
      } else {
        alert("Calendrier")
      }
      scroll()
      break;
    case '#athlete':
      if (sectionSplit[1]) {
        renderPopup(sectionSplit[1]);
        window.location.hash = '';

      } else {
        alert("athletes")
      }
      scroll()
      break;
    case '#home':
      renderCalSection(1);
      //alert("Home")
      scroll()
      break;
  }
}

// On link la fonction "displaySection" à l'événement hashchange pour être averti d'un changement de hash dans l'url
window.addEventListener('hashchange', displaySection)

// Affichage au chargement pour traiter l'url en cours (exemple: on ouvre un lien dans un nouvel onglet)
displaySection()


// ---------------------- Pie chart --------------------------------------

function graphSport(sportNom) {
  var gold = 0;
  var silver = 0;
  var bronze = 0;
  var nrbMedal = 0;
  for (var i = 0; i < athletes.length; i++) {
    if (athletes[i].NOC == " Switzerland") {
      if (athletes[i].SPORTS == sportNom) {
        if (athletes[i].MEDAL == "Gold") {
          gold++;
        } else if (athletes[i].MEDAL == "Silver") {
          silver++;
        } else if (athletes[i].MEDAL == "Bronze") {
          bronze++;
        }
        nrbMedal++;
      }
    }
  }
  data = {
    gold: gold,
    silver: silver,
    bronze: bronze,
  }
  console.log(data);

  if (nrbMedal == 1) {
    nrbMedal = 2
  }
  // Set les dimensions et les marges
  const widthPie = 80 * nrbMedal,
    heightPie = 80 * nrbMedal,
    marginPie = 20;

  // Rayon du pie chart, en fonction du nombre de médailles gagnées
  const radius = 30 * nrbMedal

  // Append svg
  const svgPie = d3.select("#my_dataviz")
    .append("svg")
    .attr("width", widthPie)
    .attr("height", heightPie)
    .append("g")
    .attr("transform", `translate(${widthPie / 2}, ${heightPie / 2})`);

  // Set couleur : gold, silver, medal
  const color = d3.scaleOrdinal([`#FFD700`, `#C0C0C0`, `#CD7F32`]);

  // Calcule chaque part du pie chart
  const pie = d3.pie()
    .value(function(d) {
      return d[1]
    })
  const data_ready = pie(Object.entries(data))

  const arcGenerator = d3.arc()
    .innerRadius(0)
    .outerRadius(radius)

  // Construction du pie chart
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
  var spaceSport = sportNom.replace(" ", '');
  var tiretSport = spaceSport.replace(" ", '-');
  // Add icon au milieu des pie charts
  svgPie.append('image')
    .attr('xlink:href', 'img/sports/' + tiretSport + '.png')
    .attr('width', 10 * nrbMedal)
    .attr('height', 10 * nrbMedal)
    .attr("x", -10 * nrbMedal / 2)
    .attr("y", -10 * nrbMedal / 2)

  // Add icon des médailles
  svgPie
    .selectAll('mySlices')
    .data(data_ready)
    .join('text')
    .html(function(d) {
      if (d.data[1] != 0) {
        if (d.data[0] == "gold") {
          return '<img src="https://cdn-icons-png.flaticon.com/512/179/179249.png" width="50px">' + d.data[1]
        } else if (d.data[0] == "silver") {
          return '<img src="https://cdn-icons-png.flaticon.com/512/179/179251.png" width="50px">' + d.data[1]
        } else if (d.data[0] == "bronze") {
          return '<img src="https://cdn-icons-png.flaticon.com/512/179/179250.png" width="50px">' + d.data[1]
        }
      }
    })
    .attr("transform", function(d) {
      return `translate(${arcGenerator.centroid(d)})`
    })
    .style("text-anchor", "middle")
    .style("font-size", 17)


}

// Data for pie charts
var sportArray = new Set();
for (var i = 0; i < athletes.length; i++) {
  if (athletes[i].NOC == " Switzerland") {
    sportArray.add(athletes[i].SPORTS);
  }
}
var data = {};
for (let sportName of sportArray) {
  graphSport(sportName);
}


// ---------------------- Top 10 medals --------------------------------------

const WIDTH = 800
const HEIGHT = 800
d3.select("body").append("div").attr("class", "barChart");
d3.select(".barChart").append("svg");
const myDiv2 = d3.select("svg").attr("width", WIDTH).attr("height", HEIGHT)

//Tri par nombre de medailles
var sortedTabPays = pays.sort(function(a, b) {
  return b.Total - a.Total
});
console.log(sortedTabPays)

let tabPays = [];
let tabNbMedaillesPays = [];
var topSuisse;

//Crée nouveau tableau de 10 pays, pour avoir le top 10
for (var i = 0; i < sortedTabPays.length; i++) {
  // Intégre top 10 Pays, ainsi que la suisse
  if (i < 10) {
    tabPays[i] = sortedTabPays[i].NOC;
    tabNbMedaillesPays[i] = sortedTabPays[i].Total;
  } else if (sortedTabPays[i].NOC == "Switzerland") {
    tabPays[10] = sortedTabPays[i].NOC;
    tabNbMedaillesPays[10] = sortedTabPays[i].Total;
    var classement = i + 1;
    topSuisse = "Top " + classement;
  }

}

var svg = d3.select("svg"),
  margin = 200,
  width = svg.attr("width") - margin,
  height = svg.attr("height") - margin

//Axe x et axe y
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

var hauteur;
//Construction du bar chart
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
    hauteur = height - yScale(d);
    return height - yScale(d);
  })
  .on("click", function(event, d) {
    var namePays = event.target.getAttribute("data-name");
    renderTop10DetailsPerCountry(namePays, d);
  });


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

// Top Suisse title
g.append('text')
  .attr('class', 'topSuisse')
  .attr('x', width - 50)
  .attr('y', 60)
  .text(topSuisse)
  .attr('opacity', 1);

// arrowhead from
// http://logogin.blogspot.com/2013/02/d3js-arrowhead-markers.html
svg.append('defs').append('marker')
  .attr('id', 'arrowhead')
  .attr('refY', 2)
  .attr('markerWidth', 6)
  .attr('markerHeight', 4)
  .attr('orient', 'auto')
  .append('path')
  .attr('d', 'M 0,0 V 4 L6,2 Z');

g.append('path')
  .attr('class', 'topArrow')
  .attr('marker-end', 'url(#arrowhead)')
  .attr('d', function() {
    var line = 'M ' + (width - 40) + ' ' + 80;
    line += ' l 0 ' + 280;
    return line;
  })
  .attr('opacity', 1);

g.selectAll(".bar")
  .append("text")
  .classed('bar-title', true)
  .attr('text-anchor', 'middle')
  .attr("x", d => xScale.bandwidth() / 2)
  .attr("y", d => yScale(d))
  .text(d => `${d}`);


document.querySelector('[data-name="Switzerland"]').style.fill = "#DA291C";


// Popup top 10
function renderTop10DetailsPerCountry(name, medal) {
  document.querySelectorAll(".bar").forEach(el => {
    el.style.fill = "#000";
  });
  document.querySelector('[data-name="Switzerland"]').style.fill = "#DA291C";
  document.querySelector('[data-name="' + name + '"]').style.fill = "#74abf7";
  var gold;
  var silver;
  var bronze;
  var nameSpecialFlag = name;
  if (name == "ROC") {
    nameSpecialFlag = "ru";
  }
  for (var i = 0; i < pays.length; i++) {
    if (pays[i].NOC == name) {
      gold = pays[i].Gold;
      silver = pays[i].Silver;
      bronze = pays[i].Bronze;
    }
  }
  document.getElementById("toggleTop10Details").style.display = "block";
  const newToggleTop10Details = templateTop10Details.content.cloneNode(true);
  if (name == "Switzerland") {
    newToggleTop10Details.querySelector('h2').textContent = name + " (" + topSuisse + ")";
  } else {
    newToggleTop10Details.querySelector('h2').textContent = name;
  }
  newToggleTop10Details.querySelector('.enteteTop10Details').textContent = "Voici la répartition des médailles pour : ";
  newToggleTop10Details.querySelector('.imgPaysTop10').innerHTML += '<img alt="image" src="https://countryflagsapi.com/png/' + nameSpecialFlag + '" width="50"> <span>' + name + '</span>';
  newToggleTop10Details.querySelector('.gold-list-item-info').innerHTML += '<img alt="image" src="https://cdn-icons-png.flaticon.com/512/179/179249.png" width="50"> <span>' + gold + ' médailles d\'or</span>';
  newToggleTop10Details.querySelector('.silver-list-item-info').innerHTML += '<img alt="image" src="https://cdn-icons-png.flaticon.com/512/179/179251.png" width="50"><span>' + silver + ' médailles d\'argent</span>';
  newToggleTop10Details.querySelector('.bronze-list-item-info').innerHTML += '<img alt="image" src="https://cdn-icons-png.flaticon.com/512/179/179250.png" width="50"><span>' + bronze + ' médailles de bronze</span>';
  toggleTop10Details.replaceChildren(newToggleTop10Details);
  toggleTop10Details.classList.remove('hidden');

}

//JS code for scroll, hidden elements, etc...
function scroll() {
  const scrollElements = document.querySelectorAll(".js-scroll");

  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };

  const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
      elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("scrolled");
  };

  const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else if (elementOutofView(el)) {
        hideScrollElement(el)
      }
    })
  }

  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });
}