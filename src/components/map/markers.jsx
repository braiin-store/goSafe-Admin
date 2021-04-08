import L from 'leaflet'

const Icons = {
    alert: require('./icons/alert.svg').default,
    driver: require('./icons/driver.svg').default,
    client: require('./icons/client.svg').default,
}

const Marker = (path) => L.icon({
    iconSize: [35, 35],
    className: 'marker',

    iconUrl: path,
    iconRetinaUrl: path,
});


export const Alert = Marker(Icons.alert)
export const Driver = Marker(Icons.driver)
export const Client = Marker(Icons.client)