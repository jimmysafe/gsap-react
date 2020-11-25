import React, { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from 'gsap/all'
import Section from './Section'


const TestSection = () => {

    const section = useRef(null)
    const animatedSectionRef = useRef(null)
    const container = useRef(null)

    useEffect(() => {

        gsap.from(animatedSectionRef.current, {
            scrollTrigger: {
                trigger: section.current,
                start: "top 50%",
                // end: "bottom 200%",
                toggleActions: "play none play reverse",
                // scrub: 1,
            },
            width: '50%'
        })

        gsap.from(container.current, {
            scrollTrigger: {
                trigger: section.current,
                start: "top 20%",
                end: "bottom top",
                pin: true,
                scrub: true
            } ,
            opacity: 0,
            y: 150   
        })

    }, [])

    return (
        <section ref={section} className={`section bg-yellow-300 h-screen w-screen`}>
            <article  className="flex justify-between h-full w-full">
                
                <div ref={animatedSectionRef} className="bg-black h-full" style={{ width: '100%' }}>
                    <div ref={container} className="container mx-auto flex flex-col justify-center h-screen" style={{ maxWidth: 1000 }}>
                        <div className="mb-8">
                            <span className="bg-yellow-300 font-bold py-2 px-3 uppercase" style={{ fontSize: '4rem' }}>1 NEW MESSAGE</span>
                        </div>
                        <div className="mb-8 text-white font-bold">
                            <h3>FROM PUFF</h3>
                        </div>

                    
                        <div className="h-8 bg-white w-full"></div>
                        <div className="text-white border-2 border-white p-5">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et neque eum illum minus eius perspiciatis ipsam maxime incidunt. Accusantium, repellat sapiente expedita incidunt quibusdam quis ipsa autem necessitatibus in, accusamus repudiandae ipsam excepturi fugit unde nemo eos error ea tempore obcaecati, aperiam optio consequuntur maxime assumenda rem. Autem distinctio ipsum obcaecati qui, excepturi mollitia quos corrupti voluptatum rem debitis enim veniam, eum unde repudiandae tenetur porro sapiente. Quia aliquam magni fugiat veniam totam mollitia necessitatibus fuga aliquid, reprehenderit rerum perferendis magnam ad amet iure repellat ab pariatur quibusdam iste est consequatur? Placeat eaque fugiat officia laborum recusandae corrupti! Doloremque molestias vitae corporis, asperiores deleniti minus a facilis, provident totam veritatis eius voluptas? Quasi commodi vitae voluptas possimus. Architecto eum aliquam vel cum ipsum neque tempore nobis fuga nulla tenetur eaque optio totam, ex magni incidunt alias harum? Perferendis labore tenetur officiis aperiam provident, vel quibusdam expedita illum alias ad at, commodi molestias quia recusandae illo delectus accusamus? Culpa eligendi laborum natus accusamus dicta aut eaque adipisci, soluta earum explicabo, recusandae nostrum consequatur. Animi odit maiores, consequatur, praesentium earum necessitatibus doloremque explicabo iste, laudantium iusto vel reprehenderit illum suscipit ex culpa possimus rem consequuntur dicta nulla nisi laboriosam rerum voluptatem deleniti. Qui fugit nostrum, inventore magni consequatur, dolor unde omnis distinctio ratione exercitationem rerum ipsum commodi sequi obcaecati architecto quas nesciunt? Fugit quod nam sed, deleniti odio quis ea eos! Animi eos ipsam illo est incidunt eveniet nihil inventore, aspernatur possimus sed voluptas quis. Consequuntur dignissimos alias dolore natus in doloremque nam cumque, veritatis mollitia veniam. Facilis soluta harum earum quisquam quam, non quos veniam voluptatum dolore molestiae eos est repellat! Repudiandae molestiae quod placeat repellendus voluptate amet reprehenderit, sunt ipsum voluptas nostrum adipisci dolore accusantium sapiente minima suscipit itaque, sint voluptates, animi eveniet odit. Obcaecati vitae ratione consectetur ad mollitia.</p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default TestSection
