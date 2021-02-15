import React from "react";
import { useInput } from '../hooks';

export default function AddColorForm({ onNewColor = (f) => f }){
  // create variables for title and color and define functions to change state-> setTitle
  // const [title, setTitle] = useState("");
  // const [color, setColor] = useState("#000000");

  // do the same as above using custom useInput hook
  const [titleProps, resetTitle] = useInput('');
  const [colorProps, resetColor] = useInput('#000000');

  /*
    When it's time to submit the form, we can pass the state values for title and color to
    to the onNewColor function property as arguments when we invoke it. The setTitle and 
    setColor Functions are used to reset the values after the new color has been pass to 
    parent component.
  */
  const submit = (e) => {
    e.preventDefault();
    onNewColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
    // setTitle = '';
    // setColor = '';
  };
  /*
    Now that the component controls the values for title and color, we can display them inside 
    of the form input elements by setting the value attribute. Once we set the value attribute
    of an input element, we’ll no longer be able to change with the form. The only way to 
    change the value at this point would be to change the state variable every time the user
    types a new character in the input element. 
  */ 
  return (
    <form onSubmit={submit}>
      {/* <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        type="text"
        placeholder="color title..."
        required
      />
      <input
        value={color}
        onChange={(event) => setColor(event.target.value)}
        type="color"
        required
      /> */}

      <input 
        {...titleProps}
        type="text"
        placeholder="color title..."
        required
      />
      <input 
        {...colorProps}
        type='color'
        required
      />
      <button>ADD</button>
    </form>
  );
};
