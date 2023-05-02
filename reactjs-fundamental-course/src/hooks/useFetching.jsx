import { useState } from 'react'

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const fetching = async () => {
        setIsLoading(true)
        try {
            await callback()
        } catch (e) {
            setError(e.message)
        } finally {
            setIsLoading(false)
            await callback()
        }
    }
    return [fetching, isLoading, error]
}
