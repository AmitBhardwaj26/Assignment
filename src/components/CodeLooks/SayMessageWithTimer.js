import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
// import { useState } from "react";

const SayMessageWithTimer = ({ character, comp_id }) => {
  const [state, setState] = useState({
    show_msg: false,
    timer_message: "Hello!",
    timer_for_msg: 1,
  });

  // console.log("SayMessageWithTimer -> state", state);

  /* Display Message with Timer */
  const displayMessage = () => {
    const el = document.getElementById(`${character.active}-message-box`);
    const el2 = document.getElementById(`${character.active}-message-box1`);
    el2.style.display = "none";
    if (state.show_msg) {
      setState({ ...state, show_msg: false });
      el.style.display = "none";
      return;
    }
    setState({ ...state, show_msg: true });

    el.style.display = "block";
    el.style.position = "relative";

    el.innerHTML = state.timer_message;
    window.setTimeout(() => {
      setState({ ...state, show_msg: false });
      el.style.display = "none";
    }, state.timer_for_msg * 1000);
  };

  return (
    <Paper elevation={3}>
      <div
        id={comp_id}
        className={`text-center rounded  bg-purple-500 text-white p-2 my-1 text-sm cursor-pointer mx-auto`}
        onClick={() => displayMessage()}
      >
        say
        <input
          className="text-black text-center w-12 mx-1"
          type="text"
          value={state.timer_message}
          onChange={(e) => {
            e.target.value.length >= 0 &&
              setState({ ...state, timer_message: e.target.value });
          }}
        />{" "}
        for
        <input
          className="text-black text-center w-12 mx-1"
          type="number"
          value={state.timer_for_msg}
          onChange={(e) => {
            parseInt(e.target.value) > 0 &&
              setState({ ...state, timer_for_msg: parseInt(e.target.value) });
          }}
        />
        sec
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

export default connect(mapStateToProps)(SayMessageWithTimer);
