export function getRelativeTime(mongoDate) {
  const now = new Date();
  const date = new Date(mongoDate);
  const days = Math.floor((now - date) / (1000 * 60 * 60 * 24));
  
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days <= 7) return `${days} days ago`;
  if (days <= 30) return `${Math.floor(days/7)} weeks ago`;
  return `${Math.floor(days/30)} months ago`;
};