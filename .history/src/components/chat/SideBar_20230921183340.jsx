import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useSelector, useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
import { toggleDarkMode } from "../../redux/liveChatSlice";

const SideBar = () => {
  const dispatch = useDispatch();
  const { mode, background, color } = useSelector((state) => state.liveChat);
  console.log(background);
  return (
    <>
      <div className="left-sidebar-container">
        <div className={"sb-header" + (mode ? "" : " " + "dark")}>
          <div>
            <IconButton>
              <AccountCircleOutlinedIcon
                className={"icon" + (mode ? "" : " " + "dark")}
                style={{ color: color }}
              />
            </IconButton>
          </div>
          <div>
            <IconButton>
              <PersonAddAltOutlinedIcon
                className={"icon" + (mode ? "" : " " + "dark")}
                style={{ color: color }}
              />
            </IconButton>
            <IconButton>
              <GroupAddOutlinedIcon
                className={"icon" + (mode ? "" : " " + "dark")}
              />
            </IconButton>
            <IconButton>
              <AddCircleOutlineOutlinedIcon
                className={"icon" + (mode ? "" : " " + "dark")}
                style={{ color: color }}
              />
            </IconButton>
            <IconButton onClick={() => dispatch(toggleDarkMode())}>
              {mode ? (
                <BedtimeOutlinedIcon
                  className={"icon" + (mode ? "" : " " + "dark")}
                  style={{ color: color }}
                />
              ) : (
                <LightModeOutlinedIcon
                  className={"icon" + (mode ? "" : " " + "dark")}
                  style={{ color: color }}
                />
              )}
            </IconButton>
          </div>
        </div>
        <div className="sb-search">Search</div>
        <div className="sb-conversations">Conversations</div>
      </div>
    </>
  );
};

export default SideBar;
