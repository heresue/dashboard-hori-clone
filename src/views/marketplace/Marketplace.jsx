import {
  Box,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Layout from "../../components/layout/Layout";
import { motion } from "framer-motion";
import bg_beach from "../../assets/images/bg_beach.jpg";
import cat from "../../assets/images/cat.jpg";

const Marketplace = () => {
  const boxStyle = {
    width: "200px",
    height: "200px",
    background: "coral",
    borderRadius: "50%",
  };

  return (
    <>
      <Box
        className={"topCont"}
        h={"500px"}
        bg={`url(${bg_beach}) no-repeat 50% 50% / cover`}
      ></Box>
      {/* <div>마켓플레이스 컨텐츠</div> */}

      <Tabs position={"sticky"} top={0}>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
          <Tab>Four</Tab>
          <Tab>Five</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>
            <Image h={"500px"} src={cat} alt="" />
            {/* <Image src="/logo192.png" alt=""/> ---이렇게는 잘 쓰지 않음*/}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              labore natus, quidem quas corrupti dolore error dolorum reiciendis
              quibusdam cumque, quisquam itaque placeat expedita nobis possimus
              sed neque sit commodi.
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              labore natus, quidem quas corrupti dolore error dolorum reiciendis
              quibusdam cumque, quisquam itaque placeat expedita nobis possimus
              sed neque sit commodi.
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              labore natus, quidem quas corrupti dolore error dolorum reiciendis
              quibusdam cumque, quisquam itaque placeat expedita nobis possimus
              sed neque sit commodi.
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              labore natus, quidem quas corrupti dolore error dolorum reiciendis
              quibusdam cumque, quisquam itaque placeat expedita nobis possimus
              sed neque sit commodi.
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              labore natus, quidem quas corrupti dolore error dolorum reiciendis
              quibusdam cumque, quisquam itaque placeat expedita nobis possimus
              sed neque sit commodi.
            </p>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <motion.div
        style={boxStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: 500 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      />
      {/* boxStyle이라는 변수로 스타일을 적용 (중복되는 경우 컴포넌트로 만들어서 사용) */}

      <div style={{ height: "100vh" }}></div>
    </>
  );
};

export default Marketplace;
