import { Spacer } from '@/components/atoms';
import {
  LeagueMatchList,
  TeamInfoWrapper,
  TeamSquadTable,
} from '@/components/organisms';
import { FOOTBALL_API_JLEAGUE_LEAGUE_ID } from '@/constants/network';
import { redirect } from 'next/navigation';

export default function TeamDetail({ params }: { params: { id: string } }) {
  return (
    <div>
      <div>
        <TeamInfoWrapper
          teamId={params.id}
          errorCallback={() => redirect('/')}
        />
      </div>
      <Spacer size={48} />
      <div>
        <TeamSquadTable teamId={params.id} />
      </div>
      <Spacer size={48} />
      <div>
        <LeagueMatchList
          teamId={params.id}
          leagueId={FOOTBALL_API_JLEAGUE_LEAGUE_ID}
        />
      </div>
    </div>
  );
}
