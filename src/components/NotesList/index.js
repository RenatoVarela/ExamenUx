import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Note from "./Note";
import { useStateValue } from "../../statemanagement";
import LocalStorage from "../../Utils/localStorage";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
//import Button from "@material-ui/core/Button";
//import ButtonGroup from "@material-ui/core/ButtonGroup";
import { useListStyles as useStyles } from "./styles";
//import InputLabel from "@material-ui/core/InputLabel";
//import FormControl from "@material-ui/core/FormControl";
//import Select from "@material-ui/core/Select";

function NotesList() {
  const classes = useStyles();
  const [{ notes }, dispatch] = useStateValue();
  const [mainData, setMainData] = useState([]);
  const [state, setState] = useState("");
  const [notebookDropDown, setNotebookDropDown] = useState("");
  const [stateCategory, setStateCategory] = useState("");
  //const [checkboxes, setCheckboxes] = useState([]);

  /**
   * Find the object with complexicity O(n2)
   **/
  function searchFor(keyword, key, array) {
    const toSearch = keyword.toLowerCase();
    return array.filter(data => {
      return data[key]!==undefined && data[key].toLowerCase().includes(toSearch)
    });
  }

  /**
   * Para buscar por etiquetas
   **/
  function search(event) {
    const value = event.target.value;
    setState(value);
    setStateCategory("");
    const searched = searchFor(value, "title", notes);
    if (searched.length > 0) {
      setMainData(searched);
    }
    if (value.length === 0) {
      setMainData(notes);
    }
  }



  /**
   * handle check boxes to move into note books
   **/
  /*function handleCheckbox(state, id) {
    if (state) {
      setCheckboxes([...checkboxes, id]);
    } else {
      const index = checkboxes.indexOf(id);
      checkboxes.splice(index, 1);
      if (checkboxes.length === 0) {
        setCheckboxes([]);
      } else {
        setCheckboxes(checkboxes);
      }
    }
  }*/

  /**
   * Handle Move notes to another notebook
   **/
  

  React.useEffect(() => {
    setMainData(notes);
  }, [notes]);

  return (
    <React.Fragment>
      <Typography
        variant="h5"
        align="center"
        color="primary"
        gutterBottom
        noWrap
      >
        Notes
      </Typography>

      <TextField
        value={state}
        id="outlined-textarea"
        label="Buscar por Etiqueta"
        placeholder="Etiqueta1, Etiqueta2 ..."
        className={classes.textField}
        margin="normal"
        variant="outlined"
        fullWidth
        onChange={e => search(e)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />

     

    

      <div className={classes.margin}>
        {mainData.length > 0 &&
          mainData.map((item, index) => (
            <Note
              //setCheckbox={handleCheckbox}
              row={index}
              item={item}
              key={item.id}
            />
          ))}
      </div>
    </React.Fragment>
  );
}

export default NotesList;
