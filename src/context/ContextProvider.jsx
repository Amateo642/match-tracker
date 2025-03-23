import React, { useState } from "react"
import { fetchData } from "../api"
import { AppContext } from "./AppContext"

export const ContextProvider = ({ children }) => {
    const [matches, setMatches] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const getMatches = async () => {
        try {
            setError(false)
            setLoading(true)
            const data = await fetchData()
            setMatches(data)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }

    }

    return (
        <AppContext.Provider value={{ matches, setMatches, loading, setLoading, error, setError, getMatches}}>
            {children}
        </AppContext.Provider>
    )
}
