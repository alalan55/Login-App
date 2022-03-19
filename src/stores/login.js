import { defineStore, acceptHMRUpdate  } from 'pinia'
import { supabase } from '../services/supabase'

export const useLoginStore = defineStore({
    id: 'login',
    state: () => ({
        user: {},
        userId: null
    }),
    getters:{
        $userId(state){
            return state.userId
        },
        $user(state){
            return state.user
        }
    },
    actions: {
        async login(user) {
            console.log('usuairo no state, login', user)
            try {
                let req = await supabase.auth.signIn(user)
                console.log(req)
            } catch (error) {
                console.error(error)
            }

        },
        async register (user){
            try {
                let req = await supabase.auth.signUp(user)
                this.user = req.user
                this.userId = req.user.id
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