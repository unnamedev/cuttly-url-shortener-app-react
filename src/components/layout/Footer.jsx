import {Link} from "react-router-dom"

/**
 * @description 👋🏻 Footer
 * @returns {JSX.Element}
 * @constructor
 */
const Footer = () => <footer>
    <div
        className="p-container py-[30px] flex flex-col gap-2 items-center text-center sm:grid sm:grid-cols-4 sm:items-start sm:text-left md:gap-3 md:py-[50px] lg:grid-cols-7">
        <Link className="font-semibold text-2xl md:text-xl lg:col-span-4" to="/">Cuttly</Link>

        <div className="grid gap-2">
            <h3 className="font-semibold text-lg">Why Cuttly?</h3>
            <ul>
                {["Cuttly 101", "Integrations & API", "Enterprise Class", "Pricing"].map((link, idx) =>
                    <li key={idx}><a className="p-link" href="#">{link}</a></li>
                )}
            </ul>
        </div>
        <div className="grid gap-2">
            <h3 className="font-semibold text-lg">Solutions</h3>
            <ul>
                {["Social Media", "Digital Marketing", "Customer Service", "For Developers"].map((link, idx) =>
                    <li key={idx}><a className="p-link" href="#">{link}</a></li>
                )}
            </ul>
        </div>
        <div className="grid gap-2">
            <h3 className="font-semibold text-lg">Resources</h3>
            <ul>
                {["Blog", "Resource Library", "Developers", "Support"].map((link, idx) =>
                    <li key={idx}><a className="p-link" href="#">{link}</a></li>
                )}
            </ul>
        </div>
    </div>
</footer>

export default Footer
