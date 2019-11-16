import { Injectable, Output, EventEmitter } from '@angular/core';
import { League, Dto } from '@shared/model/interface.model';

@Injectable({
  providedIn: 'root'
})
export class CloseDialogService {
  @Output() emitClose: EventEmitter<string> = new EventEmitter();

  closeDialog(status: string) {
    this.emitClose.emit(status);
  }
}
