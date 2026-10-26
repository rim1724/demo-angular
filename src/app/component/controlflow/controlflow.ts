import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-controlflow',
  styleUrl: './controlflow.css',
  templateUrl: './controlflow.html',
})
export class Controlflow {
  score: number | null = null;
  scoreError = '';
  rank = 'gioi';

  students = [
    { name: 'An', score: 9 ,id: 1},
    { name: 'Bình', score: 7 ,id: 2},
    { name: 'Chi', score: 8.5 ,id: 3},
  ];

  confirmScore(value: string): void {
    const score = Number(value);

    if (value.trim() === '' || !Number.isFinite(score) || score < 0 || score > 10) {
      this.score = null;
      this.scoreError = 'Vui lòng nhập điểm từ 0 đến 10.';
      return;
    }

    this.score = score;
    this.scoreError = '';
  }
}
