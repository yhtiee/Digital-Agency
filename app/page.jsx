import HomepageHeader from '@/components/HomepageHeader'
import Offer from '@/components/Offer'
import Proof from '@/components/Proof'
import Services from '@/components/Services'
import Image from 'next/image'

export default function Home() {
  return (
    <section>
      <HomepageHeader/>
      <Services/>
      <Proof/>
      <Offer/>
    </section>
  )
}
