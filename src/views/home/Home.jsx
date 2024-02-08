import { Button, ButtonGroup, Container } from "@chakra-ui/react";
import Title, { TitleH4 } from "../../components/common/Title";
import { Section } from "../../components/layout/Container";
import Layout from "../../components/layout/Layout";
import MainSlide from "./components/MainSlide";

const Home = () => {
  return (
    <>
      <MainSlide />
      <Section isLightBackground={true}>
        <Container>
          <Title>회사 소개</Title>
          <TitleH4>사장님 말씀</TitleH4>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quibusdam
          facilis aut earum illo totam, reiciendis maiores beatae natus ut vitae
          suscipit cumque! Vitae in natus tempore eaque tempora unde?
          <TitleH4>회사 연혁</TitleH4>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla
          fuga quas amet autem, consectetur molestias voluptate, nemo quo
          deleniti mollitia at officia voluptatibus neque adipisci, sit magnam
          quisquam eius?
        </Container>
      </Section>

      <Section isLightBackground={false}>
        <Container>
          <Title>회사 비전</Title>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit vel
          sapiente fugit, perspiciatis laudantium sunt? Praesentium consequatur
          reprehenderit vitae quidem sint, quibusdam facere ad a? Ullam
          molestiae deserunt fuga molestias.
        </Container>
      </Section>
    </>
  );
};
// sass 쓸거 아니니까 클래스이름x 컴포넌트로.

export default Home;

// 컴포넌트 파일은 원래 대문자로 시작해야하지만, index는 파일명 소문자로 시작
// (page도 컴포넌트임!!)
// 컴포넌트로 넣어주기 때문에, 반드시 파일명이 index일 필요는 없다.
