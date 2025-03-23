const URL = 'https://app.ftoyd.com/fronttemp-service/fronttemp'

export const getTimeout = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export const fetchData = async () => {
    try {
        await getTimeout(2000)
        const response = await fetch(URL)
        const data = await response.json()
        if (data.ok !== true) {
            throw new Error('Статус не "ок"')
        }
        return data.data.matches; 
    } catch (error) {
        console.error("Ошибка при загрузке данных:", error)
        throw error
    }
}