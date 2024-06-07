import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import InsertDriveFileSharpIcon from "@mui/icons-material/InsertDriveFileSharp";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import FolderIcon from "@mui/icons-material/Folder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LoopIcon from "@mui/icons-material/Loop";

function Navbar() {
  return (
    <nav className="bg-purple-700 p-2 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <a href="#" className="text-white font-bold px-4">
          <SettingsIcon />
          Settings
          <ArrowDropDownIcon />
        </a>
        <a href="#" className="text-white font-bold px-4">
          <InsertDriveFileSharpIcon />
          File
          <ArrowDropDownIcon />
        </a>
        <a href="#" className="text-white font-bold px-4">
          <EditSharpIcon />
          Edit
          <ArrowDropDownIcon />
        </a>
        <div className="relative">
          <input
            type="text"
            placeholder="Untitled"
            className="px-4 py-2  square-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-purple-300 placeholder-white"
          />
        </div>
        <button className="bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Share
        </button>
        <button className="bg-transparent  text-white font-semibold py-2 px-4 border border-white rounded">
          <LoopIcon /> See Project Page
        </button>

        <a href="#" className="text-white font-bold px-5">
          <EmojiObjectsIcon /> Tutorial
        </a>
      </div>
      <div className="flex items-center space-x-4 text-white font-bold">
        <FolderIcon />
        <a href="#" className="text-white font-bold px-5">
          <AccountCircleIcon />
          Profile
          <ArrowDropDownIcon />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
