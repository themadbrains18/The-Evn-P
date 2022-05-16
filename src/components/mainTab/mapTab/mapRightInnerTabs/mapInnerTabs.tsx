import { Box, styled } from '@mui/material';
import { TabsUnstyled, TabsListUnstyled, TabPanelUnstyled, TabUnstyled } from '@mui/base';
import AreaMapTab from './areaMapTab/areaMapTab';
import MapLayerTab from './mapLayerTab/mapLayerTab';
import LocationFinderTab from './locationFinderTab/locationFinderTab';
import BasicStasticsTab from './basinStasticsTab/basicStasticsTab';
import Tooltip from '@mui/material/Tooltip';

const Tab = styled(TabUnstyled)``;
const TabPanel = styled(TabPanelUnstyled)``;
const TabsList = styled(TabsListUnstyled)``;
const MapInnerTabs = () => {

  // const classes = useStyles();
  const ToolTipData = [
    {
      svgIcon: <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 5.00978L10.0196 0L20 4.99022L10.0392 10L0 5.00978ZM2.50489 9L0 10.1812L9.98043 15L20 10.2L17.5342 9L9.98043 12.6L2.50489 9ZM2.50489 14L0 15.1812L9.98043 20L20 15.2L17.5342 14L9.98043 17.6L2.50489 14Z" fill="#0F75BC" />
      </svg>,
      title: "Map Layers"
    },
    {
      svgIcon: <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.42553 17L2 9.34043L9.82979 2L18 6.78723L16.2979 15.0851L6.42553 17Z" fill="#0F75BC" />
      </svg>,
      title: "Area Map"
    },
    {
      svgIcon: <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 7.38251C9.51774 7.38251 9.06452 7.57804 8.72258 7.93539C8.55455 8.11048 8.42131 8.31857 8.33052 8.54767C8.23973 8.77678 8.19318 9.02239 8.19355 9.27037C8.19355 9.77436 8.38226 10.248 8.72258 10.6053C8.89013 10.7809 9.08924 10.9202 9.30847 11.0151C9.5277 11.11 9.76271 11.1586 10 11.1582C10.4823 11.1582 10.9355 10.961 11.2774 10.6053C11.6194 10.248 11.8065 9.77436 11.8065 9.27037C11.8065 8.76638 11.6194 8.29273 11.2774 7.93539C10.9355 7.57804 10.4823 7.38251 10 7.38251ZM15.5258 6.74368C15.2222 6.01193 14.7843 5.3494 14.2371 4.79346C13.6881 4.2325 13.0408 3.78727 12.3306 3.48208C11.5919 3.16182 10.8081 3 10 3C9.19194 3 8.40806 3.16182 7.66935 3.48039C6.95484 3.78885 6.31452 4.23048 5.7629 4.79177C5.216 5.34803 4.77825 6.01048 4.47419 6.74199C4.15968 7.5005 4 8.30621 4 9.13552C4 10.3255 4.27258 11.5105 4.80806 12.6533C5.23871 13.572 5.84032 14.467 6.59839 15.3182C7.89355 16.7712 9.25161 17.6595 9.6371 17.8972C9.74652 17.9647 9.87131 18.0002 9.99839 18C10.1242 18 10.2484 17.9663 10.3597 17.8972C10.7452 17.6595 12.1032 16.7712 13.3984 15.3182C14.1565 14.4687 14.7581 13.572 15.1887 12.6533C15.7274 11.5122 16 10.3289 16 9.13721C16 8.3079 15.8403 7.50219 15.5258 6.74368ZM10 12.237C8.43226 12.237 7.16129 10.9088 7.16129 9.27037C7.16129 7.63198 8.43226 6.30374 10 6.30374C11.5677 6.30374 12.8387 7.63198 12.8387 9.27037C12.8387 10.9088 11.5677 12.237 10 12.237Z" fill="#0F75BC" />
      </svg>,
      title: "Location Finder"
    },
    {
      svgIcon: <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.3438 15.4688H3.90625V3.28125C3.90625 3.19531 3.83594 3.125 3.75 3.125H2.65625C2.57031 3.125 2.5 3.19531 2.5 3.28125V16.7188C2.5 16.8047 2.57031 16.875 2.65625 16.875H17.3438C17.4297 16.875 17.5 16.8047 17.5 16.7188V15.625C17.5 15.5391 17.4297 15.4688 17.3438 15.4688ZM5.3125 14.2188H15.7812C15.8672 14.2188 15.9375 14.1484 15.9375 14.0625V5.54688C15.9375 5.40625 15.7676 5.33789 15.6699 5.43555L11.5625 9.54297L9.11328 7.12109C9.08391 7.09202 9.04426 7.0757 9.00293 7.0757C8.9616 7.0757 8.92194 7.09202 8.89258 7.12109L5.20117 10.8242C5.18683 10.8386 5.17548 10.8556 5.16777 10.8744C5.16006 10.8932 5.15615 10.9133 5.15625 10.9336V14.0625C5.15625 14.1484 5.22656 14.2188 5.3125 14.2188Z" fill="#0F75BC" />
      </svg>,
      title: "Basic Stastics"
    }
  ]

  // Map Inner Tabs Content
  const MapInnerTabData = [
    {
      mapinnerData: <MapLayerTab />
    },
    {
      mapinnerData: <AreaMapTab />
    },
    {
      mapinnerData: <LocationFinderTab />
    },
    {
      mapinnerData: <BasicStasticsTab />
    }
  ]

  return (
    <>
      <Box sx={{ pt: 4, px: { xl: 3, xs: 1.5 } }}>
        <TabsUnstyled defaultValue={0} >
          {/* ===  Tab List === */}
          <TabsList sx={{
            minHeight: "48px",
            width: "1",
            p: "5px",
            backgroundColor: "#F4F8FA",
            borderRadius: "6px",
            mb: "23px",
            display: "flex",
            justifyContent: "center",
            alignContent: "space-between",
            "& button": {
              position: "relative",
              color: "common.white",
              cursor: "pointer",
              width: "1",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "4px",
              transition: "0.3s",
              "&:hover": {
                "& svg,& path": {
                  fill: "#339AF0!important",
                }
              },
              "&:focus": {
                fill: "#fff",
              },
              "&::before ": {
                content: '""',
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "0",
                height: "calc(100% - 10px)",
                width: "1px",
                background: "#0000001a",
              },
              "&:first-of-type::before ": {
                display: "none"
              },
              "&[aria-selected=true]": {
                backgroundColor: "#0F75Bc",
                "& svg,& path": {
                  fill: "#fff!important",
                },
                "&::before ": {
                  display: "none",
                },
                "& + button::before  ": {
                  display: "none"
                },

              }
            }
          }
          } >

            {/* Map Tab Data */}
            {
              ToolTipData.map((val,index) => {
                return (
                  < Tooltip key={index} title={val.title} arrow placement="top">
                    <Tab>
                      {val.svgIcon}
                    </Tab>
                  </Tooltip>
                )
              })
            }
            {/* Area Map Tab */}
          </TabsList>

          {/* Map  Tab */}
          {MapInnerTabData.map((value,index) => {
            return (
              <TabPanel sx={{ width: "1" }} key={index} value={index}>
                {value.mapinnerData}
              </TabPanel>
            )
          })}
        </TabsUnstyled>
      </Box>
    </>
  )
}
export default MapInnerTabs;