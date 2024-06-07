import React from "react";

import Move from "./CodeAMotion/Move";

import TurnAntiClockwise from "./CodeAMotion/TurnAntiClockwise";
import TurnClockwise from "./CodeAMotion/TurnClockwise";
import GotoXY from "./CodeAMotion/Goto";

import SayMessage from "./CodeLooks/SayMessage";
import SayMessageWithTimer from "./CodeLooks/SayMessageWithTimer";
import Size from "./CodeLooks/Size";
import Show from "./CodeLooks/Show";
import Hide from "./CodeLooks/Hide";

import HideMessage from "./CodeLooks/HideMessage";

import Think from "./CodeLooks/Think";
import ThinkWithTimer from "./CodeLooks/ThinkWithTimer";

// fetch components based on different keys
export const Choosenslab = (key, id) => {
  switch (key) {
    case "MOVE":
      return <Move comp_id={id} />;

    case "TURN_CLOCKWISE":
      return <TurnClockwise comp_id={id} />;

    case "TURN_ANTI_CLOCKWISE":
      return <TurnAntiClockwise comp_id={id} />;

    case "GOTO_XY":
      return <GotoXY comp_id={id} />;

    case "SAY_MESSAGE":
      return <SayMessage comp_id={id} />;

    case "SAY_MESSAGE_WITH_TIMER":
      return <SayMessageWithTimer comp_id={id} />;

    case "SIZE":
      return <Size comp_id={id} />;

    case "SHOW":
      return <Show comp_id={id} />;

    case "HIDE":
      return <Hide comp_id={id} />;

    case "HIDE_MESSAGE":
      return <HideMessage comp_id={id} />;

    case "THINK":
      return <Think comp_id={id} />;

    case "THINK_TIMER":
      return <ThinkWithTimer comp_id={id} />;

    default:
      return React.null;
  }
};
