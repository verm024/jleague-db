'use server';

import { TeamInfoCard } from '@/components/molecules';
import {
  FOOTBALL_API_ENDPOINTS,
  FOOTBALL_API_JLEAGUE_LEAGUE_ID,
} from '@/constants/network';
import { customGetFootballAPI } from '@/networks/network';

async function fetchTeamInfo(
  teamId: number | string,
  errorCallback?: () => void
) {
  const result = await customGetFootballAPI(
    FOOTBALL_API_ENDPOINTS.get.getTeamInformation(teamId),
    { next: { revalidate: 60 * 60 * 24 * 30 } }
  );

  if (result?.errors?.id) {
    return errorCallback?.();
  }

  const response = result?.response?.[0] || {};
  const returnedResults = {
    logo: response?.team?.logo || '',
    clubName: response?.team?.name || '',
    city: response?.venue?.city || '',
    venue: response?.venue?.name || '',
    address: response?.venue?.address || '',
  };
  return returnedResults;
}

async function fetchTeamStats(teamId: number | string) {
  const result = await customGetFootballAPI(
    FOOTBALL_API_ENDPOINTS.get.getTeamStatistic(
      teamId,
      FOOTBALL_API_JLEAGUE_LEAGUE_ID
    ),
    { next: { revalidate: 60 * 60 * 24 } }
  );

  const response = result?.response || {};
  const returnedResults = {
    matches: {
      played: response?.fixtures?.played?.total || 0,
      win: response?.fixtures?.wins?.total || 0,
      draw: response?.fixtures?.draws?.total || 0,
      lose: response?.fixtures?.loses?.total || 0,
    },
  };
  return returnedResults;
}

interface TeamInfoWrapperProps {
  teamId: number | string;
  errorCallback?: () => void;
}

export default async function TeamInfoWrapper({
  teamId,
  errorCallback,
}: TeamInfoWrapperProps) {
  const [teamInfo, teamStatis] = await Promise.all([
    fetchTeamInfo(teamId, errorCallback),
    fetchTeamStats(teamId),
  ]);

  return (
    <div>
      <TeamInfoCard
        clubName={teamInfo?.clubName}
        logo={teamInfo?.logo}
        venue={teamInfo?.venue}
        address={teamInfo?.address}
        city={teamInfo?.city}
        matches={teamStatis.matches}
      />
    </div>
  );
}
