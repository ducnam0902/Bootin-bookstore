import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  List,
  ListInlineItem,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
} from "reactstrap";

const HeaderNavigation = () => {
  const [isOpenSideNav, setIsOpenSideNav] = useState(false);

  const handleToggleSideNav = () => {
    setIsOpenSideNav((isOpenSideNav) => !isOpenSideNav);
  };
  return (
    <>
      <List type="inline" className="headerList">
        <ListInlineItem className="headerListItem">
          <NavLink to="/" className="navLinkReset" activeclassname="active">
            Home
          </NavLink>
        </ListInlineItem>

        <ListInlineItem className="headerListItem">
          <NavLink to="/shop" className="navLinkReset" activeclassname="active">
            Shop
          </NavLink>
        </ListInlineItem>

        <ListInlineItem className="headerListItem">
          <NavLink to="/blog" className="navLinkReset" activeclassname="active">
            Blog
          </NavLink>
        </ListInlineItem>

        <ListInlineItem className="headerListItem">
          <NavLink to="/author" className="navLinkReset" activeclassname="active">
            Author
          </NavLink>
        </ListInlineItem>

        <ListInlineItem className="headerListItem">
          <NavLink to="/contact" className="navLinkReset" activeclassname="active">
            Contact
          </NavLink>
        </ListInlineItem>
      </List>
      <div className="headerListResponsive" onClick={handleToggleSideNav}>
        Menu
      </div>
      <Offcanvas
        isOpen={isOpenSideNav}
        toggle={handleToggleSideNav}
        className="sideContainer"
        backdrop={false}
      >
        <OffcanvasHeader
          toggle={handleToggleSideNav}
          className="sideHeader"
        ></OffcanvasHeader>
        <OffcanvasBody className="listSidebarContainer">
          <List type="unstyled" className="listSidebar">
            <li className="listSidebarItem">
              <NavLink to="/" className="navLinkReset" activeclassname="active">
                Home
              </NavLink>
            </li>

            <li className="listSidebarItem">
              <NavLink to="/shop" className="navLinkReset" activeclassname="active">
                Shop
              </NavLink>
            </li>

            <li className="listSidebarItem">
              <NavLink to="/blog" className="navLinkReset" activeclassname="active">
                Blog
              </NavLink>
            </li>

            <li className="listSidebarItem">
              <NavLink
                to="/author"
                className="navLinkReset"
                activeclassname="active"
              >
                Author
              </NavLink>
            </li>

            <li className="listSidebarItem">
              <NavLink
                to="/contact"
                className="navLinkReset"
                activeclassname="active"
              >
                Contact
              </NavLink>
            </li>
          </List>
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
};

export default HeaderNavigation;
