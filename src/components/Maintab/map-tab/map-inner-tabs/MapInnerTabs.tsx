import { Box, styled } from '@mui/material';
import  {TabsUnstyled,TabsListUnstyled,TabPanelUnstyled,TabUnstyled,buttonUnstyledClasses, tabUnstyledClasses } from '@mui/base';
import AreaMapTab from './area-map-tab/AreaMapTab';
import MapLayerTab from './map-layer-tab/MapLayerTab';
import LocationFinderTab from './LocationFinderTab';
import BasicStasticsTab from './basin-stastics-tab/BasicStasticsTab';


const Tab = styled(TabUnstyled)`
  color: white;
  cursor: pointer;
  width: 100%;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: 0.3s;
  &:hover {
    & svg,
    & path{
        fill:#339AF0!important;
    }
  }
  &:focus {
    fill:#fff;
    
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #0F75BC;
    & svg,
    & path{
        fill:#fff!important;
    }
  }
  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-height: 48px;
  width: 100%;
  padding: 5px;
  background-color: #F4F8FA;
  border-radius: 6px;
  margin-bottom: 23px;
  display: flex;
  justify-content: center;
  align-content: space-between;
`;

const MapInnerTabs = () => {
    return (
        <>
            <Box sx={{ pt: 3.375, px: 3, height: "100%" }}>
                <TabsUnstyled defaultValue={0} >
                    {/* ===  Tab List === */}
                    <TabsList>
                        <Tab>
                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.42553 17L2 9.34043L9.82979 2L18 6.78723L16.2979 15.0851L6.42553 17Z" fill="#0F75BC" />
                            </svg>
                        </Tab>
                        <Tab>
                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 7.38251C9.51774 7.38251 9.06452 7.57804 8.72258 7.93539C8.55455 8.11048 8.42131 8.31857 8.33052 8.54767C8.23973 8.77678 8.19318 9.02239 8.19355 9.27037C8.19355 9.77436 8.38226 10.248 8.72258 10.6053C8.89013 10.7809 9.08924 10.9202 9.30847 11.0151C9.5277 11.11 9.76271 11.1586 10 11.1582C10.4823 11.1582 10.9355 10.961 11.2774 10.6053C11.6194 10.248 11.8065 9.77436 11.8065 9.27037C11.8065 8.76638 11.6194 8.29273 11.2774 7.93539C10.9355 7.57804 10.4823 7.38251 10 7.38251ZM15.5258 6.74368C15.2222 6.01193 14.7843 5.3494 14.2371 4.79346C13.6881 4.2325 13.0408 3.78727 12.3306 3.48208C11.5919 3.16182 10.8081 3 10 3C9.19194 3 8.40806 3.16182 7.66935 3.48039C6.95484 3.78885 6.31452 4.23048 5.7629 4.79177C5.216 5.34803 4.77825 6.01048 4.47419 6.74199C4.15968 7.5005 4 8.30621 4 9.13552C4 10.3255 4.27258 11.5105 4.80806 12.6533C5.23871 13.572 5.84032 14.467 6.59839 15.3182C7.89355 16.7712 9.25161 17.6595 9.6371 17.8972C9.74652 17.9647 9.87131 18.0002 9.99839 18C10.1242 18 10.2484 17.9663 10.3597 17.8972C10.7452 17.6595 12.1032 16.7712 13.3984 15.3182C14.1565 14.4687 14.7581 13.572 15.1887 12.6533C15.7274 11.5122 16 10.3289 16 9.13721C16 8.3079 15.8403 7.50219 15.5258 6.74368ZM10 12.237C8.43226 12.237 7.16129 10.9088 7.16129 9.27037C7.16129 7.63198 8.43226 6.30374 10 6.30374C11.5677 6.30374 12.8387 7.63198 12.8387 9.27037C12.8387 10.9088 11.5677 12.237 10 12.237Z" fill="#0F75BC" />
                            </svg>
                        </Tab>
                        <Tab>
                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.02187 8.13348C7.77765 7.74047 7.58198 7.32285 7.43585 6.88965V13.2505L9.48452 9.73856C8.90609 9.29996 8.4096 8.75734 8.02187 8.13348Z" fill="#0F75BC" />
                                <path d="M13.0769 0.192383C10.4305 0.192383 8.27747 2.34543 8.27747 4.99183C8.27747 5.36199 8.32102 5.72554 8.40293 6.07699C8.40477 6.08496 8.40665 6.09297 8.40852 6.1009C8.41762 6.13918 8.42723 6.1773 8.43727 6.21527C8.43926 6.22277 8.44129 6.23027 8.44336 6.23773C8.48809 6.40355 8.54157 6.56629 8.6034 6.72543C8.60614 6.73242 8.60875 6.73945 8.61153 6.74648C8.62532 6.78144 8.63958 6.81621 8.65415 6.85078C8.65844 6.86105 8.66282 6.87129 8.66723 6.88152C8.6818 6.91543 8.69661 6.94922 8.71196 6.98277C8.7159 6.99148 8.72004 7.00008 8.72407 7.00875C8.77504 7.11855 8.83004 7.22633 8.88903 7.33187C8.89333 7.33961 8.8975 7.34738 8.90184 7.35511C8.91844 7.38449 8.93563 7.41355 8.9529 7.44254C8.9611 7.45629 8.96922 7.47008 8.97754 7.48375C8.99415 7.51105 9.01102 7.53816 9.02817 7.56511C9.03754 7.57992 9.04711 7.59461 9.05672 7.60929C9.07387 7.63566 9.0911 7.66199 9.10876 7.68804C9.11829 7.70207 9.12813 7.71597 9.13782 7.72988C9.17411 7.78207 9.21129 7.83355 9.24958 7.88429C9.25747 7.89476 9.26516 7.90547 9.27313 7.91582C9.29016 7.93801 9.3077 7.9598 9.32516 7.98176C9.33911 7.99929 9.35301 8.01687 9.36723 8.03426C9.38422 8.055 9.40145 8.07551 9.41879 8.09593C9.4343 8.11426 9.44993 8.13238 9.46567 8.15047C9.48262 8.16992 9.49969 8.18929 9.51696 8.20847C9.53438 8.22777 9.55211 8.24687 9.56985 8.2659C9.58618 8.28343 9.60239 8.30109 9.61899 8.3184C9.64493 8.34543 9.67137 8.37203 9.69793 8.39847C9.71672 8.41718 9.73579 8.43566 9.75489 8.45406C9.77958 8.47785 9.80434 8.50148 9.82954 8.52476C9.8452 8.53918 9.8611 8.55332 9.87696 8.5675C9.89934 8.58758 9.9218 8.60754 9.94458 8.62718C9.96094 8.64133 9.97747 8.65535 9.99403 8.66926C10.0176 8.68906 10.0414 8.70859 10.0654 8.72801C10.0812 8.74082 10.097 8.75367 10.113 8.76625C10.1415 8.78867 10.1703 8.81062 10.1993 8.83246C10.2111 8.84129 10.2227 8.85043 10.2346 8.85918C10.2752 8.8891 10.3163 8.9184 10.358 8.94711C10.37 8.95539 10.3822 8.96332 10.3943 8.97144C10.4251 8.99226 10.4561 9.01281 10.4874 9.03297C10.5032 9.04308 10.5191 9.05301 10.535 9.06297C10.5637 9.0809 10.5925 9.09859 10.6216 9.11593C10.638 9.1257 10.6545 9.13543 10.6709 9.14504C10.7018 9.16293 10.7329 9.18035 10.7641 9.19758C10.7787 9.20562 10.7932 9.21375 10.8079 9.22164C10.8537 9.24629 10.8999 9.27043 10.9468 9.29363L11.7791 10.577L12.5 11.6883L12.5929 11.8316C12.6993 11.9955 12.8815 12.0945 13.0769 12.0945C13.2724 12.0945 13.4545 11.9956 13.5609 11.8316L13.6538 11.6883L13.7089 11.6034L14.368 10.5872L15.2071 9.29367C15.254 9.27039 15.3004 9.24621 15.3463 9.22152C15.3611 9.21359 15.3756 9.20531 15.3903 9.19726C15.4215 9.18008 15.4525 9.16269 15.4832 9.14484C15.5 9.13511 15.5167 9.12519 15.5333 9.11523C15.5621 9.09808 15.5906 9.08066 15.6189 9.06293C15.6352 9.05265 15.6517 9.04242 15.6679 9.03199C15.6977 9.01281 15.7273 8.99312 15.7566 8.97332C15.7704 8.9641 15.7842 8.95504 15.7978 8.94566C15.8394 8.91695 15.8805 8.88777 15.9211 8.85789C15.9318 8.84992 15.9423 8.84164 15.953 8.83367C15.9831 8.81105 16.0131 8.78828 16.0425 8.765C16.059 8.75199 16.0752 8.73875 16.0915 8.7255C16.1149 8.70664 16.1381 8.68761 16.161 8.66832C16.1785 8.65363 16.1958 8.63883 16.213 8.6239C16.2343 8.60543 16.2554 8.58675 16.2765 8.56789C16.2939 8.55222 16.3113 8.53664 16.3285 8.52078C16.3493 8.50164 16.3697 8.48211 16.39 8.46258C16.4065 8.44676 16.4232 8.43117 16.4395 8.41515C16.4726 8.3825 16.5053 8.34937 16.5375 8.31582C16.5561 8.29644 16.5741 8.2766 16.5924 8.25691C16.608 8.24004 16.6237 8.22316 16.6391 8.20605C16.6582 8.18488 16.6769 8.16344 16.6956 8.14195C16.7093 8.12613 16.723 8.11031 16.7365 8.09433C16.7557 8.07164 16.7747 8.04879 16.7935 8.02574C16.8053 8.01121 16.817 7.99656 16.8286 7.98187C16.8483 7.95711 16.868 7.93234 16.8872 7.90722C16.8947 7.8975 16.9018 7.88758 16.9092 7.87781C16.9804 7.78312 17.0481 7.6859 17.1121 7.58629C17.1175 7.57785 17.123 7.56957 17.1283 7.56109C17.1481 7.52988 17.1674 7.49836 17.1865 7.46668C17.1922 7.4573 17.1978 7.44789 17.2034 7.43851C17.2227 7.40582 17.2418 7.37297 17.2604 7.33984C17.2638 7.33375 17.2671 7.32761 17.2705 7.32152C17.3559 7.16793 17.4329 7.00965 17.5012 6.84719C17.5018 6.84582 17.5024 6.84441 17.503 6.84304C17.5198 6.80277 17.5361 6.76226 17.5519 6.72156C17.553 6.71883 17.554 6.71605 17.5551 6.71332C17.6528 6.45976 17.7293 6.19715 17.7831 5.92777C17.7831 5.92773 17.7831 5.92765 17.7831 5.92762C17.844 5.62285 17.8763 5.3098 17.8763 4.99183C17.8764 2.34543 15.7234 0.192383 13.0769 0.192383ZM13.0769 7.59777C11.64 7.59777 10.471 6.42875 10.471 4.99183C10.471 3.55492 11.64 2.38586 13.0769 2.38586C14.5138 2.38586 15.6829 3.55488 15.6829 4.99183C15.6829 6.42875 14.5138 7.59777 13.0769 7.59777Z" fill="#0F75BC" />
                                <path d="M19.5603 6.36258L18.9052 6.20215C18.7636 6.88242 18.5032 7.53609 18.132 8.13352C17.6044 8.9823 16.8762 9.68156 16.0129 10.1715L15.1357 11.5238L17.1962 14.0383H20V6.92293C20 6.65715 19.8184 6.42578 19.5603 6.36258Z" fill="#0F75BC" />
                                <path d="M0.714141 4.82419C0.542148 4.78204 0.360195 4.82126 0.220742 4.93064C0.0814063 5.04005 0 5.2074 0 5.38454V10.9615H3.07691C3.2316 10.9615 3.3798 11.0236 3.48824 11.1339L6.28203 13.975V6.18775L0.714141 4.82419Z" fill="#0F75BC" />
                                <path d="M11.6249 12.4596L10.4038 10.5771H10.3313L7.43585 15.5408V19.6837L12.5 18.4435V13.1494C12.1453 13.0243 11.8364 12.7857 11.6249 12.4596Z" fill="#0F75BC" />
                                <path d="M16.923 15.1928C16.7502 15.1928 16.5864 15.1152 16.4768 14.9815L14.4746 12.5381C14.2661 12.8242 13.9794 13.0348 13.6538 13.1495V18.4123L19.2858 19.7915C19.3312 19.8027 19.3772 19.8081 19.423 19.8081C19.5508 19.8081 19.6766 19.7656 19.7792 19.685C19.9186 19.5757 20 19.4084 20 19.2312V15.1928H16.923Z" fill="#0F75BC" />
                                <path d="M2.83512 12.1152H0V17.6921C0 17.9579 0.181523 18.1893 0.439687 18.2525L6.28203 19.6833V15.6206L2.83512 12.1152Z" fill="#0F75BC" />
                            </svg>
                        </Tab>
                        <Tab>
                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.3438 15.4688H3.90625V3.28125C3.90625 3.19531 3.83594 3.125 3.75 3.125H2.65625C2.57031 3.125 2.5 3.19531 2.5 3.28125V16.7188C2.5 16.8047 2.57031 16.875 2.65625 16.875H17.3438C17.4297 16.875 17.5 16.8047 17.5 16.7188V15.625C17.5 15.5391 17.4297 15.4688 17.3438 15.4688ZM5.3125 14.2188H15.7812C15.8672 14.2188 15.9375 14.1484 15.9375 14.0625V5.54688C15.9375 5.40625 15.7676 5.33789 15.6699 5.43555L11.5625 9.54297L9.11328 7.12109C9.08391 7.09202 9.04426 7.0757 9.00293 7.0757C8.9616 7.0757 8.92194 7.09202 8.89258 7.12109L5.20117 10.8242C5.18683 10.8386 5.17548 10.8556 5.16777 10.8744C5.16006 10.8932 5.15615 10.9133 5.15625 10.9336V14.0625C5.15625 14.1484 5.22656 14.2188 5.3125 14.2188Z" fill="#0F75BC" />
                            </svg>
                        </Tab>
                    </TabsList>


                    {/* ===  Tab Panels === */}
                    {/* Area Map Tab */}
                    <TabPanel value={0}>
                        <AreaMapTab />
                    </TabPanel>
                    {/* Location Finder Tab */}
                    <TabPanel value={1}>
                        <LocationFinderTab />
                    </TabPanel>
                    {/* Map Layer Tab */}
                    <TabPanel value={2}>
                        <MapLayerTab />
                    </TabPanel>
                    <TabPanel value={3}>
                        <BasicStasticsTab/>
                    </TabPanel>
                </TabsUnstyled>
            </Box>
        </>
    )
}
export default MapInnerTabs;