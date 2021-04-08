import './card.css'

import PropTypes from 'prop-types'

import { memo, useContext } from 'react'
import { LocationOn, LocationOff } from '@material-ui/icons'
import { Grid, Card, CardMedia, CardContent, IconButton } from '@material-ui/core'

import { streamContext } from '../../hooks/useFirebase'

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

const getStream = ({ icon, streams }) => ({
    show: streams[`${icon}Show`],
    changeShow: streams[`change_${icon}Show`],
})

const InfoCard = ({ icon, title }) => {
    const { show, changeShow } = getStream({ icon, streams: useContext(streamContext) })

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
                            title={show ? "Desactivar Ubicación" : "Activar Ubicación"}
                            children={[show ? <LocationOn key="1" /> : <LocationOff key="2" />]}
                            onClick={changeShow}
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