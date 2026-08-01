export const siteUrl = "https://adetuyi.com";

export function absoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${siteUrl}${path}`;
}

export function toSeoDescription(text: string, maxLength = 160) {
  const normalized = text.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

  if (normalized.length <= maxLength) {
    return normalized;
  }

  const preview = normalized.slice(0, maxLength);
  const sentenceEndings = [...preview.matchAll(/[.!?](?=\s|$)/g)];
  const finalSentenceEnding = sentenceEndings.at(-1)?.index;

  if (finalSentenceEnding && finalSentenceEnding >= maxLength * 0.5) {
    return preview.slice(0, finalSentenceEnding + 1);
  }

  const shortened = normalized.slice(0, maxLength - 1);
  const lastSpace = shortened.lastIndexOf(" ");
  const cleanEnding = lastSpace > maxLength * 0.75
    ? shortened.slice(0, lastSpace)
    : shortened;

  return `${cleanEnding.replace(/[\s,;:.!?-]+$/g, "")}…`;
}
