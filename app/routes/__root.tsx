import { Outlet, ScrollRestoration, createRootRoute } from '@tanstack/react-router'
import { Body, Head, Html, Meta, Scripts } from '@tanstack/start'
import { ThemeProvider } from 'next-themes'

import { Header } from '@/components/header'
import { manifest, seo } from '@/lib/seo'

/* @ts-ignore */
import styles from './globals.css?url'

export const Route = createRootRoute({
  meta: () => [
    { charSet: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ...seo({
      title: 'TRS',
      description: 'TanStack Router Starter',
    }),
  ],
  links: () => [...manifest, { rel: 'stylesheet', href: styles }],

  component: () => (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        <Meta />
      </Head>

      <Body>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <Header />

          <main className="container">
            <Outlet />
          </main>
        </ThemeProvider>

        <ScrollRestoration />
        <Scripts />
      </Body>
    </Html>
  ),
})
