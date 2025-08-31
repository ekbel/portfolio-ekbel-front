import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation('translation');

  return (
    <section className="max-w-xl">
      <h2 className="text-2xl font-bold">{t('contact.title', 'Contact')}</h2>
      <div className="card mt-4 space-y-2 text-neutral-700">
        <p>
          <strong>{t('contact.email', 'Email')}:</strong>{' '}
          <a className="text-[var(--brand)] underline" href="mailto:said.mohamed.ekbel@gmail.com">
            said.mohamed.ekbel@gmail.com
          </a>
        </p>
        <p>
          <strong>{t('contact.phone', 'Phone')}:</strong>{' '}
          <a className="text-[var(--brand)] underline" href="tel:+33772356390">
            +33 7 72 35 63 90
          </a>
        </p>
        <p>
          <strong>{t('contact.location', 'Location')}:</strong> {t('contact.city', 'Paris, France')}
        </p>
        <p>
          <strong>{t('contact.tagline', 'Tagline')}:</strong>{' '}
          {t('contact.slogan', 'Wolf Intel — Smart Vision, Smart Action')}
        </p>
      </div>
    </section>
  );
}
