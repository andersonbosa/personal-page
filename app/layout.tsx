// import "@/styles/globals.css"
// import type { Metadata } from "next"

// export const metadata: Metadata = {
//   title: "Anderson Bosa | Software Engineer - Penetration Tester - Bachelor in Information Systems",
//   description: "Anderson has been an active software engineer since 2019. Enthusiast at Leadership, Ethical Hacking and Red Teams Operations, Anderson seeks excellence in his career by focusing on interdisciplinary learning.",
// }
import appConfiguration from '@/config'
import { GoogleAnalytics } from '@next/third-parties/google'

interface RootLayoutProps {
  children: React.ReactNode
}

const googleAnalyticsID = appConfiguration.integrations?.google?.analytics?.id || ''

export default function RootLayout({ children, }: Readonly<RootLayoutProps>) {
  return <>
    {children}
    <GoogleAnalytics gaId={googleAnalyticsID} />
  </>
}
