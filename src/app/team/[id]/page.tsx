import { Spacer } from '@/components/atoms';
import { TeamInfoWrapper, TeamSquadTable } from '@/components/organisms';
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
    </div>
  );
}
