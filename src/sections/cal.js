import agenda from '../../assets/data/Olympic Schedule.csv';

// Les tags dont nous avons besoin pour afficher le calendrier
const datlist = document.querySelector('.date-list')
const dateListItemTemplate = document.querySelector('#date-list-item-template')

// Affiche le jour désiré dans la liste
function renderCal(day) {
  var dateDay = "2 Feb 2022";
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
          alert(agenda[i].Ceremonies);
        }
        break;
      case 3:
        if (agenda[i].day3 !== '-') {
          alert(agenda[i].Ceremonies);
        }
        break;
      case 4:
        if (agenda[i].day4 !== '-') {
          alert(agenda[i].Ceremonies);
        }
        break;
      case 5:
        if (agenda[i].day5 !== '-') {
          alert(agenda[i].Ceremonies);
        }
        break;
      case 6:
        if (agenda[i].day6 !== '-') {
          alert(agenda[i].Ceremonies);
        }
        break;
      case 7:
        if (agenda[i].day7 !== '-') {
          alert(agenda[i].Ceremonies);
        }
        break;
      case 8:
        if (agenda[i].day8 !== '-') {
          alert(agenda[i].Ceremonies);
        }
        break;
      case 9:
        if (agenda[i].day9 !== '-') {
          alert(agenda[i].Ceremonies);
        }
        break;
      case 10:
        if (agenda[i].day10 !== '-') {
          alert(agenda[i].Ceremonies);
        }
        break;
      case 11:
        if (agenda[i].day11 !== '-') {
          alert(agenda[i].Ceremonies);
        }
        break;
      case 12:
        if (agenda[i].day12 !== '-') {
          alert(agenda[i].Ceremonies);
        }
        break;
      case 13:
        if (agenda[i].day13 !== '-') {
          alert(agenda[i].Ceremonies);
        }
        break;
      case 14:
        if (agenda[i].day14 !== '-') {
          alert(agenda[i].Ceremonies);
        }
        break;
      case 18:
        if (agenda[i].day18 !== '-') {
          alert(agenda[i].Ceremonies);
        }
        break;
      case 15:
        if (agenda[i].day15 !== '-') {
          alert(agenda[i].Ceremonies);
        }
        break;
      case 16:
        if (agenda[i].day16 !== '-') {
          alert(agenda[i].Ceremonies);
        }
        break;
      case 17:
        if (agenda[i].day17 !== '-') {
          alert(agenda[i].Ceremonies);
        }
        break;
      case 19:
        if (agenda[i].day19 !== '-') {
          alert(agenda[i].Ceremonies);
        }
        break;
      case 20:
        if (agenda[i].day20 !== '-') {
          alert(agenda[i].Ceremonies);
        }
        break;

    }
  }

  datlist.append(newDate)

}

// Itère sur toutes les produits
function renderCalSections(day) {
  // On vide la liste
  datlist.replaceChildren()
  renderCal(day)
}

// Charge les artistes et itère dessus
function renderCalSection(day) {
  renderCalSections(day)
}

export default renderCalSection