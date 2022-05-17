import { useState } from "react";
import { Typography, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';

type InputCompProps = {
    label: String,
    inputPlaceHolder: String,
    inputType: "password" | "text" | "email"; 
}

const InputComp = (props:InputCompProps) => {
    const [showPassword, setShowPassword] = useState(false)
    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <>
            <Typography variant="subtitle1" sx={{ mb: "12px", mt: "30px", fontWeight: "fontWeightMedium" }} color="primary.contrastText">
                { props.label }
            </Typography>

            { props.inputType === "password" && 
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
            }
             
            { props.inputType === "text"  && 
                <OutlinedInput type="text" required fullWidth placeholder="Enter you username" />
            }

            { props.inputType === "email"  && 
                <OutlinedInput type="email" required fullWidth placeholder="Enter you username" />
            }
        </>
    )
}
export default InputComp;