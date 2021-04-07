import './card.css'

import { memo } from 'react'
import PropTypes from 'prop-types'

import { LocationOn, LocationOff } from '@material-ui/icons'
import { Grid, Card, CardMedia, CardContent, IconButton } from '@material-ui/core'

import { useMarker } from '../../hooks/useLocation'

const Colors = {
    alert: '#FFD9D7',
    client: '#CEEAD9',
    driver: '#FFEDD6',
}

const Icons = {
    alert: require('./svgs/alert.svg').default,
    driver: require('./svgs/driver.svg').default,
    client: require('./svgs/client.svg').default,
}

const InfoCard = ({ icon, title, showMarker }) => {
    const { on, handleMarkerClick } = useMarker(showMarker)
    console.log("rendering logs");
    return (
        <Card
            className="card"
            style={{
                borderColor: Colors[icon],
                backgroundColor: `${Colors[icon]}66`
            }}
        >
            <CardMedia
                component="img"
                className="card-img"
                title={title}
                image={Icons[icon]}
            />
            <CardContent className="card-content">
                <strong>
                    <h1>{title}</h1>
                    <h4>En Línea: 1000</h4>
                </strong>
                <Grid container direction="row" justify="space-evenly">
                    <Grid item>
                        <IconButton
                            title={on ? "Desactivar Ubicación" : "Activar Ubicación"}
                            children={[on ? <LocationOn /> : <LocationOff />]}
                            onClick={handleMarkerClick}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

InfoCard.propTypes = {
    showMarker: PropTypes.bool,
    title: PropTypes.string.isRequired,
    icon: PropTypes.oneOf(Object.keys(Icons)).isRequired,
}

export default memo(InfoCard)