
import { Briefcase } from "lucide-react";

const jobs = [
  {
    title: "Database Engineer",
    org: "Vosyn.ai",
    where: "Canada",
    date: "Sep 2024 – Present",
    bullets: [
      "Analyzed transportation and retail data using Python, SQL, and Power BI.",
      "Built forecasting models, ETL pipelines (Azure SQL, SSIS, Databricks).",
      "Developed Power BI dashboards; optimized data models; enforced data governance."
    ]
  },
  {
    title: "Extern, Corporate Venture Capital & Business Analytics",
    org: "Remote",
    date: "Sep – Oct 2024",
    bullets: [
      "Conducted market analysis and startup sourcing.",
      "Prepared investment summaries and data-driven recommendations."
    ]
  },
  {
    title: "Python Developer – Django",
    org: "TechnoGuide Infosoft Pvt. Ltd.",
    date: "Feb – Apr 2022",
    bullets: [
      "Developed 'Living It Up Staines' website, improved UI/backend.",
      "Boosted site engagement and search rankings."
    ]
  },
  {
    title: "Python with Data Science Intern",
    org: "BrainyBeam Technologies Pvt. Ltd.",
    date: "May – Jun 2021",
    bullets: [
      "Built ML models (linear regression, TF-IDF).",
      "Improved prediction and classification accuracy."
    ]
  },
  {
    title: "Web Developer Intern",
    org: "The Sparks Foundation",
    date: "Apr – May 2021",
    bullets: [
      "Developed and deployed dynamic websites.",
      "Integrated payment/social APIs; applied AI/ML solutions."
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-28 bg-neutral-light">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 flex items-center gap-2">
          <Briefcase className="text-gold" size={32} />
          Experience
        </h2>
        <ol className="relative border-l-4 border-accent-dark pl-10 space-y-10">
          {jobs.map((job, idx) => (
            <li key={job.title + job.date} className="relative pb-6 group">
              <span className="absolute left-[-32px] top-2 w-6 h-6 rounded-full bg-gold shadow-xl shadow-gold ring-4 ring-white dark:ring-neutral-dark border-2 border-gold-light z-10 transition-all group-hover:scale-110"></span>
              <div className="mb-1 flex items-center gap-2">
                <span className="font-semibold text-lg font-heading">{job.title}</span>
                <span className="bg-accent-lighter text-accent-dark px-2 py-0.5 rounded text-xs font-semibold">{job.org}</span>
                {job.where && <span className="text-xs text-muted">({job.where})</span>}
                <span className="text-xs ml-3 text-muted">{job.date}</span>
              </div>
              <ul className="ml-2 list-disc text-sm text-text mt-1 space-y-0.5">
                {job.bullets.map(b => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
