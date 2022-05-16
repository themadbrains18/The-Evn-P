// Login Account
import { Box, Typography,  Button} from "@mui/material";
import FullscreenCard from "./FullScreenCard";
import InputPasswordComp from './inputPasswordComp';

const Login = (props: any) => {
   
    return (
        <>
            <FullscreenCard>
                <form onSubmit={props.onSubmit} action="">
                    <Typography variant="h1">
                        Login
                    </Typography>

                    
                    <InputPasswordComp label="Username" inputPlaceHolder="Enter you username" inputType="input"/>

                    <InputPasswordComp label="Password" inputPlaceHolder="Enter Your Password" inputType="password"/>

                    <Button sx={{ mt: "23px" }} type="submit" fullWidth size="large" variant="contained">Continue</Button>

                    <Box sx={{ textAlign: "center", mt: "26px" }}>
                        <Button type="button" variant="text" sx={{color:"primary.main","&:hover":{background:"transparent",color:"primary.main"},width:"1"}} onClick={props.onClickfogetBtn} > Forgot password?</Button>
                    </Box>
                </form>
            </FullscreenCard>
        </>
    )
}

export default Login;