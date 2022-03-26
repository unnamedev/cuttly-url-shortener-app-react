import {HiLink} from "react-icons/hi"
import {IoStatsChartOutline} from "react-icons/io5"
import {MdOutlineQueryStats} from "react-icons/md"
import {Form, FormResult} from "../index"

/**
 * @description 👋🏻 Advantages
 * @returns {JSX.Element}
 * @constructor
 */
const Advantages = () => <section className="bg-slate-100">
    <div className="p-container relative top-[-50px] flex flex-col gap-4">
        <Form/>
        <FormResult/>
    </div>
    <div className="p-container flex flex-col items-center text-center py-[40px] md:py-[60px]">
        <h2 className="font-semibold text-xl mb-[10px] md:text-2xl">Link analytics, branded urls, URL shortener</h2>
        <p className="mb-[20px] max-w-3xl m-auto">Don't let the links limit you. Make your links support your brand. The
            new standard of shortening links. A
            new standard for link analytics. Discover unique redirects analytics - work with your team together building
            your brand engagment. Manage your links like a pro.</p>

        <ul className="grid gap-3 max-w-sm sm:grid-cols-2 sm:max-w-full sm:gap-5 md:grid-cols-3 md:items-start">
            <li className="shadow bg-white p-3 flex flex-col items-center gap-2 rounded-lg transition-all hover:shadow-lg md:p-4">
                <div
                    className="w-[40px] h-[40px] rounded-[50%] bg-blue-50 text-blue-500 flex items-center justify-center">
                    <HiLink size={25}/>
                </div>
                <h3 className="font-semibold text-lg">Inspire trust</h3>
                <p className="text-sm sm:text-base">
                    With more clicks comes increased brand recognition and consumer trust in your communications—which in
                    turn inspires even more engagement with your links. (It’s a wonderful cycle.)
                </p>
            </li>
            <li className="shadow bg-white p-3 flex flex-col items-center gap-2 rounded-lg transition-all hover:shadow-lg md:p-4 md:mt-[20px]">
                <div
                    className="w-[40px] h-[40px] rounded-[50%] bg-blue-50 text-blue-500 flex items-center justify-center">
                    <IoStatsChartOutline size={25}/>
                </div>
                <h3 className="font-semibold text-lg">Boost results</h3>
                <p className="text-sm sm:text-base">
                    On top of better deliverability and click-through, rich link-level data gives you crucial insight
                    into your link engagement so your team can make smarter decisions around its content and
                    communications.
                </p>
            </li>
            <li className="shadow bg-white p-3 flex flex-col items-center gap-2 rounded-lg transition-all hover:shadow-lg md:p-4 md:mt-[30px]">
                <div
                    className="w-[40px] h-[40px] rounded-[50%] bg-blue-50 text-blue-500 flex items-center justify-center">
                    <MdOutlineQueryStats size={25}/>
                </div>
                <h3 className="font-semibold text-lg">Gain control</h3>
                <p className="text-sm sm:text-base">
                    Take credit for your content and learn more about how it’s consumed by enabling auto-branding—a
                    feature that ensures your brand remains in any link someone shortens pointing to your website.
                </p>
            </li>
        </ul>
    </div>
</section>

export default Advantages
