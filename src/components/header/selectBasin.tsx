import { Box, Button, Typography, MenuItem, FormControl,ThemeProvider } from '@mui/material';
import * as React from 'react';
import { useEffect } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { createTheme } from '@mui/material';
import { theme } from '../../theme';

const datePickertheme = createTheme({
    palette: {
            ...theme.palette,
            primary: {
                ...theme.palette.primary,
                contrastText: "#fff"
            }
        }
});

const SeclectBasin = (props: any) => {
    
    // Select Basins Form
    const [BasinValue, SetBasinValue] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        SetBasinValue(event.target.value);
    }

    // Beginning Date State
    const [beginningDate, setBeginningDate] = React.useState<Date | null>(null);
    // End Date State
    const [endDate, setEndDate] = React.useState<Date | null>(null);

    const clearForm = () => {
        SetBasinValue("");
        setBeginningDate(null);
        setEndDate(null);
        if (props.selectGo) {
            props.selectGo(false)
        }
    }

    // Sumbit Form
    const submitForm = (e: any) => {
        e.preventDefault();
        if (  endDate) {
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
        let StartValue: any = beginningDate;
        let EndValue: any = e;

        if (StartValue) {
            if (new Date(StartValue).getFullYear() < new Date(EndValue).getFullYear()) {
                setEndDate(EndValue);
            }
            else if (new Date(StartValue).getFullYear() === new Date(EndValue).getFullYear()) {
                if (new Date(StartValue).getMonth() < new Date(EndValue).getMonth()) {
                    setEndDate(EndValue);
                }
                else if (new Date(StartValue).getMonth() === new Date(EndValue).getMonth()) {

                    if (new Date(StartValue).getDate() <= new Date(EndValue).getDate()) {
                        setEndDate(EndValue);
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

    const SelectBasin = [
        {
            item: "All Basins",
        },
        {
            item: "Appalachian",
        },
        {
            item: "Bakken",
        },
        {
            item: "Denver-Julesburg",
        },
        {
            item: "Eagleford",
        },
        {
            item: "Permian",
        }
    ]
    return (
        <>
            <form action="">
                <Box sx={{ p: "30px", backgroundColor: "background.default", mt: "20px", minWidth: 120 }}>
                    <Typography variant='h6' sx={{ mb: "10px" }} >
                        Select Basin
                    </Typography>
                    <FormControl  fullWidth >
                        <Select
                            value={BasinValue}
                            onChange={handleChange}
                            displayEmpty>
                            {SelectBasin.map((value, index) => {
                                return (
                                    <MenuItem key={index} value={index === 0 ? "" : index}>{value.item}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                    <Typography variant='h6' sx={{ m: "32px 0 10px" }} >Select Date</Typography>
                    <Box sx={{display: "grid ", gridTemplateColumns: { md: " 1fr 1fr", xs: "1fr" }, gap: { md: "14px", xs: "20px" }}}>
                        <ThemeProvider theme={datePickertheme}>
                            <LocalizationProvider  dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Beginning Date"
                                    value={beginningDate}
                                    minDate={new Date()}
                                    onChange={(e: any) => { setBeginningDate(e) }}
                                    renderInput={(params) => <TextField   {...params} />}
                                />
                            </LocalizationProvider>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="End Date"
                                    value={endDate}
                                    minDate={new Date()}
                                    onChange={(e: any) => { checkValid(e) }}
                                    renderInput={(params) => <TextField   {...params} />}
                                />
                            </LocalizationProvider>
                        </ThemeProvider>
                    </Box>
                    <Box sx={{ mt: "22px", textAlign: "end" }}>
                        <Button variant="outlined" type="reset" onClick={clearForm}>Clear</Button>
                        <Button sx={{ ml: "20px" }} type="submit" variant="contained" onClick={(e: any) => { submitForm(e) }}>Go</Button>
                    </Box>
                </Box>
                {/* Button */}

            </form>
        </>
    )
}
export default SeclectBasin;