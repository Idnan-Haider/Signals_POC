import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  counterValue = signal(0);
  timer!: number;

  constructor() {}

  ngOnInit() {
    this.timer = setInterval(() => {
      this.counterValue.update((value) => value + 1);
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
