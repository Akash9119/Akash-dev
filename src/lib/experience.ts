// Vardaam start month. Everything showing years/months of experience derives from this.
export const CAREER_START = new Date(2024, 1, 1); // Feb 2024

export function experienceSince(start: Date, now = new Date()) {
  const total = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  return { years: Math.floor(total / 12), months: total % 12 };
}

export function experienceLabel(now = new Date()) {
  const { years, months } = experienceSince(CAREER_START, now);
  return months ? `${years}y ${months}m` : `${years}y`;
}
