import React from "react";
import { Avatar, Box, Stack } from "@mui/material";
import { Send } from "@mui/icons-material";
import "../../../css/community.css";

export function CommunityChats() {
  return (
    <Stack className="chat_frame">
      <Box className="chat_top">Jonli Muloqot</Box>
      <Box className="chat_content">
        <Stack className="chat_main">
          <Box
            flexDirection={"row"}
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
          >
            <div className="msg_left">Assalomu alaykum!</div>
          </Box>
          <Box
            flexDirection={"row"}
            style={{ display: "flex" }}
            alignItems={"flex-end"}
            justifyContent={"flex-end"}
            sx={{ m: "10px 0px" }}
          >
            <div className="msg_right">Va alleykum salom</div>
          </Box>
          <Box
            flexDirection={"row"}
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
          >
            <Avatar alt="Ben" src="/community/cute_girl.jpg" />
            <div className="msg_left">MIT6 gurhimizga xush kelibsiz!</div>
          </Box>
          <Box
            flexDirection={"row"}
            style={{ display: "flex" }}
            alignItems={"flex-end"}
            justifyContent={"flex-end"}
            sx={{ m: "10px 0px" }}
          >
            <div className="msg_right">
              Bizga berga ishonchlaring uchun rahmat
            </div>
          </Box>
        </Stack>
      </Box>
      <Box className="chat_bott">
        <input
          type="text"
          name="message"
          className="msg_input"
          placeholder="Xabar jo'natish"
        />
        <button className="send_msg_btn">
          <Send style={{ color: "#fff" }} />
        </button>
      </Box>
    </Stack>
  );
}
