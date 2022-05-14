
import { useEffect } from 'react';
import { Box, Typography, Divider, Button } from '@mui/material';

const AccordiansData = [
    {
        id: 0,
        ques: "Preliminary",
        ans: "To there, with how particularly the lively. Eyes and no best were the expected have on so far parks. So eventually. Of field hadn't and answer and extremely only came the position.",
    },
    {
        id: 1,
        ques: "Processed",
        ans: "To there, with how particularly the lively. Eyes and no best were the expected have on so far parks. So eventually. Of field hadn't and answer and extremely only came the position.",
    },
    {
        id: 2,
        ques: "Equipment",
        ans: "To there, with how particularly the lively. Eyes and no best were the expected have on so far parks. So eventually. Of field hadn't and answer and extremely only came the position.",
    },
    {
        id: 3,
        ques: "Bridger Reports",
        ans: "To there, with how particularly the lively. Eyes and no best were the expected have on so far parks. So eventually. Of field hadn't and answer and extremely only came the position."
    }
]
const Accordians = (props: any) => {
    useEffect(() => {
        const AccodiansQues = document.querySelector("#Accodians .accodian_ques");
        const AccodiansAns = document.querySelector("#Accodians .accodian_ans");
        AccodiansQues?.classList.add("active");
        AccodiansAns?.setAttribute("style", `height:${AccodiansAns?.scrollHeight}px`);
    }, []);

    const toggleAccodian = (e: any) => {
        const ansElement: any = e.currentTarget.nextElementSibling;
        if (ansElement.getAttribute("style")) {
            ansElement.removeAttribute("style");
            e.currentTarget.classList.remove("active");
        } else {
            e.currentTarget.classList.add("active");  
            ansElement.setAttribute("style", `height:${ansElement.scrollHeight}px`);
        }
    }
    return (
        <>
            <Box component="ul" id="Accodians">
                {AccordiansData.map((elem) => {
                    return (
                        <Box key={elem.id} component="li" sx={{ padding: { xl: "30px 30px 33px", lg: "25px 25px 28px", xs: "20px 20px 23px" }, backgroundColor: "background.default", marginTop: "20px" }}>
                            {/* Question */}
                            <Box sx={{
                                display: 'flex', justifyContent: 'space-between', alignItems: "center", cursor: "pointer",
                                "& .rotatePath": {
                                    transition: "0.3s",
                                    transformOrigin: "center",
                                },
                                "&.active .rotatePath": {
                                    transform: "rotate(90deg)"
                                }
                            }} onClick={toggleAccodian} className="accodian_ques">
                                <Typography variant='h4' component="h4" >
                                    {elem.ques}
                                </Typography>
                                <Box sx={{ "& svg": { height: { lg: "initial", xs: "20px" }, width: { lg: "initial", xs: "20px" } } }}>
                                    <svg width={39} height={39} viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="rotatePath" d="M18.3574 5.78906H20.6426C20.8457 5.78906 20.9473 5.89062 20.9473 6.09375V32.9062C20.9473 33.1094 20.8457 33.2109 20.6426 33.2109H18.3574C18.1543 33.2109 18.0527 33.1094 18.0527 32.9062V6.09375C18.0527 5.89062 18.1543 5.78906 18.3574 5.78906Z" fill="#0F75BC" />
                                        <path d="M6.70312 18.0547H32.2969C32.5 18.0547 32.6016 18.1562 32.6016 18.3594V20.6445C32.6016 20.8477 32.5 20.9492 32.2969 20.9492H6.70312C6.5 20.9492 6.39844 20.8477 6.39844 20.6445V18.3594C6.39844 18.1562 6.5 18.0547 6.70312 18.0547Z" fill="#0F75BC" />
                                    </svg>
                                </Box>
                            </Box>
                            {/* Answers */}
                            <Box sx={{ height: "0px", overflow: "hidden", transition: "0.3s" }} className="accodian_ans">
                                <Divider sx={{ borderBottomWidth: '2px', borderColor: '#F5F5F5', margin: '6px 0 17px' }} />
                                <Typography variant='h6'  component="p" sx={{  color: "text.secondary" }}>
                                    {elem.ans}
                                </Typography>

                                <Box sx={{ width: "100%", textAlign: "end", marginTop: "17px" }}>
                                    <Button variant="contained" sx={{  padding: { lg: "17px 44px", xs: "12px 16px" }, mr: "20px", gap: "12px" }}>
                                        <svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.4707 10V10.75C1.4707 11.3467 1.7217 11.919 2.16848 12.341C2.61526 12.7629 3.22122 13 3.85306 13H11.7942C12.4261 13 13.032 12.7629 13.4788 12.341C13.9256 11.919 14.1766 11.3467 14.1766 10.75V10M11.0001 7L7.82364 10M7.82364 10L4.64717 7M7.82364 10V1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        KMZ
                                    </Button>
                                    <Button variant="contained" sx={{  padding: { lg: "17px 44px", xs: "12px 16px" }, gap: "12px" }}>
                                        <svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.4707 10V10.75C1.4707 11.3467 1.7217 11.919 2.16848 12.341C2.61526 12.7629 3.22122 13 3.85306 13H11.7942C12.4261 13 13.032 12.7629 13.4788 12.341C13.9256 11.919 14.1766 11.3467 14.1766 10.75V10M11.0001 7L7.82364 10M7.82364 10L4.64717 7M7.82364 10V1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        CSV
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    )
                })}
            </Box>
        </>
    );
}
export default Accordians;