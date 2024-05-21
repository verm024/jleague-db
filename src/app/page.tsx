import { Spacer } from '@/components/atoms';
import { LeagueMatchList, StandingsTable } from '@/components/organisms';
import { FOOTBALL_API_JLEAGUE_LEAGUE_ID } from '@/constants/network';

export default function Home() {
  return (
    <main>
      <div>
        <StandingsTable />
      </div>
      <Spacer size={48} />
      <div>
        <LeagueMatchList leagueId={FOOTBALL_API_JLEAGUE_LEAGUE_ID} />
      </div>
    </main>
  );
}
