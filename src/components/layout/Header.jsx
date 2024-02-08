import {
  Box,
  ButtonGroup,
  Button,
  Heading,
  IconButton,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { lighten } from "polished";
import Gnb from "./Gnb";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
// react-router-dom의 Link를 써야한다 (chakra X) 리액트 라우터 돔으로 쓰고 있는중이니까.

//* 컴포넌트에 스타일 넣기(Container) *//
//글씨만 하나 넣을거면 {}를 넣어도되고 빼도 됨.
//첫번째 브레이크포인트: block, 두번째: x(null), 세번째: flex (배열로 넣어줌)

//* 일반태그에 스타일태그를 넣기(h1) *//
//객체형식으로(데이터값) 들어가기 때문에 {} 사용
//<h1 style={{ width: "50px", height: "100%" }}><a href="/">Dashboard</a></h1>

const Header = () => {
  // 컴포넌트 안에서 실행되는 코드들은 안쪽에 넣어주기
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navBeltHeight =
        document.querySelector(".nav-belt__wrapper")?.offsetHeight || 0;
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollPosition > navBeltHeight) {
        document.getElementById("header").style.top = "-32px";
        document.querySelector(".nav-bar__wrapper").style.position = "fixed";
        document.querySelector(".nav-bar__wrapper").style.width = "100%";
      } else {
        document.getElementById("header").style.top = -scrollPosition + "px";
        setIsScroll(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  // 스크롤 이벤트 핸들러 함수
  const handleScroll = () => {
    const scrollY = window.scrollY; // 현재 스크롤 위치
    const hd = document.querySelector("#header"); // 헤더
    const navBelt = document.querySelector(".nav-belt__wrapper"); // 헤더
    const navBar = document.querySelector(".nav-bar__wrapper"); // 헤더
    const hdHeight = hd.offsetHeight; // 헤더 높이
    // const swiperHeight = document.querySelector(".main-slide").offsetHeight; // 슬라이드 높이
    const swiperHeight = document.querySelector(".topCont")?.offsetHeight || 0; // 슬라이드 높이 (or연산자를 이용해서, swiperHeight가 없으면 0을 넣어준다.)

    // if: 100px 이상 스크롤 되면 헤더에 배경색을 입힌다.
    if (scrollY >= swiperHeight - hdHeight) {
      // gsap.to(요소, {옵션})
      gsap.to(navBar, {
        backgroundColor: "#fff",
        boxShadow: "0 1px 4px 0 rgba(0,0,0,.07)",
        duration: 0.5,
      });

      gsap.to(navBelt.querySelectorAll("button"), {
        color: "#000",
        duration: 0.5,
      });
      gsap.to(navBar.querySelectorAll("button, a"), {
        color: "#000",
        duration: 0.5,
      });
    } else {
      // else : 100px 이하로 스크롤 되면 배경색을 없앤다.
      gsap.to(navBar, { backgroundColor: "", duration: 0.5 });
      gsap.to(navBelt, { backgroundColor: "", duration: 0.5 });
    }
  };

  // 이벤트 리스너 등록 (위에 만든 함수 사용)
  // 실행문이기 때문에, 위 선언문 안에 넣으면 안된다!
  window.addEventListener("scroll", handleScroll);
  // 윈도우가 'scroll' 이벤트가 발생되는지 보다가 발생되면 handleScroll 함수를 실행해라

  return (
    <Box
      as="header"
      id="header"
      position={"fixed"}
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      minH={"92px"}
      bg={isScroll ? "rgba(0,0,0,.1)" : "transparent"}
      backdropFilter={isScroll ? "saturate(180%) blur(15px)" : "none"}
    >
      {/* tnb */}
      <Box
        className="nav-belt__wrapper"
        display={["none", null, null, null, "block"]}
        h={"32px"}
        bg={"rgba(0,0,0,.6)"}
      >
        <Container
          display="flex"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <ButtonGroup gap={"10px"}>
            <Button colorScheme="teal" variant="link12">
              공공 기관용
            </Button>
            <Button colorScheme="teal" variant="link12">
              금융 클라우드
            </Button>
          </ButtonGroup>
          <ButtonGroup gap={"10px"}>
            <Button colorScheme="teal" variant="link12">
              로그인
            </Button>
            <Button colorScheme="teal" variant="link12">
              회원가입
            </Button>
            <Button colorScheme="teal" variant="link12">
              Languages
            </Button>
          </ButtonGroup>
        </Container>
      </Box>
      {/* header */}
      <Box className="nav-bar__wrapper" bg={"rgba(0,0,0,.05)"}>
        <Container
          display={["flex"]}
          h={"60px"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Heading as={"h1"} fontSize={24} color={"white"}>
            <Link to="/">Dashboard</Link>
          </Heading>

          <Gnb />
          <ButtonGroup color={"white"}>
            <IconButton
              variant="ghost"
              aria-label="Search database"
              icon={<SearchIcon />}
              color={"white"}
            />
            <IconButton
              variant="ghost"
              aria-label="Light database"
              icon={<SunIcon />}
              color={"white"}
            />
            <IconButton
              variant="ghost"
              aria-label="전체 메뉴"
              icon={<HamburgerIcon />}
              display={{ sm: "block", lg: "none" }}
              color={"white"}
            />
          </ButtonGroup>
        </Container>
      </Box>
    </Box>
  );
};

{
  /* <Container>
  centerContent flexDir={"row"}
  maxW={1280}
  m={"0 auto"}
  display={["block", null, "flex"]}
  justifyContent="space-between" alignItems={"center"}
  h={100}
</Container>; */
}

//// styled component 적용하기 ////

const Logo = styled(Heading)`
  font-size: 2px;
  color: ${({ theme }) => theme.colors.brand[500]};
  background-color: ${({ theme }) => lighten(0.2, theme.colors.brand[400])};
`;
// color: ${(props) => props.theme.colors.brand[500]}; 를 구조분해해서 적용
// color: ${({ theme }) => theme.colors.brand[500]};
// background-color: ${(props) => lighten(0.2, props.theme.colors.brand[400])};

//* 컴포넌트에 적용 *// const 변수이름 = styled(컴포넌트 이름)` 속성: 값;` //
// const IconBtnGroup = styled(ButtonGroup)`
//   button {
//     background: lightcoral;
//   }
// `;
// IconButton으로 잡으려고 했으나, 우선순위에 밀려서 적용안됨.
// >> 부모를 잡고 그 밑에 button으로 해서 우선순위 점수를 더부여해줌

//* 일반태그에 적용 *// const 변수이름 = styled.태그이름` 속성: 값;` //
const Nav = styled.nav`
  height: 100px;
  background: lightgray;
`;
// 스타일 컴퍼넌트로 스타일 설정 후, nav태그를 바꿔준다

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  height: 100%;
  margin: 0%;
  list-style: none;
  li {
    width: 100%;
    text-align: center;
  }
  a {
    display: block;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    li {
      width: auto;
    }
    a {
      display: inline-block;
    }
  }
`;

// 각 태그마다 컴퍼넌트로 만들어줘도 되긴하는데, 그러면 반응형 할 때 힘들것. 단독 컴퍼넌트끼리 잡는 경우가 많음 (헤더, 네브, ...)

// 인라인 형식과 스타일 컴포넌트를 모두 적용하게 되면, 읽기가 어려움. 한 방식으로 하기!!

export default Header;
