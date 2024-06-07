import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

const HideMessage = ({ character, comp_id }) => {
  /* Hide Message */
  const displayMessage = () => {
    window.clearTimeout();
    const el = document.getElementById(`${character.active}-message-box`);
    const el2 = document.getElementById(`${character.active}-message-box1`);
    el.style.display = "none";
    el2.style.display = "none";
  };

  return (
    <Paper elevation={3}>
      <div
        id={comp_id}
        onClick={() => displayMessage()}
        className="text-center rounded  bg-purple-500 text-white p-1 my-1 text-sm cursor-pointer mx-auto"
      >
        Hide Message
      </div>
    </Paper>
  );
};

// mapping state to props
const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(HideMessage);
