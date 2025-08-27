import interests from '../data/interests.js';
import { useTranslation } from 'react-i18next';

export default function Interests() {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language || 'en';
  const interestsList = interests[currentLang] || interests.en;

  return (
    <section>
      <h2 className="text-2xl font-bold">{t('interests.title', 'Interests')}</h2>
      <ul className="mt-4 grid sm:grid-cols-2 gap-3">
        {interestsList.map((i) => (
          <li key={i} className="card">
            {i}
          </li>
        ))}
      </ul>
    </section>
  );
}
