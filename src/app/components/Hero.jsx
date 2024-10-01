const Hero = () => {
    return (
        <section className="text-center">
            <h2 className="font-bold text-[3rem] pb-1 text-[#000638] font-[family-name:var(--font-merriweather-bold)]">
                The Food Ninja Blog
            </h2>
            <p className="text-gray-500 text-[0.95rem]">A blog about food, experiences, and recipes</p>
            <div className="pt-10 text-gray-200 relative">
                <div className="relative inline-block w-1/3">
                    <input type="text"
                           className="border border-gray-200 bg-gray-50 p-2 w-full px-4 text-gray-700 rounded-md focus:border-gray-300 outline-none"
                           placeholder="Search for articles..."/>
                    <span className="absolute top-2 right-4">
                        <svg className="w-6 h-6 text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                        </svg>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Hero;
