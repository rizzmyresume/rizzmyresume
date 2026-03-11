export function requireField(obj, key, message) {
  if (!obj || obj[key] == null || obj[key] === "") {
    throw new Error(message || `Missing required field: ${key}`);
  }
}

export function ensureArrayOfStrings(value, fieldName) {
  if (!Array.isArray(value)) {
    throw new Error(`${fieldName} must be an array`);
  }
  if (!value.every((v) => typeof v === "string")) {
    throw new Error(`${fieldName} must contain only strings`);
  }
}
