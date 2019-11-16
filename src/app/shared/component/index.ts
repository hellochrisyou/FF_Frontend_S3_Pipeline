import { DefenseTableComponent } from './defense-table/defense-table.component';
import { KickerTableComponent } from './kicker-table/kicker-table.component';
import { QbTableComponent } from './qb-table/qb-table.component';
import { RbTableComponent } from './rb-table/rb-table.component';
import { TeTableComponent } from './te-table/te-table.component';
import { WrTableComponent } from './wr-table/wr-table.component';

export const playerTable: any[] = [DefenseTableComponent, KickerTableComponent, QbTableComponent, RbTableComponent, TeTableComponent, WrTableComponent];

export * from './defense-table/defense-table.component';
export * from './kicker-table/kicker-table.component';
export * from './qb-table/qb-table.component';
export * from './rb-table/rb-table.component';
export * from './te-table/te-table.component';
export * from './wr-table/wr-table.component';