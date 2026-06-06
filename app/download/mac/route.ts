import { redirect } from 'next/navigation'

const LATEST_MAC = 'https://github.com/sean-yun-2022/viewfiles/releases/download/v0.2.2/ViewFiles-0.2.2-arm64.dmg'

export function GET() {
  redirect(LATEST_MAC)
}
