export class BasicChart {
  constructor(data) {
    var d3 = require('d3'); // Require D3 via Webpack
    this.data = data;
    this.svg = d3.select('div#chart').append('svg');
  }
}
var chart = new BasicChart();
