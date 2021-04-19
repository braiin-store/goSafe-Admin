import { useState, useEffect, createContext, useCallback } from 'react'

import database from '../config/firebase'

export const streamContext = createContext()

export const useStreams = () => {
    const [alertShow, set_alertShow] = useState(false)
    const [clientShow, set_clientShow] = useState(false)
    const [driverShow, set_driverShow] = useState(false)

    const change_alertShow = useCallback(() => set_alertShow(!alertShow), [alertShow])
    const change_clientShow = useCallback(() => set_clientShow(!clientShow), [clientShow])
    const change_driverShow = useCallback(() => set_driverShow(!driverShow), [driverShow])

    return {
        alertShow, clientShow, driverShow,
        change_alertShow, change_clientShow, change_driverShow
    }
}

export const useFetch = (path, show) => {
    const [rows, setRows] = useState({})

    useEffect(() => {
        if (show) {
            database
                .ref(path)
                .on('value',
                    snap => setRows(snap.val()),
                    err => console.error(err))
        } else {
            setRows({})
        }
    }, [path, show])

    return rows
}