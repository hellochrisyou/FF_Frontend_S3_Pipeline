import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CloseDialogService {
  @Output() emitClose: EventEmitter<string> = new EventEmitter();

  closeDialog(status: string) {
    this.emitClose.emit(status);
  }
}
