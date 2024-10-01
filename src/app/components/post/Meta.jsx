import Image from "next/image";

const Meta = () => {
    return (
        <section className="mt-8">
            <p className="mb-4">
                <a href="#" className={`inline-block px-3 text-gray-100 py-1 rounded bg-sky-950 text-[0.8rem] font-bold hover:bg-sky-900`}>Travel</a>
            </p>
            <h1 className="text-[#000638] font-[family-name:var(--font-merriweather-bold)] text-4xl leading-[3rem]">
                What I Learned About Life and Food Backpacking Around Greece
            </h1>
            <p className="font-[family-name:var(--font-merriweather-bold)] text-gray-500 mt-2 text-sm">
                Aug 1, 2021 • 7 min read
            </p>
            <div className="py-5">
                <Image src={'/images/headline.jpeg'} alt="Healine" width="800" height="300"
                       className="rounded shadow-xl"/>
            </div>
            <a href="#" className="flex gap-4">
                <Image src="/images/avatar.jpeg" alt="Avatar" width="42" height="42" className="rounded-full hover:drop-shadow-xl transition-shadow" />
                <h4 className="font-[family-name:var(--font-mermaid1001)] pt-2 hover:underline underline-offset-2">George Costanza</h4>
            </a>
        </section>
    )
}

export default Meta;
