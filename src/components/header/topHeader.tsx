import { Box } from "@mui/system";
import { Link } from "react-router-dom";
const Topheader = () => {
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "21px 30px" , background:"#fff"}} component={"header"}>
                <Link to="/"  >
                    <Box  component="img" sx={{ height: "38px" }} src={require("../../assets/img/short-logo.png")} alt="" />
                </Link>
                <Box component="img"  sx={{  height: "42px" }} src={require("../../assets/img/devby.png")} alt="" />
            </Box>
        </>
    )
}
export default Topheader;