/* ... */
import { ConfigEnv } from 'vite'
/* ... */
import vue from '@vitejs/plugin-vue'
/* ... */
import svgLoader from 'vite-svg-loader'
/* ... */
import { VueUseComponentsResolver, ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
/* ... */
import AutoImport from 'unplugin-auto-import/vite'
/* ... */
// import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
/* ... */
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
/*  */

export default (env: ConfigEnv) => {
  return [

    /* https://vuejs.org/ */
    vue({
      include: [
        /\.vue$/,
        /* /\.md$/, TODO Markdown -> Vue : to use on articles */
      ],
    }),

    /* https://www.npmjs.com/package/vite-svg-loader */
    svgLoader(),

    /* https://github.com/antfu/unplugin-auto-import */
    AutoImport({
      dts: './src/auto-imports.d.ts',
      imports: [
        'vue',
        'pinia',
        'vue-router',
        '@vueuse/core',
      ],
      // Generate corresponding .eslintrc-auto-import.json file.
      // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      resolvers: [
        ElementPlusResolver(),
        // VueUseComponentsResolver(),
        // IconsResolver(),
      ]
      ,
    }),

    /* https://github.com/antfu/unplugin-vue-components */
    Components({
      dts: './src/components.d.ts',
      extensions: [
        'vue',
      ],
      include: [
        /\.vue$/,
        /\.vue\?vue/,
      ],
      // imports Specify the location of the component, the default is src/components; if necessary, you can also add the view directory
      dirs: ['src/components/'],
      resolvers: [
        ElementPlusResolver(),
        VueUseComponentsResolver(),
        IconsResolver({
          prefix: 'icon'
        }),
      ],
    }),

    /* https://github.com/antfu/unplugin-icons */
    Icons({
      compiler: 'vue3',
      autoInstall: true,
    }),

    /* TODO https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n */
    // VueI18nPlugin({}),

    /* TODO https://www.npmjs.com/package/vite-plugin-markdown */

    /* ... */
  ]
}
