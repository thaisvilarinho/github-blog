export function slugify(text: string): string {
  // Substituir espaços por hífens
  let slug = text.trim().toLowerCase().replace(/\s+/g, '-')
  // Remover caracteres especiais
  slug = slug.replace(/[^a-z0-9-]/g, '')
  // Substituir múltiplos hífens por apenas um
  slug = slug.replace(/-+/g, '-')
  return slug
}
