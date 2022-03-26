/**
 * @description 👋🏻 Hero
 * @returns {JSX.Element}
 * @constructor
 */
const Hero = () =>
    <section className="p-container grid gap-[20px] py-[20px] md:grid-cols-2 md:items-center md:py-[50px]">
        {/* Content */}
        <div className="flex flex-col items-start gap-[10px]">
            <h1 className="font-semibold text-lg sm:text-2xl lg:text-4xl">Short links, big results</h1>
            <p>A URL shortener built with powerful tools to help you grow and protect your brand.</p>
            <button className="p-btn-blue">Get Started for Free</button>
        </div>
        {/* Side image */}
        <img src="/assets/images/image-hero.svg" alt="Cuttly"/>
    </section>

export default Hero
