import { Box, Container } from "@mui/material";

const FullscreenCard = (props: any) => {
    return (
      <Container
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Box
            sx={{
                marginTop: 8,
                boxShadow: "0px 4px 10px #F3F4F6",
                padding: "50px 30px",
                backgroundColor: "white",
                maxWidth: "529px",
                width: "100%"
            }}
        >
            {props.children}
        </Box>
      </Container>
    )
}

export default FullscreenCard;