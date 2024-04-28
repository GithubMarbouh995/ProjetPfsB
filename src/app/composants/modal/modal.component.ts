import { Component } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  model ?: NgbDateStruct;
  disabledDates: {year: number, month: number, day: number}[];

  constructor(private calendar: NgbCalendar) {
    this.disabledDates = [
      {year: 2023, month: 12, day: 26},
      {year: 2023, month: 11, day: 12},
      {year: 2023, month: 11, day: 13}
    ];
  }

  isDisabled(date: NgbDateStruct) {
    return this.disabledDates.find(x => x.year === date.year && x.month === date.month && x.day === date.day) ? true : false;
  }
}
