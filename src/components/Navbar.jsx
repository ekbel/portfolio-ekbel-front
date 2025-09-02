// src/components/Navbar.jsx
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';

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

const NavItem = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `px-3 py-2 rounded-xl text-sm ${isActive ? 'bg-neutral-200' : 'hover:bg-neutral-100'}`
    }
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  const { i18n } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const langRef = useRef(null);

  const currentLang = LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];
  const t = TRANSLATIONS[i18n.language] || TRANSLATIONS.en;

  // Ferme le menu langue si clic en dehors
  useEffect(() => {
    function onClickOutside(e) {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    }
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, []);

  const closeMobile = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-3">
        {/* Logo + nom */}
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <img src="/logo.png" alt="Wolf Intel" className="w-9 h-9 rounded-md shrink-0" />
          <span className="font-bold truncate max-w-[45vw] sm:max-w-none">Mohamed Ikbel Said</span>
        </Link>

        {/* Bouton hamburger (mobile) */}
        <button
          className="ml-auto inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-neutral-100 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="#333" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Nav desktop */}
        <nav className="ml-auto hidden md:flex items-center gap-2">
          <NavItem to="/">{t.home}</NavItem>
          <NavItem to="/projects">{t.projects}</NavItem>
          <NavItem to="/interests">{t.interests}</NavItem>
          <NavItem to="/docs">{t.docs}</NavItem>
          <NavItem to="/contact">{t.contact}</NavItem>
          <a
            href="https://github.com/ekbel/portfolio-ekbel-front"
            target="_blank"
            rel="noreferrer"
            className="btn btn-brand text-sm"
          >
            {t.github}
          </a>

          {/* Sélecteur de langue desktop */}
          <div className="relative" ref={langRef}>
            <button
              className="flex items-center gap-2 px-2 py-1 rounded hover:bg-neutral-100"
              onClick={() => setLangOpen((v) => !v)}
            >
              <span className="text-xl">{currentLang.flag}</span>
              <span className="hidden sm:inline">{currentLang.label}</span>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5" stroke="#333" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 bg-white border rounded-xl shadow-lg z-10 min-w-[160px] max-h-[50vh] overflow-auto">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    className={`flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-neutral-100 ${
                      i18n.language === lang.code ? 'bg-neutral-200 font-medium' : ''
                    }`}
                    onClick={() => {
                      i18n.changeLanguage(lang.code);
                      setLangOpen(false);
                    }}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Menu mobile */}
      <div
        className={`md:hidden border-t border-neutral-200 bg-white transition-[max-height] duration-300 overflow-hidden ${
          menuOpen ? 'max-h-[60vh]' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-3 space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <NavItem to="/" onClick={closeMobile}>
              {t.home}
            </NavItem>
            <NavItem to="/projects" onClick={closeMobile}>
              {t.projects}
            </NavItem>
            <NavItem to="/interests" onClick={closeMobile}>
              {t.interests}
            </NavItem>
            <NavItem to="/docs" onClick={closeMobile}>
              {t.docs}
            </NavItem>
            <NavItem to="/contact" onClick={closeMobile}>
              {t.contact}
            </NavItem>
            <a
              href="https://github.com/ekbel/portfolio-ekbel-front"
              target="_blank"
              rel="noreferrer"
              className="btn btn-brand text-sm col-span-2 text-center"
              onClick={closeMobile}
            >
              {t.github}
            </a>
          </div>

          {/* Sélecteur de langue mobile */}
          <div className="pt-3 border-t border-neutral-200">
            <label className="block text-xs text-neutral-600 mb-1">Langue</label>
            <div className="flex gap-2 flex-wrap">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  className={`px-3 py-2 rounded-lg border text-sm ${
                    i18n.language === lang.code
                      ? 'bg-neutral-200 border-neutral-300'
                      : 'hover:bg-neutral-100 border-neutral-200'
                  }`}
                  onClick={() => {
                    i18n.changeLanguage(lang.code);
                    closeMobile();
                  }}
                >
                  <span className="mr-1">{lang.flag}</span>
                  {lang.code.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
