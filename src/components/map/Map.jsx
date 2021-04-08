import 'leaflet/dist/leaflet.css'

import { CircularProgress } from '@material-ui/core'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import './map.css'
import { Alert } from './markers'
import { memo, useState } from 'react'
import { useLocation } from '../../hooks/useLocation'

const MapView = ({ alerts, drivers, clients }) => {
    const [reload, setReload] = useState(true)
    const location = useLocation(() => setReload(false))

    console.log("alerts", alerts);
    console.log("drivers", drivers);
    console.log("clients", clients);

    return (
        reload && !location
            ? <CircularProgress color="secondary" />
            :
            <MapContainer
                zoom={13.5}
                className="map"
                scrollWheelZoom={false}
                center={location}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributor'
                    url="https://api.mapbox.com/styles/v1/cartory/ckn6d7bgr07qk17pnir81rn9r/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2FydG9yeSIsImEiOiJja242ZHVkbWswZDVoMm5wc3F1Znh5ZXpzIn0.mIs9eqzfLKJKW2TY9sxwaQ"
                />
                <Marker riseOnHover icon={Alert} position={location}>
                    <Popup autoClose>
                        A pretty CSS3 popup. <br />
                    Easily customizable.
                    <button>Im a button</button>
                    </Popup>
                </Marker>
            </MapContainer >
    )
}

export default memo(MapView)