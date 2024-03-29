import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent {

  highchart: any;
  chartOptions: any;

  ngOnInit(): void{
    this.createPieChart();
  }

  createPieChart(){
    this.highchart = Highcharts;
    this.chartOptions = {
      chart: {
        type: 'pie',
        backgroundColor: '#000000'
    },
    title: {
        text: 'Egg Yolk Composition',
        style: {
            color: '#f7f7f7',
            font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
         }
    },
    tooltip: {
        valueSuffix: '%'
    },
    // subtitle: {
    //     text:
    //     'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>'
    // },
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: true,
                distance: 20
            }, {
                enabled: true,
                distance: -40,
                format: '{point.percentage:.1f}%',
                style: {
                    fontSize: '1.2em',
                    textOutline: 'none',
                    opacity: 0.7
                },
                filter: {
                    operator: '>',
                    property: 'percentage',
                    value: 10
                }
            }]
        }
    },
    series: [
        {
            name: 'Percentage',
            colorByPoint: true,
            data: [
                {
                    name: 'Water',
                    y: 55.02
                },
                {
                    name: 'Fat',
                    sliced: true,
                    selected: true,
                    y: 26.71
                },
                {
                    name: 'Carbohydrates',
                    y: 1.09
                },
                {
                    name: 'Protein',
                    y: 15.5
                },
                {
                    name: 'Ash',
                    y: 1.68
                }
            ]
        }
    ]
    };

    Highcharts.chart('piechart',this.chartOptions);

  }

  



}
