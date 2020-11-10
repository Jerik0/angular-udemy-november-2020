import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input() element: {type: string, name: string, content: string};

  constructor() {
    console.log('Constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges Called!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
  }

  ngDoCheck() {
    console.log('ngDoCheck Called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit Called!');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked Called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit Called!');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}
