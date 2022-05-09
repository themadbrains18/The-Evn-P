import { Box } from "@mui/system";
import { Link } from "react-router-dom";
const Topheader = () => {
    return (
        <>
            <Box sx={{ "& img ": { height: "38px" }, display: "flex", justifyContent: "space-between", alignItems: "center", p: "21px 30px" }} component={"header"}>
                <Box sx={{ height: "38px" }} to="/" component={Link} >
                    <img src={require("../../assets/img/short-logo.png")} alt="" />
                </Box>
                <Box sx={{ height: "42px", "& img": { height: "42px" } }}>
                    <img src={require("../../assets/img/devby.png")} alt="" />
                </Box>
            </Box>
        </>
    )
}

export default Topheader;