import { Injectable, Output, EventEmitter } from '@angular/core';
import { League, Dto } from 'src/app/shared/model/interface.model';

@Injectable({
  providedIn: 'root'
})
export class AddPlayerService {
  isWaiver = true;
  draftName = '';
  waiverName1 = '';
  waiverName2 = '';
  @Output() draftPopUp: EventEmitter<Dto> = new EventEmitter();

  @Output() waiverPopUp: EventEmitter<Dto> = new EventEmitter();

  addDraftPlayer(dto: Dto, draftName: string) {
    this.draftName = draftName;
    this.draftPopUp.emit(dto);
  }

  addWaiverPlayer(dto: Dto) {
    this.waiverPopUp.emit(dto);
  }
  getDraftName(): string {
    return this.draftName;
  }
  setIsWaiver(value: boolean): void {
    this.isWaiver = value;
  }
  getIsWaiver(): boolean {
    return this.isWaiver;
  }
  getWaiverName1(): string {
    return this.waiverName1;
  }
  getWaiverName2(): string {
    return this.waiverName2;
  }
}
