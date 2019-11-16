import { Injectable, Output, EventEmitter } from '@angular/core';
import { Dto } from '@shared/model/interface.model';

@Injectable({
  providedIn: 'root'
})
export class ToggleTradeService {
  isTrade = true;
  isActive = false;
  otherTeamName = '';
  @Output() tradePopUp: EventEmitter<Dto> = new EventEmitter();

  @Output() statusPopUp: EventEmitter<Dto> = new EventEmitter();

  tradeSubmit(dto: Dto) {
    this.tradePopUp.emit(dto);
  }
  toggleSubmit(dto: Dto) {
    this.statusPopUp.emit(dto);
  }
  setIsTrade(isTrade: boolean): void {
    this.isTrade = isTrade;
  }
  getIsTrade(): boolean {
    return this.isTrade;
  }
  setIsActive(isActive: boolean): void {
    this.isActive = isActive;
  }
  getIsActive(): boolean {
    return this.isActive;
  }
  setOtherTeamName(otherTeamName: string): void {
    this.otherTeamName = otherTeamName;
  }
  getOtherTeamName(): string {
    return this.otherTeamName;
  }
}
