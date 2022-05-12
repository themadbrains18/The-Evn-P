import { Card, CardActions, CardMedia, Button, Typography, Box, Grid } from '@mui/material';
import mapCardApi from '../../../api/mapCards-api.json';
import { Link } from "react-router-dom";
const MapCard = () => {
    return (
        <Box mt={2.75}>
            {/* // Common Grid Cards */}
            <Grid container spacing={3.75} columnSpacing={{ xl: 4.25, lg: 3, xs: 2 }}>
                {mapCardApi.map_card.map((elem) => {
                    return (
                        <Grid item xs={12} md={6} lg={4} key={elem.id}>
                            <Card sx={{
                                backgroundColor: "background.paper",
                                boxShadow: "0px 0px 10px #F3F4F6",
                                "&:hover": {
                                    boxShadow: "0px 0px 15px #b6b8bd"
                                }
                            }}>
                                <Box component="div" sx={{ position: "relative" }}>
                                    {/* Card Image */}
                                    <Box to="/maps" component={Link}>
                                        <CardMedia
                                            component="img"
                                            image={require(`../../../assets/img/${elem.map_card_img}.jpg`)}
                                            alt="green iguana"
                                        />
                                    </Box>
                                    {/* Card Image Title */}
                                    <Typography variant='h2' color="text.primary{contrastText}" to="/maps" component={Link} sx={{
                                        position: 'absolute', top: "50%", left: "50%",
                                        transform: 'translate(-50%,-50%)',
                                    }}>
                                        {elem.map_card_name}
                                    </Typography>
                                </Box>
                                <Box sx={{ px: 1.3, pb: 2.75 }} >
                                    <CardActions sx={{ justifyContent: "space-between", gap: 1, p: 0, mt: 2 }}>
                                        {elem.map_card_links.map((cardElem) => {
                                            return (
                                                <Button to={cardElem.link} component={Link} key={cardElem.id} size="small" sx={{ display: 'flex', gap: 0.7, alignItems: 'center', mx: 0, p: 0 }}>
                                                    <CardMedia
                                                        sx={{ width: { lg: "100%", xs: "22px" } }}
                                                        component="img"
                                                        image={require(`../../../assets/svg/${cardElem.link_svg}.svg`)}
                                                        alt={cardElem.link_txt}
                                                    />
                                                    <Typography variant='h6'
                                                        sx={{
                                                            marginTop: "4px",
                                                            color: "secondary.main",
                                                        }} component="span" >
                                                        {cardElem.link_txt}
                                                    </Typography>
                                                </Button>
                                            )
                                        })}
                                    </CardActions>
                                    <Box  sx={{ display: "flex", alignItems: "center", mt: 3, mx: -0.5 }}>
                                        {elem.map_card_info.map((card) => {
                                            return (
                                                <Box key={card.id} component="div" sx={{
                                                    display: "block", borderRight: 1, borderColor: "#D4D4D4", px: 0.5, lineHeight: 1, width: "33.333%", textAlign: "center",
                                                    "&:first-of-type": {
                                                        textAlign: "left",
                                                    },
                                                    "&:last-child": {
                                                        textAlign: "right",
                                                        border: "none"
                                                    }
                                                }}>
                                                    <Typography variant='h6' component="h4" >
                                                        {card.info_heading}
                                                    </Typography>
                                                    <Typography variant='subtitle2' component="span">
                                                        {card.info_txt}
                                                    </Typography>
                                                </Box>
                                            )
                                        })}
                                    </Box>
                                </Box>
                            </Card >
                        </Grid>
                    )
                })}
            </Grid>
        </Box >
    );
}
export default MapCard;