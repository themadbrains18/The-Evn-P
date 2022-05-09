import { Box, Button, Typography, MenuItem, FormControl } from '@mui/material';
import * as React from 'react';
import { useEffect } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


// Basin DropDown Items Data
const SelectBasisOptions = [
    {
        AllBasins: "All Basins",
    },
    {
        AllBasins: "Bakken",
    },
    {
        AllBasins: "Denver-Julesburg",
    },
    {
        AllBasins: "Eagleford",
    },
    {
        AllBasins: "Permian",
    }
];

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
                    if (new Date(StartValue).getDate() === new Date(EndValue).getDate()) {
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
                <Box sx={{ p: "30px", borderRadius: "6px", backgroundColor: "common.white", marginTop: "20px" }}>
                    <Box sx={{ minWidth: 120 }}>
                        <Typography sx={{ fontWeight: "500", fontSize: { lg: "14px", xs: "12px" }, lineHeight: "16px", color: "common.black", mb: "30px" }} component={"span"}>
                            Select Basin
                        </Typography>
                        <FormControl fullWidth >
                            <Box >
                                <Box   sx={{
                                    "& .MuiInputBase-formControl": {
                                        width : "100%", 
                                    },
                                    width : "100%", 
                                    mt: "10px!important", minWidth: 120,
                                    zIndex: "1"
                                }}>
                                    <Select
                                        sx={{
                                            fontSize: { lg: "14px", xs: "12px" }, color: "common.black", fontWeight: "500", lineHeight: "16px", "&>div": {
                                                p: "12px 15px",
                                                minHeight: "initial!important",
                                                " & span": {
                                                    fontSize: { lg: "14px", xs: "12px" }, color: "common.black", fontWeight: "500", lineHeight: "16px",
                                                },
                                                position: "relative",
                                                "&[aria-expanded=true]": {
                                                    "&::after": {
                                                        transform: "translateY(-50%) rotate(-180deg)",
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
                                                    transition: "0.3s"
                                                }
                                            }
                                        }}
                                        value={age}
                                        onChange={handleChange}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                         {SelectBasisOptions.map((val,index) => {
                                            return(
                                                <MenuItem key={index} sx={{
                                                    "&:hover,&.Mui-selected,&.Mui-selected:hover": {
                                                        backgroundColor: "action.hover",
                                                        color: "common.white",
                                                    }
                                                }} value={index === 0 ?"" : index}>
                                                    <Typography component={"span"}> {val.AllBasins}</Typography>
                                                </MenuItem>
                                            )
                                        })}
                                        
                                    </Select>
                                </Box>

                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: "4px", mt: "10px" }} >
                                <Box component="span" sx={{ color: "common.black", fontWeight: "500", fontSize: "14px", lineHeight: "16px", m: "32px 0 10px" }} >Select Date</Box>
                                <Box sx={{
                                    display: "grid ", gridTemplateColumns: { md: " 1fr 1fr", xs: "1fr" }, gap: { md: "14px", xs: "30px" },
                                    "& label": {
                                        top: "-5px",
                                        color: "common.black",
                                        fontWeight: "500",
                                        fontSize: { lg: "14px", xs: "12px" },
                                    },
                                    "& input": {
                                        pt: "13px",
                                        pb: "13px",
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
                                                        color: "common.black",
                                                        fontWeight: "500",
                                                        fontSize: { lg: "14px", xs: "12px" },
                                                        lineHeight: "16px",
                                                    },
                                                    color: "common.black",
                                                    fontWeight: "500",
                                                    fontSize: { lg: "14px", xs: "12px" },
                                                    lineHeight: "16px",
                                                    "& input": {
                                                        p: "10px 15px"
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
                                                    color: "common.black",
                                                    fontWeight: "500",
                                                    fontSize: { lg: "14px", xs: "12px" },
                                                    lineHeight: "16px",
                                                    "& input": {
                                                        padding: "10px 15px",
                                                        color: "common.black",
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
                            border: "1px solid primary.main", borderRadius: "6px", padding: { lg: "16px 35px", xs: "13px 35px", width: "145px" }, color: "primary.main",
                            fontWeight: "600",
                            fontSize: { lg: "14px", xs: "12px" },
                            lineHeight: "1",
                            "&:hover": {
                                backgroundColor: 'primary.main',
                                color: "common.white"
                            }
                        }} variant="outlined" type="reset" onClick={clearForm}>Clear</Button>

                        <Button type="submit" sx={{
                            border: "1px solid primary.main", borderRadius: "6px", p: { lg: "16px 35px", xs: "13px 35px", width: "145px" }, color: "common.white", ml: "14px",
                            fontWeight: "600",
                            backgroundColor: "primary.main",
                            fontSize: { lg: "14px", xs: "12px" },
                            lineHeight: "1",
                            "&:hover": {
                                backgroundColor: 'primary.main',
                                color: "common.white"
                            }
                        }} variant="outlined" onClick={submitForm}>Go</Button>
                    </Box>
                </Box >
            </form>
        </>
    )
}
export default SeclectBasin;