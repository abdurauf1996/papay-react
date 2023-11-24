import { TabPanel } from "@mui/lab";
import { Box, Button, Stack } from "@mui/material";

const finishedOrders = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

export default function ProcessOrders(props: any) {
  return (
    <TabPanel value={"2"}>
      <Stack>
        {finishedOrders?.map((order) => {
          return (
            <Box className="order_main_box">
              <Box className="order_box_scroll">
                {order.map((item) => {
                  const image_path = "/others/qovurma.jpeg";
                  return (
                    <Box className="ordersName_price">
                      <img src={image_path} className={"orderDishImg"} />
                      <p className="titleDish">Qovurma</p>
                      <Box className="priceBox">
                        <p>$7</p>
                        <img src="/icons/Close.svg" />
                        <p>3</p>
                        <img src="/icons/pause.svg" />
                        <p style={{ marginLeft: "15px" }}>$21</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
              <Box className="total_price_box blue_solid">
                <Box className="boxTotal">
                  <p>mahsulot narxi</p>
                  <p>$21</p>
                  <img src="/icons/plus.svg" style={{ marginLeft: "20px" }} />
                  <p>Yetkazish hizmati</p>
                  <p>$2</p>
                  <img src="/icons/pause.svg" style={{ marginLeft: "20px" }} />
                  <p>jami narxi</p>
                  <p>$23</p>
                </Box>
                <p className="data_compl">23-11-24 14:00</p>
                <Button
                  variant="contained"
                  sx={{
                    background: "rgb(2, 136, 209)",
                    color: "rgb(255, 255, 255)",
                    borderRadius: "10px",
                  }}
                >
                  Yakunlash
                </Button>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}
