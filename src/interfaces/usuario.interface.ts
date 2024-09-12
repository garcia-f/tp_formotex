export interface Usuario {
    id?: number
    name: string
    email: string
    password: string
    role: 'user' | 'admin'
    state: boolean
}