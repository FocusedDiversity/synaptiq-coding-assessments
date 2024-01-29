'use client'

import '@shopify/polaris/build/esm/styles.css';

import enTranslations from '@shopify/polaris/locales/en.json';

import { AppProvider } from '@shopify/polaris';

export default function ShopifyAppProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AppProvider i18n={enTranslations}>{children}</AppProvider>
  )
}
