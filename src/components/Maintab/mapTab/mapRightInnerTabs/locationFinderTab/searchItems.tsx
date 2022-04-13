import { Box, Checkbox, ListItem, Typography, Button } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';

const SearchItems = (props: any) => {
    const clearSingleRecord = (id: any) => {
        props.clearData(id);
    }
    return (
        <>
            <ListItem sx={{ display: "block" }} component={"li"}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <FormControlLabel sx={{
                        color: "#8794C3", fontWeight: "500", fontSize: "14px", lineHeight: "16px", "& svg": {
                            color: "rgba(0, 0, 0, 0.2)",
                            height: "24px",
                            width: "24px",
                        },
                        "& span": {
                            fontWeight: "600",
                            fontSize: "14px",
                            lineHeight: "16px",
                            color: "#454560",
                        },
                        "& .Mui-checked svg path": {
                            color: "#5D5FEF",
                        },
                    }} control={<Checkbox />} label={props.searcHeading} />
                    <Button onClick={() => clearSingleRecord(props.searcHeading)}>
                        <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L13 13M1 13L13 1L1 13Z" stroke="#979797" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Button>
                </Box>
                <Typography sx={{ pl: "32px", color: "#8D8D8D", fontSize: "12px", fontWeight: "400", lineHeight: "18px" }} component={"h3"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh.
                </Typography>
            </ListItem>
        </>
    )
}
export default SearchItems;