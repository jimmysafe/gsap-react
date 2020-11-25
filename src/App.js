
import React, { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from 'gsap/all'
import Intro from './components/Intro'
import FullText from './components/FullText'
import TextImage from './components/TextImage'

gsap.registerPlugin(ScrollTrigger)

// const items = [
//   { render: () => <Intro /> },
//   { render: () => <FullText /> },
//   //{ render: () => <TextImage /> }
// ]

const items = [
  { color: "blue", render: (i) => <p className="font-bold">{i}</p> },
  { color: "yellow", render: (i) => <p className="font-bold">{i}</p> },
  { color: "green", render: (i) => <p className="font-bold">{i}</p> },
]

const App = () => {
  
  const container = useRef(null)

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0]
    body.classList.add("overflow-x-hidden")
    
    let sections = gsap.utils.toArray(".section")
  
    gsap.to(sections, {
      xPercent: +100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        pin: true,
        scrub: 1,
        // snap: 1 / (sections.length - 1),
        end: () => "+=" + container.current.offsetWidth
      }
    })

  }, [])

  return (
    <main 
      ref={container}
      className="flex flex-nowrap  h-full bg-black" 
      style={{ width: `${items.length}00%` }}
    >
      {items.map((section, i) => (
          <section 
            key={i}
            className={`section relative bg-${section.color}-500 h-screen  top-0`}
            style={{ width: '100%', right: i === 0 ? '0%' : '100%' }}
          >
            {section.render()}
          </section>
      ))}

    </main>
  );
}

export default App;
