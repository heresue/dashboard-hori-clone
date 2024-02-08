import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Heading, Link } from "@chakra-ui/react";
import Gnb from "./Gnb";
// react-router-dom의 Link를 써야한다 (chakra X) 리액트 라우터 돔으로 쓰고 있는중이니까.

//* 컴포넌트에 스타일 넣기(Container) *//
//글씨만 하나 넣을거면 {}를 넣어도되고 빼도 됨.
//첫번째 브레이크포인트: block, 두번째: x(null), 세번째: flex (배열로 넣어줌)

//* 일반태그에 스타일태그를 넣기(h1) *//
//객체형식으로(데이터값) 들어가기 때문에 {} 사용
//<h1 style={{ width: "50px", height: "100%" }}><a href="/">Dashboard</a></h1>

const Header = () => {
  return (
    <Box
      as="header"
      id="header"
      position={"fixed"}
      top={0}
      left={0}
      right={0}
      zIndex={1000}
    >
      <Heading as={"h1"} fontSize={25} color={"white"}>
        <Link as={ReactRouterLink} to="/">
          <strong>HORIZON</strong> FREE
        </Link>
      </Heading>

      <Gnb />
    </Box>
  );
};


export default Header;
