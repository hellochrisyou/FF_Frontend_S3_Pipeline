import { Injectable, Output, EventEmitter } from '@angular/core';
import { League, Account, Team, Player, Dto, LeagueMenu, Matchup } from '@shared/model/interface.model';
import { FilterService, NotifyService } from '@core';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  allLeagues: League[];
  otherAccounts: Account[];
  otherTeams: Team[];
  otherPlayers: Player[] = [];
  activePlayers: Player[];
  inactivePlayers: Player[];
  leagueNames: string[] = [];
  myLeagueNames: string[] = [];
  teamNames: string[] = [];
  myLeagues: League[] = [];
  userName: string;
  ourMatchup: Matchup[] = [];
  tmpMatchup: Matchup = {
    myPlayer: {
      playerName: 'default',
      position: 'Defense',
      active: false
    },
    otherPlayer: {
      playerName: 'default',
      position: 'Defense',
      active: false
    }
  };
  leagueMenus: LeagueMenu[] = [];
  leagueMenu: LeagueMenu = {
    name: '',
    count: 0,
    draft: false,
    onGoing: false,
    teamExist: false
  };
  myAccount: Account = {
    accountName: '',
    password: '',
    leagues: [],
    roles: [],
    teams: []
  };
  myLeague: League = {
    leagueName: '',
    teams: []
  };
  myTeam: Team = {
    teamName: '',
    players: []
  };
  dto: Dto = {
    myLeagueName: '',
    myAccountName: '',
    password: '',
    myTeamName: '',
    otherTeamName: '',
    myTeamHelmet: '',
    player1: {
      playerName: '',
      position: '',
      active: false
    },
    player2: {
      playerName: '',
      position: '',
      active: false
    }
  };
  @Output() sendUserName: EventEmitter<string> = new EventEmitter();

  constructor(private notifyService: NotifyService, private filterService: FilterService) { }

  setAllLeagues(allLeagues: League[]) {
    this.myLeagueNames = [];
    this.myLeagues = [];
    this.allLeagues = [];
    this.allLeagues = allLeagues;
    this.setNames();
    for (const league of this.allLeagues) {
      for (const myleague of this.myAccount.leagues) {
        if (league.leagueName === myleague.leagueName) {
          this.myLeagueNames.push(league.leagueName);
          this.myLeagues.push(league);
        }
      }
    }
  }

  setMyLeague(name: string): void {
    this.myLeague = {
      leagueName: '',
      teams: []
    };
    this.myTeam = {
      teamName: '',
      players: []
    };
    this.otherTeams = [];
    for (const league of this.myAccount.leagues) {
      if (league.leagueName === name) {
        for (const team of league.teams) {
          for (const leagueTeam of this.myAccount.teams) {
            if (leagueTeam.teamName === team.teamName) {
              this.myTeam = leagueTeam;
              this.sortStatus();
            } else {
              this.otherTeams.push(team);
              for (const player of team.players) {
                this.otherPlayers.push(player);
              }
            }
          }
        }
      }
      this.myLeague = league;
    }
    this.filterService.setPlayers(this.myTeam.players, this.otherPlayers);
    this.setMatchupTeam();
  }

  setMatchupTeam(): void {
    this.tmpMatchup = {
      myPlayer: {
        playerName: 'default',
        position: 'Defense',
        active: false
      },
      otherPlayer: {
        playerName: 'default',
        position: 'Defense',
        active: false
      }
    };
    // Need to sort players into matchup (positions)
  }

  setLeagueMenu(leagues: League[]): LeagueMenu[] {
    this.leagueMenus = [];
    this.leagueMenu = {
      name: '',
      count: 0,
      draft: false,
      onGoing: false,
      teamExist: false
    };
    for (const league of leagues) {
      this.leagueMenu = {
        name: '',
        count: 0,
        draft: false,
        onGoing: false,
        teamExist: false
      };
      this.leagueMenu.name = league.leagueName;
      this.leagueMenu.count = league.count;
      if (league.status === 'Draft') {
        this.leagueMenu.draft = true;
      } else if (league.status === 'Ongoing') {
        this.leagueMenu.onGoing = true;
      }
      for (const leagueTeam of league.teams) {
        for (const myTeams of this.myAccount.teams) {
          if (myTeams.teamName === leagueTeam.teamName) {
            this.leagueMenu.teamExist = true;
          }
        }
      }
      this.leagueMenus.push(this.leagueMenu);
    }
    return this.leagueMenus;
  }

  findLeagueNameExist(name: string): boolean {
    for (const existingName of this.leagueNames) {
      if (name.trim() === existingName.trim()) {
        return true;
      }
      return false;
    }
  }

  findTeamNameExist(name: string): boolean {
    for (const existingName of this.teamNames) {
      if (name.trim() === existingName.trim()) {
        return true;
      } else {
        return false;
      }
    }
  }

  setNames(): void {
    this.teamNames = [];
    this.leagueNames = [];
    for (const league of this.allLeagues) {
      this.leagueNames.push(league.leagueName);
      for (const team of league.teams) {
        this.teamNames.push(team.teamName);
      }
    }
  }

  setMyAccount(account: Account) {
    this.myAccount = account;
  }

  setUserName(name: string): void {
    this.userName = name;
    this.notifyService.sendUserName.emit(this.userName);
  }

  sortStatus(): void {
    this.activePlayers = [];
    this.inactivePlayers = [];
    for (const player of this.myTeam.players) {
      if (player.active === true) {
        this.activePlayers.push(player);
      } else {
        this.inactivePlayers.push(player);
      }
    }
  }

  updateDto(player: Player): Dto {
    this.dto = {
      myAccountName: '',
      password: '',
      myLeagueName: '',
      myTeamName: '',
      otherTeamName: '',
      myTeamHelmet: '',
      player1: {
        playerName: '',
        position: '',
        active: false
      },
      player2: {
        playerName: '',
        position: '',
        active: false
      }
    };
    this.dto.myAccountName = this.myAccount.accountName;
    this.dto.myLeagueName = this.myLeague.leagueName;
    this.dto.myTeamName = this.myTeam.teamName;
    this.dto.player1 = player;
    return this.dto;
  }

  updateMyAccount(account: Account): void {
    this.myAccount = {
      accountName: '',
      password: '',
      leagues: [],
      roles: [],
      teams: []
    };
    this.myAccount = account;
  }

  getMyTeam(): Team {
    return this.myTeam;
  }

  getMatchupTeam(): Matchup[] {
    return this.ourMatchup;
  }

  getMyLeagueNames(): string[] {
    return this.myLeagueNames;
  }

  getMyLeagues(): League[] {
    return this.myLeagues;
  }

  getDto(): Dto {
    return this.dto;
  }

  getAllLeagues(): League[] {
    return this.allLeagues;
  }

  getOtherStatus(status: boolean): Player[] {
    if (status === true) {
      return this.activePlayers;
    } else {
      return this.inactivePlayers;
    }
  }

  getUserName(): string {
    return this.userName;
  }

  getActivePlayers(): Player[] {
    return this.activePlayers;
  }

  getInActivePlayers(): Player[] {
    return this.inactivePlayers;
  }

  getOtherTeams(): Team[] {
    return this.otherTeams;
  }

  getMyLeague(): League {
    return this.myLeague;
  }

  getMyAccount(): Account {
    return this.myAccount;
  }

  getMyPlayers(): Player[] {
    return this.myTeam.players;
  }

  getOtherPlayers(): Player[] {
    return this.otherPlayers;
  }

  getAllLeagueNames(): string[] {
    return this.leagueNames;
  }

  getAllTeamNames(): string[] {
    return this.teamNames;
  }
}
