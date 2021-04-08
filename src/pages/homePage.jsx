import { Grid, Paper } from '@material-ui/core'

import Card from '../components/card/card'
import MapView from '../components/map/Map'

import { streamContext, useFetch, useStreams } from '../hooks/useFirebase'

const cards = [
    ["alert", "Auxilios"],
    ["client", "Clientes"],
    ["driver", "Conductores"],
]

const HomePage = () => {
    const streams = useStreams()

    const data = {
        alerts: useFetch('alerts', streams.alertShow),
        clients: useFetch('clients', streams.clientShow),
        drivers: useFetch('drivers', streams.driverShow),
    }

    return <streamContext.Provider value={streams}>
        <Grid
            container
            spacing={2}

            direction="column"
            alignItems="stretch"
            alignContent="center"
            justify="space-between"
        >
            <Grid
                item
                container
                spacing={3}
                direction="row"
            >
                {cards.map(([icon, title]) =>
                    <Grid key={icon} item xs>
                        <Card icon={icon} title={title} />
                    </Grid>
                )}
            </Grid>
            <Grid item>
                <Paper elevation={3}>
                    <MapView {...data} />
                </Paper>
            </Grid>
        </Grid>
    </streamContext.Provider>
}


export default HomePage