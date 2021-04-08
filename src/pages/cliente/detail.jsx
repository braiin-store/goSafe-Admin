import { Container , Paper} from '@material-ui/core'
import  {useParams } from 'react-router-dom'

const Detail = ()=>{
    const {cliente} = useParams();
    console.log(cliente);
    return (
    <Container maxWidth="sm">
        <Paper>
            <strong> Cliente Actual:   </strong>

        </Paper>

    </Container>
    )
}
export default Detail