export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      {eyebrow && (
        <span className={`eyebrow ${center ? "justify-center" : ""}`}>
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-3 heading-serif text-3xl sm:text-4xl text-balance ${
          light ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-cream/75" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
