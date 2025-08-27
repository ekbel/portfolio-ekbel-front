import projects from '../data/projects.js';
import ProjectCard from '../components/ProjectCard.jsx';
export default function Projects() {
  return (
    <section className="space-y-6">
      <header>
        <h2 className="text-2xl font-bold">Projects</h2>
        <p className="text-neutral-600">A selection of missions and key deliveries.</p>
      </header>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title + p.company} item={p} />
        ))}
      </div>
    </section>
  );
}
