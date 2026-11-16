export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-muted)' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
