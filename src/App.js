
import React, { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from 'gsap/all'
import Intro from './components/Intro'
import FullText from './components/FullText'
import TextImage from './components/TextImage'
import TestSection from './components/TestSection'

gsap.registerPlugin(ScrollTrigger)



const items = [
  { render: () => <Intro /> },
  { render: () => <TestSection /> },
]


const App = () => {
  
  return (
    <main className="bg-black" >
      {items.map(section => section.render() )}
    </main>
  );
}

export default App;
