import React from 'react';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";

const SideBar = () => {
  return (
    <>
          <div className="sb-header">
              <div>
                  <AccountCircleOutlinedIcon/>
              </div>
              <div>
                  <PersonAddAltOutlinedIcon />
                  <GroupAddOutlinedIcon />
                  <AddCircleOutlineOutlinedIcon />
                  <BedtimeOutlinedIcon/>
              </div>
      </div>
      <div className="sb-search">Search</div>
      <div className="sb-conversations">Conversations</div>
    </>
  );
}

export default SideBar