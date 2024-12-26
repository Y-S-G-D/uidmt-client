import { create } from 'zustand'
import { useErrorStore } from './error-store';
import axios from 'axios';
import { loginEndPoint } from '@/lib/endPoints';
import Cookies from 'js-cookie';
interface IAuthStore {
    isAuthenticated: boolean;
    isProcessing:boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

export const useAuthStore = create<IAuthStore>((set) => ({
    isAuthenticated: false,
    isProcessing:false,
    login: async (email, password) => {
        try{
            // clear any previous errors
            useErrorStore.getState().clearError()
            set({isProcessing:true})

            const response = await axios.post(loginEndPoint, {email, password})
            console.log(response)
            if(response.status !== 200){
                throw new Error(response.data.message)
            }
            Cookies.set('access_token', response.data.data.access_token)
            set({isProcessing:false, isAuthenticated:true})

            window.location.reload()
            
            // 


        }catch(e){
            console.log(e)
            const error = e as Error;
            useErrorStore.getState().setError(error.message)
        }
    },

    logout: () => {
        Cookies.remove('access_token')
        window.location.reload()
    },

}))