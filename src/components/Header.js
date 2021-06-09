import "./Header.css";

import {Avatar, IconButton} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <h1>FairShare</h1>
      </div>
      <div className="header__right">
        <IconButton>
          <NotificationsIcon className="notification" />
        </IconButton>
        <Avatar className="header__avatar" />
      </div>
    </div>
  );
}

export default Header;
