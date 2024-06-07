import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { Choosenslab } from "./Choosenslab";

const motionComponents = [
  "MOVE",
  "TURN_CLOCKWISE",
  "TURN_ANTI_CLOCKWISE",
  "GOTO_XY",
];

const looksComponents = [
  "SAY_MESSAGE_WITH_TIMER",
  "SAY_MESSAGE",
  "THINK_TIMER",
  "THINK",
  "HIDE_MESSAGE",
  "SIZE",
  "SHOW",
  "HIDE",
];

export default function Sidebar() {
  return (
    <div className=" h-full overflow-y-auto w-60 flex-none flex flex-col items-center p-2 border-r border-gray-200">
      <div className="font-bold text-center rounded text-purple-700 p-2 w-auto">
        <CodeIcon /> Code
      </div>
      <hr className="w-full border-t-2 border-gray-300 mb-2 m-1" />

      {/* Motion */}
      <div className="flex flex-col items-center justify-center">
        <div className="bg-blue-500 rounded-full w-10 h-10"></div>
        <div className="font-bold mb-2">{"Motion"}</div>
      </div>

      <Droppable droppableId="sideArea-motion" type="COMPONENTS">
        {(provided) => (
          <ul
            className="sideArea-motion my-3"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {motionComponents.map((x, i) => {
              return (
                <Draggable
                  key={`${x}-sideArea`}
                  draggableId={`${x}-sideArea`}
                  index={i}
                >
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="my-2"
                    >
                      {Choosenslab(x)}
                    </li>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>

      {/* Looks */}
      <div className="flex flex-col items-center justify-center">
        <div className="bg-purple-600 rounded-full w-10 h-10"></div>
        <div className="font-bold mb-2">{"Looks"}</div>
      </div>

      <Droppable droppableId="sideArea-looks" type="COMPONENTS">
        {(provided) => (
          <ul
            className="sideArea-looks my-3"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {looksComponents.map((x, i) => {
              return (
                <Draggable
                  key={`${x}-sideArea`}
                  draggableId={`${x}-sideArea`}
                  index={i}
                >
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="my-2"
                    >
                      {Choosenslab(x)}
                    </li>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
}
