import type { LayoutKey } from "#build/types/layouts"

export default defineNuxtRouteMiddleware((to, from) => {
    const party = `${to.fullPath}`.split('/')[1]
    if(['dashboard'].includes(party)){
        setPageLayout(party as LayoutKey)
    }
})
