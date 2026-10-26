import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Child } from './child/child';

@Component({
  imports: [Child],
  selector: 'app-lifecycle',
  styleUrl: './lifecycle.css',
  templateUrl: './lifecycle.html',
})
export class Lifecycle implements  OnInit, OnDestroy {
   count: number = 0;
   counter(): void {
    this.count++;
  }
  ngOnInit(): void {
    console.log('OnInit');
  }
  ngOnDestroy(): void {
    console.log('OnDestroy');
  }
}
