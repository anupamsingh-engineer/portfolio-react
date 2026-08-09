/**
 * Helpers for turning a Google Drive "share" link into the embeddable
 * thumbnail/preview URLs Drive exposes for publicly-shared files.
 */
export function driveFileId(url: string): string | null {
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/)
  return match ? match[1] : null
}

export function driveThumbnail(url: string, width = 800): string | null {
  const id = driveFileId(url)
  return id ? `https://drive.google.com/thumbnail?id=${id}&sz=w${width}` : null
}

export function drivePreview(url: string): string {
  const id = driveFileId(url)
  return id ? `https://drive.google.com/file/d/${id}/preview` : url
}
