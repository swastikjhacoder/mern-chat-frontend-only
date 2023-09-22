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
import ConversationList from "./ConversationList";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mode, background, color } = useSelector((state) => state.liveChat);
  const conversations = [
    {
      name: "Test#1",
      lastMessage: "Last Message #1",
      timeStamp: "today",
    },
    {
      name: "Test#2",
      lastMessage: "Last Message #2",
      timeStamp: "today",
    },
    {
      name: "Test#3",
      lastMessage: "Last Message #3",
      timeStamp: "today",
    },
  ];
  console.log(mode);
  return (
    <>
      <div className="container">
        <div className="left-sidebar-container">
          <div className="sb-header">
            <div>
              <IconButton>
                <AccountCircleOutlinedIcon
                  className="icon"
                  style={{ color: color }}
                />
              </IconButton>
            </div>
            <div>
              <IconButton>
                <PersonAddAltOutlinedIcon
                  className="icon"
                  style={{ color: color }}
                  onClick={() => {
                    navigate("users");
                  }}
                />
              </IconButton>
              <IconButton>
                <GroupAddOutlinedIcon
                  className="icon"
                  style={{ color: color }}
                  onClick={() => {
                    navigate("groups");
                  }}
                />
              </IconButton>
              <IconButton>
                <AddCircleOutlineOutlinedIcon
                  className="icon"
                  style={{ color: color }}
                  onClick={() => {
                    navigate("create-group");
                  }}
                />
              </IconButton>
              <IconButton onClick={() => dispatch(toggleDarkMode())}>
                {mode ? (
                  <LightModeOutlinedIcon
                    className="icon"
                    style={{ color: color }}
                  />
                ) : (
                  <BedtimeOutlinedIcon
                    className="icon"
                    style={{ color: color }}
                  />
                )}
              </IconButton>
            </div>
          </div>
          <div className="sb-search">
            <div className="input-box">
              <input
                type="search"
                name="search"
                required="required"
                style={{ border: `1px solid ${color}`, color: color }}
              />
              <span
                style={{
                  color: color,
                  border: `1px solid ${color}`,
                  background: background,
                }}
              >
                Search
              </span>
            </div>
          </div>
          <div className="sb-conversations">
            {conversations.map((conversation, index) => {
              return <ConversationList key={index} props={conversation} />;
            })}
          </div>
        </div>
        
      </div>
    </>
  );
};

export default SideBar;
