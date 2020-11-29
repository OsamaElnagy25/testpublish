declare var require: any;
import { Component } from "@angular/core";
import Highcharts, {Options} from './highcharts';
const HighchartsMore = require("./highcharts-more.src");
HighchartsMore(Highcharts);
const HC_solid_gauge = require("./solid-gauge.src");
HC_solid_gauge(Highcharts);
@Component({
  selector: "my-app",
    templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  clickMessage = "";
  name = "Angular";
  onClickMe(referenceKeyName) {
  }
  ngOnInit() {
    var guagedata = {id:"chart3", value:43 ,text:"Cost per lead",min:42, max:45}; 
    this.chartFunc(guagedata);
     guagedata = {id:"chart2", value:2 ,text:"improve overall sales",min:0,max:5}; 

    this.chartFunc(guagedata);
    guagedata = {id:"chart4", value:3.5 ,text:"Sales conversion rate",min:3 , max:3.5}; 

    this.chartFunc(guagedata);
    guagedata = {id:"chart5", value:54 ,text:"product sales",min:50.5,max:54.6}; 
    this.chartFunc(guagedata);

    // this.chartFunc("chart3", 30,"Cost per lead");
    // this.chartFunc("chart4", 60,"Sales conversion rate");
    // this.chartFunc("chart5", 90,"product sales");

  }
  chartFunc(guagedata) {
    Highcharts.chart(guagedata["id"], {
      chart: {
        type: "solidgauge",
        name: "Whatever"
      },
      name: "Whatever",
      title: {
        text: guagedata["text"],
        align: "center",
        y: 350 //  this to move y-coordinate of title to desired location
      },
      credits: {
        enabled: false
      },
      pane: {
        size: "80%",
        startAngle: -90,
        endAngle: 90,
        background: {
          backgroundColor:
            (Highcharts.theme && Highcharts.theme.background2) || "#EEE",
          innerRadius: "60%",
          outerRadius: "100%",
          shape: "arc"
        }
      },

      exporting: {
        enabled: false
      },

      tooltip: {
        enabled: false
      },

      // the value axis
      yAxis: {
        min: guagedata["min"],
        max: guagedata["max"],
        stops: [
          [0.1, "#DF5353"], // green
          [0.5, "#DDDF0D"], // yellow
          [0.9, "#55BF3B"] // red
        ],
          
        tickWidth: 0,
        minorTickInterval: null,
        startOnTick:false,
        title: {
          
          y: -70
        },
        labels: {
          y: 60
        }
      },
      plotOptions: {
        solidgauge: {
          align: 'right',
          dataLabels: {
            align: 'right',
            borderWidth: 0,
          }
        }
      },
      series: [
        {
          name: "Speed",
          data: [guagedata["value"]]
        },
        {
          name: "Whatever",
          type: "gauge",
          data: [guagedata["value"]]
        }
      ]
    });
  }
}
