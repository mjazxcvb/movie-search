import { useEffect, useState } from "react"
import { IMedia } from "../interfaces/Media.interface";
import search, { searchByTitle } from "../lib/search";

const useSearchBar = (query: string) => {
    const [results, setResults] = useState<Array<IMedia>>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        async function searchQuery() {
            setIsLoading(true)
            const results = await search(query);

            if (results?.Error === 'Too many results.') {
                const titleResults = await searchByTitle(query)

                setResults([titleResults])
                setIsLoading(false)
            } else {
                setResults(results?.Search)
                setIsLoading(false)
            }
        }

        searchQuery()
    }, [query])

    return {
        results,
        isLoading
    }
}

export default useSearchBar
