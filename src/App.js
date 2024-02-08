import { ChakraProvider } from "@chakra-ui/react";
import Routers from "./Routers";
// import "./assets/scss/style.scss"; scss 사용시 주석 해제
import theme from "./theme/theme";
import { ThemeProvider } from "styled-components";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* chakra 레이아웃을 사용하겠다 */}
      <ThemeProvider theme={theme}>
        <Routers />
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;

// 모든 설정은 여기에 추가한다 (스타일 등)
