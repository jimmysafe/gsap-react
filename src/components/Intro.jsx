import React, { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from 'gsap/all'
import Section from './Section'


const Intro = () => {

    const wrapperRef = useRef(null)
    const title = useRef(null)
    const subtitle = useRef(null)
    const animatedSectionRef = useRef(null)
    const textContainerRef = useRef(null)

    useEffect(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: wrapperRef.current,
                start: "top top",
                end: "bottom top",
                pin: true,
                scrub: true
            }
        })

        timeline
        .from(animatedSectionRef.current, { width: '25%' })
        .from(subtitle.current, { opacity: 0, y: 50})

        const exitTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: wrapperRef.current,
                start: "bottom 50%",
                // end: "bottom top",
                toggleActions: "play reverse play reverse",
                markers: true
            }        
        })

        exitTimeline
        .to(animatedSectionRef.current, { width: "100%" })



    }, [])

    return (
        <section ref={wrapperRef} className={`section bg-yellow-300 h-screen w-screen`}>
            <article className="flex justify-between h-full w-full overflow-x-hidden">
                <div ref={animatedSectionRef} className="bg-black h-full" style={{ width: '50%' }}></div>
                <div className="flex flex-1 flex-col justify-center relative">
                    <div 
                        className="absolute"
                        style={{ top: '50%', transform: 'translateY(-50%)' }}
                    >
                        <h1 ref={title} className="uppercase font-bold flex flex-col items-start p-5">
                            <span className="bg-black py-1 px-5 text-white leading-tight">football</span>
                            <span className="bg-black py-1 px-5 text-white leading-tight">exchange</span>
                        </h1>

                        <div ref={subtitle} style={{ maxWidth: 500 }} className="mt-8 p-5">
                            <h3 className="mb-3 font-bold uppercase">TRADE PLAYER, NOT SHARES</h3>
                            <p className="text-xs mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat exercitationem accusantium minus ab excepturi corrupti sint, incidunt commodi totam. Eius ipsam ex cumque voluptatum repellendus autem, inventore deleniti odit eveniet pariatur beatae illo enim tenetur similique soluta. Nesciunt, doloribus consequuntur atque fugit asperiores corporis alias quis libero. Illo, dolore.</p>
                            <p className="font-bold text-lg">$37.666</p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Intro
