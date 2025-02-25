import React from 'react'
import AboutHero from '@/components/about/AboutHero'
import HorizontalScrolling from '@/components/about/HorizontalScrolling'
import Mission from '@/components/about/Mission'
import Dna from '@/components/about/Dna'
import Projects from '@/components/about/Projects'
import Commitment from '@/components/about/Commitment'
import Csr from "@/components/about/Csr" 
import Allies from '@/components/about/Allies'
import History from '@/components/about/History'
import Certificates from '@/components/about/Certificates'
import Team from '@/components/about/Team'
const index = () => {
  return (

    <>
    
    {/* <div>ABout us Section</div> */}
    <AboutHero/>
    <HorizontalScrolling/>
    <Mission/>
    <Projects/>
    <Commitment/>
    <Dna/>
    <Csr/>
    <Certificates/>
    <History/>
    <Team/>
    <Allies/>




    </>
  )
}

export default index