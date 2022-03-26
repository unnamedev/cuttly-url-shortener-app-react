/**
 * @description 👋🏻 Boost
 * @returns {JSX.Element}
 * @constructor
 */
const Boost = () =>
    <section className="bg-[#1e56b3] bg-[url('/assets/images/bg-boost.svg')]">
        <div className="p-container flex flex-col items-center gap-2 py-[30px] md:py-[50px] md:gap-4 lg:py-[100px]">
            <h2 className="font-semibold text-xl mb-[10px] text-white md:text-2xl">More than a free link shortener</h2>
            <button className="p-btn-blue">Get Started</button>
        </div>
    </section>

export default Boost
