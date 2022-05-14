import { Typography } from '@mui/material';

type heading = {
    heading: String
}
const MapInnerTabHeading = (props: heading) => {
    return (
        <Typography variant='h3' component="h3" sx={{ mb: 2.125 }}>
            {props.heading}
        </Typography>
    )
}

export default MapInnerTabHeading;