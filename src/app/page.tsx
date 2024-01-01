import Link from "next/link";
import Card, { MicroCard, MiniCard } from "./components/Card";
import Counter from "./components/Counter";
import Counters from "./components/Counters";


export default function Home() {
  return (
    <div>
      <Link href="/playground">Playground</Link>
      <Link href="/playground/challenge">Challenge</Link>
    </div>
  )
}
