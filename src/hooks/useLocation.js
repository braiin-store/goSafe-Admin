import { useCallback, useState } from 'react'

export const useLocation = (stopReload) => {
    let location = localStorage.getItem('location')

    if (!location) {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
            location = JSON.stringify({ lat: coords.latitude, lng: coords.longitude })
            localStorage.setItem('location', location)
            stopReload()
        }, err => {
            console.log(err)
            location = JSON.stringify({ lat: -17.7829, lng: -63.1810 })
            localStorage.setItem('location', location)
        })
    }

    return JSON.parse(location)
}

export const useMarker = (marker = false) => {
    const [on, setOn] = useState(marker)

    const handleMarkerClick = useCallback(() => setOn(!on), [on])

    return {
        on,
        handleMarkerClick
    }
}