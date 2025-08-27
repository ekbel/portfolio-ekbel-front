export default function Docs() {
  const docs = [
    { label: 'Psychometric Report — DRIVE (AssessFirst)', href: '/docs/psychometric_drive.pdf' },
    { label: 'Cognitive Profile — (Optional)', href: '/docs/cognitive_profile.pdf' },
  ];
  return (
    <section>
      <h2 className="text-2xl font-bold">Documents</h2>
      <p className="text-neutral-600 mt-1">
        Place your PDFs in <code>public/docs</code> with the same names to enable the links.
      </p>
      <ul className="mt-4 space-y-3">
        {docs.map((d) => (
          <li key={d.href} className="card flex items-center justify-between">
            <span>{d.label}</span>
            <a href={d.href} className="btn btn-brand" target="_blank">
              Open PDF
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
