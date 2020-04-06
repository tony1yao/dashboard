import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() label : string;
  @Input() total : string;
  @Input() percentage : string;

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: {};

  constructor() { }

  ngOnInit(): void {

    this.chartOptions = {
      chart: {
          type: 'area'
      },
      title: {
          text: 'random data'
      },
      tooltip: {
          split: true,
          outside: true
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      series: [{
          data: [502, 635, 123, 947, 853, 415, 213]
      }]
    };

    //This is used to refresh the chart after each load
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);

    HC_exporting(Highcharts);
  }

}
