import { Text } from "@/components/atoms";
import { color, colorMapper } from "@/constants/color";
import clsx from "clsx";
import Link from "next/link";

export default function Header() {
  return (
    <header
      className={clsx(
        `sticky left-0 top-0 bg-[${colorMapper.red}] w-full min-h-[40px] py-4 flex items-center justify-center shadow-md`
      )}
    >
      <Link href="/">
        <Text color={colorMapper.white as color} size="xl" fontWeight="bold">
          JLeague DB
        </Text>
      </Link>
    </header>
  );
}