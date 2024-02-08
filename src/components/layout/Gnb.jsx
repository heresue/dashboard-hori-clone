import { ListItem, UnorderedList } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaCartShopping } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { IoStatsChart } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";

const Gnb = () => {
  const navArr = [
    { name: "Main Dashboard", path: "/", icon: <AiFillHome /> },
    { name: "NFT Marketplace", path: "/marketplace", icon: <FaCartShopping /> },
    { name: "Data Tables", path: "/datatables", icon: <IoStatsChart /> },
    { name: "Profile", path: "/profile", icon: <FaUser /> },
    { name: "Sign In", path: "/signin", icon: <IoMdLogIn /> },
  ];

  return (
    <UnorderedList
      // display={{ sm: "none", lg: "flex" }}
      display={{ sm: "flex", lg: "flex" }}
      flexDirection={"column"}
    >
      {navArr.map((item, index) => (
        <ListItem>
          <Link></Link>
        </ListItem>
      ))}
    </UnorderedList>
  );
};

const ListStyle = styled(ListItem)`
  margin-bottom: 12px;
`;

export default Gnb;
