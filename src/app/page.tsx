import { Text } from "@/components/atoms";
import { Table } from "@/components/molecules";

export default function Home() {
  return (
    <main>
      <div>
        <Table
          heads={[{ children: "No." }]}
          rows={[{ data: [{ children: "1." }], key: "row_1" }]}
        />
        <Text color="red" fontWeight="medium" size="2xl">
          Test
        </Text>
      </div>
    </main>
  );
}
