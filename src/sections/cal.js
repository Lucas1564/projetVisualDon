import agenda from '../../assets/data/Olympic Schedule.csv';
import medal from '../../assets/data/Medalists.csv';

// Les tags dont nous avons besoin pour afficher le calendrier
const datlist = document.querySelector('.date-list')
const dateListItemTemplate = document.querySelector('#date-list-item-template')

// Les tags dont nous avons besoin pour afficher les events
const eventlist = document.querySelector('.event-list')
const eventListItemTemplate = document.querySelector('#event-list-item-template')

// Les tags dont nous avons besoin pour afficher les events
const medaillelist = document.querySelector('.medaille-list')
const medailleListItemTemplate = document.querySelector('#medaille-list-item-template')

var dateDay = "2 Feb 2022";



// Affiche le jour désiré dans la liste
function renderCal(day) {
  affichesSport();
  switch (day) {
    case "1":
      dateDay = "2 Feb 2022";
      break;
    case "2":
      dateDay = "3 Feb 2022";
      break;
    case "3":
      dateDay = "4 Feb 2022";
      break;
    case "4":
      dateDay = "5 Feb 2022";
      break;
    case "5":
      dateDay = "6 Feb 2022";
      break;
    case "6":
      dateDay = "7 Feb 2022";
      break;
    case "7":
      dateDay = "8 Feb 2022";
      break;
    case "8":
      dateDay = "9 Feb 2022";
      break;
    case "9":
      dateDay = "10 Feb 2022";
      break;
    case "10":
      dateDay = "11 Feb 2022";
      break;
    case "11":
      dateDay = "12 Feb 2022";
      break;
    case "12":
      dateDay = "13 Feb 2022";
      break;
    case "13":
      dateDay = "14 Feb 2022";
      break;
    case "14":
      dateDay = "15 Feb 2022";
      break;
    case "15":
      dateDay = "16 Feb 2022";
      break;
    case "16":
      dateDay = "17 Feb 2022";
      break;
    case "17":
      dateDay = "18 Feb 2022";
      break;
    case "18":
      dateDay = "19 Feb 2022";
      break;
    case "19":
      dateDay = "20 Feb 2022";
      break;

  }

  const newDate = dateListItemTemplate.content.cloneNode(true) // true pour cloner également les enfants du node
  newDate.querySelector('h4').innerText = dateDay;

  var dayNumber = parseInt(day) + 1;  

  for (var i = 0; i < agenda.length; i++) {
    switch (dayNumber) {
      case 2:
        if (agenda[i].day2 !== '-') {
          var paragraph = newDate.querySelector('.event-list-item-title');
          if (agenda[i].Ceremonies !="Ceremonies"){
            var text = document.createTextNode(agenda[i].Ceremonies + "\n");
            var imgSport = document.createElement('img');
            imgSport.className = "imgSport";
            imgSport.src="img/sports/"+agenda[i].Ceremonies+".png";
            paragraph.appendChild(imgSport)
            paragraph.appendChild(text);
            afficheSport(agenda[i].Ceremonies);
          } 
        }
        break;
      case 3:
        if (agenda[i].day3 !== '-') {
          var paragraph = newDate.querySelector('.event-list-item-title');
          if (agenda[i].Ceremonies !="Ceremonies"){
            var text = document.createTextNode(agenda[i].Ceremonies + "\n");
            var imgSport = document.createElement('img');
            imgSport.className = "imgSport";
            imgSport.src="img/sports/"+agenda[i].Ceremonies+".png";
            paragraph.appendChild(imgSport)
            paragraph.appendChild(text);
            afficheSport(agenda[i].Ceremonies);
          } 
        }
        break;
      case 4:
        if (agenda[i].day4 !== '-') {
          var paragraph = newDate.querySelector('.event-list-item-title');
          if (agenda[i].Ceremonies !="Ceremonies"){
            var text = document.createTextNode(agenda[i].Ceremonies + "\n");
            var imgSport = document.createElement('img');
            imgSport.className = "imgSport";
            imgSport.src="img/sports/"+agenda[i].Ceremonies+".png";
            paragraph.appendChild(imgSport)
            paragraph.appendChild(text);
            afficheSport(agenda[i].Ceremonies);
          } 
        }
        break;
      case 5:
        if (agenda[i].day5 !== '-') {
          var paragraph = newDate.querySelector('.event-list-item-title');
          if (agenda[i].Ceremonies !="Ceremonies"){
            var text = document.createTextNode(agenda[i].Ceremonies + "\n");
            var imgSport = document.createElement('img');
            imgSport.className = "imgSport";
            imgSport.src="img/sports/"+agenda[i].Ceremonies+".png";
            paragraph.appendChild(imgSport)
            paragraph.appendChild(text);
            afficheSport(agenda[i].Ceremonies);
          } 
        }
        break;
      case 6:
        if (agenda[i].day6 !== '-') {
          var paragraph = newDate.querySelector('.event-list-item-title');
          if (agenda[i].Ceremonies !="Ceremonies"){
            var text = document.createTextNode(agenda[i].Ceremonies + "\n");
            var imgSport = document.createElement('img');
            imgSport.className = "imgSport";
            imgSport.src="img/sports/"+agenda[i].Ceremonies+".png";
            paragraph.appendChild(imgSport)
            paragraph.appendChild(text);
            afficheSport(agenda[i].Ceremonies);
          } 
        }
        break;
      case 7:
        if (agenda[i].day7 !== '-') {
          var paragraph = newDate.querySelector('.event-list-item-title');
          if (agenda[i].Ceremonies !="Ceremonies"){
            var text = document.createTextNode(agenda[i].Ceremonies + "\n");
            var imgSport = document.createElement('img');
            imgSport.className = "imgSport";
            imgSport.src="img/sports/"+agenda[i].Ceremonies+".png";
            paragraph.appendChild(imgSport)
            paragraph.appendChild(text);
            afficheSport(agenda[i].Ceremonies);
          } 
        }
        break;
      case 8:
        if (agenda[i].day8 !== '-') {
          var paragraph = newDate.querySelector('.event-list-item-title');
          if (agenda[i].Ceremonies !="Ceremonies"){
            var text = document.createTextNode(agenda[i].Ceremonies + "\n");
            var imgSport = document.createElement('img');
            imgSport.className = "imgSport";
            imgSport.src="img/sports/"+agenda[i].Ceremonies+".png";
            paragraph.appendChild(imgSport)
            paragraph.appendChild(text);
            afficheSport(agenda[i].Ceremonies);
          } 
        }
        break;
      case 9:
        if (agenda[i].day9 !== '-') {
          var paragraph = newDate.querySelector('.event-list-item-title');
          if (agenda[i].Ceremonies !="Ceremonies"){
            var text = document.createTextNode(agenda[i].Ceremonies + "\n");
            var imgSport = document.createElement('img');
            imgSport.className = "imgSport";
            imgSport.src="img/sports/"+agenda[i].Ceremonies+".png";
            paragraph.appendChild(imgSport)
            paragraph.appendChild(text);
            afficheSport(agenda[i].Ceremonies);
          } 
        }
        break;
      case 10:
        if (agenda[i].day10 !== '-') {
          var paragraph = newDate.querySelector('.event-list-item-title');
          if (agenda[i].Ceremonies !="Ceremonies"){
            var text = document.createTextNode(agenda[i].Ceremonies + "\n");
            var imgSport = document.createElement('img');
            imgSport.className = "imgSport";
            imgSport.src="img/sports/"+agenda[i].Ceremonies+".png";
            paragraph.appendChild(imgSport)
            paragraph.appendChild(text);
            afficheSport(agenda[i].Ceremonies);
          } 
        }
        break;
      case 11:
        if (agenda[i].day11 !== '-') {
          var paragraph = newDate.querySelector('.event-list-item-title');
          if (agenda[i].Ceremonies !="Ceremonies"){
            var text = document.createTextNode(agenda[i].Ceremonies + "\n");
            var imgSport = document.createElement('img');
            imgSport.className = "imgSport";
            imgSport.src="img/sports/"+agenda[i].Ceremonies+".png";
            paragraph.appendChild(imgSport)
            paragraph.appendChild(text);
            afficheSport(agenda[i].Ceremonies);
          } 
        }
        break;
      case 12:
        if (agenda[i].day12 !== '-') {
          var paragraph = newDate.querySelector('.event-list-item-title');
          if (agenda[i].Ceremonies !="Ceremonies"){
            var text = document.createTextNode(agenda[i].Ceremonies + "\n");
            var imgSport = document.createElement('img');
            imgSport.className = "imgSport";
            imgSport.src="img/sports/"+agenda[i].Ceremonies+".png";
            paragraph.appendChild(imgSport)
            paragraph.appendChild(text);
            afficheSport(agenda[i].Ceremonies);
          } 
        }
        break;
      case 13:
        if (agenda[i].day13 !== '-') {
          var paragraph = newDate.querySelector('.event-list-item-title');
          if (agenda[i].Ceremonies !="Ceremonies"){
            var text = document.createTextNode(agenda[i].Ceremonies + "\n");
            var imgSport = document.createElement('img');
            imgSport.className = "imgSport";
            imgSport.src="img/sports/"+agenda[i].Ceremonies+".png";
            paragraph.appendChild(imgSport)
            paragraph.appendChild(text);
            afficheSport(agenda[i].Ceremonies);
          } 
        }
        break;
      case 14:
        if (agenda[i].day14 !== '-') {
          var paragraph = newDate.querySelector('.event-list-item-title');
          if (agenda[i].Ceremonies !="Ceremonies"){
            var text = document.createTextNode(agenda[i].Ceremonies + "\n");
            var imgSport = document.createElement('img');
            imgSport.className = "imgSport";
            imgSport.src="img/sports/"+agenda[i].Ceremonies+".png";
            paragraph.appendChild(imgSport)
            paragraph.appendChild(text);
            afficheSport(agenda[i].Ceremonies);
          } 
        }
        break;
      case 18:
        if (agenda[i].day18 !== '-') {
          var paragraph = newDate.querySelector('.event-list-item-title');
          if (agenda[i].Ceremonies !="Ceremonies"){
            var text = document.createTextNode(agenda[i].Ceremonies + "\n");
            var imgSport = document.createElement('img');
            imgSport.className = "imgSport";
            imgSport.src="img/sports/"+agenda[i].Ceremonies+".png";
            paragraph.appendChild(imgSport)
            paragraph.appendChild(text);
            afficheSport(agenda[i].Ceremonies);
          } 
        }
        break;
      case 15:
        if (agenda[i].day15 !== '-') {
          var paragraph = newDate.querySelector('.event-list-item-title');
          if (agenda[i].Ceremonies !="Ceremonies"){
            var text = document.createTextNode(agenda[i].Ceremonies + "\n");
            var imgSport = document.createElement('img');
            imgSport.className = "imgSport";
            imgSport.src="img/sports/"+agenda[i].Ceremonies+".png";
            paragraph.appendChild(imgSport)
            paragraph.appendChild(text);
            afficheSport(agenda[i].Ceremonies);
          } 
        }
        break;
      case 16:
        if (agenda[i].day16 !== '-') {
          var paragraph = newDate.querySelector('.event-list-item-title');
          if (agenda[i].Ceremonies !="Ceremonies"){
            var text = document.createTextNode(agenda[i].Ceremonies + "\n");
            var imgSport = document.createElement('img');
            imgSport.className = "imgSport";
            imgSport.src="img/sports/"+agenda[i].Ceremonies+".png";
            paragraph.appendChild(imgSport)
            paragraph.appendChild(text);
            afficheSport(agenda[i].Ceremonies);
          } 
        }
        break;
      case 17:
        if (agenda[i].day17 !== '-') {
          var paragraph = newDate.querySelector('.event-list-item-title');
          if (agenda[i].Ceremonies !="Ceremonies"){
            var text = document.createTextNode(agenda[i].Ceremonies + "\n");
            var imgSport = document.createElement('img');
            imgSport.className = "imgSport";
            imgSport.src="img/sports/"+agenda[i].Ceremonies+".png";
            paragraph.appendChild(imgSport)
            paragraph.appendChild(text);
            afficheSport(agenda[i].Ceremonies);
          } 
        }
        break;
      case 19:
        if (agenda[i].day19 !== '-') {
          var paragraph = newDate.querySelector('.event-list-item-title');
          if (agenda[i].Ceremonies !="Ceremonies"){
            var text = document.createTextNode(agenda[i].Ceremonies + "\n");
            var imgSport = document.createElement('img');
            imgSport.className = "imgSport";
            imgSport.src="img/sports/"+agenda[i].Ceremonies+".png";
            paragraph.appendChild(imgSport)
            paragraph.appendChild(text);
            afficheSport(agenda[i].Ceremonies);
          } 
        }
        break;
      case 20:
        if (agenda[i].day20 !== '-') {
          var paragraph = newDate.querySelector('.event-list-item-title');
          if (agenda[i].Ceremonies !="Ceremonies"){
            var text = document.createTextNode(agenda[i].Ceremonies + "\n");
            var imgSport = document.createElement('img');
            imgSport.className = "imgSport";
            imgSport.src="img/sports/"+agenda[i].Ceremonies+".png";
            paragraph.appendChild(imgSport)
            paragraph.appendChild(text);
            afficheSport(agenda[i].Ceremonies);
          } 
        }
        break;

    }
  }
  renderMedaille()
  datlist.append(newDate)

}


function afficheSport(sport) {
  const newEvent = eventListItemTemplate.content.cloneNode(true) // true pour cloner également les enfants du node
  var sportName = sport;
  var tiretSport = sport.replace("-", ' ');
  var testSport = " " + tiretSport;
  //creating a default Array constructor
  var eventArray = new Set();
  for (var i = 0; i < medal.length; i++) {
    if (medal[i].SPORTS == testSport) {
      eventArray.add(medal[i].EVENT);
    }
  }
  eventlist.append(newEvent)
  for (let eventName of eventArray) {
    // Les tags dont nous avons besoin pour afficher les events
    const sportlist = document.querySelector('.sport-list')
    const sportListItemTemplate = document.querySelector('#sport-list-item-template')
    const newSport = sportListItemTemplate.content.cloneNode(true) // true pour cloner également les enfants du node
    var imgSport = document.createElement('img');
    //imgSport.src="img/sports/"+sportName+".png";
    imgSport.className = "imgSport";
    newSport.querySelector('.imgSportName').src="img/sports/"+sportName+".png";
    newSport.querySelector('.sportName').innerText = sportName;
    newSport.querySelector('.eventName').innerText = eventName;

    for (var i = 0; i < medal.length; i++) {
      if (medal[i].SPORTS == testSport && medal[i].EVENT == eventName) {
        var paragraph = newSport.querySelector('.medal-list-item-title');
        var imgFlag = document.createElement('img');
        var imgMedal = document.createElement('img');
        
        if (medal[i].MEDAL == "Gold") {
          imgMedal.src = "https://cdn-icons-png.flaticon.com/512/179/179249.png";
        }else if(medal[i].MEDAL == "Silver"){
          imgMedal.src = "https://cdn-icons-png.flaticon.com/512/179/179251.png";
        }else if(medal[i].MEDAL == "Bronze"){
          imgMedal.src = "https://cdn-icons-png.flaticon.com/512/179/179250.png";
        }
        imgMedal.className = "imgMedal";

        if (medal[i].NOC == " ROC") {
          imgFlag.src = "https://countryflagsapi.com/png/ru";
        }else if(medal[i].NOC == " Republic of Korea"){
          imgFlag.src = "https://countryflagsapi.com/png/kr";
        }else if(medal[i].NOC == " People's Republic of China"){
          imgFlag.src = "https://countryflagsapi.com/png/cn";
        }else if(medal[i].NOC == " Czech Republic"){
          imgFlag.src = "https://countryflagsapi.com/png/cz";
        }
        else{
          imgFlag.src = "https://countryflagsapi.com/png/" + medal[i].NOC.trim();
        }
        imgFlag.className = "imgFlag";

        var text = document.createTextNode(" " + medal[i].NAME + "\n");

        paragraph.appendChild(imgMedal);
        paragraph.appendChild(imgFlag);
        paragraph.appendChild(text);


      }
    }

    sportlist.append(newSport)
  }

  afficheMedaille(sport)

}


//creating a default Array constructor
var goldArray = new Set();
//creating a default Array constructor
var silverArray = new Set();
//creating a default Array constructor
var bronzeArray = new Set();

function afficheMedaille(sport) {
  var sportName = sport;
  var tiretSport = sport.replace("-", ' ');
  var testSport = " " + tiretSport;
  for (var i = 0; i < medal.length; i++) {
    if (medal[i].SPORTS == testSport && medal[i].NOC == " Switzerland") {
      if (medal[i].MEDAL == "Gold") {
        goldArray.add(medal[i].NAME);
      }
      if (medal[i].MEDAL == "Silver") {
        silverArray.add(medal[i].NAME);
      }
      if (medal[i].MEDAL == "Bronze") {
        bronzeArray.add(medal[i].NAME);
      }
    }
  }
}

function renderMedaille() {
  const newMedaille = medailleListItemTemplate.content.cloneNode(true) // true pour cloner également les enfants du node
  if (goldArray.size == 0 && silverArray.size == 0 && bronzeArray.size == 0) {
    newMedaille.querySelector('h4').innerText = "Aucunes médailles suisse à la date du " + dateDay
  } else {
    newMedaille.querySelector('h4').innerText = "Medaille suisse du " + dateDay
  }
  for (var i = 0; i < goldArray.size; i++) {
    newMedaille.querySelector('.gold-list-item-title').innerHTML += '<img alt="image" src="https://cdn-icons-png.flaticon.com/512/179/179249.png" width="50">';
  }
  for (var i = 0; i < silverArray.size; i++) {
    newMedaille.querySelector('.silver-list-item-title').innerHTML += '<img alt="image" src="https://cdn-icons-png.flaticon.com/512/179/179251.png" width="50">';
  }
  for (var i = 0; i < bronzeArray.size; i++) {
    newMedaille.querySelector('.bronze-list-item-title').innerHTML += '<img alt="image" src="https://cdn-icons-png.flaticon.com/512/179/179250.png" width="50">';
  }
  bronzeArray.clear();
  silverArray.clear();
  goldArray.clear();
  medaillelist.append(newMedaille)
}

function affichesSport() {
  // On vide la liste
  eventlist.replaceChildren()
}

function renderCalSections(day) {
  // On vide la liste
  datlist.replaceChildren()
  medaillelist.replaceChildren()
  renderCal(day)
}

function renderCalSection(day) {
  renderCalSections(day)
}

export default renderCalSection