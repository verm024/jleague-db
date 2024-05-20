import { Text } from "@/components/atoms";
import MatchCard, { MatchCardProps } from "@/components/molecules/MatchCard";

interface MatchListProps {
  matches: MatchCardProps[];
}

export default function MatchList({ matches }: MatchListProps) {
  if (!matches.length) {
    return <Text>No data</Text>;
  }
  return (
    <div className="w-full grid grid-cols-2 gap-5 justify-center">
      {matches.map((match, index) => (
        <div key={index} className="w-full flex items-center justify-center">
          <MatchCard {...match} />
        </div>
      ))}
    </div>
  );
}
