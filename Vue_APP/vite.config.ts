import { build, defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  // 类型： string
  // 默认： process.cwd()
  // 说明： 项目根目录（index.html 文件所在的位置）。可以是一个绝对路径，或者一个相对于该配置文件本身的相对路径。
  // root:,

  // 类型：string
  // 默认：/
  // 说明：开发或生产环境服务的公共基础路径。合法的值包括以下几种：绝对 URL 路径名，例如 /foo/ 完整的 URL，例如 https://foo.com/ 空字符串或 ./（用于开发环境）
  base:"./",

  // 类型：string
  // 默认：'development'（开发模式），'production'（生产模式）
  // 说明：在配置中指明将会把 serve 和 build 时的模式 都 覆盖掉。也可以通过命令行 --mode 选项来重写。
  // mode:,

  // 类型： Record<string, string>
  // 说明： 定义全局常量替换方式。其中每项在开发环境下会被定义在全局，而在构建时被静态替换。从 2.0.0-beta.70 版本开始，字符串值将直接作为一个表达式，所以如果定义为了一个字符串常量，它需要被显式地引用（例如：通过 JSON.stringify）。替换只会在匹配到周围是单词边界（\b）时执行。因为它是不经过任何语法分析，直接替换文本实现的，所以我们建议只对 CONSTANTS 使用 define。例如，process.env.FOO 和 __APP_VERSION__ 就非常适合。但 process 或 global 不应使用此选项。变量相关应使用 shim 或 polyfill 代替。
  // define:,

  // 类型：(Plugin | Plugin[])[]
  // 说明: 需要用到的插件数组。Falsy 虚值的插件将被忽略，插件数组将被扁平化（flatten）。
  plugins: [vue()],
  
  // 类型： string | false
  // 默认： "public"
  // 说明：作为静态资源服务的文件夹。该目录中的文件在开发期间在 / 处提供，并在构建期间复制到 outDir 的根目录，并且始终按原样提供或复制而无需进行转换。该值可以是文件系统的绝对路径，也可以是相对于项目的根目录的相对路径。将 publicDir 设定为 false 可以关闭此项功能。
  // publicDir:,

  // 类型： string
  // 默认： "node_modules/.vite"
  // 存储缓存文件的目录。此目录下会存储预打包的依赖项或 vite 生成的某些缓存文件，使用缓存可以提高性能。如需重新生成缓存文件，你可以使用 --force 命令行选项或手动删除目录。此选项的值可以是文件的绝对路径，也可以是以项目根目录为基准的相对路径。
  // cacheDir,

  // css:{
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "./src/style/index.scss"`,
  //     }
  //   }
  // },  
  
  resolve: {
    // 类型：Record<string, string> | Array<{ find: string | RegExp, replacement: string }>
    // 说明：将会被传递到 @rollup/plugin-alias 作为 entries 的选项。也可以是一个对象，或一个 { find, replacement } 的数组。当使用文件系统路径的别名时，请始终使用绝对路径。相对路径的别名值会原封不动地被使用，因此无法被正常解析。
    alias:{
      '@': path.resolve(__dirname, './src')//设置别名
    },

    // 类型： string[]
    // 如果你在你的应用程序中有相同依赖的副本（比如 monorepos），请使用此选项强制 Vite 始终将列出的依赖项解析为同一副本（从项目根目录）。
    // dedupe:,

    // 类型：string[]
    // 说明：解决程序包中 情景导出 时的其他允许条件。一个带有情景导出的包可能在它的 package.json 中有以下 exports 字段：在这里，import 和 require 被称为“情景”。情景可以嵌套，并且应该从最特定的到最不特定的指定。Vite 有一个“允许的情景”列表，并且会匹配列表中第一个情景。默认允许的情景是：import，module，browser，default 和基于当前情景为 production/development。resolve.conditions 配置项使得我们可以指定其他允许的情景。
    // conditions:,

    // 类型： string[]
    // 默认： ['module', 'jsnext:main', 'jsnext']
    // 说明： package.json 中，在解析包的入口点时尝试的字段列表。注意：这比从 exports 字段解析的情景导出优先级低：如果一个入口点从 exports 成功解析，resolve.mainFields 将被忽略。
    // mainFields:,

    // 类型： string[]
    // 默认： ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
    // 说明： 导入时想要省略的扩展名列表。注意，不 建议忽略自定义导入类型的扩展名（例如：.vue），因为它会影响 IDE 和类型支持。
    extensions:['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],

    // modules:,

    // 类型： string | (postcss.ProcessOptions & { plugins?: postcss.Plugin[] })
    //说明：内联的 PostCSS 配置（格式同 postcss.config.js），或者一个（默认基于项目根目录的）自定义的 PostCSS 配置路径。其路径搜索是通过 postcss-load-config 实现的。注意：如果提供了该内联配置，Vite 将不会搜索其他 PostCSS 配置源。
    // postcss：,

    // 类型：Record<string, object>
    // 说明： 指定传递给 CSS 预处理器的选项。
   // preprocessorOptions

    // 类型： boolean
    // 默认： true
    // 是否支持从 .json 文件中进行按名导入。
    // namedExports:,

    // 类型： boolean
    // 默认： false
    // 若设置为 true，导入的 JSON 会被转换为 export default JSON.parse("...")，这样会比转译成对象字面量性能更好，尤其是当 JSON 文件较大的时候。开启此项，则会禁用按名导入。
    // stringify:,

    // 类型： ESBuildOptions | false
    // ESBuildOptions 继承自 ESbuild 转换选项。最常见的用例是自定义 JSX：默认情况下，ESbuild 会被应用在 ts、jsx、tsx 文件。你可以通过 esbuild.include 和 esbuild.exclude 对要处理的文件类型进行配置，这两个配置的类型应为 string | RegExp | (string | RegExp)[]。此外，你还可以通过 esbuild.jsxInject 来自动为每一个被 ESbuild 转换的文件注入 JSX helper。设置为 false 来禁用 ESbuild 转换。
    
    // 类型： string | RegExp | (string | RegExp)[]
    // 相关内容： 静态资源处理指定其他文件类型作为静态资源处理，因此：当从 HTML 引用它们或直接通过 fetch 或 XHR 请求它们时，它们将被插件转换管道排除在外。从JavaScript 导入它们将返回解析后的 URL 字符串（如果你设置了 enforce: 'pre' 插件来处理不同的资产类型，这可能会被覆盖）。内建支持的资源类型列表可以在 这里 找到。
    //  assetsInclude,

    // 类型： 'info' | 'warn' | 'error' | 'silent'
    // 说明：调整控制台输出的级别，默认为 'info'。
    // logLevel,

    // 类型： boolean
    // 默认： true
    // 设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息。命令行模式下可以通过 --clearScreen false 设置。
    // clearScreen,

    // 类型： string
    // 默认： root
    // 用于加载 .env 文件的目录。可以是一个绝对路径，也可以是相对于项目根的路径。
    //  envDir,

    
  },

  // 开发配置
  server: {
    // 设置IP
    host:"localhost",
    //启动端口
    port:4000,
    proxy: {
      '/api': {
        target: 'http://v.juhe.cn/',
        changeOrigin: true,
        ws:true,
        rewrite: (path) => path.replace(/^\/api/, '') // 如果不需要api 直接把路径上的api 替换成空，这个
      }
      
    },
    
    
    // 类型： boolean
    // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口。
    //strictPort: false,

    // 类型： boolean | https.ServerOptions
    // 启用 TLS + HTTP/2。注意：当 server.proxy 选项 也被使用时，将会仅使用 TLS。这个值也可以是一个传递给 https.createServer() 的 选项对象。
    //https: true,

    // 类型： boolean | string
    // 在开发服务器启动时自动在浏览器中打开应用程序。当此值为字符串时，会被用作 URL 的路径名。若你想指定喜欢的浏览器打开服务器，你可以设置环境变量 process.env.BROWSER
    open: true,

    // 类型： boolean | CorsOptions
    // 为开发服务器配置 CORS。默认启用并允许任何源，传递一个 选项对象 来调整行为或设为 false 表示禁用。
    cors:true,

    // 类型： boolean
    // 设置为 true 强制使依赖预构建。
    //force: true,

    // 类型： boolean | { protocol?: string, host?: string, port?: number, path?: string, timeout?: number, overlay?: boolean, clientPort?: number, server?: Server }
    // 说明： 禁用或配置 HMR 连接（用于 HMR websocket 必须使用不同的 http 服务器地址的情况）。设置 server.hmr.overlay 为 false 可以禁用开发服务器错误的屏蔽。clientPort 是一个高级选项，只在客户端的情况下覆盖端口，这允许你为 websocket 提供不同的端口，而并非在客户端代码中查找。如果需要在 dev-server 情况下使用 SSL 代理，这非常有用。当使用 server.middlewareMode 和 server.https 时，你需将 server.hmr.server 设置为你 HTTPS 的服务器，这将通过你的服务器来处理 HMR 的安全连接请求。这在使用自签证书的情况下，非常有用。
    hmr:false,

    // 类型：boolean
    // 传递给 chokidar 的文件系统监听器选项。
    //watch: {},

    // 类型： 'ssr' | 'html'
    // 以中间件模式创建 Vite 服务器。（不含 HTTP 服务器）
    // 'ssr' 将禁用 Vite 自身的 HTML 服务逻辑，因此你应该手动为 index.html 提供服务。
    // 'html' 将启用 Vite 自身的 HTML 服务逻辑。
    //middlewareMode: 'html',

  },

  // 构建配置
  build: {

    
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        nested: path.resolve(__dirname, 'index.html')
      },
      // output: {
      //   entryFileNames: '[name]-[hash].[ext]',
      //   chunkFileNames: '[name]-[hash].[ext]',
      //   assetFileNames: '[ext]/[name]-[hash][ext]'
      // }
    },

  // 打包输出路径
  outDir:"dist",

  // 静态资源路径
  assetsDir:"assets",

  //   // 类型：number
  //   // 默认：4096 (4kb)
  //   // 说明：小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项。
  //   assetsInlineLimit: 4096,

  //   // 类型：boolean
  //   // 默认：true
  //   // 说明：启用/禁用 CSS 代码拆分。当启用时，在异步 chunk 中导入的 CSS 将内联到异步 chunk 本身，并在其被加载时插入。如果禁用，整个项目中的所有 CSS 将被提取到一个 CSS 文件中。
  //   cssCodeSplit: true,

  //   // 类型： boolean | 'inline' | 'hidden'`
  //   // 默认： false
  //   // 说明：构建后是否生成 source map 文件。
  //   sourcemap:false,

  //   // 类型： RollupOptions
  //   // 说明：自定义底层的 Rollup 打包配置。这与从 Rollup 配置文件导出的选项相同，并将与 Vite 的内部 Rollup 选项合并。
  //   // rollupOptions,

  //   // dynamicImportVarsOptions,

  //   // lib,

  manifest:true,

  //   // minify,

  //   // terserOptions,

  //   // cleanCssOptions,

  //   // write,

  //   // emptyOutDir,

  //   // brotliSize,

  //   // chunkSizeWarningLimit,

  //   // watch
  },

  // // 依赖优化配置
  optimizeDeps: {
    // entries,

    // 类型：string[]
    // 说明：在预构建中强制排除的依赖项。
    exclude:['sass'],

    // 类型：string[]
    // 说明: 默认情况下，不在 node_modules 中的，链接的包不会被预构建。使用此选项可强制预构建链接的包。
    // include,

    // 类型： boolean
    // 默认： false
    // 打包器有时需要重命名符号以避免冲突。 设置此项为 true 可以在函数和类上保留 name 属性。
    keepNames:false
  }
  
  
})