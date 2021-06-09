import "./SidebarOption.css";

function SidebarOption({Icon, title, selected}) {
  return (
    <div className={`sidebarOption ${selected && "sidebarOption--active"}`}>
      <Icon className="sidebarOption__icon" />
      <h3>{title}</h3>
    </div>
  );
}

export default SidebarOption;
