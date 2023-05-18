import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { Metadata } from "next";


export const metadata: Metadata = {
	title: "Web Dev Portfolio",
	description: "Web Developer",
	openGraph: {
		title: "Ayanda Ade",
		description:
			"Web Developer",
		url: "https://web-dev-portfolio-ayandaade.vercel.app",
		siteName: "Ayandaade",
		images: [
			{
				url: "https://web-dev-portfolio-ayandaade.vercel.app/og.png",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "Ayandaade",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.ico",
	},
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </>
  )
}
