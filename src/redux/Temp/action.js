import { SET_ANGLE, SET_LIST } from "./type";

export const setCharacterAngle = (characterAngle) => {
  return {
    type: SET_ANGLE,
    angle: characterAngle,
  };
};

export const updateList = (id, new_list) => {
  return {
    type: SET_LIST,
    list: new_list,
    id: id,
  };
};
