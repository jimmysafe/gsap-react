import React, { useEffect, useRef } from 'react'
import { gsap, ScrollToPlugin, ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)


const TextImage = () => {

    const layerRef = useRef(null)
    const titleRef = useRef(null)
    const textWrapperRef = useRef(null)
    const wrapperRef = useRef(null)

    useEffect(() => {

        // gsap.from(layerRef.current, {
        //   scrollTrigger: {  
        //     trigger: layerRef.current,
        //     start: 'top bottom',
        //     end: 'bottom bottom',
        //     scrub: true
        //   },
        //   width: 0
        // })
    
        // const timeline = gsap.timeline()
        // timeline.from(titleRef.current, { opacity: 0, y: 50 })
        // timeline.from(textWrapperRef.current, { opacity: 0, y: 50 })
        // timeline.to(textWrapperRef.current, { scrollTo: { y: "max" } })
    
        
        // ScrollTrigger.create({
        //   animation: timeline,
        //   trigger: wrapperRef.current,
        //   start: "top top",
        //   pin: true,
        //   scrub: true    
        // })
        
    
       
      }, [])

    return (
    <article ref={wrapperRef} className="flex items-center relative bg-black h-full w-full">
        <div ref={layerRef} className="absolute top-0 left-0 bg-yellow-300 h-full w-1/2" >
        </div>
        <div className="container mx-auto h-full flex justify-center items-start">
          <article className="h-full flex-1 flex flex-col justify-center items-start p-5">
            <h3 ref={titleRef} className="uppercase font-bold flex flex-col items-start text-xl">
                <span className="bg-black py-3 px-5 text-yellow-300 leading-tight	">Test</span>
                <span className="bg-black py-3 px-5 text-yellow-300 leading-tight	">testetstst</span>
            </h3>
            <div ref={textWrapperRef} className="overflow-auto overflow-y-hidden my-3 pr-5" style={{ maxHeight: 400 }}>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati tempora veniam perferendis praesentium quos, molestiae quibusdam ab aspernatur, provident reprehenderit dolore, vero reiciendis necessitatibus! Quam modi ex ipsam maiores quidem tenetur quod inventore? Aliquid totam iusto natus, praesentium labore quisquam, assumenda, excepturi distinctio omnis rerum atque unde quasi corrupti libero nisi quod nihil adipisci reprehenderit iste consequuntur accusantium porro! Architecto tenetur voluptatibus provident vero molestiae inventore ratione eius dolor soluta rem sequi voluptas placeat, minus obcaecati aliquid labore porro excepturi error? Libero impedit debitis at modi soluta saepe suscipit beatae ea pariatur eligendi porro asperiores ipsam, rerum repellat, dicta deserunt voluptate architecto cupiditate? Amet ipsum assumenda obcaecati, commodi deserunt odit illum cum accusantium aliquid sapiente eligendi sequi! Placeat eligendi quaerat eos eius facilis dolorem cum rerum repellendus itaque incidunt temporibus cumque quisquam commodi labore quae fugit sapiente odio eveniet eum, praesentium aut illum. Reiciendis, quas veniam, iste nulla voluptas suscipit minima ducimus optio dolorem provident quis aperiam excepturi voluptates numquam tenetur? Omnis perspiciatis facere iure illo mollitia ipsa reprehenderit illum delectus officia cum incidunt sunt officiis dolore voluptatum aspernatur deserunt magni fugit, culpa iusto earum eum aliquid quam necessitatibus! Sunt fugit neque aut quasi, rem corporis est esse natus aperiam! Iusto repellat in numquam perspiciatis expedita atque quas maiores officiis, tempora facilis quis perferendis culpa aspernatur sunt ipsam aperiam nulla dolor repellendus voluptatem harum quisquam amet ipsa illo non? Ipsum exercitationem, ducimus architecto corporis magni vero ad velit, repellat quae est praesentium? Rem explicabo optio natus nam, fugiat aspernatur iste dicta debitis repellendus odio sunt, ratione doloribus velit. Ex et quaerat eius voluptatem sit, porro maxime, qui adipisci dignissimos cum laboriosam voluptatum reprehenderit quae suscipit cupiditate, dolores numquam fugiat asperiores harum ullam. Ex, ratione facilis a at, voluptate quia unde illum omnis minima nihil minus quo. Officiis molestias, illum officia quasi id explicabo tempore dolorem mollitia similique minima deserunt error ullam, obcaecati debitis quos esse. Eum minima fugiat dolore incidunt quia similique voluptates impedit, numquam optio nemo voluptate aut excepturi quibusdam ex, recusandae consequuntur repudiandae perspiciatis quam at, reprehenderit aliquam a? Odit ab nemo accusamus voluptate. Omnis, adipisci neque, illum excepturi ipsam doloribus accusantium aliquam aperiam, deleniti eaque voluptatem velit quaerat sint facere! Pariatur, soluta, obcaecati illum neque consectetur consequatur dolore, reprehenderit praesentium commodi eius quis sunt. Provident eaque non harum fugiat eius, praesentium culpa, necessitatibus expedita minima molestias ullam eum? Nam, ut nostrum quidem aliquam ipsam nihil quam. Excepturi explicabo similique voluptate? Fuga, aliquam labore? Sequi ipsam dolores sit voluptatibus, quasi at. Officiis aut et repellat voluptatum inventore nesciunt iure corporis. Suscipit obcaecati molestias nihil, dignissimos praesentium laudantium dolorem facilis, velit, voluptatum minus repudiandae blanditiis sapiente ad illum? Libero, labore possimus sed quo velit debitis recusandae alias reprehenderit dignissimos? Voluptas beatae recusandae praesentium itaque impedit dolore odio, velit eveniet at in vitae nesciunt consequuntur natus fugiat obcaecati dolorum quis iusto illum nemo architecto veritatis consequatur aliquam repellendus excepturi! Delectus non consequatur vel doloremque, omnis corrupti iure tenetur quasi eos, veniam voluptas temporibus nihil provident neque ab id atque illum maiores architecto labore, ipsam inventore sunt quo eveniet. Obcaecati dolorum consequatur, nam similique error ullam. Quidem praesentium minima quam, blanditiis saepe tenetur non sed amet quia facilis. Reprehenderit accusamus placeat culpa! Nulla totam iusto, cumque facilis optio aliquam aspernatur fugiat laborum placeat doloribus aperiam ad est nobis autem possimus ipsum voluptatem impedit ratione perferendis blanditiis reprehenderit labore? Fuga libero laudantium accusamus quo modi corrupti inventore, dignissimos facere perferendis, quod obcaecati repudiandae quisquam atque reiciendis commodi magni magnam? Tempora illo cumque temporibus deserunt necessitatibus fuga! Ullam labore numquam exercitationem consequuntur nam vitae aspernatur? Distinctio odio non temporibus enim unde maxime quia qui delectus nam sunt repudiandae veritatis, incidunt voluptatum accusamus iure, totam possimus vitae ex optio repellendus nemo? Cupiditate ab omnis fuga dignissimos rerum! Nobis, numquam porro omnis impedit voluptatum culpa vel aut inventore provident suscipit blanditiis quia? Perferendis odio, dignissimos illo quas dolorum totam debitis provident dicta omnis dolores modi sit eos nulla! Necessitatibus illo animi blanditiis praesentium inventore voluptates dolor est at voluptate assumenda nulla mollitia asperiores, facilis alias nostrum commodi neque rem totam quis fugiat delectus consequatur illum expedita quibusdam. Nemo perferendis dolore ad quas non voluptas explicabo, nam soluta molestiae, ea voluptatum recusandae placeat repellendus in voluptates, numquam earum consequatur. Laudantium rerum veniam, vitae deserunt ex officia, quos doloremque eos at explicabo maxime. Hic, nesciunt, officiis voluptates asperiores accusantium maiores perferendis neque animi reiciendis ipsam repellendus praesentium doloribus in facilis error mollitia illo cupiditate ullam. Tempore quod magnam ab enim. Amet voluptatum similique ullam ad hic? Quos quam sit eligendi ipsa cumque eius placeat ab itaque voluptates repudiandae. Beatae, tempore. Provident minima at doloribus? Magnam, excepturi architecto tempora cumque maiores aliquid modi repudiandae officiis, assumenda libero sit! Soluta accusamus, reiciendis iure eaque quibusdam sunt, minus exercitationem fuga unde aperiam, eius praesentium delectus totam sapiente nam? Quia, consequatur.</p>
            </div>
          </article>
          <article className="h-full flex-1 flex flex-col justify-center items-start">
            <div className="text-white">
              asdasdasd
            </div>
          </article>
    </div>
    </article>
    )
}

export default TextImage
