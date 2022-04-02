import { Typography, Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    remove_list: {
        display: "flex",
        alignItems: "center",
        gap: "6.4px",
        "& span": {
            color: "#FF5722",
            fontWeight: "600",
            fontSize: "12px",
            lineHeight: "13px"
        }
    }
})
const LocationSearch = (props: any) => {
    const classes = useStyles();
    const clearRecord = () => {
        props.clearData('undefined');
    }
    return (
        <>
            <Box>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #0000004d", paddingBottom: "12px" }}>
                    <Typography sx={{ color: "#454560", fontWeight: "500", fontSize: "12px", lineHeight: "13px" }} component={"h5"}>
                        Search Results: {props.itemsNumber}
                    </Typography>
                    <Button sx={{ background: "rgba(255, 87, 34, 0.14)", borderRadius: "2px", padding: "8px 10px" }} className={classes.remove_list} onClick={clearRecord}>
                        <svg width={12} height={14} viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.20002 0.599976C5.0515 0.600055 4.90592 0.641482 4.7796 0.719617C4.65329 0.797753 4.55122 0.909511 4.48482 1.04238L3.90562 2.19998H1.20002C0.987851 2.19998 0.784368 2.28426 0.634339 2.43429C0.48431 2.58432 0.400024 2.7878 0.400024 2.99998C0.400024 3.21215 0.48431 3.41563 0.634339 3.56566C0.784368 3.71569 0.987851 3.79998 1.20002 3.79998V11.8C1.20002 12.2243 1.3686 12.6313 1.66865 12.9313C1.96871 13.2314 2.37568 13.4 2.80002 13.4H9.20003C9.62437 13.4 10.0313 13.2314 10.3314 12.9313C10.6315 12.6313 10.8 12.2243 10.8 11.8V3.79998C11.0122 3.79998 11.2157 3.71569 11.3657 3.56566C11.5157 3.41563 11.6 3.21215 11.6 2.99998C11.6 2.7878 11.5157 2.58432 11.3657 2.43429C11.2157 2.28426 11.0122 2.19998 10.8 2.19998H8.09443L7.51522 1.04238C7.44883 0.909511 7.34676 0.797753 7.22045 0.719617C7.09413 0.641482 6.94855 0.600055 6.80002 0.599976H5.20002ZM3.60002 5.39998C3.60002 5.1878 3.68431 4.98432 3.83434 4.83429C3.98437 4.68426 4.18785 4.59998 4.40002 4.59998C4.6122 4.59998 4.81568 4.68426 4.96571 4.83429C5.11574 4.98432 5.20002 5.1878 5.20002 5.39998V10.2C5.20002 10.4121 5.11574 10.6156 4.96571 10.7657C4.81568 10.9157 4.6122 11 4.40002 11C4.18785 11 3.98437 10.9157 3.83434 10.7657C3.68431 10.6156 3.60002 10.4121 3.60002 10.2V5.39998ZM7.60003 4.59998C7.38785 4.59998 7.18437 4.68426 7.03434 4.83429C6.88431 4.98432 6.80002 5.1878 6.80002 5.39998V10.2C6.80002 10.4121 6.88431 10.6156 7.03434 10.7657C7.18437 10.9157 7.38785 11 7.60003 11C7.8122 11 8.01568 10.9157 8.16571 10.7657C8.31574 10.6156 8.40003 10.4121 8.40003 10.2V5.39998C8.40003 5.1878 8.31574 4.98432 8.16571 4.83429C8.01568 4.68426 7.8122 4.59998 7.60003 4.59998Z" fill="#FF5722" />
                        </svg>
                        <Typography component={"span"}>
                            Remove List
                        </Typography>
                    </Button>
                </Box>

            </Box>
        </>
    )
}
export default LocationSearch;