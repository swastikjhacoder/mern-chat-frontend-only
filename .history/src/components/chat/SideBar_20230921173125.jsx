import React from 'react';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useSelector } from "react-redux";

const SideBar = () => {
  const background = useSelector((state) => state.liveChat.background);
  return (
    <>
      <div className="sb-header">
        <div>
          <AccountCircleOutlinedIcon style={{ backgroundColor: background }} />
        </div>
        <div>
          <PersonAddAltOutlinedIcon
            style={{ backgroundColor: background, marginRight: "10px" }}
          />
          <GroupAddOutlinedIcon
            style={{ backgroundColor: background, marginRight: "10px" }}
          />
          <AddCircleOutlineOutlinedIcon
            style={{ backgroundColor: background, marginRight: "10px" }}
          />
          <BedtimeOutlinedIcon style={{ backgroundColor: background }} />
        </div>
      </div>
      <div className="sb-search">Search</div>
      <div className="sb-conversations">Conversations</div>
    </>
  );
};

export default SideBar