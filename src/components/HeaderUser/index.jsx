import { Link } from "react-router-dom";
import { List, Collapse } from "reactstrap";

import { BsPerson } from "react-icons/bs";

import "./styles.scss";
import { useState } from "react";
const HeaderUser = () => {
  const [toggleUserList, setToggleUserList] = useState(false);

  const handleToggleList = () => {
    setToggleUserList((toggleUserList) => !toggleUserList);
  };
  return (
    <div className="headerUser">
      <BsPerson className="userIcon" id="toggler" onClick={handleToggleList} />
      <Collapse isOpen={toggleUserList}>
        <List type="unstyled" className="userList">
          <li className="userItem">
            <Link to="/" className="userLink">
              My Account
            </Link>
          </li>
          <li className="userItem">
            <Link to="/" className="userLink">
              Checkout
            </Link>
          </li>
          <li className="userItem">
            <Link to="/" className="userLink">
              Wishlist
            </Link>
          </li>
        </List>
      </Collapse>
    </div>
  );
};

export default HeaderUser;
