import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Home() {
  const { t } = useTranslation('translation');

  return (
    <>
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="text-lg text-neutral-700">{t('welcome')}</div>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {t('home.name', 'Mohamed Ikbel Said')}
          </h1>
          <p className="mt-2 text-brand-bordeaux font-semibold">
            {t('home.title', 'Senior Front‑End Consultant — React & Next.js')}
          </p>
          <p className="mt-4 text-neutral-700">
            {t(
              'home.description',
              'Results‑driven engineer with 9+ years building high‑impact apps in banking, retail, industry and public sector. Focused on performance, security and clean architecture.'
            )}
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/projects" className="btn btn-brand">
              {t('home.projects', 'View Projects')}
            </Link>
            <Link to="/docs" className="btn">
              {t('home.docs', 'Psychometric Docs')}
            </Link>
          </div>
        </div>
        <img
          src="/logo.png"
          alt="Wolf Intel"
          className="w-56 md:w-64 justify-self-center rounded-xl shadow"
        />
      </section>
      {/* 🔽 Logos défilants */}
      <section className="mt-12 overflow-hidden">
        <div className="flex gap-12 animate-scroll-x">
          <img src="/logos/axa.png" alt="AXA" className="h-12 object-contain" />
          <img src="/logos/monoprix.png" alt="Monoprix" className="h-12 object-contain" />
          <img src="/logos/intermarche.png" alt="Intermarché" className="h-12 object-contain" />
          <img src="/logos/loreal.png" alt="L'Oréal" className="h-12 object-contain" />
          <img
            src="/logos/courdescomptes.png"
            alt={t('home.courdescomptes', 'Cour des Comptes')}
            className="h-12 object-contain"
          />
        </div>
      </section>
    </>
  );
}
