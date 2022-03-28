import { Box, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    area_btn: {
        marginRight: "10px!important",
        "&:last-child": {
            marginRight: "0px!important",
        },
        "&:hover":{
            backgroundColor: "#0F75BC!important",
            "& svg,& path" : {
                fill: "#fff"
            }
        }
    }
});



const AreaMapTab = () => {
    const classses = useStyles();
    return (
        <>
            <Box>
                <Typography component="h3" sx={{ fontWeight: 700, fontSize: "19px", lineHeight: "21px", mb: 2.125 }}>
                    Area Map
                </Typography>

                <Typography component="p" sx={{ fontSize: "14px", lineHeight: "22px", color: "#454560" }}>
                    Leverage the tools below to create a <Typography component='span' sx={{ fontWeight: 600, fontSize: "14px", lineHeight: "22px", color: "#454560" }}>closed area</Typography>. By this definition we mean have your last point touch your first point. Any locations inside of this area will be highlighted while eveything else will disappear.
                </Typography>

                <Box sx={{ mt: 2.5 }}>
                    <Button variant="outlined" className={classses.area_btn} sx={{ p: "0", minWidth: "auto", height: "34px", width: "34px" }}>
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.8328 8.92041L10.6031 2.78213C10.5902 2.76916 10.5749 2.75887 10.558 2.75185C10.5411 2.74483 10.523 2.74121 10.5047 2.74121C10.4864 2.74121 10.4683 2.74483 10.4514 2.75185C10.4345 2.75887 10.4192 2.76916 10.4063 2.78213L6.21035 6.9165C6.18395 6.9427 6.16895 6.97826 6.16862 7.01546C6.16829 7.05265 6.18266 7.08848 6.20859 7.11514L6.21035 7.11689L6.91348 7.80947L4.85332 9.83623C4.82691 9.86243 4.81192 9.89799 4.81159 9.93519C4.81126 9.97238 4.82562 10.0082 4.85156 10.0349L4.85332 10.0366L5.54766 10.7204L2.22363 14.0075H1.26738C1.19004 14.0075 1.125 14.0708 1.125 14.1481V15.1185C1.125 15.1958 1.18828 15.2591 1.26563 15.2591H7.32832C7.36523 15.2591 7.40039 15.245 7.42676 15.2187L8.76445 13.8897L9.47461 14.5894C9.48751 14.6023 9.50285 14.6126 9.51975 14.6196C9.53664 14.6267 9.55475 14.6303 9.57305 14.6303C9.59134 14.6303 9.60946 14.6267 9.62635 14.6196C9.64324 14.6126 9.65858 14.6023 9.67149 14.5894L11.7299 12.5573L12.4348 13.2517C12.4477 13.2646 12.463 13.2749 12.4799 13.2819C12.4968 13.289 12.5149 13.2926 12.5332 13.2926C12.5515 13.2926 12.5696 13.289 12.5865 13.2819C12.6034 13.2749 12.6187 13.2646 12.6316 13.2517L16.8275 9.11728C16.8873 9.06455 16.8873 8.97666 16.8328 8.92041ZM6.85195 13.997H4.03594L6.39844 11.6591L7.80645 13.046L6.85195 13.997ZM9.57305 12.9054L6.56016 9.93643L7.76602 8.74814L10.7789 11.7171L9.57305 12.9054ZM12.535 11.5677L7.91543 7.0167L10.5047 4.46611L15.1242 9.01885L12.535 11.5677Z" fill="#1D8CD4" />
                        </svg>
                    </Button>

                    <Button variant="outlined" className={classses.area_btn} sx={{ p: "0", minWidth: "auto", height: "34px", width: "34px" }}>
                        <svg width={16} height={14} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.8815 5.71858L8.37614 0.293973C8.36474 0.282512 8.35118 0.273418 8.33625 0.267213C8.32132 0.261007 8.30531 0.257812 8.28915 0.257812C8.27298 0.257812 8.25697 0.261007 8.24204 0.267213C8.22711 0.273418 8.21356 0.282512 8.20216 0.293973L4.4941 3.94766C4.47076 3.97081 4.45751 4.00224 4.45722 4.03511C4.45693 4.06798 4.46962 4.09964 4.49254 4.1232L4.4941 4.12475L5.11547 4.73681L3.29484 6.52792C3.27151 6.55107 3.25825 6.5825 3.25796 6.61537C3.25767 6.64824 3.27037 6.6799 3.29329 6.70346L3.29484 6.70501L3.90845 7.3093L0.970899 10.2142H0.125828C0.0574772 10.2142 0 10.2702 0 10.3385V11.196C0 11.2644 0.0559238 11.3203 0.124275 11.3203H5.48208C5.51471 11.3203 5.54577 11.3079 5.56908 11.2845L6.75124 10.1101L7.37883 10.7284C7.39024 10.7399 7.40379 10.749 7.41872 10.7552C7.43365 10.7614 7.44966 10.7646 7.46582 10.7646C7.48199 10.7646 7.498 10.7614 7.51293 10.7552C7.52786 10.749 7.54141 10.7399 7.55282 10.7284L9.37189 8.93264L9.99482 9.54625C10.0062 9.55771 10.0198 9.56681 10.0347 9.57301C10.0496 9.57922 10.0656 9.58241 10.0818 9.58241C10.098 9.58241 10.114 9.57922 10.1289 9.57301C10.1438 9.56681 10.1574 9.55771 10.1688 9.54625L13.8769 5.89256C13.9297 5.84596 13.9297 5.76829 13.8815 5.71858ZM5.0611 10.2049H2.57249L4.66032 8.13884L5.90462 9.3645L5.0611 10.2049ZM7.46582 9.24022L4.80323 6.61647L5.86889 5.56634L8.53148 8.1901L7.46582 9.24022ZM10.0834 8.05806L6.00093 4.03621L8.28915 1.78217L12.3716 5.80557L10.0834 8.05806Z" fill="#1876B2" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.879 8.44043H12.3944V10.5614H10.2734V11.6219H12.3944V13.7428H13.879V11.6219H16V10.5614H13.879V8.44043Z" fill="#1876B3" />
                        </svg>
                    </Button>
                    <Button variant="outlined" className={classses.area_btn} sx={{ p: "0", minWidth: "auto", height: "34px", width: "34px" }}>
                        <svg width={16} height={12} viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.8815 5.77913L8.37614 0.354519C8.36474 0.343059 8.35118 0.333965 8.33625 0.32776C8.32132 0.321554 8.30531 0.318359 8.28915 0.318359C8.27298 0.318359 8.25697 0.321554 8.24204 0.32776C8.22711 0.333965 8.21356 0.343059 8.20216 0.354519L4.4941 4.00821C4.47076 4.03136 4.45751 4.06279 4.45722 4.09566C4.45693 4.12853 4.46962 4.16018 4.49254 4.18375L4.4941 4.1853L5.11547 4.79735L3.29484 6.58847C3.27151 6.61162 3.25825 6.64305 3.25796 6.67592C3.25767 6.70879 3.27037 6.74045 3.29329 6.76401L3.29484 6.76556L3.90845 7.36985L0.970899 10.2748H0.125828C0.0574772 10.2748 0 10.3307 0 10.3991V11.2565C0 11.3249 0.0559238 11.3808 0.124275 11.3808H5.48208C5.51471 11.3808 5.54577 11.3684 5.56908 11.3451L6.75124 10.1707L7.37883 10.789C7.39024 10.8004 7.40379 10.8095 7.41872 10.8157C7.43365 10.8219 7.44966 10.8251 7.46582 10.8251C7.48199 10.8251 7.498 10.8219 7.51293 10.8157C7.52786 10.8095 7.54141 10.8004 7.55282 10.789L9.37189 8.99319L9.99482 9.6068C10.0062 9.61826 10.0198 9.62735 10.0347 9.63356C10.0496 9.63976 10.0656 9.64296 10.0818 9.64296C10.098 9.64296 10.114 9.63976 10.1289 9.63356C10.1438 9.62735 10.1574 9.61826 10.1688 9.6068L13.8769 5.95311C13.9297 5.90651 13.9297 5.82884 13.8815 5.77913ZM5.0611 10.2655H2.57249L4.66032 8.19938L5.90462 9.42505L5.0611 10.2655ZM7.46582 9.30077L4.80323 6.67701L5.86889 5.62689L8.53148 8.25065L7.46582 9.30077ZM10.0834 8.1186L6.00093 4.09675L8.28915 1.84271L12.3716 5.86612L10.0834 8.1186Z" fill="#1876B2" />
                            <path d="M10.2734 10.6221H16V11.6826H10.2734V10.6221Z" fill="#1876B3" />
                        </svg>
                    </Button>
                </Box>
            </Box>
        </>
    )
}
export default AreaMapTab;