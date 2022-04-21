import { Box, Button, Typography, MenuItem, FormControl } from '@mui/material';
import * as React from 'react';
import { useEffect } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const SeclectBasin = (props: any) => {
    const [age, setAge] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    }

    const [secondvalue, setsecondvalue] = React.useState<Date | null>(null);
    const [value, setValue] = React.useState<Date | null>(null);
    const clearForm = () => {
        setAge("");
        setsecondvalue(null);
        setValue(null);
        if (props.selectGo) {
            props.selectGo(false)
        }
    }
    // Sumbit Form
    const submitForm = () => {
        if (age && value) {
            if (props.selectGo) {
                props.selectGo(true);
            }
        }
    }
    useEffect(() => {
        let input = document.querySelectorAll("input");
        input.forEach((e) => {
            e.setAttribute("required", "");
        });

    });
    const checkValid = (e: any) => {
        let StartValue: any = secondvalue;
        let EndValue: any = e;
        if (StartValue) {
            if (new Date(StartValue).getFullYear() < new Date(EndValue).getFullYear()) {
                setValue(EndValue);
            } else if (new Date(StartValue).getFullYear() === new Date(EndValue).getFullYear()) {
                if (new Date(StartValue).getMonth() < new Date(EndValue).getMonth()) {
                    setValue(EndValue);
                } else if (new Date(StartValue).getMonth() === new Date(EndValue).getMonth()) {
                    if (new Date(StartValue).getDate() < new Date(EndValue).getDate()) {
                        setValue(EndValue);
                    }
                    else {
                        alert("Please Enter The Correct Day")
                    }
                }
                else {
                    alert("Please Enter The Correct Month")
                }
            }
            else {
                alert("Please Enter The Correct Year")
            }
        }
    }
    return (
        <>
            <form action="">
                <Box sx={{ padding: "30px", borderRadius: "6px", background: "#ffff", marginTop: "20px" }}>
                    <Box sx={{ minWidth: 120 }}>
                        <Typography sx={{ fontWeight: "500", fontSize: { lg: "14px", xs: "12px" }, lineHeight: "16px", color: "#000", marginBottom: "30px" }} component={"span"}>
                            Select Basin
                        </Typography>
                        <FormControl fullWidth >
                            <Box >
                                <FormControl required fullWidth sx={{
                                    "& svg": {
                                        display: "none!important",
                                    },
                                    marginTop: "10px!important", minWidth: 120,
                                    zIndex: "1"
                                }}>
                                    <Select
                                        sx={{
                                            fontSize: { lg: "14px", xs: "12px" }, color: "#000000", fontWeight: "500", lineHeight: "16px", "&>div": {
                                                padding: "12px 15px",
                                                minHeight: "initial!important",
                                                " & span": {
                                                    fontSize: { lg: "14px", xs: "12px" }, color: "#000000", fontWeight: "500", lineHeight: "16px",
                                                },
                                                position: "relative",
                                                "&[aria-expanded=true]": {
                                                    "&::after": {
                                                        transform: "translateY(-50%) rotate(180deg)",
                                                    }
                                                },
                                                "&::after": {
                                                    content: '""',
                                                    position: "absolute",
                                                    top: "50%",
                                                    transform: "translateY(-50%)",
                                                    backgroundImage: `url(${require("../../assets/svg/filter-arrow-icon.svg").default})`,
                                                    backgroundRepeat: "no-repeat",
                                                    height: "10px",
                                                    width: "19px",
                                                    right: "15px",
                                                    zIndex: "-1",
                                                }
                                            }
                                        }}
                                        value={age}
                                        onChange={handleChange}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}

                                    >
                                        <MenuItem value="">
                                            <Typography component={"span"}>All Basins</Typography>
                                        </MenuItem>
                                        <MenuItem value={10}>Appalachian</MenuItem>
                                        <MenuItem value={20}>Bakken</MenuItem>
                                        <MenuItem value={30}>Denver-Julesburg</MenuItem>
                                        <MenuItem value={30}>Eagleford</MenuItem>
                                        <MenuItem value={30}>Permian</MenuItem>
                                    </Select>
                                </FormControl>

                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: "4px", marginTop: "10px" }} >
                                <Box component="span" sx={{ color: "#000", fontWeight: "500", fontSize: "14px", lineHeight: "16px", margin: "32px 0 10px" }} >Select Date</Box>
                                <Box sx={{
                                    display: "grid ", gridTemplateColumns: { md: " 1fr 1fr", xs: "1fr" }, gap: { md: "14px", xs: "30px" },
                                    "& label": {
                                        top: "-5px",
                                        color: "#000000",
                                        fontWeight: "500",
                                        fontSize: { lg: "14px", xs: "12px" },
                                    },
                                    "& input": {
                                        paddingTop: "13px",
                                        paddingBottom: "13px",
                                    },
                                    "& .css-1mdoxe7-MuiFormLabel-root-MuiInputLabel-root,.css-1ymjr29": {
                                        transform: " translate(20px, -1px) scale(0.70)"
                                    }
                                }}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker

                                            label="Beginning Date"
                                            minDate={new Date('2018-01-01')}
                                            value={secondvalue}
                                            onChange={(newValue: any) => {
                                                setsecondvalue(newValue);
                                            }}
                                            renderInput={(params) =>
                                                <TextField sx={{

                                                    "& fieldset ": {
                                                        border: " 1px solid rgba(0, 0, 0, 0.12)",
                                                        borderRadius: "6px",
                                                    },
                                                    " & input": {
                                                        color: "#000000",
                                                        fontWeight: "500",
                                                        fontSize: { lg: "14px", xs: "12px" },
                                                        lineHeight: "16px",
                                                    },
                                                    color: "#000000",
                                                    fontWeight: "500",
                                                    fontSize: { lg: "14px", xs: "12px" },
                                                    lineHeight: "16px",
                                                    "& input": {
                                                        padding: "10px 15px"
                                                    }
                                                }}   {...params} />}
                                        />

                                    </LocalizationProvider>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            label="End Date"
                                            value={value}
                                            maxDate={new Date('2025-01-01')}
                                            onChange={(e: any) => { checkValid(e) }}
                                            renderInput={(params) =>
                                                <TextField sx={{
                                                    "& fieldset ": {
                                                        border: " 1px solid rgba(0, 0, 0, 0.12)",
                                                        borderRadius: "6px",
                                                    },
                                                    color: "#000000",
                                                    fontWeight: "500",
                                                    fontSize: { lg: "14px", xs: "12px" },
                                                    lineHeight: "16px",
                                                    "& input": {
                                                        padding: "10px 15px",
                                                        color: "#000000",
                                                        fontWeight: "500",
                                                        fontSize: { lg: "14px", xs: "12px" },
                                                        lineHeight: "16px",
                                                    }

                                                }}   {...params} />}
                                        />
                                    </LocalizationProvider>

                                </Box>
                            </Box>
                        </FormControl>
                    </Box>

                    {/* Button */}
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
                        }} variant="outlined" type="reset" onClick={clearForm}>Clear</Button>

                        <Button type="submit" sx={{
                            border: "1px solid #0F75BC", borderRadius: "6px", padding: { lg: "16px 35px", xs: "13px 35px", width: "145px" }, color: "#fff", marginLeft: "14px",
                            fontWeight: "600",
                            background: "#0F75BC",
                            fontSize: { lg: "14px", xs: "12px" },
                            lineHeight: "1",
                            "&:hover": {
                                backgroundColor: '#0F75BC',
                                color: "#fff"
                            }
                        }} variant="outlined" onClick={submitForm}>Go</Button>
                    </Box>
                </Box >
            </form>
        </>
    )
}
export default SeclectBasin;