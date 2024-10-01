const Posts = ({ title }) => {
    return (
        <>
            <h4 className="uppercase font-bold mb-6 text-[#000638]">{title}</h4>
            <ul className="flex flex-col font-[family-name:var(--font-merriweather)] gap-5">
                <li>
                    <a href="/post" className="hover:underline underline-offset-3">How To Have Your Cake and Eat It Too: The Way of The Chicken Man</a>
                </li>
                <li>
                    <a href="/post" className="hover:underline underline-offset-3">My Grandma’s 30-year-old Recipe</a>
                </li>
                <li>
                    <a href="/post" className="hover:underline underline-offset-3">What I learned about cooking from Ratatoulie</a>
                </li>
            </ul>
        </>
    )
}

export default Posts;
