import { Controller } from 'stimulus';

export default class extends Controller {
  initialize(){
    "use strict";

    // Shared Colors Definition
    const primary = '#6993FF';
    const success = '#1BC5BD';
    const info = '#8950FC';
    const warning = '#FFA800';
    const danger = '#F64E60';

    // Class definition
    

    var KTApexChartsDemo = function () {
      // Private functions
      var _demo4 = function () {
        const apexChart = "#gantt_chart";
        var options = {
          series: [{
            name: 'Proses Pembangkit',
            data: [44, 55, 41, 37, 22, 43, 21]
          }, {
            name: 'Sipil Pembangkit',
            data: [53, 32, 33, 52, 13, 43, 32]
          }, {
            name: 'Peralatan Mekanik',
            data: [12, 17, 11, 9, 15, 11, 20]
          }, {
            name: 'Design Baja',
            data: [9, 7, 5, 8, 6, 9, 4]
          }],
          chart: {
            type: 'bar',
            height: 350,
            stacked: true,
          },
          plotOptions: {
            bar: {
              horizontal: true,
            },
          },
          stroke: {
            width: 1,
            colors: ['#fff']
          },
          xaxis: {
            categories: 'Progress Design_,_Progress Fabrication_,_Progress Construction_,_Progress Commisioning'.split('_,_'),
            labels: {
              formatter: function (val) {
                return val + "K"
              }
            },
            colors: ['#FFFFFF']
          },
          yaxis: {
            title: {
              text: undefined
            },
            style: {
              color: 'blue',
              fontSize: '12px'
            },
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val + " Hari"
              }
            }
          },
          fill: {
            opacity: 1
          },
          legend: {
            position: 'top',
            horizontalAlign: 'left',
            offsetX: 40
          },
          colors: [primary, success, warning, danger, info]
        };

        var chart = new ApexCharts(document.querySelector(apexChart), options);
        chart.render();
      }

      

      return {
        // public functions
        init: function () {

          _demo4();
     
        }
      };
    }();

    jQuery(document).ready(function () {
      KTApexChartsDemo.init();
    });
  }
}