import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';

@Injectable({
  providedIn: 'root'
})

export class ChartService {

  createColumnChartWithCategory(
    container:string,
    title:string,
    categories: string[],
    data: any[]
  ) {
    Highcharts.chart(container, {
      chart: {
        type: 'column'
      },
      title: {
        text: title
      },
      xAxis: {
        type: 'category',
        categories: categories,
        title: { text: 'Category' }
      },
      yAxis: {
        title: { text: 'Count' }
      },
      plotOptions: {
        column: {
          borderColor: '#ffffff',
          borderWidth: 1,
        }
      },
      series: [{
        name: title,
        data: data
      }]
    })
  }

  createColumnChartWithoutCategory(
    container:string,
    title:string,
    data: any[]
  ) {
    Highcharts.chart(container, {
      chart: {
        type: 'column'
      },
      title: {
        text: title
      },
      xAxis: {
        type: 'category',
      },
      yAxis: {
        title: { text: 'Count' }
      },
      plotOptions: {
        column: {
          borderColor: '#ffffff',
          borderWidth: 1,
        }
      },
      series: [{
        name: title,
        data: data
      }]
    })
  }

  createLineChart(
    container: string,
    title:string,
    categories: string[],
    data: number[],
  ) {
    Highcharts.chart(container, {
      chart: {
        type: 'line',
      },
      title: {
        text: title
      },
      xAxis: {
        categories: categories,
        title: { text: 'Category' }
      },
      yAxis: {
        title: { text: 'Value' }
      },
      series: [{
        name: title,
        data: data
      }]
    })
  }
}
