const Footer = () => {
    return (
        <footer className="flex flex-col items-center bg-gray-100 py-[1.5rem] shadow-md">
            <ul className="flex gap-5 my-6 text-gray-400 font-light text-[0.9rem] font-[family-name:var(--font-mermaid1001)]">
                <li><a href="#" className="hover:text-gray-700 hover:underline">About</a></li>
                <li><a href="#" className="hover:text-gray-700 hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-700 hover:underline">Contact</a></li>
            </ul>
            <p className="font-[family-name:var(--font-mermaid1001)] text-sm text-[#000638]">Copyright © 2024 Food Ninja Blog. All Rights Reserved.</p>
        </footer>
    )
}

export default Footer;
