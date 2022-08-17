import { Close } from "@mui/icons-material";
import React, { useState } from "react";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";

const Home = () => {
  const [announceStyle, setAnnounceStyle] = useState(
    "bg-[#8a4af3] font-bold text-white flex items-center justify-center"
  );
  const handleClose = () => {
    setAnnounceStyle(announceStyle + " hidden");
  };
  return (
    <div className={announceStyle}>
      <Announce />
      <Close className="cursor-pointer" onClick={handleClose} />
      <Navbar />
    </div>
  );
};

export default Home;
