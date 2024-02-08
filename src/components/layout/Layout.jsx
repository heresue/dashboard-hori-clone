import { Box, Container } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";
import ContainerLg from "./Container";
import { Outlet } from "react-router-dom";

const Layout = (props) => {
  return (
    // 인라인: 카멜표기법 축약형
    <Box display={"flex"} flexDir={"column"} minH={"100vh"}>
      <Header />
      <Box as="main" id="main" flexGrow={1}>
        {/* paddingTop = pt */}
        {/* box 컴포넌트 넣고 태그를 main으로 줌(as) */}

        {/* && : 둘 다 참일때 출력 */}
        {/* && 연산자를 사용하여 props.showTitle이 true일 때만 h2태그를 렌더링하도록 설정 */}
        {/* {props.showTitle && <h2>{props.title}</h2>}
        {props.children} */}
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export const LayoutNone = () => {
  return (
    <Box bg={'skyblue'} display={"flex"} flexDir={"column"} minH={"100vh"}>
      <Box as="main" id="main" flexGrow={1}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
