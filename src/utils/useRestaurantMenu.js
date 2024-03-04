// In this hook we have to take the restaurant ID and return the restaurant info
import { useEffect, useState } from "react"
import { MENU_API } from './constants'

const useRestrauntMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null)
    // fetchdata
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId)
        const json = await data.json()
        setResInfo(json.data)
    }

    return resInfo
}
export default useRestrauntMenu