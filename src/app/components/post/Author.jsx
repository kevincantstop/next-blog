import Image from "next/image";

const Author = () => {
    return (
        <section className="flex bg-gray-100 p-[2rem] rounded gap-6 shadow-md">
            <a href="#" className="w-1/3 relative top-4">
                <Image src="/images/avatar.jpeg" alt="Avatar" width="140" height="42" className="rounded-full hover:drop-shadow-xl transition-shadow" />
            </a>
            <div className="py-3">
                <h4 className="font-[family-name:var(--font-merriweather-bold)] text-lg text-[#000638]">
                    Written by <a href="#" className="hover:underline underline-offset-2">George Costanza</a>
                </h4>
                <p className="pt-3">
                    Volutpat cursus id id tincidunt duis id. Urna curabitur ultrices molestie bibendum.
                    Purus orci nisl, commodo ipsum, ut urna, elementum. Nunc potenti lectus in erat ligula cras. Eget.
                </p>
            </div>
        </section>
    )
}

export default Author;
