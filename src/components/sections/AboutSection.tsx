
import { GraduationCap } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-28 bg-neutral-light">
      <div className="container max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 flex items-center gap-2">
          <GraduationCap className="text-primary" size={32} /> About Me
        </h2>
        <p className="text-lg md:text-xl text-muted mb-8">
          I’m Jainish Satani, a dedicated Data Analyst with a passion for transforming data into narratives and actionable strategies. With a strong academic foundation and experience in BI, data modeling, ETL, and visualization, I help organizations <span className="text-primary-dark font-medium">unlock the value of their data</span>.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-6 mb-5">
          <div className="flex-1 bg-white shadow-card rounded-lg p-6 min-w-0">
            <strong className="block mb-1 font-semibold">M.Sc. in Big Data Analytics</strong>
            <span>Trent University, 2023–2024</span>
          </div>
          <div className="flex-1 bg-white shadow-card rounded-lg p-6 min-w-0">
            <strong className="block mb-1 font-semibold">B.E. in Computer Engineering</strong>
            <span>Gujarat Technological University, 2018–2022</span>
          </div>
        </div>
        <div className="text-md md:text-lg">
          <p className="mb-1">
            My journey bridges technology and business, with a special interest in big data, cloud analytics, and building scalable BI solutions. I aspire to craft data-driven products that empower organizations to make smarter decisions.
          </p>
          <p>
            <span className="font-semibold text-primary">Interests:</span> BI & Data Analytics, ETL Pipelines, Cloud Data Platforms, Data Visualization, ML.
          </p>
        </div>
      </div>
    </section>
  );
}
