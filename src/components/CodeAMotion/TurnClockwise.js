import React, { useState } from "react";
import { connect } from "react-redux";
import { setCharacterAngle } from "../../redux/character/actions";
import RedoIcon from "@material-ui/icons/Redo";
import Paper from "@material-ui/core/Paper";

const TurnClockWise = ({ character, characterAngle, comp_id }) => {
  const [angle, setAngle] = useState(0);

  // handle turn clockwise component
  const handleClick = () => {
    const el = document.getElementById(character.active);
    const character_angle = character.characters.find(
      (x) => x.id === character.active
    );
    if (character_angle) {
      el.style.transform = `rotate(${character_angle.angle + angle}deg)`;
      characterAngle(character_angle.angle + angle);
    }
  };

  return (
    <Paper elevation={3}>
      <div
        id={comp_id}
        className={`text-center rounded bg-blue-400 text-white p-2 my-1 mt-1 mb-1 text-sm cursor-pointer `}
        onClick={() => handleClick()}
      >
        <div className="flex mx-2">
          turn
          <RedoIcon className="mx-1" />
          <input
            className="text-black text-center w-12 mx-2"
            type="number"
            value={angle}
            onChange={(e) => setAngle(parseInt(e.target.value))}
          />
          degrees
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

// mapping function to component
const mapDispatchToProps = (dispatch) => {
  return {
    characterAngle: (angle) => dispatch(setCharacterAngle(angle)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TurnClockWise);
