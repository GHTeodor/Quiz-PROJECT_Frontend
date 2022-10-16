import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { EChartsOption } from 'echarts';
import * as _ from "lodash-es";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
  private readonly pieChartOptions: EChartsOption = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
        //  Category, Type, Difficulty
        ]
      }
    ]
  };
  pieChartCategoryOptions: EChartsOption = _.cloneDeep(this.pieChartOptions);
  pieChartTypeOptions: EChartsOption = _.cloneDeep(this.pieChartOptions);
  pieChartDifficultyOptions: EChartsOption = _.cloneDeep(this.pieChartOptions);
  private readonly unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private readonly activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.pipe(takeUntil(this.unsubscribe$)).subscribe(({chartsData}) => {
      let chartInfo: string[];
      chartsData.category.forEach((c: string, index: number) => {
        chartInfo = c.split(":");

        // @ts-ignore
        this.pieChartCategoryOptions.series[0].data[index] = {value: chartInfo[1], name: chartInfo[0]};
      });
      chartsData.type.forEach((t: string, index: number) => {
        chartInfo = t.split(":");

        // @ts-ignore
        this.pieChartTypeOptions.series[0].data[index] = {value: chartInfo[1], name: chartInfo[0]};
      });
      chartsData.difficulty.forEach((d: string, index: number) => {
        chartInfo = d.split(":");

        // @ts-ignore
        this.pieChartDifficultyOptions.series[0].data[index] = {value: chartInfo[1], name: chartInfo[0]};
      });
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
