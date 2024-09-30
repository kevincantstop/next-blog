import Image from "next/image";

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const Card = () => {
    return (
        <div className="w-[45%] pb-[3rem]">
            <a href="#" className="block mb-5">
                <Image src={`/images/sample-${rand(1, 3)}.jpg`} width="510" height="270" alt="Sample image" className="rounded hover:drop-shadow-xl transition-shadow"/>
            </a>
            <div className="mb-5">
                <a href="#" className="inline-block px-3 text-gray-100 py-1 rounded bg-[#283A61] text-[0.8rem]">Travel</a>
            </div>
            <h3 className="text-[1.4rem] font-[family-name:var(--font-mermaid1001)] leading-[24px] hover:underline underline-offset-3 mb-1">
                <a href="#">What Traveling Greece For 2 Weeks Taught Me About Life</a>
            </h3>
            <p className="font-[family-name:var(--font-mermaid1001)] font-light text-gray-500 mb-3">Jun 21, 2021 • 11 min read</p>
            <p className="font-light text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis lectus vitae nulla malesuada amet purus sed. A condimentum tempus a egestas sodales diam cras.
            </p>
        </div>
    )
}

export default Card;
