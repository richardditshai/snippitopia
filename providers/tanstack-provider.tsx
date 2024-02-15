'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'

export default function QueryProvider( { children } : { children: React.ReactNode }) {
    const qClient = new QueryClient();
    return (
        <QueryClientProvider client={qClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}