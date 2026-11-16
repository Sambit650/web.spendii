// Prefixes public-folder URLs with the GitHub Pages base path (empty locally).
export function asset(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
