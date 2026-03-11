export function safeJsonParse(value, fallback = null) {
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

export function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export function toArray(value) {
  if (Array.isArray(value)) return value;
  if (value == null) return [];
  return [value];
}
