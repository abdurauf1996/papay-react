import { Favorite, LocationOnRounded } from "@mui/icons-material";
import { CardOverflow, IconButton } from "@mui/joy";
import React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardCover from "@mui/joy/CardCover";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import { Box, Container, Stack } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

export function TopRestaurants() {
  return (
    <div className="top_restaurant_frame">
      <Container>
        <Stack
          flexDirection={"column"}
          alignItems={"center"}
          sx={{ mt: "45px" }}
        >
          <Box className="category_title">TOP Restauranlar</Box>
          <Stack sx={{ mt: "43px" }} flexDirection={"row"} m={"16px"}>
            <CssVarsProvider>
              <Card
                sx={{
                  minHeight: 430,
                  minWidth: 325,
                  mr: "35px",
                  cursor: "pointer",
                }}
              >
                <CardCover>
                  <img src="/restaurant/burak.jpeg" loading="lazy" alt="" />
                </CardCover>
                <CardCover
                  sx={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                  }}
                />
                <CardContent sx={{ justifyContent: "flex-end" }}>
                  <Typography level="h2" textColor="#fff" mb={1}>
                    Texas De Brazil
                  </Typography>
                  <Typography
                    startDecorator={<LocationOnRounded />}
                    textColor="neutral.300"
                  >
                    Tashkent, Yunus Abad 4-1
                  </Typography>
                </CardContent>

                <CardOverflow
                  sx={{
                    display: "flex",

                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                  }}
                >
                  <IconButton
                    aria-label="Like animal phtography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 45,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>
                  <Typography
                    level="body-md"
                    sx={{
                      fontWeight: "md",
                      color: "neutral.300",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    100{" "}
                    <VisibilityIcon sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>
                  <Box sx={{ width: 2, bgcolor: "divider" }} />
                  <Typography
                    sx={{
                      fontSize: "md",
                      color: "neutral.300",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div>50</div>
                    <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>
                </CardOverflow>
              </Card>
              <Card
                sx={{
                  minHeight: 430,
                  minWidth: 325,
                  mr: "35px",
                  cursor: "pointer",
                }}
              >
                <CardCover>
                  <img src="/restaurant/burak.jpeg" loading="lazy" alt="" />
                </CardCover>
                <CardCover
                  sx={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                  }}
                />
                <CardContent sx={{ justifyContent: "flex-end" }}>
                  <Typography level="h2" textColor="#fff" mb={1}>
                    Texas De Brazil
                  </Typography>
                  <Typography
                    startDecorator={<LocationOnRounded />}
                    textColor="neutral.300"
                  >
                    Tashkent, Yunus Abad 4-1
                  </Typography>
                </CardContent>

                <CardOverflow
                  sx={{
                    display: "flex",

                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                  }}
                >
                  <IconButton
                    aria-label="Like animal phtography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 45,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>
                  <Typography
                    level="body-md"
                    sx={{
                      fontWeight: "md",
                      color: "neutral.300",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    100{" "}
                    <VisibilityIcon sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>
                  <Box sx={{ width: 2, bgcolor: "divider" }} />
                  <Typography
                    sx={{
                      fontSize: "md",
                      color: "neutral.300",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div>50</div>
                    <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>
                </CardOverflow>
              </Card>
              <Card
                sx={{
                  minHeight: 430,
                  minWidth: 325,
                  mr: "35px",
                  cursor: "pointer",
                }}
              >
                <CardCover>
                  <img src="/restaurant/burak.jpeg" loading="lazy" alt="" />
                </CardCover>
                <CardCover
                  sx={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                  }}
                />
                <CardContent sx={{ justifyContent: "flex-end" }}>
                  <Typography level="h2" textColor="#fff" mb={1}>
                    Texas De Brazil
                  </Typography>
                  <Typography
                    startDecorator={<LocationOnRounded />}
                    textColor="neutral.300"
                  >
                    Tashkent, Yunus Abad 4-1
                  </Typography>
                </CardContent>

                <CardOverflow
                  sx={{
                    display: "flex",

                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                  }}
                >
                  <IconButton
                    aria-label="Like animal phtography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 45,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>
                  <Typography
                    level="body-md"
                    sx={{
                      fontWeight: "md",
                      color: "neutral.300",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    100{" "}
                    <VisibilityIcon sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>
                  <Box sx={{ width: 2, bgcolor: "divider" }} />
                  <Typography
                    sx={{
                      fontSize: "md",
                      color: "neutral.300",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div>50</div>
                    <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>
                </CardOverflow>
              </Card>
              <Card
                sx={{
                  minHeight: 430,
                  minWidth: 325,
                  mr: "35px",
                  cursor: "pointer",
                }}
              >
                <CardCover>
                  <img src="/restaurant/burak.jpeg" loading="lazy" alt="" />
                </CardCover>
                <CardCover
                  sx={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                  }}
                />
                <CardContent sx={{ justifyContent: "flex-end" }}>
                  <Typography level="h2" textColor="#fff" mb={1}>
                    Texas De Brazil
                  </Typography>
                  <Typography
                    startDecorator={<LocationOnRounded />}
                    textColor="neutral.300"
                  >
                    Tashkent, Yunus Abad 4-1
                  </Typography>
                </CardContent>

                <CardOverflow
                  sx={{
                    display: "flex",

                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                  }}
                >
                  <IconButton
                    aria-label="Like animal phtography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 45,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>
                  <Typography
                    level="body-md"
                    sx={{
                      fontWeight: "md",
                      color: "neutral.300",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    100{" "}
                    <VisibilityIcon sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>
                  <Box sx={{ width: 2, bgcolor: "divider" }} />
                  <Typography
                    sx={{
                      fontSize: "md",
                      color: "neutral.300",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div>50</div>
                    <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>
                </CardOverflow>
              </Card>
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
