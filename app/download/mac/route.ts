import { redirect } from 'next/navigation'

const RELEASES_API = 'https://api.github.com/repos/sean-yun-2022/viewfiles-releases/releases/latest'

export const dynamic = 'force-dynamic'

export async function GET() {
  const res = await fetch(RELEASES_API, {
    headers: { Accept: 'application/vnd.github+json' },
    cache: 'no-store',
  })
  const data = await res.json()
  const asset = data.assets?.find((a: { name: string }) => a.name.endsWith('-arm64.dmg'))
  redirect(asset?.browser_download_url ?? 'https://viewfiles.app')
}
