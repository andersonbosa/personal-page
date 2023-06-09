/// <reference types="vite/client" />
/// <reference types="vite-svg-loader" />

// Declaration of Vue component automatically introduced
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

// State the component introduced by icons
declare module '~icons/*' {
  import { FunctionalComponent, SVGAttributes } from 'vue'
  const component: FunctionalComponent<SVGAttributes>
  export default component
}

// Declaration MD file
declare module '*.md' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// State VITE environment variables
declare interface ImportMetaEnv {
  readonly VITE_BASE: string
  readonly VITE_API_BASEURL: string
  readonly VITE_APP_TITLE: string
  // More environment variables ...
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare interface Window {
  // extend the window
}
