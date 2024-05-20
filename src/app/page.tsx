import { Spacer } from "@/components/atoms";
import { LatestLeagueMatch, StandingsTable } from "@/components/organisms";

export default function Home() {
  return (
    <main>
      <div>
        <StandingsTable />
      </div>
      <Spacer size={48} />
      <div>
        <LatestLeagueMatch />
      </div>
    </main>
  );
}
