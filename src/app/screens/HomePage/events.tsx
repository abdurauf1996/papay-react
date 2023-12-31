import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
//import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
//SwiperCore.use([Autoplay, Navigation, Pagination]);

export function Events() {
  const events_list = [
    {
      title: "Hali his qilib ko'rmagan mazza shu yerda",
      desc: "Yangicha uslubda, yangicha ta'm",
      author: "Bellisommoduz",
      date: "2023/12/01",
      location: "Tashkent, Eski shahar",
      img: "/restaurant/burak.jpeg",
    },
    {
      title: "Hali his qilib ko'rmagan mazza shu yerda",
      desc: "Yangicha uslubda, yangicha ta'm",
      author: "BellisommodUz",
      date: "2023/12/01",
      location: "Tashkent, Qo'yliq",
      img: "/restaurant/belissimouz.png",
    },
    {
      title: "Hali his qilib ko'rmagan mazza shu yerda?",
      desc: "Yangicha uslubda, yangicha ta'm",
      author: "Chicken",
      date: "2023/11/20",
      location: "Tashkent, Chorsu",
      img: "/restaurant/burak.jpeg",
    },
    {
      title: "O'zgacha O'zbekona ovqat",
      desc: "Yangicha uslubda, yangicha ta'm",
      author: "Burak",
      date: "2023/07/09",
      location: "Namangan, Chorsu",
      img: "/restaurant/burak1.jpeg",
    },
  ];

  return (
    <div className="events_frame">
      <Container sx={{ overflow: "hidden" }}>
        <Stack className="events_main">
          <Box className="events_text">
            <span className="category_title">Hodisalar</span>
          </Box>
          <Box className="prev_next_frame">
            <img
              src={"/icons/arrow-right.svg"}
              className={"swiper-button-prev"}
            />
            <div className="dot_frame_pagination swiper-pagination"></div>
            <img
              src={"/icons/arrow-right.svg"}
              className={"swiper-button-next"}
              style={{ transform: "rotate(-180deg)" }}
            />
          </Box>
          <Swiper
            className={"events_info swiper-wrapper"}
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
          >
            {events_list.map((value, number) => {
              return (
                <SwiperSlide className={"events_info_frame"}>
                  <div className="events_img">
                    <img src={value.img} alt="" className={"events_img "} />
                  </div>
                  <Box className={"events_desc"}>
                    <Box className={"events_bott"}>
                      <Box className={"bott_left"}>
                        <div className={"event_title_speaker"}>
                          <div>
                            {" "}
                            <strong style={{ width: "100%" }}>
                              {value.title}
                            </strong>
                          </div>

                          <div className="event_organizator">
                            <img
                              src={"/icons/speaker.svg"}
                              style={{
                                width: "20px",
                                height: "23px",
                                marginRight: "10px",
                              }}
                            />
                            <p className={"spec_txt_author"}>{value.author}</p>
                          </div>
                        </div>
                        <p
                          className={"text_desc"}
                          style={{ marginTop: "10px" }}
                        >
                          {value.desc}
                        </p>
                        <div
                          className={"bott_info"}
                          style={{ marginTop: "10px" }}
                        >
                          <div className={"bott_info_main"}>
                            <img
                              src={"/icons/calendar.svg"}
                              style={{ marginRight: "10px" }}
                            />
                            {value.date}
                          </div>
                          <div className={"bott_info_main"}>
                            <img
                              src={"/icons/location.svg"}
                              style={{
                                marginRight: "10px",
                                width: "15px",
                                height: "15px",
                                color: " #4f547b",
                              }}
                            />
                            {value.location}
                          </div>
                        </div>
                      </Box>
                    </Box>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>
      </Container>
    </div>
  );
}
