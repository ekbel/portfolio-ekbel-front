import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'nl', label: 'Nederlands', flag: '🇳🇱' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'pl', label: 'Polski', flag: '🇵🇱' },
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  { code: 'no', label: 'Norsk', flag: '🇳🇴' },
  { code: 'da', label: 'Dansk', flag: '🇩🇰' },
  { code: 'sv', label: 'Svenska', flag: '🇸🇪' },
];

const TRANSLATIONS = {
  en: {
    home: 'Home',
    projects: 'Projects',
    interests: 'Interests',
    docs: 'Docs',
    contact: 'Contact',
    github: 'GitHub',
  },
  fr: {
    home: 'Accueil',
    projects: 'Projets',
    interests: 'Centres d’intérêt',
    docs: 'Docs',
    contact: 'Contact',
    github: 'GitHub',
  },
  es: {
    home: 'Inicio',
    projects: 'Proyectos',
    interests: 'Intereses',
    docs: 'Documentos',
    contact: 'Contacto',
    github: 'GitHub',
  },
  it: {
    home: 'Home',
    projects: 'Progetti',
    interests: 'Interessi',
    docs: 'Documenti',
    contact: 'Contatto',
    github: 'GitHub',
  },
  nl: {
    home: 'Home',
    projects: 'Projecten',
    interests: 'Interesses',
    docs: 'Documenten',
    contact: 'Contact',
    github: 'GitHub',
  },
  de: {
    home: 'Startseite',
    projects: 'Projekte',
    interests: 'Interessen',
    docs: 'Dokumente',
    contact: 'Kontakt',
    github: 'GitHub',
  },
  pl: {
    home: 'Strona główna',
    projects: 'Projekty',
    interests: 'Zainteresowania',
    docs: 'Dokumenty',
    contact: 'Kontakt',
    github: 'GitHub',
  },
  tr: {
    home: 'Ana Sayfa',
    projects: 'Projeler',
    interests: 'İlgi Alanları',
    docs: 'Dokümanlar',
    contact: 'İletişim',
    github: 'GitHub',
  },
  no: {
    home: 'Hjem',
    projects: 'Prosjekter',
    interests: 'Interesser',
    docs: 'Dokumenter',
    contact: 'Kontakt',
    github: 'GitHub',
  },
  da: {
    home: 'Hjem',
    projects: 'Projekter',
    interests: 'Interesser',
    docs: 'Dokumenter',
    contact: 'Kontakt',
    github: 'GitHub',
  },
  sv: {
    home: 'Hem',
    projects: 'Projekt',
    interests: 'Intressen',
    docs: 'Dokument',
    contact: 'Kontakt',
    github: 'GitHub',
  },
};

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-xl text-sm ${isActive ? 'bg-neutral-200' : 'hover:bg-neutral-100'}`
    }
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const currentLang = LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];
  const t = TRANSLATIONS[i18n.language] || TRANSLATIONS.en;

  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center gap-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Wolf Intel" className="w-9 h-9 rounded-md" />
          <span className="font-bold">Mohamed Ikbel Said</span>
        </Link>
        <nav className="ml-auto flex items-center gap-2">
          <NavItem to="/">{t.home}</NavItem>
          <NavItem to="/projects">{t.projects}</NavItem>
          <NavItem to="/interests">{t.interests}</NavItem>
          <NavItem to="/docs">{t.docs}</NavItem>
          <NavItem to="/contact">{t.contact}</NavItem>
          <a
            href="https://github.com/ekbel/portfolio-ekbel-front"
            target="_blank"
            className="btn btn-brand text-sm"
          >
            {t.github}
          </a>
        </nav>
        <div className="relative">
          <button
            className="flex items-center gap-2 px-2 py-1 rounded hover:bg-neutral-100"
            onClick={() => setOpen(!open)}
          >
            <span className="text-xl">{currentLang.flag}</span>
            <span className="hidden sm:inline">{currentLang.label}</span>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
              <path
                d="M7 10l5 5 5-5"
                stroke="#333"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {open && (
            <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg z-10 min-w-[120px]">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  className={`flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-neutral-100 ${i18n.language === lang.code ? 'bg-neutral-200 font-bold' : ''}`}
                  onClick={() => {
                    i18n.changeLanguage(lang.code);
                    setOpen(false);
                  }}
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
