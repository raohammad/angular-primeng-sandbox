import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss'],
})
export class BarchartComponent implements OnInit {
  basicData: any;
  basicOptions: any;
  cHeight: string| null;
  cWidth: string| null;
  constructor() {}

  ngOnInit(): void {
    this.cHeight = '80%';
    this.cWidth = "80%";

    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: 'My Second dataset',
          backgroundColor: '#FFA726',
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ],
    };

    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#ebedef',
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#ebedef',
          },
          grid: {
            color: 'rgba(255,255,255,0.2)',
          },
        },
        y: {
          ticks: {
            color: '#ebedef',
          },
          grid: {
            color: 'rgba(255,255,255,0.2)',
          },
        },
      },
    };
  }
}
