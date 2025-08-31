// Projects.jsx
import projectsData from '../data/projects.js';
import ProjectCard from '../components/ProjectCard.jsx';
import { useTranslation } from 'react-i18next';

function getTranslatedProjects(list, t, i18n) {
  return list.map((p) => {
    const title = t(p.titleKey, { ns: 'translate-projects' });
    const role = t(p.roleKey, { ns: 'translate-projects' });
    const summary = t(p.summaryKey, { ns: 'translate-projects' });
    // Ajoute un log pour chaque projet
    console.log('Project translation:', {
      lang: i18n.language,
      titleKey: p.titleKey,
      title,
      roleKey: p.roleKey,
      role,
      summaryKey: p.summaryKey,
      summary,
    });
    return {
      ...p,
      title,
      role,
      summary,
    };
  });
}

export default function Projects() {
  const { t, i18n, ready } = useTranslation('translate-projects');

  if (!ready) {
    return null;
  }

  // Passe i18n ici !
  const items = getTranslatedProjects(projectsData, t, i18n);

  return (
    <section className="space-y-6">
      <header>
        <h2 className="text-2xl font-bold">{t('projects.title', 'projects')}</h2>
        <p className="text-neutral-600">
          {t('projects.subtitle', 'A selection of missions and key deliveries.')}
        </p>
      </header>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {items.map((p) => (
          <ProjectCard key={p.id} item={p} />
        ))}
      </div>
    </section>
  );
}
