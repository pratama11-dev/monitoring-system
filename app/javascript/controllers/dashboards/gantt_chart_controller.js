import { Controller } from 'stimulus';

export default class extends Controller {
  initialize(){
    var myElement = document.querySelector(".timeline-chart-88f4ec7");
                      
    if (typeof isInit === 'undefined') {
      var isInit = {};
    }
    isInit['88f4ec7'] = false;
    
    var timelineOptions = {
      series: [
      {
          "name": "Proses Pembangkit",
          "data": [{
            "x": "Progress Design",
            "y": [new Date('2021-01-01').getTime(), new Date('2021-02-21').getTime()],
          }, {
            "x": "Progress Design",
            "y": [new Date('2021-02-28').getTime(), new Date('2021-05-19').getTime()]
          }, {
            "x": "Progress Design",
            "y": [new Date('2021-05-25').getTime(), new Date('2021-07-15').getTime()]
          }, {
            "x": "Progress Design",
            "y": [new Date('2021-07-20').getTime(), new Date('2021-09-15').getTime()]
          }, 
        ]
      },{
          "name": "Sipil Pembangkit",
          "data": [{
            "x": "Progress Fabrication",
            "y": [new Date('2021-01-01').getTime(), new Date('2021-02-17').getTime()]
          }, {
            "x": "Progress Fabrication",
            "y": [new Date('2021-02-19').getTime(), new Date('2021-04-10').getTime()]
          }, {
            "x": "Progress Fabrication",
            "y": [new Date('2021-04-22').getTime(), new Date('2021-06-12').getTime()]
          }, {
            "x": "Progress Fabrication",
            "y": [new Date('2021-06-15').getTime(), new Date('2021-08-01').getTime()]
          },
        ]
      }, {
          "name": "Peralatan Mekanik",
          "data": [{
            "x": "Progress Construction",
            "y": [new Date('2021-01-01').getTime(), new Date('2021-03-20').getTime()]
          }, {
            "x": "Progress Construction",
            "y": [new Date('2021-03-25').getTime(), new Date('2021-05-22').getTime()]
          }, {
            "x": "Progress Construction",
            "y": [new Date('2021-05-30').getTime(), new Date('2021-08-23').getTime()]
          }, {
            "x": "Progress Construction",
            "y": [new Date('2021-09-17').getTime(), new Date('2021-11-25').getTime()]
          },
        ]
      }, {
          "name": "Struktur Dasar",
          "data": [{
            "x": "Progress Commisioning",
            "y": [new Date('2021-01-01').getTime(), new Date('2021-02-20').getTime()]
          }, {
            "x": "Progress Commisioning",
            "y": [new Date('2021-02-30').getTime(), new Date('2021-05-02').getTime()]
          }, {
            "x": "Progress Commisioning",
            "y": [new Date('2021-05-17').getTime(), new Date('2021-08-03').getTime()]
          }, {
            "x": "Progress Commisioning",
            "y": [new Date('2021-08-17').getTime(), new Date('2021-09-30').getTime()]
          },
        ]
      }],
      chart: {
        height: parseInt('450'),
        type: 'rangeBar',
        toolbar: {
          show: 'yes',
          export: {
            csv: {
                filename: "88f4ec7"
            },
            svg: {
                filename: "88f4ec7"
            },
            png: {
                filename: "88f4ec7"
            }
          }
        },
        animations: {
          enabled: '1',
          speed: '3000',
          delay: '150'
        }
      },
      noData: {
        text: 'No Data Available',
        align: 'center',
        verticalAlign: 'middle',
        style: {
            fontSize: '12px',
            fontFamily: 'Rubik',
            color: '#54749F'
        }
      },
      plotOptions: {
        bar: {
            horizontal: true
        }
      },
      colors: '#3499FF_,_#e53efc_,_#f9a243'.split('_,_'),
      fill: {
        type: 'classic',
        opacity: parseFloat('0.9'),
        colors: '#3499FF_,_#e53efc_,_#f9a243'.split('_,_'),
        gradient: {
            gradientToColors: '_,__,_'.split('_,_'),
            type: '',
            inverseColors: '',
            opacityFrom: parseFloat(''),
            opacityTo: parseFloat('')
        },
        pattern: {
            style: '_,__,_'.split('_,_'),
            width: 6,
            height: 6,
            strokeWidth: 2
        }
      },
      legend: {
        showForSingleSeries: true,
        show: false,
        position: 'bottom',
        horizontalAlign: 'center',
        fontSize: '12px',
        fontFamily: 'Rubik',
        fontWeight: '',
        labels: {
            colors: '#54749F'
        }
      },
      grid: {
        yaxis: {
            lines: {
                show: ''
            }
        }
      },
      xaxis: {
        type: 'datetime',
        position: 'bottom',
        tickAmount: parseInt("30"),
        tickPlacement: "on",
        labels: {
            show: 'yes',
            rotateAlways: '',
            rotate: '',
            offsetX: parseInt('0'),
            offsetY: parseInt('0'),
            trim: true,
            style: {
                colors: '#FFFFFF',
                fontSize: '12px',
                fontFamily: 'Rubik',
                fontWeight: ''
            },
            
        }
      },
      yaxis: {
        opposite: '',
        tickAmount: parseInt("30"),
        decimalsInFloat: parseInt("6"),
        labels: {
            show: 'yes',
            rotate: '0',
            offsetX: parseInt('0'),
            offsetY: parseInt('0'),
            style: {
                colors: '#FFFFFF',
                fontSize: '12px',
                fontFamily: 'Rubik',
                fontWeight: ''
            }
        }
      },
      dataLabels: {
        enabled: 'yes',
        style: {
            colors: ['#000C52']
        },
        background: {
            enabled: '',
            foreColor: [''],
            borderWidth: parseInt(''),
            borderColor: ''
        },
        formatter: function(value, {
            seriesIndex,
            dataPointIndex,
            w
        }) {
            return w.config.series[seriesIndex].name + ":  " + timeDifference(value[0], value[1]);
        }
      },
      stroke: {
        show: true,
        width: parseInt('0')
      },
      tooltip: {
        enabled: 'yes',
        theme: 'dark',
        style: {
            fontSize: '12px',
            fontFamily: 'Rubik'
        },
        x: {
            format: "yyyy/MMM/d"
        }
      }
    };
    
    if (typeof initNowGraphina !== "undefined") {
        initNowGraphina(
            myElement, {
                ele: document.querySelector(".timeline-chart-88f4ec7"),
                options: timelineOptions,
                series: [{
                    name: '',
                    data: []
                }],
                animation: true
            },
            '88f4ec7'
        );
    }
    if (window.ajaxIntervalGraphina_88f4ec7 !== undefined) {
        clearInterval(window.ajaxIntervalGraphina_88f4ec7)
    }
  }
}