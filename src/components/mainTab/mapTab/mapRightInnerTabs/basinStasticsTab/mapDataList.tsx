import { Typography, List, ListItem, ListItemText } from "@mui/material";


const SourcecontributionsData =[
    {
        sourceText :"source contributions",
        sourceNumber:"29",
    },
    {
        sourceText :"MOST RECENT SURVEY DATE",
        sourceNumber:"4/12/2022",
    },
    {
        sourceText :"Bridger Processed Emissions",
        sourceNumber:"28",
    },
    {
        sourceText :"Bridger Premilinary Detections",
        sourceNumber:"28",
    }
] 
const MapDataList = () => {
    return (
        <>
            <List sx={{ mt: 4.75, p: 0 }}>
                {SourcecontributionsData.map((element,index)=>{
                    return(
                        <ListItem key={index} disablePadding sx={{ mt: { lg: 3.625, xs: 2.5 } }}>
                        <ListItemText >
                            <Typography variant="body2" component="span" sx={{ fontWeight: "600",  color: "secondary.dark", display: "block" }}>
                                 {element.sourceText}
                            </Typography>
                            <Typography variant="body2" component="span" sx={{ fontWeight: "500",  color: "primary.contrastText", display: "block", mt: { lg: 1.75, xs: 1.3 } }}>
                                {element.sourceNumber}
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    )
                })}
            </List>
        </>
    )
}
export default MapDataList;