export default function ProjectCard({ item }) {
  return (
    <article className="card">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold text-lg">{item.title}</h3>
          <p className="text-sm text-neutral-600">
            {item.company} • {item.period}
          </p>
        </div>
        <span className="text-xs bg-neutral-100 border border-neutral-200 px-2 py-1 rounded-full">
          {item.role}
        </span>
      </div>
      <p className="mt-3 text-neutral-800">{item.summary}</p>
      {item.tags?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <span
              key={t}
              className="text-xs bg-neutral-50 border border-neutral-200 px-2 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}
      {item.links?.length ? (
        <div className="mt-4 flex flex-wrap gap-3">
          {item.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--brand)] underline text-sm"
            >
              {l.label}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}
