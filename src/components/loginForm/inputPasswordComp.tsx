import { useState } from "react";
import { Typography, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';

type inputPassword = {
    label: String,
    inputPlaceHolder: String,
    inputType: "password" | "input"; 
}

const InputPasswordComp = (props:inputPassword) => {
    const [showPassword, setShowPassword] = useState(false)
    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <>
        
            <Typography variant="subtitle1" sx={{ mb: "12px", mt: "30px", fontWeight: "fontWeightMedium" }} color="primary.contrastText">
                { props.label }
            </Typography>

            { props.inputType === "password" ? 
                <OutlinedInput placeholder={`${props.inputPlaceHolder}`} fullWidth type={`${!showPassword && ("password")}`} required
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                onClick={toggleShowPassword}
                                edge="end"
                            >
                                {showPassword ? <Visibility sx={{ color: "#ACACAC" }} /> : <VisibilityOff sx={{ color: "#ACACAC" }} />}
                            </IconButton>
                        </InputAdornment>
                    } />
                :
                    <OutlinedInput type="text" required fullWidth placeholder="Enter you username" />
                }
        </>
    )
}
export default InputPasswordComp;