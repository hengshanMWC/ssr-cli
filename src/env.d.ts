declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const conponent: DefineComponent<{}, {}, any>
  export default conponent
}