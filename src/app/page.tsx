import { Table } from "@/components/molecules";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <Table
          heads={[{ children: "No." }]}
          rows={[{ data: [{ children: "1." }], key: "row_1" }]}
        />
      </div>
    </main>
  );
}
