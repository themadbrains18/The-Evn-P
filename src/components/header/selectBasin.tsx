import { Box, Button, Typography, MenuItem, FormControl, InputLabel } from '@mui/material';
import * as React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';





import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';






const SeclectBasin = () => {
    const [age, setAge] = React.useState('');
    const [value, setValue] = React.useState<Date | null>(null);
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    return (
        <>


            <Box sx={{ padding: "30px", borderRadius: "6px", background: "#ffff" }}>
                <Box sx={{ minWidth: 120 }}>
                    <Typography sx={{ fontWeight: "500", fontSize: "14px", lineHeight: "16px", color: "#000", marginBottom: "30px" }} component={"span"}>
                        Select Basin
                    </Typography>
                    <FormControl fullWidth sx={{
                        "& legend ": {
                            display: "none",
                        },
                        "& label": {
                            background: "#fff",
                            padding: "0 10px",
                            left: "-10px"
                        },
                        "& .css-1mdoxe7-MuiFormLabel-root-MuiInputLabel-root": {
                            transform: " translate(14px, 0px) scale(0.75)"
                        }
                    }}>
                        <InputLabel id="demo-simple-select-label">Persian</InputLabel>
                        <Select
                            sx={{

                                color: "#000000",
                                fontWeight: "500",
                                fontSize: "14px",
                                marginTop: "15px",
                                lineHeight: "16px",
                                "& >div ": {
                                    padding: "6px 15px",
                                },
                                "& fieldset ": {
                                    border: " 1px solid rgba(0, 0, 0, 0.12)",
                                    borderRadius: "6px",
                                }
                            }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem
                                sx={{
                                    color: "#000000",
                                    fontWeight: "500",
                                    fontSize: "14px",
                                    lineHeight: "16px"
                                }} value={10}>Persian</MenuItem>
                            <MenuItem
                                sx={{
                                    color: "#000000",
                                    fontWeight: "500",
                                    fontSize: "14px",
                                    lineHeight: "16px"
                                }}
                                value={20}>Persian</MenuItem>
                            <MenuItem
                                sx={{
                                    color: "#000000",
                                    fontWeight: "500",
                                    fontSize: "14px",
                                    lineHeight: "16px"
                                }}
                                value={30}>Persian</MenuItem>
                        </Select>

                        <Box sx={{ display: "flex", flexDirection: "column", gap: "4px", marginTop: "10px" }} >
                            <Box component="span" sx={{ color: "#000", fontWeight: "500", fontSize: "14px", lineHeight: "16px", margin: "32px 0 10px" }} >Select Date</Box>
                            <Box sx={{
                                display: "grid ", gridTemplateColumns: "1fr 1fr", gap: "14px",
                                "& label": {
                                    top: "-8px",
                                    color: "#000000",
                                    fontWeight: "500",
                                    fontSize: "14px",
                                },
                                "& .css-1mdoxe7-MuiFormLabel-root-MuiInputLabel-root": {
                                    transform: " translate(14px, -5px) scale(0.75)"
                                }
                            }}>

                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        label="Beginning Date"

                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(params) =>
                                            <TextField sx={{
                                                "& fieldset ": {
                                                    border: " 1px solid rgba(0, 0, 0, 0.12)",
                                                    borderRadius: "6px",
                                                },
                                                color: "#000000",
                                                fontWeight: "500",
                                                fontSize: "14px",
                                                lineHeight: "16px",
                                                "& input": {
                                                    padding: "10px 15px"
                                                }
                                            }} {...params} />}
                                    />

                                </LocalizationProvider>

                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        label="End Date"
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(params) =>
                                            <TextField sx={{
                                                "& fieldset ": {
                                                    border: " 1px solid rgba(0, 0, 0, 0.12)",
                                                    borderRadius: "6px",
                                                },
                                                color: "#000000",
                                                fontWeight: "500",
                                                fontSize: "14px",
                                                lineHeight: "16px",
                                                "& input": {
                                                    padding: "10px 15px"
                                                }
                                            }} {...params} />}
                                    />

                                </LocalizationProvider>

                            </Box>
                        </Box>
                    </FormControl>
                </Box>



                <Box sx={{ marginTop: "22px", textAlign: "end" }}>
                    <Button sx={{
                        border: "1px solid #0F75BC", borderRadius: "6px", padding: { lg: "16px 35px", xs: "13px 35px", width: "145px" }, color: "#0F75BC",
                        fontWeight: "600",
                        fontSize: { lg: "14px", xs: "12px" },
                        lineHeight: "1",
                        "&:hover": {
                            backgroundColor: '#0F75BC',
                            color: "#fff"
                        }
                    }} variant="outlined" type="reset" >Clear</Button>

                    <Button sx={{
                        border: "1px solid #0F75BC", borderRadius: "6px", padding: { lg: "16px 35px", xs: "13px 35px", width: "145px" }, color: "#fff", marginLeft: "14px",
                        fontWeight: "600",
                        background: "#0F75BC",

                        fontSize: { lg: "14px", xs: "12px" },
                        lineHeight: "1",
                        "&:hover": {
                            backgroundColor: '#0F75BC',
                            color: "#fff"
                        }
                    }} variant="outlined">Go</Button>
                </Box>
            </Box >
        </>
    )
}
export default SeclectBasin;