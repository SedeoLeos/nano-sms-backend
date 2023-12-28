export interface AuthI {
    success: boolean
    message: string
    data: AuthDataI
  }
  
  export interface AuthDataI {
    user: User
    token: string
    refresh_token: string
  }
  
  export interface User {
    id: string
    username: string
    email: string
    phone: any
    email_verified_at: string
    phone_verified_at: any
    created_at: string
    updated_at: string
  }