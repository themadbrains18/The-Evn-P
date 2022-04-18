import { Box } from "@mui/system";

const Topheader = () => {
    return (
        <>
            <Box sx={{ "& a img,a ": { height: "38px" }, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "21px 30px" }} component={"header"}>
                <a href="/">
                    <img src={require("../../assets/img/short-logo.png")} alt="" />
                </a>
                <Box sx={{ height: "42px", "& img": { height: "42px" } }}>
                    <img src={require("../../assets/img/devby.png")} alt="" />
                </Box>
            </Box>
        </>
    )
}

export default Topheader;