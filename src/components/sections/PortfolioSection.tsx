
import { ExternalLink, LayoutDashboard, DatabaseZap } from "lucide-react";
const projects = [
  {
    title: "Sales & Customer Dashboards Using Tableau",
    short: "Interactive dashboards for tracking sales performance & customer engagement.",
    bullets: [
      "Managed data import, cleaning, and visualization pipeline.",
      "Built shareable, real-time dashboards with drilldowns.",
    ],
    tools: ["Tableau", "Excel"],
    image: "/lovable-uploads/photo-1487058792275-0ad4aaf24ca7", // Colorful dashboard
    link: "#",
  },
  {
    title: "HR Data Dashboard Using Power BI",
    short: "Analytics dashboards for HR KPIs, attrition, and salary trends.",
    bullets: [
      "Loaded and cleaned HR datasets for analysis.",
      "Visualized headcount, attrition, salary trends.",
    ],
    tools: ["Power BI", "Python"],
    image: "/lovable-uploads/photo-1488590528505-98d2b5aba04b", // Data screens
    link: "#",
  },
  {
    title: "Brand.io Website",
    short: "Landing page for AI branding solutions & marketing analytics.",
    bullets: [
      "Crafted UI and integrated analytics features.",
      "Leveraged AI/ML for branding recommendations.",
    ],
    tools: ["React", "Django", "Figma"],
    image: "/lovable-uploads/photo-1531297484001-80022131f5a1", // Web landing page
    link: "#",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 md:py-28 bg-background">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-10 flex items-center gap-2">
          <LayoutDashboard className="text-accent" size={32} />
          Portfolio
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div key={proj.title} className="bg-white rounded-xl shadow-card flex flex-col h-full">
              <div className="h-40 rounded-t-lg overflow-hidden">
                <img src={proj.image} alt={proj.title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-heading text-xl font-semibold mb-2">{proj.title}</h3>
                <p className="text-muted mb-3 text-base">{proj.short}</p>
                <ul className="mb-3 list-disc pl-6 text-sm text-text">
                  {proj.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}
                </ul>
                <div className="flex items-center flex-wrap gap-2 mb-3">
                  {proj.tools.map(tool =>
                    <span key={tool} className="bg-accent-lighter text-accent-dark px-2 py-0.5 rounded text-xs font-semibold">{tool}</span>
                  )}
                </div>
                <a href={proj.link} target="_blank" rel="noopener" className="mt-auto inline-flex items-center gap-1 text-primary hover:underline font-medium">
                  View Case Study
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
