import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate' // 数据持久化
import storage, { initChromeStorageCache } from '@/lib/storage'

const CrxCacheKey = 'crx-cache'
await initChromeStorageCache(CrxCacheKey)

const store = createPinia()

store.use(
  createPersistedState({
    key: () => CrxCacheKey,

    storage: {
      getItem: storage.getItem,
      setItem: storage.setItem,
    },

    beforeHydrate: async () => {

    },
  }),
)

export default store

// 模块统一导出

export * from './app'
