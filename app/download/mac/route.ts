import { redirect } from 'next/navigation'

const LATEST_MAC = 'https://github.com/sean-yun-2022/viewfiles-releases/releases/download/v0.2.9/ViewFiles-0.2.9-arm64.dmg'

export function GET() {
  redirect(LATEST_MAC)
}
