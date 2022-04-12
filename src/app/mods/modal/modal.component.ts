import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit, OnDestroy {
  @Output() close = new EventEmitter();

  constructor(private el: ElementRef) {}

  // el.nativeelement not needed though but for example in handling native element
  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.el.nativeElement.remove();
  }

  onClose() {
    this.close.emit();
  }
}
