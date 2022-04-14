import { Typography, List, ListItem, ListItemText } from "@mui/material";

const MapDataList = () => {
    return (
        <>
            <List sx={{ mt: 4.75, p: 0 }}>
                <ListItem disablePadding sx={{ mt: { lg: 3.625, xs: 2.5 } }}>
                    <ListItemText >
                        <Typography component="span" sx={{ fontWeight: "600", fontSize: "12px", lineHeight: "13px", color: "#979797", display: "block" }}>
                            source contributions
                        </Typography>
                        <Typography component="span" sx={{ fontWeight: "500", fontSize: "12px", lineHeight: "13px", color: "#454560", display: "block", mt: { lg: 1.75, xs: 1.3 } }}>
                            29
                        </Typography>
                    </ListItemText>
                </ListItem>
                <ListItem disablePadding sx={{ mt: { lg: 3.625, xs: 2.5 } }}>
                    <ListItemText >
                        <Typography component="span" sx={{ fontWeight: "600", fontSize: "12px", lineHeight: "13px", color: "#979797", display: "block" }}>
                            MOST RECENT SURVEY DATE
                        </Typography>
                        <Typography component="span" sx={{ fontWeight: "500", fontSize: "12px", lineHeight: "13px", color: "#454560", display: "block", mt: { lg: 1.75, xs: 1.3 } }}>
                            4/12/2022
                        </Typography>
                    </ListItemText>
                </ListItem>
                <ListItem disablePadding sx={{ mt: { lg: 3.625, xs: 2.5 } }}>
                    <ListItemText >
                        <Typography component="span" sx={{ fontWeight: "600", fontSize: "12px", lineHeight: "13px", color: "#979797", display: "block" }}>
                            Bridger Processed Emissions
                        </Typography>
                        <Typography component="span" sx={{ fontWeight: "500", fontSize: "12px", lineHeight: "13px", color: "#454560", display: "block", mt: { lg: 1.75, xs: 1.3 } }}>
                            28
                        </Typography>
                    </ListItemText>
                </ListItem>
                <ListItem disablePadding sx={{ mt: { lg: 3.625, xs: 2.5 } }}>
                    <ListItemText >
                        <Typography component="span" sx={{ fontWeight: "600", fontSize: "12px", lineHeight: "13px", color: "#979797", display: "block" }}>
                            Bridger Premilinary Detections
                        </Typography>
                        <Typography component="span" sx={{ fontWeight: "500", fontSize: "12px", lineHeight: "13px", color: "#454560", display: "block", mt: { lg: 1.75, xs: 1.3 } }}>
                            28
                        </Typography>
                    </ListItemText>
                </ListItem>
            </List>

        </>
    )
}
export default MapDataList;