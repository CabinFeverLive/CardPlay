import { useDrag } from 'react-use-gesture'

export default function listener (){
    const draggableBox = useDrag(({ down, movement: [mx, my], velocity }) => {
        // This function is our drag detective!
        if (down) {
          console.log("️‍Someone is dragging me!");
        } else {
          console.log("They let go!");
        }
      
        console.log(" I moved by" + mx + "px horizontally and" + my + "px vertically.");
        console.log("My speed is  " + velocity);
        // I added a return statement
        return {
          transform: `translate(${mx}px, ${my}px)`,  // Move the box based on drag
        }; 
      });
      return (
        <div>
          {/* Attach the tool to the box */}
          <div {...draggableBox}>Drag me!</div>
        </div>
      );
}
