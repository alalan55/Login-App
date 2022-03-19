import { defineStore, acceptHMRUpdate  } from 'pinia'
import { supabase } from '../services/supabase'

export const useLoginStore = defineStore({
    id: 'login',
    state: () => ({
        user: {},
        userId: null,
        token: null,
        expires_at: null,
        expires_in: null
    }),
    getters:{
        $userId(state){
            return state.userId
        },
        $user(state){
            return state.user || localStorage.getItem('user')
        },
        $token(state){
            return state.token || localStorage.getItem('token')
        }
    },
    actions: {
        async login(user) {
            try {
                let req = await supabase.auth.signIn(user)
                this.user = req.user,
                this.token = req.data.access_token
                this.expires_at = req.data.expires_at
                this.expires_in = req.data.expires_in
                
                localStorage.setItem('user', this.user)
                localStorage.setItem('token', this.token)

                return true
            } catch (error) {
                
                console.error(error)
                return false
            }

        },
        async register (user){
            try {
                let req = await supabase.auth.signUp(user)
                return req.user
            } catch (error) {
                console.error(error)
            }
        }
    }
})

if(import.meta.hot){
    import.meta.hot.accept(acceptHMRUpdate(useLoginStore, import.meta.hot))
}