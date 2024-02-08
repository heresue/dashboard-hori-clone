import { createBreakpoints } from "@chakra-ui/theme-tools";

export const breakpoints = createBreakpoints({
  // 380 이하에서 시작~ sm(380) ~ md ~
  //  sm: 0 (: 0이상~)
  // sm: 0,
  // sm: 0으로 넣으면 좀 이상하다. sm 크기 설정 후, minWidth를 설정
  // sm: '320px',
  sm: 0,  // nav가 다시 생겨서, 일단 0으로 다시 설정
  '2sm': '380px', // 아이폰 미니용 (화면이 제일 작아서 여기서 안깨지면 웬만하면 다 안깨짐)
  md: '768px',
  lg: '960px',
  xl: '1280px',
  '2xl': '1600px',
  '3xl': '1920px',
});
