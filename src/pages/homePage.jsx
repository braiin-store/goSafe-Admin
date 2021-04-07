import { Grid, Paper } from '@material-ui/core'

import Card from '../components/card/card'
import MapView from '../components/map/Map'

const HomePage = () => {
    return <>
        <Grid
            container
            direction="column"

            spacing={2}
            justify="space-between"
            alignItems="stretch"
            alignContent="center"
        >
            <Grid
                item container
                direction="row"
                spacing={3}
            >
                <Grid item xs>
                    <Card icon="driver" title="Conductores"/>
                </Grid>
                <Grid item xs>
                    <Card icon="client" title="Clientes"/>
                </Grid>
                <Grid item xs>
                    <Card icon="alert" title="Auxilios"/>
                </Grid>
            </Grid>
            <Grid item>
                <Paper elevation={3}>
                    <MapView />
                </Paper>
            </Grid>
        </Grid>
    </>
}


export default HomePage