import React from "react";
import WorkFlowImage from "assets/work-flow-image.svg";
import BellIcon from "assets/bell-icon.svg";
import ProfileImage from "assets/profile-image.svg";

const navBarMenuOptions = [
  { name: "Dashboard" },
  { name: "Team" },
  { name: "Projects" },
  { name: "Calendar" },
];

const AppBar = () => {
  return (
    <div
      className="bg-darkblue flex flex-row w-full"
      style={{
        display: "flex",
        flexDirection: "row",
        // width: "100%",
        backgroundColor: "#1F2937",
        justifyContent: "center",
        alignItems: "center",
        padding: "16px 32px",
      }}
    >
      <div>
        <img
          src={WorkFlowImage}
          style={{ maxHeight: "32px", marginRight: "44px" }}
        />
      </div>
      <div
        className="flex w-full grow"
        style={{
          display: "flex",
          flexDirection: "row",
          flexGrow: "1",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="grow"
          style={{ display: "flex", flexDirection: "row", flexGrow: "1" }}
        >
          {navBarMenuOptions.map((navItem) => {
            const { name } = navItem;
            return (
              <div
                className="mr-2 "
                style={{ marginRight: "40px", color: "#D1D5DB" }}
                key={name}
              >
                {name}
              </div>
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexGap: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={BellIcon}
            style={{ maxHeight: "18px", marginRight: "16px" }}
          />
          <img src={ProfileImage} style={{ maxHeight: "32px" }} />
        </div>
      </div>
    </div>
  );
};

export default AppBar;
