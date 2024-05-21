import { TeamInfoWrapper } from '@/components/organisms';
import { redirect } from 'next/navigation';

export default function TeamDetail({ params }: { params: { id: string } }) {
  return (
    <div>
      <TeamInfoWrapper teamId={params.id} errorCallback={() => redirect('/')} />
    </div>
  );
}
