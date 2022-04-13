import { Typography } from '@mui/material';

type heading = {
    heading: String
}
const MapInnerTabHeading = (props: heading) => {
    return (
        <Typography component="h3" sx={{ fontWeight: 700, fontSize: "19px", lineHeight: "21px", mb: 2.125 }}>
            {props.heading}
        </Typography>
    )
}
 
export default MapInnerTabHeading;