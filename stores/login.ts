import { defineStore } from 'pinia'
import type { User, AuthDataI } from '~/types/auth.type';

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useLoginStore = defineStore('login', () => {
    // other options...
    const user = ref<User | null>(null);
    const token = ref<string | null>(null);
    const refresh_token = ref<string | null>(null);
    const authentificated = (data: AuthDataI) => {
        user.value = data.user;
        token.value = data.token;
        refresh_token.value = data.refresh_token;
    }

    return { user, token, refresh_token, authentificated };
}, {
    persist: {
        storage: persistedState.localStorage,
    },
})