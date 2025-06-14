
import { BarChart2 } from "lucide-react";

const skillGroups = [
  {
    label: "Programming",
    skills: ["Python", "SQL", "R", "HTML", "CSS", "JavaScript", "Django"],
  },
  {
    label: "BI & Visualization",
    skills: ["Power BI", "Tableau", "Excel"],
  },
  {
    label: "ETL & Data",
    skills: ["SSIS", "Azure Data Factory", "Databricks", "Delta Lake"],
  },
  {
    label: "ML & NLP",
    skills: ["scikit-learn", "NLTK", "pandas", "NumPy"],
  },
  {
    label: "Cloud",
    skills: ["Azure", "AWS", "GCP"],
  },
  {
    label: "Soft Skills",
    skills: ["Teamwork", "Problem-solving", "Communication"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-28 bg-background">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-10 flex items-center gap-2">
          <BarChart2 className="text-primary" size={32} />
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div key={group.label} className="bg-neutral-light rounded-2xl shadow-xl shadow-primary/10 p-7 hover:scale-105 transition-all duration-200 border border-border/60">
              <h3 className="font-semibold mb-4 text-lg text-primary-dark">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gold-light text-gold-dark rounded-full text-sm font-medium border border-gold/50 transition-colors duration-150"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
