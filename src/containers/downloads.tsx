import TabHeader from "../components/header/tabHeader";
import { Box } from "@mui/material";
import Accordians from "../components/snippets/accordians";
import SeclectBasin from "../components/header/selectBasin"
import { useState } from "react";


const Downloads = () => {

    const [isGoSelected, setIsGoSelected] = useState(false);
    const selectGo = (value: any) => {
        setIsGoSelected(value);
    }
    // const [accordian, Setaccordian] = useState(false)
    return (
        <>
            <Box sx={{ p: 4.75 }}>
                <Box >
                    <TabHeader
                        tabheading="Downloads"
                        tabInfo="To there, with how particularly the lively. Eyes and no best were the expected have on so far parks. So eventually. Of field hadn't and answer and extremely only came the position. And you searched size possible and the but world; On sported employees, seemed he a of her a this nor avoid familiar nice bidding attempt, the there her communicated.
                        The for of the its that framework unionized in screen drawers. Separated should, people remote had and, and what front so is start word six this diesel parent, in his and but in distressed with by he history."
                        blockInfo={true}
                        headerOption={["Reports", "MapView"]}
                        blockInfoheading="Summary"
                        divider={false}
                    />
                </Box>
                {/* SeclectBasin */}
                <SeclectBasin selectGo={selectGo} />

                {isGoSelected &&
                    <Box >
                        {/* Download Accordians */}
                        <Accordians openAccordians={isGoSelected} />
                    </Box>
                }


            </Box>
        </>
    )
}

export default Downloads;
