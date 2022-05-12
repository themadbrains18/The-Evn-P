import { Box, Button, Typography, MenuItem, FormControl } from '@mui/material';
import * as React from 'react';
import { useEffect } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// Select Basins Form
const SeclectBasin = (props: any) => {
    // Start Date State
    const [firstDate, SetfirstDate] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        SetfirstDate(event.target.value);
    }
    // End Date State
    const [secondvalue, setsecondvalue] = React.useState<Date | null>(null);
    const [value, setValue] = React.useState<Date | null>(null);
    const clearForm = () => {
        SetfirstDate("");
        setsecondvalue(null);
        setValue(null);
        if (props.selectGo) {
            props.selectGo(false)
        }
    }
    // Sumbit Form
    const submitForm = () => {
        if (firstDate && value) {
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
                    <Box sx={{padding: "30px", background: "#ffff", marginTop: "20px" , minWidth: 120 }}>
                        <Typography variant='h6' sx={{  marginBottom: "30px" }} component={"span"}>
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
                                             "&>div": {
                                                padding: "12px 15px",
                                                minHeight: "initial!important",
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
                                        value={firstDate}
                                        onChange={handleChange}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem value="">All Basins</MenuItem>
                                        <MenuItem value={10}>Appalachian</MenuItem>
                                        <MenuItem value={20}>Bakken</MenuItem>
                                        <MenuItem value={40}>Denver-Julesburg</MenuItem>
                                        <MenuItem value={50}>Eagleford</MenuItem>
                                        <MenuItem value={60}>Permian</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: "4px", marginTop: "10px" }} >
                                <Typography component="span"  variant='h6' sx={{  margin: "32px 0 10px" }} >Select Date</Typography>
                                <Box sx={{
                                    display: "grid ", gridTemplateColumns: { md: " 1fr 1fr", xs: "1fr" }, gap: { md: "14px", xs: "30px" },
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
                                                <TextField   {...params} />}
                                        />
                                    </LocalizationProvider>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            label="End Date"
                                            value={value}
                                            maxDate={new Date('2025-01-01')}
                                            onChange={(e: any) => { checkValid(e) }}
                                            renderInput={(params) =>
                                                <TextField  {...params} />}
                                        />
                                    </LocalizationProvider>
                                </Box>
                            </Box>
                        </FormControl>
                    </Box>
                    {/* Button */}
                    <Box sx={{ marginTop: "22px", textAlign: "end" }}>
                        <Button   variant="outlined" type="reset" onClick={clearForm}>Clear</Button>
                        <Button sx={{marginLeft:"20px"}} type="submit"  variant="contained" onClick={submitForm}>Go</Button>
                    </Box>
            </form>
        </>
    )
}
export default SeclectBasin;