import { makeStyles } from '@mui/styles';
import { Card, CardActions, CardMedia, Button, Typography, Box, Grid } from '@mui/material';
import mapCardApi from '../../../api/mapCards-api.json';


const useStyles = makeStyles({
    card_info : {
        "&:nth-child(2)" : {
            textAlign: "center",
        },
        "&:last-child" : {
            textAlign: "right",
            border: "none"
        }
    },
    map_card :{
        "&:hover" :{
            boxShadow: "0px 0px 15px #b6b8bd"
        }
    }
});


const MapCard = () => {
    const classes = useStyles();

    return (
        <Box mt={2.75}>
            {/* // Common Grid Cards */}
            <Grid container spacing={3.75} columnSpacing={4.25}>
                {mapCardApi.map_card.map((elem) => {
                    return (
                        <Grid item xs={4} key={elem.id}>
                            <Card className={classes.map_card} sx={{
                                background: "#FDFDFD",
                                boxShadow: "0px 0px 10px #F3F4F6"
                            }}>
                                <Box component="div" sx={{ position: "relative" }}>
                                    {/* Card Image */}
                                    <CardMedia
                                        component="img"
                                        image={require(`../../../assets/img/${elem.map_card_img}.jpg`)}
                                        alt="green iguana"
                                    />
                                    {/* Card Image Title */}
                                    <Typography color="text.primary{contrastText}" component="span" sx={{
                                        position: 'absolute', top: "50%", left: "50%",
                                        transform: 'translate(-50%,-50%)',
                                        fontSize: 24,
                                        fontWeight: 600,
                                        color: "#fff",
                                        width: "100%",
                                        textAlign: "center"
                                    }}>
                                        {elem.map_card_name}
                                    </Typography>
                                </Box>
                                <Box sx={{ px: 1.3, pb: 2.75 }} component="div">
                                    <CardActions sx={{ gap: 1, p: 0, mt: 2 }}>
                                        {elem.map_card_links.map((cardElem) => {
                                            return (
                                                <Button key={cardElem.id} size="small" sx={{ display: 'flex', gap: 0.7, alignItems: 'center', mx: 0, p: 0 }}>
                                                    <CardMedia
                                                        component="img"
                                                        image={require(`../../../assets/svg/${cardElem.link_svg}.svg`)}
                                                        alt={cardElem.link_txt}
                                                    />
                                                    <Typography sx={{
                                                        fontSize: 14,
                                                        fontWeight: 500,
                                                        color: "#1D8CD4",
                                                        display: "block",
                                                        lineHeight: "16px",
                                                    }} component="span" >
                                                        {cardElem.link_txt}
                                                    </Typography>
                                                </Button>
                                            )
                                        })}
                                    </CardActions>
                                    <Box component="div" sx={{ display: "flex",alignItems: "center",   mt: 3, mx:-0.5}}>
                                        {elem.map_card_info.map((card) => {
                                            return (
                                                <Box key={card.id} className={classes.card_info} component="div" sx={{ display: "block", borderRight: 1, borderColor: "#D4D4D4", px: 0.5, lineHeight: 1 ,width: "33.333%"}}>
                                                    <Typography component="h4" sx={{
                                                        display: "inline-block", fontSize: 16,
                                                        fontWeight: 500,
                                                        color: "#000",
                                                        lineHeight: 1.1,
                                                        width:"100%"
                                                    }}>
                                                        {card.info_heading}
                                                    </Typography>
                                                    <Typography component="span" sx={{
                                                        display: "inline-block", fontSize: 9,
                                                        fontWeight: 400,
                                                        color: "#000",
                                                        mb: 0,
                                                        lineHeight: 1.2

                                                    }}>
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
        </Box>
    );
}
export default MapCard;