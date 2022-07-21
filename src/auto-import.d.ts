// Generated by 'unplugin-auto-import'
export {}
declare global {
  const EffectScope: typeof import('vue')['EffectScope']
  const acceptHMRUpdate: typeof import('pinia')['acceptHMRUpdate']
  const addCopyrightInfo: typeof import('./utils/addCopyrightInfo')['addCopyrightInfo']
  const addDomain: typeof import('./utils/route/urlToExternalLink')['addDomain']
  const addWaterMark: typeof import('./utils/addWaterMark')['addWaterMark']
  const articleArchive: typeof import('./api/articles')['articleArchive']
  const articleCreate: typeof import('./api/articles')['articleCreate']
  const articleDelete: typeof import('./api/articles')['articleDelete']
  const articleIndex: typeof import('./api/articles')['articleIndex']
  const articleShow: typeof import('./api/articles')['articleShow']
  const articleUpdate: typeof import('./api/articles')['articleUpdate']
  const baseURL: typeof import('./api/config')['baseURL']
  const catalogTrack: typeof import('./utils/generateCatalog')['catalogTrack']
  const computed: typeof import('vue')['computed']
  const createApp: typeof import('vue')['createApp']
  const createPinia: typeof import('pinia')['createPinia']
  const customRef: typeof import('vue')['customRef']
  const defineAsyncComponent: typeof import('vue')['defineAsyncComponent']
  const defineComponent: typeof import('vue')['defineComponent']
  const defineStore: typeof import('pinia')['defineStore']
  const effectScope: typeof import('vue')['effectScope']
  const generateCatalog: typeof import('./utils/generateCatalog')['generateCatalog']
  const getActivePinia: typeof import('pinia')['getActivePinia']
  const getCurrentInstance: typeof import('vue')['getCurrentInstance']
  const getCurrentScope: typeof import('vue')['getCurrentScope']
  const getPiniaState: typeof import('./utils/common/cache')['getPiniaState']
  const getRandomColor: typeof import('./utils/common/getRandomColor')['getRandomColor']
  const h: typeof import('vue')['h']
  const http: typeof import('./utils/http')['default']
  const inject: typeof import('vue')['inject']
  const isProxy: typeof import('vue')['isProxy']
  const isReactive: typeof import('vue')['isReactive']
  const isReadonly: typeof import('vue')['isReadonly']
  const isRef: typeof import('vue')['isRef']
  const lazyRequest: typeof import('./utils/http')['lazyRequest']
  const mapActions: typeof import('pinia')['mapActions']
  const mapGetters: typeof import('pinia')['mapGetters']
  const mapState: typeof import('pinia')['mapState']
  const mapStores: typeof import('pinia')['mapStores']
  const mapWritableState: typeof import('pinia')['mapWritableState']
  const markRaw: typeof import('vue')['markRaw']
  const nextTick: typeof import('vue')['nextTick']
  const onActivated: typeof import('vue')['onActivated']
  const onBeforeMount: typeof import('vue')['onBeforeMount']
  const onBeforeUnmount: typeof import('vue')['onBeforeUnmount']
  const onBeforeUpdate: typeof import('vue')['onBeforeUpdate']
  const onDeactivated: typeof import('vue')['onDeactivated']
  const onErrorCaptured: typeof import('vue')['onErrorCaptured']
  const onMounted: typeof import('vue')['onMounted']
  const onRenderTracked: typeof import('vue')['onRenderTracked']
  const onRenderTriggered: typeof import('vue')['onRenderTriggered']
  const onScopeDispose: typeof import('vue')['onScopeDispose']
  const onServerPrefetch: typeof import('vue')['onServerPrefetch']
  const onUnmounted: typeof import('vue')['onUnmounted']
  const onUpdated: typeof import('vue')['onUpdated']
  const provide: typeof import('vue')['provide']
  const reactive: typeof import('vue')['reactive']
  const readonly: typeof import('vue')['readonly']
  const ref: typeof import('vue')['ref']
  const resolveComponent: typeof import('vue')['resolveComponent']
  const routeNameToPage: typeof import('./utils/route/routeNameToPage')['routeNameToPage']
  const routeParamsChange: typeof import('./utils/route/routeParamsChange')['routeParamsChange']
  const routePathToPage: typeof import('./utils/route/routePathToPage')['routePathToPage']
  const scale: typeof import('./utils/scale')['scale']
  const setActivePinia: typeof import('pinia')['setActivePinia']
  const setMapStoreSuffix: typeof import('pinia')['setMapStoreSuffix']
  const setPiniaState: typeof import('./utils/common/cache')['setPiniaState']
  const shallowReactive: typeof import('vue')['shallowReactive']
  const shallowReadonly: typeof import('vue')['shallowReadonly']
  const shallowRef: typeof import('vue')['shallowRef']
  const storeToRefs: typeof import('pinia')['storeToRefs']
  const toRaw: typeof import('vue')['toRaw']
  const toRef: typeof import('vue')['toRef']
  const toRefs: typeof import('vue')['toRefs']
  const triggerRef: typeof import('vue')['triggerRef']
  const unref: typeof import('vue')['unref']
  const uploadImage: typeof import('./utils/uploadImage')['uploadImage']
  const uploadToken: typeof import('./api/image')['uploadToken']
  const urlToExternalLink: typeof import('./utils/route/urlToExternalLink')['urlToExternalLink']
  const useAppConfig: typeof import('./composables/core/useAppConfig')['useAppConfig']
  const useAttrs: typeof import('vue')['useAttrs']
  const useCssModule: typeof import('vue')['useCssModule']
  const useCssVars: typeof import('vue')['useCssVars']
  const useCurrRouteOnHideList: typeof import('./composables/utils/useCurrRouteOnHideList')['useCurrRouteOnHideList']
  const useDebounceFn: typeof import('./utils/useDebounceFn')['useDebounceFn']
  const useEditor: typeof import('./composables/useEditor')['useEditor']
  const useLinkedRouteParam: typeof import('./composables/utils/useLinkedRouteParam')['useLinkedRouteParam']
  const useLoading: typeof import('./composables/utils/useLoading')['useLoading']
  const useLocalStorage: typeof import('./composables/useLocalStorage')['useLocalStorage']
  const useMessage: typeof import('./composables/core/useMessage')['useMessage']
  const useNotice: typeof import('./composables/useNotice')['useNotice']
  const usePlugin: typeof import('./utils/common/usePlugin')['usePlugin']
  const useRoute: typeof import('vue-router')['useRoute']
  const useRouter: typeof import('vue-router')['useRouter']
  const useShortcut: typeof import('./composables/utils/useShortcut')['useShortcut']
  const useSlots: typeof import('vue')['useSlots']
  const useState: typeof import('./composables/core/useState')['useState']
  const useWindowEvent: typeof import('./composables/event/useWindowEvent')['useWindowEvent']
  const useWindowScrollStatus: typeof import('./composables/event/useWindowScrollStatus')['useWindowScrollStatus']
  const userLogin: typeof import('./api/users')['userLogin']
  const userRegister: typeof import('./api/users')['userRegister']
  const watch: typeof import('vue')['watch']
  const watchEffect: typeof import('vue')['watchEffect']
  const watchPostEffect: typeof import('vue')['watchPostEffect']
  const watchSyncEffect: typeof import('vue')['watchSyncEffect']
  const windowScrollTo: typeof import('./utils/windowScrollTo')['windowScrollTo']
}
// for vue template auto import
import { UnwrapRef } from 'vue'
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    readonly EffectScope: UnwrapRef<typeof import('vue')['EffectScope']>
    readonly acceptHMRUpdate: UnwrapRef<typeof import('pinia')['acceptHMRUpdate']>
    readonly addCopyrightInfo: UnwrapRef<typeof import('./utils/addCopyrightInfo')['addCopyrightInfo']>
    readonly addDomain: UnwrapRef<typeof import('./utils/route/urlToExternalLink')['addDomain']>
    readonly addWaterMark: UnwrapRef<typeof import('./utils/addWaterMark')['addWaterMark']>
    readonly articleArchive: UnwrapRef<typeof import('./api/articles')['articleArchive']>
    readonly articleCreate: UnwrapRef<typeof import('./api/articles')['articleCreate']>
    readonly articleDelete: UnwrapRef<typeof import('./api/articles')['articleDelete']>
    readonly articleIndex: UnwrapRef<typeof import('./api/articles')['articleIndex']>
    readonly articleShow: UnwrapRef<typeof import('./api/articles')['articleShow']>
    readonly articleUpdate: UnwrapRef<typeof import('./api/articles')['articleUpdate']>
    readonly baseURL: UnwrapRef<typeof import('./api/config')['baseURL']>
    readonly catalogTrack: UnwrapRef<typeof import('./utils/generateCatalog')['catalogTrack']>
    readonly computed: UnwrapRef<typeof import('vue')['computed']>
    readonly createApp: UnwrapRef<typeof import('vue')['createApp']>
    readonly createPinia: UnwrapRef<typeof import('pinia')['createPinia']>
    readonly customRef: UnwrapRef<typeof import('vue')['customRef']>
    readonly defineAsyncComponent: UnwrapRef<typeof import('vue')['defineAsyncComponent']>
    readonly defineComponent: UnwrapRef<typeof import('vue')['defineComponent']>
    readonly defineStore: UnwrapRef<typeof import('pinia')['defineStore']>
    readonly effectScope: UnwrapRef<typeof import('vue')['effectScope']>
    readonly generateCatalog: UnwrapRef<typeof import('./utils/generateCatalog')['generateCatalog']>
    readonly getActivePinia: UnwrapRef<typeof import('pinia')['getActivePinia']>
    readonly getCurrentInstance: UnwrapRef<typeof import('vue')['getCurrentInstance']>
    readonly getCurrentScope: UnwrapRef<typeof import('vue')['getCurrentScope']>
    readonly getPiniaState: UnwrapRef<typeof import('./utils/common/cache')['getPiniaState']>
    readonly getRandomColor: UnwrapRef<typeof import('./utils/common/getRandomColor')['getRandomColor']>
    readonly h: UnwrapRef<typeof import('vue')['h']>
    readonly http: UnwrapRef<typeof import('./utils/http')['default']>
    readonly inject: UnwrapRef<typeof import('vue')['inject']>
    readonly isProxy: UnwrapRef<typeof import('vue')['isProxy']>
    readonly isReactive: UnwrapRef<typeof import('vue')['isReactive']>
    readonly isReadonly: UnwrapRef<typeof import('vue')['isReadonly']>
    readonly isRef: UnwrapRef<typeof import('vue')['isRef']>
    readonly lazyRequest: UnwrapRef<typeof import('./utils/http')['lazyRequest']>
    readonly mapActions: UnwrapRef<typeof import('pinia')['mapActions']>
    readonly mapGetters: UnwrapRef<typeof import('pinia')['mapGetters']>
    readonly mapState: UnwrapRef<typeof import('pinia')['mapState']>
    readonly mapStores: UnwrapRef<typeof import('pinia')['mapStores']>
    readonly mapWritableState: UnwrapRef<typeof import('pinia')['mapWritableState']>
    readonly markRaw: UnwrapRef<typeof import('vue')['markRaw']>
    readonly nextTick: UnwrapRef<typeof import('vue')['nextTick']>
    readonly onActivated: UnwrapRef<typeof import('vue')['onActivated']>
    readonly onBeforeMount: UnwrapRef<typeof import('vue')['onBeforeMount']>
    readonly onBeforeUnmount: UnwrapRef<typeof import('vue')['onBeforeUnmount']>
    readonly onBeforeUpdate: UnwrapRef<typeof import('vue')['onBeforeUpdate']>
    readonly onDeactivated: UnwrapRef<typeof import('vue')['onDeactivated']>
    readonly onErrorCaptured: UnwrapRef<typeof import('vue')['onErrorCaptured']>
    readonly onMounted: UnwrapRef<typeof import('vue')['onMounted']>
    readonly onRenderTracked: UnwrapRef<typeof import('vue')['onRenderTracked']>
    readonly onRenderTriggered: UnwrapRef<typeof import('vue')['onRenderTriggered']>
    readonly onScopeDispose: UnwrapRef<typeof import('vue')['onScopeDispose']>
    readonly onServerPrefetch: UnwrapRef<typeof import('vue')['onServerPrefetch']>
    readonly onUnmounted: UnwrapRef<typeof import('vue')['onUnmounted']>
    readonly onUpdated: UnwrapRef<typeof import('vue')['onUpdated']>
    readonly provide: UnwrapRef<typeof import('vue')['provide']>
    readonly reactive: UnwrapRef<typeof import('vue')['reactive']>
    readonly readonly: UnwrapRef<typeof import('vue')['readonly']>
    readonly ref: UnwrapRef<typeof import('vue')['ref']>
    readonly resolveComponent: UnwrapRef<typeof import('vue')['resolveComponent']>
    readonly routeNameToPage: UnwrapRef<typeof import('./utils/route/routeNameToPage')['routeNameToPage']>
    readonly routeParamsChange: UnwrapRef<typeof import('./utils/route/routeParamsChange')['routeParamsChange']>
    readonly routePathToPage: UnwrapRef<typeof import('./utils/route/routePathToPage')['routePathToPage']>
    readonly scale: UnwrapRef<typeof import('./utils/scale')['scale']>
    readonly setActivePinia: UnwrapRef<typeof import('pinia')['setActivePinia']>
    readonly setMapStoreSuffix: UnwrapRef<typeof import('pinia')['setMapStoreSuffix']>
    readonly setPiniaState: UnwrapRef<typeof import('./utils/common/cache')['setPiniaState']>
    readonly shallowReactive: UnwrapRef<typeof import('vue')['shallowReactive']>
    readonly shallowReadonly: UnwrapRef<typeof import('vue')['shallowReadonly']>
    readonly shallowRef: UnwrapRef<typeof import('vue')['shallowRef']>
    readonly storeToRefs: UnwrapRef<typeof import('pinia')['storeToRefs']>
    readonly toRaw: UnwrapRef<typeof import('vue')['toRaw']>
    readonly toRef: UnwrapRef<typeof import('vue')['toRef']>
    readonly toRefs: UnwrapRef<typeof import('vue')['toRefs']>
    readonly triggerRef: UnwrapRef<typeof import('vue')['triggerRef']>
    readonly unref: UnwrapRef<typeof import('vue')['unref']>
    readonly uploadImage: UnwrapRef<typeof import('./utils/uploadImage')['uploadImage']>
    readonly uploadToken: UnwrapRef<typeof import('./api/image')['uploadToken']>
    readonly urlToExternalLink: UnwrapRef<typeof import('./utils/route/urlToExternalLink')['urlToExternalLink']>
    readonly useAppConfig: UnwrapRef<typeof import('./composables/core/useAppConfig')['useAppConfig']>
    readonly useAttrs: UnwrapRef<typeof import('vue')['useAttrs']>
    readonly useCssModule: UnwrapRef<typeof import('vue')['useCssModule']>
    readonly useCssVars: UnwrapRef<typeof import('vue')['useCssVars']>
    readonly useCurrRouteOnHideList: UnwrapRef<typeof import('./composables/utils/useCurrRouteOnHideList')['useCurrRouteOnHideList']>
    readonly useDebounceFn: UnwrapRef<typeof import('./utils/useDebounceFn')['useDebounceFn']>
    readonly useEditor: UnwrapRef<typeof import('./composables/useEditor')['useEditor']>
    readonly useLinkedRouteParam: UnwrapRef<typeof import('./composables/utils/useLinkedRouteParam')['useLinkedRouteParam']>
    readonly useLoading: UnwrapRef<typeof import('./composables/utils/useLoading')['useLoading']>
    readonly useLocalStorage: UnwrapRef<typeof import('./composables/useLocalStorage')['useLocalStorage']>
    readonly useMessage: UnwrapRef<typeof import('./composables/core/useMessage')['useMessage']>
    readonly useNotice: UnwrapRef<typeof import('./composables/useNotice')['useNotice']>
    readonly usePlugin: UnwrapRef<typeof import('./utils/common/usePlugin')['usePlugin']>
    readonly useRoute: UnwrapRef<typeof import('vue-router')['useRoute']>
    readonly useRouter: UnwrapRef<typeof import('vue-router')['useRouter']>
    readonly useShortcut: UnwrapRef<typeof import('./composables/utils/useShortcut')['useShortcut']>
    readonly useSlots: UnwrapRef<typeof import('vue')['useSlots']>
    readonly useState: UnwrapRef<typeof import('./composables/core/useState')['useState']>
    readonly useWindowEvent: UnwrapRef<typeof import('./composables/event/useWindowEvent')['useWindowEvent']>
    readonly useWindowScrollStatus: UnwrapRef<typeof import('./composables/event/useWindowScrollStatus')['useWindowScrollStatus']>
    readonly userLogin: UnwrapRef<typeof import('./api/users')['userLogin']>
    readonly userRegister: UnwrapRef<typeof import('./api/users')['userRegister']>
    readonly watch: UnwrapRef<typeof import('vue')['watch']>
    readonly watchEffect: UnwrapRef<typeof import('vue')['watchEffect']>
    readonly watchPostEffect: UnwrapRef<typeof import('vue')['watchPostEffect']>
    readonly watchSyncEffect: UnwrapRef<typeof import('vue')['watchSyncEffect']>
    readonly windowScrollTo: UnwrapRef<typeof import('./utils/windowScrollTo')['windowScrollTo']>
  }
}
