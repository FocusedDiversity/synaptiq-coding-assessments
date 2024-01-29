import React, { ReactElement, PropsWithChildren } from 'react';
import { render, RenderOptions } from '@testing-library/react';

import ShopifyAppProvider from '@/providers/ShopifyAppProvider';

const Providers = ({ children }: PropsWithChildren<{}>) => {
  return (
    <ShopifyAppProvider>
      {children}
    </ShopifyAppProvider>
  )
}

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }