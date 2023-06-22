import { IPData } from '@/interface';
import { create } from 'zustand';

interface IpStore {
    ipLocation: IPData | null;
    error: string | null | unknown;
    loading: boolean;
    fetchIp: (ip: string) => Promise<void>;
}

export const useStore = create<IpStore>((set) => ({
    ipLocation: null,
    error: null,
    loading: false,
    fetchIp: async (ip: string) => {
        set({ loading: true, error: null });
        try{
            const response = await fetch(`/api`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ ip })
            }); 
            const data = await response.json();
            set({ ipLocation: data, loading: false });
        }catch(error){
            set({ error, loading: false });
            console.error(error);
        }
    }
}))