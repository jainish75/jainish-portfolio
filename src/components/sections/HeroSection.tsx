
import profile from "/lovable-uploads/photo-1649972904349-6e44c42644a7"; // Placeholder profile
export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:py-36 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-50 via-white to-background"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-6">
        <div className="flex-1 text-center md:text-left">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-primary-dark dark:text-primary-foreground">
            Hi, I'm Jainish<br />
            <span className="text-accent font-extrabold">Data Analyst</span> &amp;<br />
            <span className="text-primary">Big Data Specialist</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted mb-7">
            Turning complex data into actionable <strong className="text-primary-dark">insights</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#portfolio" className="px-6 py-3 bg-primary rounded-lg text-white font-semibold shadow-card hover:bg-primary-dark transition">
              View Portfolio
            </a>
            <a href="#contact" className="px-6 py-3 border-2 border-primary rounded-lg text-primary font-bold hover:bg-primary hover:text-white transition">
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center mb-8 md:mb-0">
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full shadow-card overflow-hidden border-8 border-gold-light bg-white">
            <img
              src="/lovable-uploads/photo-1649972904349-6e44c42644a7"
              alt="Jainish Satani profile"
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 right-0 bg-gold rounded-tl-2xl p-2 px-8 font-bold text-white text-lg shadow-gold">
              Data
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
