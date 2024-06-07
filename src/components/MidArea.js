import React from "react";
import { connect } from "react-redux";
import CreateIcon from "@mui/icons-material/Create";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import CatSprite from "./CatSprite";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Choosenslab } from "./Choosenslab";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { yellow } from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";

// Styling for MaterialUI Components
const useStyles = makeStyles(() =>
  createStyles({
    button: {
      margin: 0,
      justifyContent: "center",
    },
  })
);

// Customized button for Running Lists
const RunButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[500],
    fontSize: "13px",
    "&:hover": {
      backgroundColor: yellow[700],
    },
  },
}))(Button);

// Mid Area Component
function MidArea({ area_list, event_values }) {
  const classes = useStyles();
  const eventFire = (el, etype) => {
    if (el && el.fireEvent) {
      el.fireEvent("on" + etype);
    } else if (el) {
      var evObj = document.createEvent("Events");
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  };

  // Handle Running the list
  const handleClick = (arr, id) => {
    if (arr.length === 0) return;
    let i = 0;

    let repeat = 1;

    let str1 = `comp${arr[i]}-${id}-${i}`;

    // Handle Wait at first index
    if (arr[i] === "WAIT") {
      let str2 = `comp${arr[i]}-${id}-${i}`;
      let last_time = new Date().getTime();
      let curr_time = new Date().getTime();

      while ((curr_time - last_time) / 1000 < event_values.wait[str2] - 2) {
        curr_time = new Date().getTime();
      }
    }

    // Handle Repeat at first index
    else if (arr[i] !== "REPEAT") {
      eventFire(document.getElementById(str1), "click");
    } else {
      repeat = event_values.repeat[str1] + 1;
    }
    i++;

    /* Each function execution takes 2 seconds */
    var cnt = setInterval(() => {
      if (i === arr.length) {
        clearInterval(cnt);
      }

      // Handle Wait
      if (arr[i] === "WAIT") {
        let str2 = `comp${arr[i]}-${id}-${i}`;
        let last_time = new Date().getTime();
        let curr_time = new Date().getTime();

        while ((curr_time - last_time) / 1000 < event_values.wait[str2] - 2) {
          curr_time = new Date().getTime();
        }
        i++;
      }
      // Handle Repeat Component at current index
      else if (arr[i] === "REPEAT") {
        let str2 = `comp${arr[i]}-${id}-${i}`;
        repeat = repeat * (event_values.repeat[str2] + 1);
        i++;
      }
      // If Repeat component is at previous index
      else if (arr[i - 1] === "REPEAT" && repeat > 2) {
        let str2 = `comp${arr[i]}-${id}-${i}`;
        eventFire(document.getElementById(str2), "click");
        repeat--;
      } else {
        let str2 = `comp${arr[i]}-${id}-${i}`;
        eventFire(document.getElementById(str2), "click");
        i++;
      }
    }, 2000);
  };
  return (
    <div className="flex-1 h-full overflow-auto p-3">
      <div className="font-bold text-center rounded text-purple-700 p-2 w-auto">
        <EditTwoToneIcon />
        Mid Area
        {/* <CatSprite style={{ width: "10px", height: "10px", opacity: 0.7 }} /> */}
      </div>
      <hr className="w-full border-t-2 border-gray-300 mb-2 m-1" />

      <div className="grid grid-flow-col justify-center pt-4">
        {area_list.midAreaLists &&
          area_list.midAreaLists.map((l) => {
            return (
              <div className="w-60" key={l.id}>
                <Paper elevation={3} className="p-4 pt-0">
                  <div className="w-52 p-2">
                    <Droppable droppableId={l.id} type="COMPONENTS">
                      {(provided) => {
                        return (
                          <ul
                            className={`${l.id} w-48 h-full`}
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                          >
                            <div className="text-center mx-auto my-1 mb-4">
                              <RunButton
                                variant="contained"
                                className={classes.button}
                                startIcon={<PlayArrowIcon />}
                                onClick={() => handleClick(l.comps, l.id)}
                              >
                                Run{" "}
                              </RunButton>
                            </div>

                            {l.comps &&
                              l.comps.map((x, i) => {
                                let str = `${x}`;
                                let component_id = `comp${str}-${l.id}-${i}`;

                                return (
                                  <Draggable
                                    key={`${str}-${l.id}-${i}`}
                                    draggableId={`${str}-${l.id}-${i}`}
                                    index={i}
                                  >
                                    {(provided) => (
                                      <li
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                      >
                                        {Choosenslab(str, component_id)}
                                        {provided.placeholder}
                                      </li>
                                    )}
                                  </Draggable>
                                );
                              })}
                            {provided.placeholder}
                          </ul>
                        );
                      }}
                    </Droppable>
                  </div>
                </Paper>
              </div>
            );
          })}
      </div>
    </div>
  );
}

// mapping state to props
const mapStateToProps = (state) => {
  return {
    area_list: state.list,
    event_values: state.event,
  };
};

// const mapDispatchToPro ps = (dispatch) => {
//   return {
//     add_list: () => dispatch(addList()),
//   };
// };

export default connect(mapStateToProps)(MidArea);
