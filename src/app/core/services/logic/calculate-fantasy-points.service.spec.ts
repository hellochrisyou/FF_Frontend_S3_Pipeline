// import { TestBed } from '@angular/core/testing';
// import { QB } from '@shared/model/interface.model';
// import { RB } from '@shared/model/interface.model';
// import { WR } from '@shared/model/interface.model';
// import { TE } from '@shared/model/interface.model';
// import { DEF } from '@shared/model/interface.model';
// import { Kicker } from '@shared/model/interface.model';
// import { CalculatePointsService } from './calculate-fantasy-points.service';
// describe('CalculatePointsService', () => {
//   let service: CalculatePointsService;
//   beforeEach(() => {
//     const qBStub = {
//       passingTD: {},
//       passingYard: {},
//       interception: {},
//       rushingYard: {},
//       rushingTD: {},
//       fumble: {}
//     };
//     const rBStub = {
//       rushingYard: {},
//       rushingTD: {},
//       reception: {},
//       receivingYard: {},
//       receivingTD: {},
//       fumble: {}
//     };
//     const wRStub = { reception: {}, receivingYard: {}, receivingTD: {} };
//     const tEStub = { reception: {}, receivingYard: {}, receivingTD: {} };
//     const dEFStub = {
//       pointsAllowed: {},
//       sack: {},
//       interception: {},
//       fumblesRecovered: {},
//       safety: {},
//       TD: {}
//     };
//     const kickerStub = {
//       PAT: {},
//       fg0To19: {},
//       fg20To29: {},
//       fg30To39: {},
//       fg40To49: {},
//       fg50Plus: {}
//     };
//     TestBed.configureTestingModule({
//       providers: [
//         CalculatePointsService,
//         { provide: QB, useValue: qBStub },
//         { provide: RB, useValue: rBStub },
//         { provide: WR, useValue: wRStub },
//         { provide: TE, useValue: tEStub },
//         { provide: DEF, useValue: dEFStub },
//         { provide: Kicker, useValue: kickerStub }
//       ]
//     });
//     service = TestBed.get(CalculatePointsService);
//   });
//   it('can load instance', () => {
//     expect(service).toBeTruthy();
//   });
//   it('fantasyPoints defaults to: 0', () => {
//     expect(service.fantasyPoints).toEqual(0);
//   });
//   it('pointsAllowed defaults to: 0', () => {
//     expect(service.pointsAllowed).toEqual(0);
//   });
// });
