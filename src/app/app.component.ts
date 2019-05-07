import { Component } from '@angular/core';
import { PerformanceMeasure, PerformanceMark } from './decorators/performance.decorator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  constructor() {
    setTimeout(() => this.printMeasures(), 1000);
  }

  printMarks() {
    // const entries = performance.getEntriesByType("mark");
    // for (const entry of entries) {
    //   console.table(entry.toJSON());
    // }
  }

  printMeasures() {
    const entriesMeasures = performance.getEntriesByType("measure");
    for (const entry of entriesMeasures.filter(ent => !ent.name.includes('Zone'))) {
      // if(entry.duration > 5) {
      //   throw new Error('LONG RUNNING TASK: ' + entry.name);
      // }
      console.table(entry.toJSON());
    }
  }

  @PerformanceMark('onInit')
  ngOnInit() {
    console.log('ngOnInit()');
  }

  @PerformanceMark('afterViewInit')
  ngAfterViewInit() {
    console.log('ngAfterViewInit()');
  }

  @PerformanceMark('afterViewChecked')
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked()');
  }

  @PerformanceMark('afterContentInit')
  ngAfterContentInit() {
    this.printMeasures();
    console.log('ngAfterContentInit()');
  }

  @PerformanceMark('afterContentChecked')
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked()');
  }

  @PerformanceMark('doCheck')
  ngDoCheck() {
    console.log('ngDoCheck()');
  }

  @PerformanceMeasure('onInitToDoCheck', 'onInit', 'doCheck')
  @PerformanceMeasure('onInitToAfterContentChecked', 'onInit','afterContentChecked')
  @PerformanceMeasure('onInitToAfterViewChecked', 'onInit','afterViewChecked')
  @PerformanceMeasure('onInitToAfterViewInit', 'onInit','afterViewInit')
  @PerformanceMeasure('onInitToAfterContentInit', 'onInit','afterContentInit')
  perfMeasure() {
    console.log('perfMeasure() called')
  } 
}
