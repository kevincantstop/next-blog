const Header = () => {
    return (
        <header className="px-[6rem] pt-10 flex items-center justify-between">
            <h1 className="font-semibold text-[1.65rem] font-[family-name:var(--font-merriweather-bold)]">
                <a href="/" className="text-[#000638]">Food Ninja</a>
            </h1>
            <ul className="flex gap-5 text-gray-500 text-[0.95rem]">
                <li className="hover:text-gray-700 hover:underline underline-offset-4"><a href="#">Blog</a></li>
                <li className="hover:text-gray-700 hover:underline underline-offset-4"><a href="#">About</a></li>
                <li className="hover:text-gray-700 hover:underline underline-offset-4"><a href="#">Contact</a></li>
            </ul>
        </header>
    )
}

export default Header;
