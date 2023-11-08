import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Footer } from "@/components/footer";

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Works',
  description: 'Sean\'s work\'s',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-around">
      <h4 className="text-4xl">Works</h4>
      <span>Under construction</span>
      </div>
    </main>
  );
}
