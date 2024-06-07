import React from "react";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import { DragDropContext } from "react-beautiful-dnd";
import { connect } from "react-redux";

// Main App component
function App({ complist }) {
  // Function to handle the end of a drag event
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    // If there's no destination, exit the function
    if (!destination) {
      return;
    }
    let element = result.draggableId.split("-")[0]; // Get the element id from the draggableId

    // console.log(result.source.droppableId, result.destination.droppableId, result.source.index, result.destination.index, element);

    const Oldlist = complist.midAreaLists; // Get the current list from the state
    let SourceIndex = Oldlist.findIndex(
      (x) => x.id === result.source.droppableId
    ); // Find the index of the source droppable area

    if (SourceIndex > -1) {
      let comp_list = Oldlist[SourceIndex].comps; // Get the components list from the source area
      comp_list.splice(result.source.index, 1); // Remove the dragged item from the source list
      Oldlist[SourceIndex].comps = comp_list; // Update the source list in the state
    }

    let DestIndex = Oldlist.findIndex(
      (x) => x.id === result.destination.droppableId
    ); // Find the index of the destination droppable area

    if (DestIndex > -1) {
      let dest_comp_list = Oldlist[DestIndex].comps; // Get the components list from the destination area
      dest_comp_list.splice(result.destination.index, 0, `${element}`); // Insert the dragged item into the destination list

      Oldlist[DestIndex].comps = dest_comp_list; // Update the destination list in the state
    }
  };

  return (
    <div className="bg-blue-100 font-sans">
      <Navbar />
      <div className="h-screen overflow-hidden flex flex-col md:flex-row pt-2">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex-1 h-screen overflow-auto flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl">
            {/* Sidebar component */}
            <div className="w-1/2 flex flex-col overflow-auto">
              <Sidebar />
            </div>
            <div className="  w-1/2 flex flex-1  items-center justify-center overflow-auto">
              <MidArea />
            </div>
          </div>
          <div className="flex-1 h-screen overflow-scroll flex flex-col bg-white border-t border-l border-gray-200 rounded-tl-xl">
            <PreviewArea />
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}

// Function to map the state from the Redux store to the component's props
const mapStateToProps = (state) => {
  return {
    complist: state.list, // Map the state's list to the component's complist prop
  };
};

export default connect(mapStateToProps)(App); // Connect the component to the Redux store and export it
