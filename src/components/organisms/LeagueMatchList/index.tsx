'use server';

import { FOOTBALL_API_ENDPOINTS } from '@/constants/network';
import { customGetFootballAPI } from '@/networks/network';
import MatchList from '../MatchList';
import { Spacer, Text } from '@/components/atoms';

interface LeagueMatchListProps {
  leagueId?: number;
  teamId?: number | string;
  title?: string;
  maxLastCount?: number;
  maxNextCount?: number;
}

async function fetchFixtures(
  leagueId?: number,
  teamId?: number | string,
  maxLastCount?: number,
  maxNextCount?: number
) {
  const result = await customGetFootballAPI(
    FOOTBALL_API_ENDPOINTS.get.getLeagueFixtures(
      leagueId,
      teamId,
      undefined,
      maxLastCount,
      maxNextCount
    ),
    { next: { revalidate: 60 * 60 * 24 } }
  );
  const resultFixtures = result?.response || {};

  const mapped = resultFixtures.map((fixture: any) => ({
    homeTeam: {
      name: fixture?.teams?.home?.name,
      logo: fixture?.teams?.home?.logo,
      score: fixture?.goals?.home || 0,
      isWinner: fixture?.teams?.home?.winner,
    },
    awayTeam: {
      name: fixture?.teams?.away?.name,
      logo: fixture?.teams?.away?.logo,
      score: fixture?.goals?.away || 0,
      isWinner: fixture?.teams?.away?.winner,
    },
    venue: fixture?.fixture?.venue?.name || '',
    startDate: fixture?.fixture?.date ? new Date(fixture?.fixture?.date) : null,
    elapsedTime: fixture?.fixture?.status?.elapsed || 0,
    status: fixture?.fixture?.status?.long || 'Not started',
  }));

  return mapped;
}

export default async function LeagueMatchList({
  title = 'Latest Fixtures',
  leagueId,
  teamId,
  maxLastCount = 10,
  maxNextCount = 10,
}: LeagueMatchListProps) {
  const result = await fetchFixtures(
    leagueId,
    teamId,
    maxLastCount,
    maxNextCount
  );
  return (
    <div>
      <Text className="text-center" size="xl" fontWeight="semibold">
        {title}
      </Text>
      <Spacer size={32} />
      <MatchList matches={result} />
    </div>
  );
}
