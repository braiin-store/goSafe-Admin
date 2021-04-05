import { useState, useEffect } from 'react'

export const useModal = () => {
    const [open, setOpen] = useState(false)

    const openModal = () => setOpen(true)
    const closeModal = () => setOpen(false)

    return {
        open, openModal, closeModal
    }
}

export const useFetch = (url) => {
    const [rows, setRows] = useState([])
    const [reload, setReload] = useState(true)

    useEffect(() => {
        if (reload) {
            setReload(false)
            fetch(url)
                .then(async res => setRows(await res.json()))
                .catch(error => console.error(error))
        }
    }, [url, reload])

    return {
        rows,
        reloadPage: () => setReload(true)
    }
}