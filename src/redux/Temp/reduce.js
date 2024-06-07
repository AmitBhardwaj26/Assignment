import { SET_ANGLE, SET_LIST } from "./type";

const initialState = {
  characters: [{ id: "sprite0", angle: 0 }],
  active: "sprite0",
  midAreaLists: [
    {
      id: "midAreaList-0",
      comps: ["MOVE"],
    },
  ],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ANGLE:
      let characters_Array = state.characters;
      let curr_character = characters_Array.find(
        (character) => character.id === state.active
      );
      const curr_character_index = characters_Array.findIndex(
        (character) => character.id === state.active
      );
      if (curr_character_index > -1) {
        curr_character.angle = action.angle;
        characters_Array[curr_character_index] = curr_character;
      }
      return {
        ...state,
        characters: characters_Array,
      };

    case SET_LIST:
      let index = state.midAreaLists.findIndex((x) => x.id === action.id);
      let all_lists = state.midAreaLists;
      let [item] = all_lists.splice(index, 1);
      item.comps = action.list;
      all_lists.splice(index, 0, item);

      return {
        midAreaLists: all_lists,
      };
    default:
      return state;
  }
};
