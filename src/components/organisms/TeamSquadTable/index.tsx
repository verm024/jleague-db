'use server';

import { Spacer, Text } from '@/components/atoms';
import { Table } from '@/components/molecules';
import { FOOTBALL_API_ENDPOINTS } from '@/constants/network';
import { customGetFootballAPI } from '@/networks/network';
import Image from 'next/image';

async function fetchTeamSquad(teamId: number | string) {
  const result = await customGetFootballAPI(
    FOOTBALL_API_ENDPOINTS.get.getSquadPlayers(teamId),
    { next: { revalidate: 60 * 60 * 24 * 30 } }
  );

  const response = result?.response || [];
  const mapped = response.map((player: any) => ({
    data: [
      { children: player?.statistics?.[0]?.games?.number || '-' },
      {
        children: (
          <div className="flex items-center">
            <Image
              src={player?.player?.photo || ''}
              alt="player photo"
              className="pr-2"
              width={32}
              height={32}
            />
            <Text>{player.player?.name || '-'}</Text>
          </div>
        ),
      },
      { children: player?.statistics?.[0]?.games?.appearences || 0 },
      { children: player?.statistics?.[0]?.goals?.total || 0 },
      { children: player?.statistics?.[0]?.goals?.assists || 0 },
      { children: player?.statistics?.[0]?.goals?.conceded || 0 },
    ],
    key: player?.player?.id,
  }));
  return mapped;
}

interface TeamSquadTableProps {
  teamId: number | string;
}

export default async function TeamSquadTable({ teamId }: TeamSquadTableProps) {
  const players = await fetchTeamSquad(teamId);
  return (
    <div className="w-full flex justify-center flex-col">
      <Text size="2xl" className="text-center" fontWeight="bold">
        {new Date().getFullYear() - 1}/{new Date().getFullYear()} Team Squad
      </Text>
      <Spacer size={16} />
      <div className="w-full flex justify-center">
        <Table
          heads={[
            { children: 'Number' },
            { children: 'Name' },
            { children: 'MP' },
            { children: 'G' },
            { children: 'A' },
            { children: 'C' },
          ]}
          rows={players}
          maxHeight={500}
        ></Table>
      </div>
    </div>
  );
}
