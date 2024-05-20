export const FOOTBALL_API_BASE_URL = "https://api-football-v1.p.rapidapi.com/v3"

export const FOOTBALL_API_JLEAGUE_LEAGUE_ID = 98

export const FOOTBALL_API_ENDPOINTS = {
    get: {
        getLeagueStandings: (leagueId: number | string) => `/standings?league=${leagueId}&season=${new Date().getFullYear()}`
    }
}