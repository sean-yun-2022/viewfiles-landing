import { redirect } from 'next/navigation'

const LATEST_WINDOWS = 'https://github.com/sean-yun-2022/viewfiles-releases/releases/download/v0.2.4/ViewFiles.Setup.0.2.4.exe'

export function GET() {
  redirect(LATEST_WINDOWS)
}
