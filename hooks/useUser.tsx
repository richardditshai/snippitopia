'use client'

import { createBClient } from "@/utils/supabase/client"
import { useQuery } from "@tanstack/react-query"

export default function useUser() {
    
    return useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const supabase = createBClient();
            const { data } = await supabase.auth.getSession();
            if (data.session?.user) {
                // to fetch from public.profile schema later
                return data.session;
            }

            return null
        }
    })
}