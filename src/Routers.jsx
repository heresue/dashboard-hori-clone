// routers.jsx 파일의 위치는 사용자마다 다르니 프로젝트 파일을 확인해볼것
// 없다면 다른 프로젝트 참고
// 파일명도 routes, routers 등 다를 수 있음


/* Route: 리액트의 페이지 이동을 도와주는 라이브러리 */
/* 페이지마다 설정을 다 다르게 해줄 수 있음 */
/* 경로(path)는 소문자로 넣어준다(대문자는 오류날 수 있음) */
/* 5.~ 6.~ 버전에 따라 사용방식이 다르니 주의 (패키지json - 라우트 돔 버전 확인 후, 버전에 맞는 구문을 다시 찾아야 함) */


import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./views/home/Home";
import Marketplace from "./views/marketplace/Marketplace";
import DataTables from "./views/datatables/DataTables";
import Profile from "./views/profile/Profile";
import SignIn from "./views/signin/SignIn";
import Layout, { LayoutNone } from "./components/layout/Layout";

// const routeArr = [
//   {
//     path: "/",
//     element: <Home />,
//     // background: red,
//   },
//   {
//     path: "/marketplace",
//     element: <Marketplace />,
//   },
//   {
//     path: "/datatables",
//     element: <DataTables />,
//   },
//   {
//     path: "/profile",
//     element: <Profile />,
//   },
//   // {
//   //   path: "/signin",
//   //   element: <SignIn />,
//   // },
// ];

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace/>} />
            <Route path="/datatables" element={<DataTables/>} />
            <Route path="/profile" element={<Profile/>} />
          </Route>

          <Route element={<LayoutNone/>}>
            <Route path="/signin" element={<SignIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
