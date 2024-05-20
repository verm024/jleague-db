import { Spacer, Text } from "@/components/atoms";
import { truncateString } from "@/helper/helper";
import dayjs from "dayjs";
import Image from "next/image";

interface TeamProps {
  name: string;
  logo?: string;
  score?: number | string;
  isWinner: boolean;
}

export interface MatchCardProps {
  homeTeam: TeamProps;
  awayTeam: TeamProps;
  venue?: string;
  startDate?: Date;
  elapsedTime?: number;
  status?: string;
}

interface TeamComponentProps {
  scorePosition: "left" | "right";
  data: TeamProps;
}

function Team({ scorePosition, data }: TeamComponentProps) {
  return (
    <div className="flex gap-5 w-full text-center">
      {scorePosition === "left" && (
        <div className="flex items-center">
          <Text size="2xl" fontWeight={data?.isWinner ? "semibold" : "normal"}>
            {data?.score}
          </Text>
        </div>
      )}
      <div className="flex flex-col items-center gap-2 w-full">
        <Image
          src={data?.logo || ""}
          alt="home club logo"
          width={48}
          height={48}
        />
        <Text size="sm" fontWeight="semibold">
          {truncateString(data?.name)}
        </Text>
      </div>
      {scorePosition === "right" && (
        <div className="flex items-center">
          <Text size="2xl" fontWeight={data?.isWinner ? "semibold" : "normal"}>
            {data?.score}
          </Text>
        </div>
      )}
    </div>
  );
}

export default function MatchCard({
  homeTeam,
  awayTeam,
  venue,
  startDate,
  elapsedTime,
  status,
}: MatchCardProps) {
  return (
    <div className="w-[400px] border px-6 py-5 rounded-xl shadow-md">
      <div className="flex gap-2">
        <Text size="xs">
          {dayjs.tz(startDate, "").format("DD/MM/YYYY HH:mm")} UTC
        </Text>
        <Text size="xs">&#8226;</Text>
        <Text size="xs">{truncateString(venue || "-", 40)}</Text>
      </div>
      <Spacer size={28} />
      <div className="grid grid-cols-2 gap-8">
        <Team data={homeTeam} scorePosition="right" />
        <Team data={awayTeam} scorePosition="left" />
      </div>
      <Spacer size={16} />
      <Text className="text-center" size="xs" fontWeight="medium">
        {elapsedTime}&apos;
      </Text>
      <Text className="text-center" size="xs">
        {status}
      </Text>
    </div>
  );
}
