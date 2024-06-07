import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

const Show = ({ character, comp_id }) => {
  // To handle show component
  const handleDisplay = () => {
    const el = document.getElementById(character.active);
    el.style.display = "inline-block";
  };

  return (
    <Paper elevation={3}>
      <div
        id={comp_id}
        className="text-center rounded  bg-purple-500 text-white p-1 my-1 text-sm cursor-pointer mx-auto"
        onClick={() => handleDisplay()}
      >
        Show
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

export default connect(mapStateToProps)(Show);
