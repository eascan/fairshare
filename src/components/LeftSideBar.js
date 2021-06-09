import "./LeftSideBar.css";
import SidebarOption from "./SidebarOption.js";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";

import ReorderIcon from "@material-ui/icons/Reorder";

function LeftSideBar() {
  return (
    <div className="leftSidebar">
      <SidebarOption title="Dashboard" Icon={HomeIcon} selected={true} />
      <SidebarOption title="Activity" Icon={FlagIcon} selected={false} />
      <SidebarOption title="All Expenses" Icon={ReorderIcon} selected={false} />
    </div>
  );
}

export default LeftSideBar;
