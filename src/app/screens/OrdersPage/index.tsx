import React, { useEffect, useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import "../../../css/order.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";

import PausedOrders from "../../components/orders/pausedOrders";
import FinishedOrders from "../../components/orders/finishedOrders";
import ProcessOrders from "../../components/orders/processOrders";

import Marginer from "../../components/marginer";

export function OrdersPage() {
  /** INITIALIZATION **/
  const [value, setValue] = useState("1");

  /** HANDLERS *****/
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="order_page">
      <Container
        maxWidth="lg"
        style={{ display: "flex", flexDirection: "row" }}
        sx={{ mt: "50px", mb: "50px" }}
      >
        <Stack className="order_left">
          <TabContext value={value}>
            <Box className="order_nav_frame">
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Tab label="Buyurtmalarim" value={"1"} />
                  <Tab label="Jarayon" value={"2"} />
                  <Tab label="Yakunlangan" value={"3"} />
                </TabList>
              </Box>
            </Box>
            <Stack className="order_main_content">
              <PausedOrders />
              <ProcessOrders />
              <FinishedOrders />
            </Stack>
          </TabContext>
        </Stack>

        <Stack className="order_right">
          <Box className="order_info_box">
            <Box
              display="flex"
              marginBottom={"40px"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box className="order_user_img">
                <img
                  src="/icons/default_user.svg"
                  className="order_user_avatar"
                />
                <Box className="order_user_icon_box">
                  <img
                    src="/icons/user_icon.svg"
                    className="order_user_prof_img"
                  />
                </Box>
              </Box>
              <span className="order_user_name">BEN</span>
              <span className="order_user_prof">Foydalanuvchi</span>
            </Box>

            <Box className="order_user_address" marginTop={"8px"}>
              <Marginer
                direction="horizontal"
                width="100%"
                height="1"
                bg="rgb(161, 161, 161)"
              />

              <Box style={{ marginTop: "10px", display: "flex" }}>
                <LocationOnIcon />
                <div className="spec_address_txt">Korea seoul</div>
              </Box>
            </Box>
          </Box>
          <form className="order_info_box" style={{ marginTop: "15px" }}>
            <input
              type="text"
              name="card_number"
              className="card_input"
              placeholder="Card number : 5243 4090 2002 7495"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <input
                type="text"
                name="card_period"
                className="card_half_input"
                placeholder="07 / 24"
              />
              <input
                type="text"
                name="card_cvv"
                placeholder="CVV : 279"
                className="card_half_input"
              />
            </Box>
            <input
              type="text"
              name="card_creator"
              placeholder="BEN"
              className="card_input"
            />
            <Stack className="cards_box">
              <img src="/icons/western_card.svg" />
              <img src="/icons/master_card.svg" />
              <img src="/icons/paypal_card.svg" />
              <img src="/icons/visa_card.svg" />
            </Stack>
          </form>
        </Stack>
      </Container>
    </div>
  );
}
