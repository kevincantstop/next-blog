const Subscribe = () => {
    return (
        <div className="bg-[#283A61] p-8 rounded flex flex-col gap-8 shadow">
            <h3 className="text-white font-[family-name:var(--font-merriweather)] text-2xl text-center">
                Subscribe To Our Newsletter
            </h3>
            <p className="text-white text-center">
                Get weekly food news, articles, and videos delivered to your inbox.
            </p>
            <section className="flex flex-col items-start gap-5">
                <input type="text" className="w-full p-2 rounded" placeholder="Email" />
                <button className="bg-[#000638] text-gray-100 py-2 px-4 rounded hover:bg-[#040A45] hover:text-white">Sign Up</button>
            </section>
        </div>
    )
}

export default Subscribe;
