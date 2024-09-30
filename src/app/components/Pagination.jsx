const Pagination = () => {
    return (
        <div className="flex justify-center gap-3">
            <a href="#" className="inline-block h-[3rem] bg-gray-100 rounded-full w-[3rem] relative border border-white hover:border-gray-200">
                <span className="absolute right-[50%] translate-x-1/2 top-3">1</span>
            </a>
            <a href="#" className="inline-block h-[3rem] bg-sky-950 rounded-full w-[3rem] relative">
                <span className="absolute right-[50%] translate-x-1/2 top-3 text-gray-200">2</span>
            </a>
            <a href="#" className="inline-block h-[3rem] bg-gray-100 rounded-full w-[3rem] relative border border-white hover:border-gray-200">
                <span className="absolute right-[50%] translate-x-1/2 top-3">3</span>
            </a>
            <a href="#" className="inline-block h-[3rem] bg-gray-100 rounded-full w-[3rem] relative border border-white hover:border-gray-200">
                <span className="absolute right-[50%] translate-x-1/2 top-3">4</span>
            </a>
            <span className="inline-block p-3">...</span>
            <a href="#" className="inline-block h-[3rem] bg-gray-100 rounded-full w-[3rem] relative border border-white hover:border-gray-200">
                <span className="absolute right-[50%] translate-x-1/2 top-3">16</span>
            </a>
        </div>
    )
}

export default Pagination;
