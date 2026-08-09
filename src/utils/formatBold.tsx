/**
 * Splits `**bold**` markers out of a content string and renders them as
 * <strong> spans, so key phrases in resume.ts can be emphasized without
 * hardcoding markup into the data file.
 */
export function formatBold(text: string, boldClassName = 'font-semibold text-mist-50') {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={i} className={boldClassName}>
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    ),
  )
}
