import 'leaflet/dist/leaflet.css'

import { CircularProgress } from '@material-ui/core'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import './map.css'
import { Alert, Driver, Client } from './markers'
import { memo, useState } from 'react'
import { useLocation } from '../../hooks/useLocation'

const MapView = ({ alerts, drivers, clients }) => {
    const [reload, setReload] = useState(true)
    const location = useLocation(() => setReload(false))

    console.log(alerts);
    return (
        reload && !location
            ? <CircularProgress color="secondary" />
            :
            <MapContainer
                zoom={13.5}
                className="map"
                scrollWheelZoom={true}
                center={location}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributor'
                    url="https://api.mapbox.com/styles/v1/cartory/ckn6d7bgr07qk17pnir81rn9r/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2FydG9yeSIsImEiOiJja242ZHVkbWswZDVoMm5wc3F1Znh5ZXpzIn0.mIs9eqzfLKJKW2TY9sxwaQ"
                />
                {
                    Object.keys(drivers).map(key => {
                        let { latitude, longitude } = drivers[key];
                        return (
                            <Marker
                                key={key}
                                riseOnHover
                                icon={Driver}
                                position={{ lat: latitude, lng: longitude }}
                            >
                                <Popup autoClose>
                                    <strong>
                                        Conductor {` ${key}`}
                                    </strong>
                                    <br />
                                    {JSON.stringify({ latitude, longitude })}
                                </Popup>
                            </Marker>
                        )
                    })
                }

                {
                    Object.keys(clients).map(key => {
                        let client = clients[key];
                        let { source } = client;
                        return (
                            <Marker
                                key={key}
                                riseOnHover
                                icon={Client}
                                position={{ lat: source[0], lng: source[1] }}
                            >
                                <Popup autoClose>
                                    <strong>Cliente</strong><br />
                                    {client.clientId} <br />
                                    <strong>Origen</strong><br />
                                    {client.sourceName} <br />
                                    <strong>destino</strong><br />
                                    {client.destinyName}
                                </Popup>
                            </Marker>
                        )
                    })
                }
                <Marker riseOnHover icon={Alert} position={location}>
                    <Popup autoClose>
                        <strong>Ubicación Actual</strong><br />
                        {JSON.stringify(location)}
                    </Popup>
                </Marker>
            </MapContainer >
    )
}


export default memo(MapView)