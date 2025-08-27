import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: 'Welcome to my portfolio',
        home: {
          name: 'Mohamed Ikbel Said',
          title: 'Senior Front‑End Consultant — React & Next.js',
          description:
            'Results‑driven engineer with 9+ years building high‑impact apps in banking, retail, industry and public sector. Focused on performance, security and clean architecture.',
          projects: 'View Projects',
          docs: 'Psychometric Docs',
          courdescomptes: 'Cour des Comptes',
        },
        contact: {
          title: 'Contact',
          email: 'Email',
          phone: 'Phone',
          location: 'Location',
          city: 'Paris, France',
          tagline: 'Tagline',
          slogan: 'Wolf Intel — Smart Vision, Smart Action',
        },
      },
    },
    fr: {
      translation: {
        welcome: 'Bienvenue sur mon portfolio',
        home: {
          name: 'Mohamed Ikbel Said',
          title: 'Consultant Senior Front‑End — React & Next.js',
          description:
            'Ingénieur orienté résultats avec plus de 9 ans d’expérience dans la création d’applications à fort impact pour la banque, le retail, l’industrie et le secteur public. Focalisé sur la performance, la sécurité et l’architecture propre.',
          projects: 'Voir les projets',
          docs: 'Docs psychométriques',
          courdescomptes: 'Cour des Comptes',
        },
        contact: {
          title: 'Contact',
          email: 'Email',
          phone: 'Téléphone',
          location: 'Localisation',
          city: 'Paris, France',
          tagline: 'Slogan',
          slogan: 'Wolf Intel — Vision intelligente, action intelligente',
        },
      },
    },
    es: {
      translation: {
        welcome: 'Bienvenido a mi portafolio',
        home: {
          name: 'Mohamed Ikbel Said',
          title: 'Consultor Senior Front‑End — React & Next.js',
          description:
            'Ingeniero orientado a resultados con más de 9 años creando aplicaciones de alto impacto en banca, retail, industria y sector público. Enfocado en rendimiento, seguridad y arquitectura limpia.',
          projects: 'Ver proyectos',
          docs: 'Docs psicométricos',
          courdescomptes: 'Tribunal de Cuentas',
        },
        contact: {
          title: 'Contacto',
          email: 'Correo electrónico',
          phone: 'Teléfono',
          location: 'Ubicación',
          city: 'París, Francia',
          tagline: 'Eslogan',
          slogan: 'Wolf Intel — Visión inteligente, acción inteligente',
        },
      },
    },
    it: {
      translation: {
        welcome: 'Benvenuto nel mio portfolio',
        home: {
          name: 'Mohamed Ikbel Said',
          title: 'Consulente Senior Front‑End — React & Next.js',
          description:
            'Ingegnere orientato ai risultati con oltre 9 anni di esperienza nella creazione di applicazioni ad alto impatto per banche, retail, industria e settore pubblico. Focalizzato su prestazioni, sicurezza e architettura pulita.',
          projects: 'Vedi progetti',
          docs: 'Documenti psicometrici',
          courdescomptes: 'Corte dei Conti',
        },
        contact: {
          title: 'Contatto',
          email: 'Email',
          phone: 'Telefono',
          location: 'Località',
          city: 'Parigi, Francia',
          tagline: 'Slogan',
          slogan: 'Wolf Intel — Visione intelligente, azione intelligente',
        },
      },
    },
    nl: {
      translation: {
        welcome: 'Welkom op mijn portfolio',
        home: {
          name: 'Mohamed Ikbel Said',
          title: 'Senior Front‑End Consultant — React & Next.js',
          description:
            'Resultaatgerichte engineer met meer dan 9 jaar ervaring in het bouwen van impactvolle apps voor bankwezen, retail, industrie en publieke sector. Gericht op prestaties, veiligheid en een schone architectuur.',
          projects: 'Bekijk projecten',
          docs: 'Psychometrische documenten',
          courdescomptes: 'Rekenkamer',
        },
        contact: {
          title: 'Contact',
          email: 'E-mail',
          phone: 'Telefoon',
          location: 'Locatie',
          city: 'Parijs, Frankrijk',
          tagline: 'Slogan',
          slogan: 'Wolf Intel — Slimme visie, slimme actie',
        },
      },
    },
    de: {
      translation: {
        welcome: 'Willkommen in meinem Portfolio',
        home: {
          name: 'Mohamed Ikbel Said',
          title: 'Senior Front‑End Berater — React & Next.js',
          description:
            'Ergebnisorientierter Ingenieur mit über 9 Jahren Erfahrung in der Entwicklung von wirkungsvollen Apps für Banken, Einzelhandel, Industrie und öffentlichen Sektor. Fokus auf Leistung, Sicherheit und sauberer Architektur.',
          projects: 'Projekte ansehen',
          docs: 'Psychometrische Dokumente',
          courdescomptes: 'Rechnungshof',
        },
        contact: {
          title: 'Kontakt',
          email: 'E-Mail',
          phone: 'Telefon',
          location: 'Standort',
          city: 'Paris, Frankreich',
          tagline: 'Slogan',
          slogan: 'Wolf Intel — Intelligente Vision, intelligente Aktion',
        },
      },
    },
    pl: {
      translation: {
        welcome: 'Witamy w moim portfolio',
        home: {
          name: 'Mohamed Ikbel Said',
          title: 'Starszy Konsultant Front‑End — React & Next.js',
          description:
            'Inżynier nastawiony na wyniki z ponad 9-letnim doświadczeniem w tworzeniu aplikacji o dużym wpływie dla bankowości, handlu, przemysłu i sektora publicznego. Skupiony na wydajności, bezpieczeństwie i czystej architekturze.',
          projects: 'Zobacz projekty',
          docs: 'Dokumenty psychometryczne',
          courdescomptes: 'Najwyższa Izba Kontroli',
        },
        contact: {
          title: 'Kontakt',
          email: 'Email',
          phone: 'Telefon',
          location: 'Lokalizacja',
          city: 'Paryż, Francja',
          tagline: 'Slogan',
          slogan: 'Wolf Intel — Inteligentna wizja, inteligentne działanie',
        },
      },
    },
    tr: {
      translation: {
        welcome: 'Portföyüme hoş geldiniz',
        home: {
          name: 'Mohamed Ikbel Said',
          title: 'Kıdemli Front‑End Danışmanı — React & Next.js',
          description:
            'Bankacılık, perakende, endüstri ve kamu sektöründe 9+ yıllık yüksek etkili uygulama geliştirme deneyimine sahip, sonuç odaklı mühendis. Performans, güvenlik ve temiz mimariye odaklanır.',
          projects: 'Projeleri Görüntüle',
          docs: 'Psikometrik Dokümanlar',
          courdescomptes: 'Sayıştay',
        },
        contact: {
          title: 'İletişim',
          email: 'E-posta',
          phone: 'Telefon',
          location: 'Konum',
          city: 'Paris, Fransa',
          tagline: 'Slogan',
          slogan: 'Wolf Intel — Akıllı Vizyon, Akıllı Hareket',
        },
      },
    },
    no: {
      translation: {
        welcome: 'Velkommen til min portefølje',
        home: {
          name: 'Mohamed Ikbel Said',
          title: 'Senior Front‑End Konsulent — React & Next.js',
          description:
            'Resultatorientert ingeniør med over 9 års erfaring med å bygge høy-innvirkningsapper for bank, detaljhandel, industri og offentlig sektor. Fokuserer på ytelse, sikkerhet og ren arkitektur.',
          projects: 'Se prosjekter',
          docs: 'Psykometriske dokumenter',
          courdescomptes: 'Riksrevisjonen',
        },
        contact: {
          title: 'Kontakt',
          email: 'E-post',
          phone: 'Telefon',
          location: 'Sted',
          city: 'Paris, Frankrike',
          tagline: 'Slagord',
          slogan: 'Wolf Intel — Smart visjon, smart handling',
        },
      },
    },
    da: {
      translation: {
        welcome: 'Velkommen til min portefølje',
        home: {
          name: 'Mohamed Ikbel Said',
          title: 'Senior Front‑End Konsulent — React & Next.js',
          description:
            'Resultatorienteret ingeniør med over 9 års erfaring med at bygge høj-impact apps til bank, detailhandel, industri og offentlig sektor. Fokuseret på performance, sikkerhed og ren arkitektur.',
          projects: 'Se projekter',
          docs: 'Psykometriske dokumenter',
          courdescomptes: 'Rigsrevisionen',
        },
        contact: {
          title: 'Kontakt',
          email: 'Email',
          phone: 'Telefon',
          location: 'Lokation',
          city: 'Paris, Frankrig',
          tagline: 'Slogan',
          slogan: 'Wolf Intel — Smart vision, smart handling',
        },
      },
    },
    sv: {
      translation: {
        welcome: 'Välkommen till min portfolio',
        home: {
          name: 'Mohamed Ikbel Said',
          title: 'Senior Front‑End Konsult — React & Next.js',
          description:
            'Resultatinriktad ingenjör med över 9 års erfarenhet av att bygga högpåverkande appar inom bank, detaljhandel, industri och offentlig sektor. Fokuserad på prestanda, säkerhet och ren arkitektur.',
          projects: 'Visa projekt',
          docs: 'Psykometriska dokument',
          courdescomptes: 'Riksrevisionen',
        },
        contact: {
          title: 'Kontakt',
          email: 'E-post',
          phone: 'Telefon',
          location: 'Plats',
          city: 'Paris, Frankrike',
          tagline: 'Slogan',
          slogan: 'Wolf Intel — Smart vision, smart handling',
        },
      },
    },
  },
  lng: 'fr', // langue par défaut
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
