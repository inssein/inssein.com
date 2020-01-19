// reformatted from Dan Abramov's blog, this is awesome!
export function formatReadingTime(minutes: number) {
  const cups = Math.round(minutes / 5);
  const bowls = 0;

  if (cups > 5) {
    return `${new Array(Math.round(cups / Math.E))
      .fill("🍱")
      .join("")} ${minutes} min read`;
  }

  return `${new Array(cups || 1).fill("☕️").join("")} ${minutes} min read`;
}
