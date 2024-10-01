import Image from "next/image";

const Recommend = () => {
    return (
        <section className="py-10">
            <h2 className="font-[family-name:var(--font-merriweather-bold)] text-[1.6rem] text-[#000638]">
                Keep Reading
            </h2>
            <div className="flex py-4 gap-6">
                <a href="/post">
                    <Image src="/images/sample-1.jpg" alt="" width="300" height="80" className="rounded shadow-xl"/>
                </a>
                <div className="flex gap-2 flex-col">
                    <h3 className="font-[family-name:var(--font-merriweather-bold)] text-lg text-[#000638]">
                        <a href="/post" className="hover:underline underline-offset-2">
                            Why you don’t need more than 3 pieces of clothing
                        </a>
                    </h3>
                    <p>
                        Et vitae, mollis euismod lobortis blandit amet sed amet. Amet ut amet nisl tortor arcu non id
                        nulla mauris neque nisl magna.
                    </p>
                </div>
            </div>
            <div className="flex py-4 gap-6">
                <a href="/post">
                    <Image src="/images/sample-2.jpg" alt="" width="300" height="80" className="rounded shadow-xl"/>
                </a>
                <div className="flex gap-2 flex-col">
                    <h3 className="font-[family-name:var(--font-merriweather-bold)] text-lg text-[#000638]">
                        <a href="/post" className="hover:underline underline-offset-2">
                            Why you should cook with your family together everyday
                        </a>
                    </h3>
                    <p>
                        Rutrum aliquet eros semper nunc. In adipiscing augue sagittis, fermentum donec nunc lacinia. Risus in egestas in orci quam.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Recommend;
