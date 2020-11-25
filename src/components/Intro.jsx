import React, { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from 'gsap/all'


const Intro = () => {

    const wrapperRef = useRef(null)
    const titleRef = useRef(null)
    const infoRef = useRef(null)
    const animatedSectionRef = useRef(null)
    const textContainerRef = useRef(null)

    useEffect(() => {
        const timeline = gsap.timeline()

        timeline
        .set(animatedSectionRef.current, { width: '25%' })
        .set(titleRef.current, { scale: 1.1 })
        .set(infoRef.current, { opacity: 0, y: -120})

        .to(animatedSectionRef.current, { width: '50%', duration: 1 })
        .to(titleRef.current, { y: -150, duration: 1, scale: 1 }, 0)
        .to(infoRef.current, { opacity: 1, y:-150, duration: 2 })
        .to(textContainerRef.current, { opacity: 0, y: 50, duration: 1})
        .to(textContainerRef.current, { display: 'none' })
        .to(animatedSectionRef.current, { width: '100%' })

        ScrollTrigger.create({
            animation: timeline,
            trigger: wrapperRef.current,
            start: "top top",
            end: "bottom -=3000",
            pin: true,
            scrub: true
        })

    }, [])

    return (
        <section ref={wrapperRef} className="relative flex justify-between">
            <div ref={animatedSectionRef} className="w-1/4 bg-black h-full"></div>
            <div className="flex-1 bg-yellow-300">
                <div ref={textContainerRef} className="px-8 flex flex-col items-start justify-center h-full">
                    <div ref={titleRef}>
                        <h1 className="uppercase font-bold flex flex-col items-start">
                            <span className="bg-black py-1 px-5 text-white leading-tight">football</span>
                            <span className="bg-black py-1 px-5 text-white leading-tight">exchange</span>
                        </h1>
                        <p className="text-xs mt-3">A Chelsea Apps Proposal - 16 Nov 2020</p>
                    </div>
                    <div ref={infoRef} style={{ maxWidth: 500 }} className="mt-8">
                        <h3 className="mb-3 font-bold uppercase">TRADE PLAYER, NOT SHARES</h3>
                        <p className="text-xs mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat exercitationem accusantium minus ab excepturi corrupti sint, incidunt commodi totam. Eius ipsam ex cumque voluptatum repellendus autem, inventore deleniti odit eveniet pariatur beatae illo enim tenetur similique soluta. Nesciunt, doloribus consequuntur atque fugit asperiores corporis alias quis libero. Illo, dolore.</p>
                    
                        <p className="font-bold text-lg">$37.666</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro
