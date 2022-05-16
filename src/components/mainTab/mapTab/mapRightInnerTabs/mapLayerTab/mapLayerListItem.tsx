import { List, ListItem, FormControlLabel, Checkbox, Box, Typography } from '@mui/material';



const mpaLayerDate = [
    {
        "id": 0,
        "checkboxName": "Bridger-Processed-Emissions",
        "labelText": "Bridger Processed Emissions",
        "guide": [
            {
                "id": 0,
                "guideLabelColorCode": " #1876B2",
                "guideLabelText": "Persistent - Yes"
            },
            {
                "id": 1,
                "guideLabelColorCode": " #FF5722",
                "guideLabelText": "Persistent - No"
            },
        ]
    },
    {
        "id": 1,
        "checkboxName": "Bridger-Preliminary-Detections",
        "labelText": "Bridger Preliminary Detections",
        "guide": [
            {
                "id": 0,
                "guideLabelColorCode": "#1876B2",
                "guideLabelText": "Persistent - Yes"
            },
            {
                "id": 1,
                "guideLabelColorCode": " #FF5722",
                "guideLabelText": "Persistent - No"
            },
        ]
    },
    {
        "id": 2,
        "checkboxName": "Bridger-Previous-Flight-Data",
        "labelText": "Bridger Preliminary Detections",
        "guide": [
            {
                "id": 0,
                "guideLabelColorCode": "#1876B2",
                "guideLabelText": "Persistent - Yes"
            },
            {
                "id": 1,
                "guideLabelColorCode": " #FF5722",
                "guideLabelText": "Persistent - No"
            },
        ]
    },
    {
        "id": 3,
        "checkboxName": "GHGSat-Aircraft-Processed-Emissions",
        "labelText": "GHGSat Aircraft Processed Emissions",
        "guide": [
            {
                "id": 0,
                "guideLabelColorCode": "#1876B2",
                "guideLabelText": "Persistent - Yes"
            },
            {
                "id": 1,
                "guideLabelColorCode": " #FF5722",
                "guideLabelText": "Persistent - No"
            },
        ]
    },
    {
        "id": 4,
        "checkboxName": "Flight-Plan",
        "labelText": "Flight Plan (Approximate)",
        "guide": [
            {
                "id": 0,
                "guideLabelColorCode": "#1876B2",
                "guideLabelText": "Persistent - Yes"
            },
            {
                "id": 1,
                "guideLabelColorCode": " #FF5722",
                "guideLabelText": "Persistent - No"
            },
        ]
    },
    {
        "id": 5,
        "checkboxName": "Compressor-Stations",
        "labelText": "Compressor Stations",
        "guide": [
            {
                "id": 0,
                "guideLabelColorCode": "#1876B2",
                "guideLabelText": "Persistent - Yes"
            },
            {
                "id": 1,
                "guideLabelColorCode": " #FF5722",
                "guideLabelText": "Persistent - No"
            },
        ]
    },
    {
        "id": 6,
        "checkboxName": "Processing-Facilities",
        "labelText": "Processing Facilities",
        "guide": [
            {
                "id": 0,
                "guideLabelColorCode": "#1876B2",
                "guideLabelText": "Persistent - Yes"
            },
            {
                "id": 1,
                "guideLabelColorCode": " #FF5722",
                "guideLabelText": "Persistent - No"
            },
        ]
    },
    {
        "id": 7,
        "checkboxName": "Refineries",
        "labelText": "Refineries",
        "guide": [
            {
                "id": 0,
                "guideLabelColorCode": "#1876B2",
                "guideLabelText": "Persistent - Yes"
            },
            {
                "id": 1,
                "guideLabelColorCode": " #FF5722",
                "guideLabelText": "Persistent - No"
            },
        ]
    },
    {
        "id": 8,
        "checkboxName": "ESS-Facilities",
        "labelText": "ESS Facilities (Public)",
        "guide": [
            {
                "id": 0,
                "guideLabelColorCode": "#1876B2",
                "guideLabelText": "Persistent - Yes"
            },
            {
                "id": 1,
                "guideLabelColorCode": " #FF5722",
                "guideLabelText": "Persistent - No"
            },
        ]
    },
    {
        "id": 9,
        "checkboxName": "Gas- Pipelines",
        "labelText": "Gas Pipelines",
        "guide": [
            {
                "id": 0,
                "guideLabelColorCode": "#1876B2",
                "guideLabelText": "Persistent - Yes"
            },
            {
                "id": 1,
                "guideLabelColorCode": " #FF5722",
                "guideLabelText": "Persistent - No"
            },
        ]
    },
    {
        "id": 10,
        "checkboxName": "Operator-Requested-Flyover-Sites",
        "labelText": "Operator Requested Flyover Sites",
        "guide": [
            {
                "id": 0,
                "guideLabelColorCode": "#1876B2",
                "guideLabelText": "Persistent - Yes"
            },
            {
                "id": 1,
                "guideLabelColorCode": " #FF5722",
                "guideLabelText": "Persistent - No"
            },
        ]
    },
    {
        "id": 11,
        "checkboxName": "Alternative-Monitoring-Sites",
        "labelText": "Alternative Monitoring Sites",
        "guide": [
            {
                "id": 0,
                "guideLabelColorCode": "#1876B2",
                "guideLabelText": "Persistent - Yes"
            },
            {
                "id": 1,
                "guideLabelColorCode": " #FF5722",
                "guideLabelText": "Persistent - No"
            },
        ]
    },
    {
        "id": 12,
        "checkboxName": "Bridger-2020-Flyover-Areas",
        "labelText": "Bridger 2020 Flyover Areas",
        "guide": [
            {
                "id": 0,
                "guideLabelColorCode": "#1876B2",
                "guideLabelText": "Persistent - Yes"
            },
            {
                "id": 1,
                "guideLabelColorCode": " #FF5722",
                "guideLabelText": "Persistent - No"
            },
        ]
    },
    {
        "id": 13,
        "checkboxName": "Draft-2020-Flyover-Areas",
        "labelText": "Draft 2020 Flyover Areas",
        "guide": [
            {
                "id": 0,
                "guideLabelColorCode": "#1876B2",
                "guideLabelText": "Persistent - Yes"
            },
            {
                "id": 1,
                "guideLabelColorCode": " #FF5722",
                "guideLabelText": "Persistent - No"
            },
        ]
    }
]

const checkInput = (e: any) => {
    let layerGuideHeight = e.target.closest(".maplayer_item").querySelector(".layer_guide").scrollHeight;
    if (e.target.checked) {
        e.target.closest(".maplayer_item").querySelector(".layer_guide").setAttribute("style", `height:${layerGuideHeight}px`);
    } else {
        e.target.closest(".maplayer_item").querySelector(".layer_guide").setAttribute("style", `height:${0}px`);
    }
}

const MapLayerListItem = () => {
    return (
        <>
            <List sx={{ p: 0 }} className="list">
                {mpaLayerDate.map((item) => {
                    return (
                        <ListItem key={item.id} disablePadding sx={{ mb: 2.75, display: 'block' }} className="maplayer_item">
                            {/* Check Box */}
                            <FormControlLabel sx={{
                                mr: 0, my: -1.875, "& svg": {
                                    color: "rgba(0, 0, 0, 0.2)",
                                    height: { lg: "24px", xs: "20px" },
                                    width: { lg: "24px", xs: "20px" },
                                },
                                "& span":{
                                    fontSize: {lg:"14px",xs:"12px"},
                                },
                            }} control={<Checkbox name={item.checkboxName} onClick={checkInput} />} label={item.labelText} />
                            <Box sx={{ pl: 4, height: 0, overflow: "hidden", transition: "0.3s linear" }} className="layer_guide">
                                {item.guide.map((guideItem) => {
                                    return (
                                        <Box key={guideItem.id} sx={{ display: "flex", alignItems: "center", mt: 2.75 }}>
                                            <Typography component="span" sx={{ height: "18px", width: "18px", borderRadius: "50%", backgroundColor: guideItem.guideLabelColorCode, display: "inline-block", mr: "12px" }}>
                                            </Typography>
                                            <Typography variant='h6' component="span" sx={{  color: "#333333", display: "inline-block" }}>
                                                {guideItem.guideLabelText}
                                            </Typography>
                                        </Box>
                                    );
                                })}
                            </Box>
                        </ListItem>
                    )
                })}
            </List>
        </>
    )
}
export default MapLayerListItem;