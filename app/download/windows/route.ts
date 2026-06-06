import { redirect } from 'next/navigation'

const LATEST_WINDOWS = 'https://github.com/sean-yun-2022/viewfiles-releases/releases/download/v0.2.7/ViewFiles.Setup.0.2.6.exe'

export function GET() {
  redirect(LATEST_WINDOWS)
}
