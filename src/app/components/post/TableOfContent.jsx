const TableOfContent = () => {
    return (
        <section className="py-4 px-5 bg-gray-100 my-8 rounded font-[family-name:var(--font-merriweather)]">
            <h3 className="font-[family-name:var(--font-merriweather-bold)] mb-4 text-xl">In this article</h3>
            <ol className="list-decimal flex flex-col gap-2 px-4">
                <li>
                    <a href="#" className="underline hover:text-[#000638]">How to travel without spending a dime</a>
                </li>
                <li>
                    <a href="#" className="underline hover:text-[#000638]">Get the most out of your credit card reward points</a>
                </li>
                <li>
                    <a href="#" className="underline hover:text-[#000638]">Why you don’t need more than 3 pieces of clothing</a>
                </li>
            </ol>
        </section>
    )
}

export default TableOfContent;
