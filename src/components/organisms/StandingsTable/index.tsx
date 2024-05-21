'use server';

import { Spacer, Text } from '@/components/atoms';
import { Table } from '@/components/molecules';
import {
  FOOTBALL_API_ENDPOINTS,
  FOOTBALL_API_JLEAGUE_LEAGUE_ID,
} from '@/constants/network';
import { customGetFootballAPI } from '@/networks/network';
import Image from 'next/image';
import Link from 'next/link';

async function fetchStandings() {
  const result = await customGetFootballAPI(
    FOOTBALL_API_ENDPOINTS.get.getLeagueStandings(
      FOOTBALL_API_JLEAGUE_LEAGUE_ID
    ),
    { next: { revalidate: 3600 } }
  );
  const resultStandings = result?.response?.[0]?.league?.standings?.[0] || [];
  const mappedResultStandings = resultStandings.map((rank: any) => ({
    data: [
      { children: rank.rank || '-' },
      {
        children: (
          <div className="flex items-center">
            <Image
              src={rank.team?.logo || ''}
              alt="club logo"
              className="pr-2"
              width={32}
              height={32}
            />
            <Link href={`/team/${rank.team.id}`}>
              <Text className="underline">{rank.team?.name || '-'}</Text>
            </Link>
          </div>
        ),
      },
      { children: rank.all?.played || 0 },
      { children: rank.all?.win || 0 },
      { children: rank.all?.draw || 0 },
      { children: rank.all?.lose || 0 },
      { children: rank.all?.goals?.for || 0 },
      { children: rank.all?.goals?.against || 0 },
      { children: rank?.goalsDiff || 0 },
      { children: rank?.points || 0 },
    ],
    key: rank?.rank,
  }));
  return mappedResultStandings;
}

export default async function StandingsTable() {
  const standings = await fetchStandings();

  return (
    <div className="w-full flex justify-center flex-col">
      <Text size="2xl" className="text-center" fontWeight="bold">
        J1 League {new Date().getFullYear() - 1}/{new Date().getFullYear()}
      </Text>
      <Spacer size={16} />
      <div className="w-full flex justify-center">
        <Table
          heads={[
            { children: 'Rank' },
            { children: 'Club' },
            { children: 'MP' },
            { children: 'W' },
            { children: 'D' },
            { children: 'L' },
            { children: 'GF' },
            { children: 'GA' },
            { children: 'GD' },
            { children: 'Point' },
          ]}
          rows={standings}
        ></Table>
      </div>
    </div>
  );
}
