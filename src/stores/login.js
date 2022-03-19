import { defineStore, acceptHMRUpdate  } from 'pinia'
import { supabase } from '../services/supabase'

export const useLoginStore = defineStore({
    id: 'login',
    state: () => ({
        uer: {}
    }),
    actions: {
        async login(user) {
            console.log('usuairo no state', user)
            try {
                let req = await supabase.auth.signIn(user)
                console.log(req)
            } catch (error) {
                console.error(error)
            }

        }
    }
})

if(import.meta.hot){
    import.meta.hot.accept(acceptHMRUpdate(useLoginStore, import.meta.hot))
}