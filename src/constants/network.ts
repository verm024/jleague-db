export const FOOTBALL_API_BASE_URL =
  'https://api-football-v1.p.rapidapi.com/v3';

export const FOOTBALL_API_JLEAGUE_LEAGUE_ID = 98;

export const FOOTBALL_API_ENDPOINTS = {
  get: {
    getLeagueStandings: (
      leagueId: number | string,
      season: number = new Date().getFullYear()
    ) => `/standings?league=${leagueId}&season=${season}`,
    getLeagueFixtures: (
      leagueId?: number | string,
      teamId?: number | string,
      season: number = new Date().getFullYear(),
      maxLastCount: number = 10,
      maxNextCount: number = 10
    ) => {
      let nextLastQuery = '';
      if (maxLastCount) {
        nextLastQuery = `&last=${maxLastCount}`;
      } else if (maxNextCount) {
        nextLastQuery = `&next=${maxNextCount}`;
      } else {
        nextLastQuery = `&last=10`;
      }
      return `/fixtures?league=${leagueId}${teamId ? `&team=${teamId}` : ''}&season=${season}${nextLastQuery}`;
    },
    getTeamInformation: (teamId: number | string) => `/teams?id=${teamId}`,
    getTeamStatistic: (teamId: number | string, leagueId: number | string) =>
      `/teams/statistics?team=${teamId}&league=${leagueId}&season=${new Date().getFullYear()}`,
    getSquadPlayers: (teamId: number | string) =>
      `/players?team=${teamId}&season=${new Date().getFullYear()}`,
  },
};
