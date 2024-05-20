import { MatchCard } from "@/components/molecules";
import { StandingsTable } from "@/components/organisms";

export default function Home() {
  return (
    <main>
      <div>
        <StandingsTable />
      </div>
      <MatchCard
        startDate={new Date()}
        venue="STF"
        homeTeam={{
          name: "Yokohama F. Marinosss",
          isWinner: false,
          score: 0,
          logo: "",
        }}
        awayTeam={{
          name: "Newcastle",
          isWinner: true,
          score: 1,
          logo: "",
        }}
        elapsedTime={45}
        status="Half Time"
      />
    </main>
  );
}
