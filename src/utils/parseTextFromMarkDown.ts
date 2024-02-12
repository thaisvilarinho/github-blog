export function parseTextFromMarkDown(textoMarkdown: string): string {
  // Remover negrito, itálico e links
  let textoLimpo = textoMarkdown.replace(/(\*\*|__)(.*?)\1/g, '$2')
  textoLimpo = textoLimpo.replace(/(\*|_)(.*?)\1/g, '$2')
  textoLimpo = textoLimpo.replace(/\[.*?\]\((.*?)\)/g, '')

  // Remover linhas em branco e espaços extras
  textoLimpo = textoLimpo.replace(/\n\s*\n/g, '\n')
  textoLimpo = textoLimpo.replace(/\s+/g, ' ')

  return textoLimpo.trim()
}
