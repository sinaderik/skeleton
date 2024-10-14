import { useEffect, useState } from "react"

const useFetch = (endPoint) => {
    const [data, setData] = useState(null)
    const [isError, setIsError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchData()
    }, [endPoint])

    const fetchData = async () => {
        setLoading(true)
        const fetchedData = await fetch(endPoint)
        const response = await fetchedData.json()
        if (!response) {
            setIsError(true)
            setLoading(false)
        }
        setData(response)
        setLoading(false)

    }

    return { data, isError, loading }
}

export default useFetch