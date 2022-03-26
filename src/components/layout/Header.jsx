import {Link} from "react-router-dom"

/**
 * @description 👋🏻 Header
 * @returns {JSX.Element}
 * @constructor
 */
const Header = () => <header className="shadow">
    <nav className="p-container py-[15px] flex flex-col items-center gap-4 sm:flex-row sm:gap-[20px] md:py-[20px]">
        <Link className="font-semibold text-lg md:text-xl" to="/">Cuttly</Link>
        {/* Menu */}
        <ul className="flex items-center gap-2 sm:flex-grow">
            {["Why Cuttly?", "Solutions", "Features"].map((link, idx) =>
                <li key={idx}><a className="p-link" href="#">{link}</a></li>
            )}
        </ul>
        {/* User */}
        <button className="p-btn-blue">Get a Quote</button>
    </nav>
</header>

export default Header
