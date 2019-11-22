import { ThirdPartyService } from './services/abstract/third-party.service';
import { ApiService } from './services/api/api.service';
import { DraftService } from './services/concrete/draft.service';
import { WaiverService } from './services/concrete/waiver.service';
import { RegisterService } from './services/mutation/register.service';
import { AddPlayerService } from './services/emit/add-player.service';
import { CloseDialogService } from './services/emit/close-dialog.service';
import { NotifyService } from './services/emit/notify.service';
import { ToggleTradeService } from './services/emit/toggle-trade.service';
import { CalculatePointsService } from './services/logic/calculate-fantasy-points.service';
import { FilterService } from './services/logic/filter.service';
import { SeasonWeekService } from './services/logic/season-week.service';
import { StatsFunctionService } from './services/logic/stats-function.service';
import { LeagueService } from './services/model/league.service';
import { AddPlayerMutateService } from './services/mutation/add-player-mutate.service';
import { AddWaiverService } from './services/mutation/add-waiver.service';
import { CreateLeagueService } from './services/mutation/create-league.service';
import { CreateTeamService } from './services/mutation/create-team.service';
import { TogglePlayerService } from './services/mutation/toggle-player.service';
import { TradeTeamService } from './services/mutation/trade-team.service';
import { AuthenticateService } from './services/query/authenticate.service';
import { GetAllLeaguesService } from './services/query/get-all-leagues.service';
import { GetLeagueService } from './services/query/get-league.service';

export const services: any[] = [
    AddPlayerMutateService,
    AddWaiverService,
    CreateLeagueService,
    CreateTeamService,
    TogglePlayerService,
    TradeTeamService,
    AuthenticateService,
    GetAllLeaguesService,
    GetLeagueService,
    ThirdPartyService,
    ApiService,
    DraftService,
    WaiverService,
    AddPlayerService,
    CloseDialogService,
    NotifyService,
    ToggleTradeService,
    CalculatePointsService,
    FilterService,
    SeasonWeekService,
    StatsFunctionService,
    RegisterService,
    LeagueService
];

export * from './services/abstract/third-party.service';
export * from './services/api/api.service';
export * from './services/auth.service';
export * from './services/concrete/draft.service';
export * from './services/concrete/waiver.service';
export * from './services/emit/add-player.service';
export * from './services/emit/close-dialog.service';
export * from './services/emit/notify.service';
export * from './services/emit/toggle-trade.service';
export * from './services/logic/calculate-fantasy-points.service';
export * from './services/logic/filter.service';
export * from './services/logic/season-week.service';
export * from './services/logic/stats-function.service';
export * from './services/model/league.service';
export * from './services/mutation/add-player-mutate.service';
export * from './services/mutation/add-waiver.service';
export * from './services/mutation/create-league.service';
export * from './services/mutation/create-team.service';
export * from './services/mutation/register.service';
export * from './services/mutation/toggle-player.service';
export * from './services/mutation/trade-team.service';
export * from './services/query/authenticate.service';
export * from './services/query/get-all-leagues.service';
export * from './services/query/get-league.service';
export * from './services/mutation/register.service';
