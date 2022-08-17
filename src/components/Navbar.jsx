import React from "react";
import { Search } from "@mui/icons-material";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = () => {
  const style = "text-[14px], cursor-pointer, ml-[25px] mobile:ml-[5px]";
  return (
    <div className="navbar h-[60px] shadow-md relative z-10">
      <div className="wrapper  pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center">
        <div className="left flex flex-1 items-center ">
          <div className="language cursor-pointer text-[16px]">En</div>
          <div className="searchInput flex border-[2px] border-solid border-lighgrey rounded-md items-center ml-[10px] p-[5px] focus-within:border-[#1d1b20] transition-all">
            <input className="input outline-none" type="text" />
            <Search className="" style={{ fontSize: "16px" }} />
          </div>
        </div>
        {/* Logo */}
        <div className="center flex-1 text-center">
          <div className="logo font-bold tex-lg ">A-Z SHOP</div>
        </div>

        {/* Right div */}
        <div className="right flex flex-1 items-center justify-end">
          <div className={style}>Register </div>
          <div className={style}>Sign in</div>
          <div className={style}>
            <Badge badgeContent={2} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
