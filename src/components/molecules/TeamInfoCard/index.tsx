import { Spacer, Text } from '@/components/atoms';
import Image from 'next/image';

interface TeamInfoCardProps {
  clubName: string;
  logo?: string;
  city?: string;
  venue?: string;
  address?: string;
  matches?: {
    played?: number;
    win?: number;
    draw?: number;
    lose?: number;
  };
}

export default function TeamInfoCard({
  logo,
  clubName,
  city,
  venue,
  address,
  matches,
}: TeamInfoCardProps) {
  return (
    <div className="flex items-center gap-12 border rounded-xl px-6 py-4 shadow-md">
      <div>
        <Image src={logo || ''} alt="club logo" width={200} height={200} />
      </div>
      <div>
        <Text size="2xl" fontWeight="bold">
          {clubName}
        </Text>
        <Spacer size={4} />
        <div className="flex items-center gap-2">
          <Text fontWeight="light">{venue || 'No venue'}</Text>
          <Text fontWeight="light">&#8226;</Text>
          <Text fontWeight="light">{address || 'No address'}</Text>
          <Text fontWeight="light">&#8226;</Text>
          <Text fontWeight="light">{city || 'No city'}</Text>
        </div>
        <Spacer size={12} />
        <Text fontWeight="semibold">
          {new Date().getFullYear() - 1}/{new Date().getFullYear()} Statistics
        </Text>
        <Spacer size={4} />
        <div className="flex items-center gap-2">
          <Text fontWeight="light">Played: {matches?.played || 0}</Text>
          <Text fontWeight="light">&#8226;</Text>
          <Text fontWeight="light">W: {matches?.win || 0}</Text>
          <Text fontWeight="light">&#8226;</Text>
          <Text fontWeight="light">D: {matches?.draw || 0}</Text>
          <Text fontWeight="light">&#8226;</Text>
          <Text fontWeight="light">L: {matches?.lose || 0}</Text>
        </div>
      </div>
    </div>
  );
}
