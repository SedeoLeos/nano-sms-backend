import type { AuthDataI } from "~/types/auth.type";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const data_string = localStorage.getItem('user');
    console.log('icic')
    if(!data_string) {
        return await navigateTo('/login')
    }
        
    const data = JSON.parse(data_string) as AuthDataI
    if(!data.token){
        return await navigateTo('/login')
    }

    
})
