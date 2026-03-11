export function flattenSkills(skillsObject = {}) {
  return Object.values(skillsObject).flat();
}

export function calculateKeywordMatches(profileSkills = [], requiredSkills = []) {
  const normalizedProfile = profileSkills.map((s) => s.toLowerCase());
  const normalizedRequired = requiredSkills.map((s) => s.toLowerCase());

  return normalizedRequired.filter((skill) =>
    normalizedProfile.includes(skill)
  );
}
