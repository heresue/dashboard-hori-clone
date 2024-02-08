import { Heading } from "@chakra-ui/react";

const Title = (props) => {
  return (
    <Heading as={"h2"} my={30} fontSize={30} fontWeight={700} color={"#222"}>
      {props.children}
    </Heading>
  );
};

export const TitleH4 = (props) => {
  return (
    <Heading as={"h4"} my={30} fontSize={20} fontWeight={400} color={"#222"}>
      {props.children}
    </Heading>
  );
};

export default Title;
