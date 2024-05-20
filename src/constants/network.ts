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
      leagueId: number | string,
      season: number = new Date().getFullYear(),
      maxLastCount: number = 10
    ) => `/fixtures?league=${leagueId}&season=${season}&last=${maxLastCount}`,
  },
};
