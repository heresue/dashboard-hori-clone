import { ListItem, UnorderedList } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Gnb = () => {
  return (
    <UnorderedList display={{sm: 'none', lg: "flex"}} gap={"40px"}>
      <ListItem>
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

export default Gnb;