import { ListItem, UnorderedList } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Gnb = () => {
  return (
    <UnorderedList
      // display={{ sm: "none", lg: "flex" }}
      display={{ sm: "flex", lg: "flex" }}
      flexDirection={"column"}
      // gap={"40px"}
    >
      <ListItem style={ListStyle}>
        <Link to="/">Main Dashboard</Link>
      </ListItem>
      <ListItem>
        <Link to="/marketplace">NFT Marketplace</Link>
      </ListItem>
      <ListItem>
        <Link to="/datatables">Data Tables</Link>
      </ListItem>
      <ListItem>
        <Link to="/profile">Profile</Link>
      </ListItem>
      <ListItem>
        <Link to="/signin">Sign In</Link>
      </ListItem>
    </UnorderedList>
  );
};

const ListStyle = styled(ListItem)`
  margin-bottom: 12px;
`;

export default Gnb;
