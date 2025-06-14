export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:py-36 bg-gradient-to-br from-blue-50 via-primary-lighter to-background/70"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-primary-dark dark:text-primary-foreground drop-shadow">
            Hi, I'm Jainish<br />
            <span className="text-accent font-extrabold drop-shadow shadow-accent">Data Analyst</span> &amp;<br />
            <span className="text-primary">Big Data Specialist</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted mb-8">
            Turning complex data into actionable <strong className="text-primary-dark">insights</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-2">
            <a href="#portfolio" className="px-7 py-3 bg-primary rounded-2xl text-white font-semibold shadow-xl shadow-primary/10 hover:bg-accent transition hover:scale-105 focus-visible:ring-2 ring-accent ring-offset-2 outline-none duration-200">
              View Portfolio
            </a>
            <a href="#contact" className="px-7 py-3 border-2 border-primary rounded-2xl text-primary font-bold hover:bg-primary hover:text-white shadow-md transition focus-visible:ring-accent ring-2 outline-none duration-200">
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center mb-8 md:mb-0">
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full shadow-2xl border-[10px] border-gold-light bg-white transition-all hover:scale-105 duration-300">
            <img
              src="/lovable-uploads/photo-1649972904349-6e44c42644a7"
              alt="Jainish Satani profile"
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 right-0 bg-gold rounded-tl-2xl p-3 px-10 font-bold text-white text-lg shadow-gold">
              Data
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
