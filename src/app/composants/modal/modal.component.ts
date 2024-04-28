import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModalComponent {
  @Input() recipient ?: string;
  @Input() message?: string;
  @Output() closeModal = new EventEmitter();
  @Output() sendMessage = new EventEmitter();

  constructor() { }

  close() {
    this.closeModal.emit();
  }

  send() {
    this.sendMessage.emit();
  }
}
