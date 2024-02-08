import { Box, Container } from "@chakra-ui/react";

const ContainerLg = (props) => {
  return (
    <Container maxW={1280} mx={"auto"} px={["20px", null, 0]}>
      {props.children}
    </Container>
  );
};
// props, props.children을 넣어줘야 안에 글씨가 들어감

export const Section = (props) => {
  // section 배경색 번갈아가면서 지정하기
  //  1. 삼항 연산자 사용
  //    조건 ? 참일 때 : 거짓일 때
  const backgroundColor = props.isLightBackground ? "white" : "gray.500";
  return (
    // 2. bg에 {backgroundColor} 설정
    // 3. Home.jsx - <Section  isLightBackground={true} or {false} 지정>
    <Box py={"100px"} bg={backgroundColor}>
      {props.children}
    </Box>
  );
};

export default ContainerLg;
