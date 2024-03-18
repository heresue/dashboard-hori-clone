import { Link, ListItem, UnorderedList } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { IoStatsChart } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";

// import { Link as ReactRouterLink } from 'react-router-dom'

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
          <Link as={ReactRouterLink} to={navArr.path}>{navArr.icon}{navArr.name}</Link>
        </ListItem>
      ))}
    </UnorderedList>
  );
};


export default Gnb;
