import { redirect } from 'next/navigation'

const LATEST_WINDOWS = 'https://github.com/sean-yun-2022/viewfiles/releases/download/v0.2.2/ViewFiles.Setup.0.2.2.exe'

export function GET() {
  redirect(LATEST_WINDOWS)
}
