import { Text } from "@/components/atoms";
import { Header, Table } from "@/components/molecules";
import { StandingsTable } from "@/components/organisms";

export default function Home() {
  return (
    <main>
      <div>
        <StandingsTable />
      </div>
    </main>
  );
}
