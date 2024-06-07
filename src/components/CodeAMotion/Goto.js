import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

const GotoXY = ({ character, comp_id }) => {
  const [state, setState] = useState({
    goto_x: 1,
    goto_y: 1,
  });

  // go to posiiton X and Y
  const gotoXY = () => {
    const el = document.getElementById(`${character.active}-div`);
    el.style.position = "relative";
    el.style.left = state.goto_x + "px";
    el.style.top = state.goto_y + "px";
  };
  return (
    <Paper elevation={3}>
      <div className="text-center rounded bg-blue-400 mt-1 mb-1 p-2 ">
        <div
          id={comp_id}
          className="text-center rounded bg-blue-400 text-white p-2 text-sm cursor-pointer "
          onClick={() => gotoXY()}
        >
          go to x:
          <input
            className="text-black text-center w-10 mx-1"
            type="number"
            value={state.goto_x}
            onChange={(e) => {
              parseInt(e.target.value) !== 0 &&
                setState({ ...state, goto_x: parseInt(e.target.value) });
            }}
          />
          y:
          <input
            className="text-black text-center w-10 mx-1"
            type="number"
            value={state.goto_y}
            onChange={(e) => {
              parseInt(e.target.value) !== 0 &&
                setState({ ...state, goto_y: parseInt(e.target.value) });
            }}
          />
        </div>
      </div>
    </Paper>
  );
};

// mapping state to component
const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(GotoXY);
