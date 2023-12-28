import type { AuthI } from "~/types/auth.type";

export type LoginType = {
  // username:string;
  email: string;
  password: string;
}
export const useAuth = () => {
  
  
  const Login = async (input: LoginType) => {
    
      const { data, pending, error, execute, refresh } = await useBaseFecth<AuthI>('auth/login', {
        method: 'post',
        body: { ...input, device_name: 'nest_app' }
      })
      return { data, pending, error, execute, refresh };

    
  }
  return { Login }
}
