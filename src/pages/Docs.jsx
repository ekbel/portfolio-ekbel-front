import { useTranslation } from 'react-i18next';

export default function Docs() {
  const { t } = useTranslation('translation');
  const docs = [
    {
      label: t('docs.psychometric', 'Psychometric Report — DRIVE (AssessFirst)'),
      href: '/docs/psychometric_drive.pdf',
    },
    {
      label: t('docs.cognitive', 'Cognitive Profile — (Optional)'),
      href: '/docs/cognitive_profile.pdf',
    },
  ];
  return (
    <section>
      <h2 className="text-2xl font-bold">{t('docs.title', 'Documents')}</h2>
      <p className="text-neutral-600 mt-1">
        {t('docs.info', 'Place your PDFs in')} <code>public/docs</code>{' '}
        {t('docs.info2', 'with the same names to enable the links.')}
      </p>
      <ul className="mt-4 space-y-3">
        {docs.map((d) => (
          <li key={d.href} className="card flex items-center justify-between">
            <span>{d.label}</span>
            <a href={d.href} className="btn btn-brand" target="_blank">
              {t('docs.open', 'Open PDF')}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
