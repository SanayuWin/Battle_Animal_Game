import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/game"}> start game</Link>
    </div>
  );
}