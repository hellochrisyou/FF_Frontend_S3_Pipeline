import { Account, League, Team, Player } from '@shared/model/interface.model';
import { Role } from './enum';

export type RoleOutput = {
    ROLE_ADMIN: Role
    ROLE_CLIENT: Role
}

export type AccountOutput = {
    id?: number | string;
    accountName: string;
    password: string;
    roles?: RoleOutput[];
    leagues?: LeagueOutput[];
    teams?: TeamOutput[];
}

export type LeagueOutput = {
    id?: number | string;
    leagueName: string;
    count?: number;
    current_week?: number;
    start_week?: number;
    draftOrder?: number;
    status?: 'Created' | 'Draft' | 'Ongoing' | 'Finished';
    teams?: TeamOutput[];
}

export type TeamOutput = {
    id?: number | string;
    teamName: string;
    wins?: number;
    loss?: number;
    tie?: number;
    score?: number;
    draft_position?: number;
    matchup?: number;
    matchup_id?: number;
    helmet?: string;
    players?: PlayerOutput[];
}

export type PlayerOutput = {
    id?: number | string;
    playerName: string;
    position: string;
    active: boolean;
    isFlex?: boolean;
    fantasy_points?: number;
}

export type tokenResponse = {
    token: string;
}