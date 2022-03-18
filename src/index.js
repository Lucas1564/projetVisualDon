import * as d3 from 'd3';
import csv1 from '../assets/data/Medalists.csv';
import csv2 from '../assets/data/Medals_Standing.csv';
import csv3 from '../assets/data/Olympic Schedule.csv';

d3.csv(csv1, function(data) {
  for (var i = 0; i < data.length; i++) {
    alert(data[i].NAME);
    alert(data[i].SPORTS);
  }
});