import React from 'react';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";

const SideBar = () => {
  return (
    <>
          <div className="sb-header">
              <div>
                  <AccountCircleOutlinedIcon/>
              </div>
              <div>
                  <PersonAddAltOutlinedIcon />
                  
              </div>
      </div>
      <div className="sb-search">Search</div>
      <div className="sb-conversations">Conversations</div>
    </>
  );
}

export default SideBar