// import FullText from "./components/FullText";
// import Intro from "./components/Intro";
// import TextImage from "./components/TextImage";
import React, { useEffect, useState, useRef } from 'react'
import { gsap, ScrollTrigger } from 'gsap/all'
import Section from './components/Section'

gsap.registerPlugin(ScrollTrigger)

const App = ({ sectionN }) => {
  
  const container = useRef(null)

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0]
    body.classList.add("overflow-x-hidden")
    
    let sections = gsap.utils.toArray(".section")
  
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + container.current.offsetWidth
      }
    })

  }, [])

  return (
    <main 
      ref={container}
      className="flex flex-nowrap h-full " 
      //style={{ width: `${sectionN}00%` }} // this will then be retrieved from the api response Prismic
      style={{ width: '100%' }}
    >
      <Section color="blue">
        <p>asd</p>
      </Section>
      <Section color="red">
        <p>asd</p>
      </Section>

      <Section color="yellow">

      </Section>
      {/* <Intro />
      <FullText />
      <TextImage /> */}
    </main>
  );
}

export default App;
