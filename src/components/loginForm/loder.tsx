import { Box, Typography, CircularProgress } from "@mui/material";
import FullscreenCard from "./FullScreenCard";

const Loading = (props: any) => {
    return (
        <FullscreenCard>
            <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", gap: "35px" }}>
                <CircularProgress size={105} />
                <Typography sx={{ fontWeight: "600", fontSize: "18px" }}>
                    Loading
                </Typography>
            </Box>
        </FullscreenCard>
    )
}

export default Loading;