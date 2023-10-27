import Image from 'next/image'
import {Button} from '@nextui-org/button'
import AboutSection from './sections/about_section'
import NameSection from './sections/name_section'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NameSection />
      <AboutSection />
    </main>
  )
}
