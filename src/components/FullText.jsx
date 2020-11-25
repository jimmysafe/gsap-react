import React, { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from 'gsap/all'

const FullText = () => {

    const wrapper = useRef(null)
    const section = useRef(null)

    useEffect(() => {
        const timeline = gsap.timeline()

        timeline
        .set(wrapper.current, { y: -100 })
        .to(wrapper.current, { y: 0 })
        
        ScrollTrigger.create({
            animation: timeline,
            trigger: section.current,
            start: "top top",
            pin: true,
            scrub: true,
            markers: true
        })

    }, [])

    return (
        <section ref={section}  className="bg-red-300">
            <div ref={wrapper} className="container mx-auto flex flex-col">
                <div className="mb-8 text-white font-bold">
                    <h3>DUKE THE DOG</h3>
                    <p>CO FUNDER OF 3 SIDED CUBE</p>
                </div>

                <div className="mb-8">
                    <span className="bg-yellow-300 font-bold py-2 px-3 uppercase" style={{ fontSize: '4rem' }}>1 NEW MESSAGE</span>
                </div>

                <div className="text-white">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci numquam iusto magni odio ullam architecto soluta, tenetur veritatis laudantium distinctio et dolor enim eligendi nobis ex saepe quisquam aliquam laborum alias cupiditate voluptatem. Nemo labore expedita beatae? Beatae voluptatem incidunt saepe porro laborum voluptas soluta numquam, corporis eveniet quae sit illum, similique vero assumenda unde. Dolore, reiciendis! Voluptatem eius quam, sunt voluptas deserunt, perferendis repellendus vero dolor nihil laboriosam doloremque tempore adipisci totam fuga, reiciendis qui quae quidem sed cupiditate quasi ex? Perspiciatis amet laudantium officiis suscipit ratione nisi quis nemo architecto sunt tempore? Eum error mollitia, minus veniam quas facilis veritatis totam modi consectetur impedit nulla expedita voluptates dicta ducimus laboriosam repellat voluptatibus distinctio ullam culpa ea ipsa recusandae hic quis ut. Ullam cum consequuntur facere laudantium voluptatum possimus, libero asperiores vero perspiciatis distinctio praesentium aliquam veritatis facilis temporibus ad quod, error perferendis nemo ab magni, repudiandae fugit commodi? Dicta ullam voluptatem suscipit porro exercitationem, ea corrupti. Rerum in exercitationem quidem sapiente quo odit aperiam eaque quam consequuntur reprehenderit! Alias aspernatur accusantium iure recusandae natus praesentium harum odit? Corporis quod recusandae nesciunt esse ullam hic sunt illum sint voluptate soluta odit fuga molestiae ipsa consequuntur error aut alias numquam inventore, nulla est neque sapiente, vel iure? Culpa voluptas fugit ad consequatur aliquam commodi distinctio veritatis libero illo? Quidem, ea culpa dolores eveniet itaque temporibus ipsam at deleniti dolorem rem fugiat adipisci accusantium! Iure praesentium, accusamus quisquam nihil numquam reiciendis sapiente perspiciatis dolor delectus vel at officiis et ullam magni pariatur nemo veniam dicta totam libero dignissimos omnis architecto sint? Error deleniti minima animi, voluptas, rem libero autem cupiditate quia tenetur cumque quaerat. Voluptatibus eos expedita beatae voluptatum dicta quidem illo id rerum praesentium aperiam aspernatur quia ullam labore, ex quos dolore nulla! Saepe vitae iusto eveniet perferendis pariatur veniam perspiciatis earum quisquam ipsa voluptas incidunt tenetur possimus minima accusantium sequi, modi quidem, magni doloremque magnam est? Corrupti officiis totam eum neque repudiandae quos magni ut voluptas, voluptatum dolorem modi tempore eaque ipsum debitis rem nisi praesentium. Dolor commodi architecto est sapiente illum nulla. Deserunt mollitia temporibus, neque deleniti libero, adipisci rem architecto suscipit fugit vitae consequatur numquam magni reprehenderit facilis eligendi a et ipsa odio corporis illum doloremque illo. Deserunt excepturi obcaecati ut nostrum assumenda provident vitae consequatur? Assumenda at alias magnam dolorem explicabo, rerum, earum minus iste inventore quas corporis facilis consectetur illum! In minima sit quidem veniam?</p>
                </div>
            </div>
        </section>
    )
}

export default FullText
