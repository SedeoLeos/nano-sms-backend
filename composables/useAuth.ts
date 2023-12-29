import type { AuthI } from "~/types/auth.type";

export type PayloadAuthType = {
  email: string;
  password: string;
  username?:string
}
export const useAuth = () => {


  const Login = async (input: PayloadAuthType) => {
    // await GetCookie()
    const xsrfToken = useCookie('XSRF-TOKEN')
    console.log('XSRF-TOKEN ', xsrfToken.value)
    const response = await useBaseFecth<AuthI>('api/auth/login', {
      // credentials: 'include',
      method: 'post',
      // watch: true,
      headers: {
        'X-XSRF-TOKEN': xsrfToken.value,
      },
      body: { ...input, device_name: 'nest_apps' }
    })
    useRequestHeaders(['cookie'])
    return response;


  }
  const Register = async (input: PayloadAuthType) => {
    // await GetCookie()
    const xsrfToken = useCookie('XSRF-TOKEN')
    console.log('XSRF-TOKEN ', xsrfToken.value)
    const response = await useBaseFecth<AuthI>('api/auth/register', {
      // credentials: 'include',
      // watch: true,
      method: 'post',
      headers: {
        'X-XSRF-TOKEN': xsrfToken.value,
      },
      body: { ...input, device_name: 'nest_apps' }
    })
    useRequestHeaders(['cookie'])
    return response;


  }
  const GetCookie = async () => {
    return await useBaseFecth<AuthI>('sanctum/csrf-cookie', { credentials: 'include' })

  }
  return { Login, Register }
}
