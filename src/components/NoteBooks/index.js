import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { useStateValue } from "../../statemanagement";
import { useListStyles as useStyles } from "./styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from "@material-ui/icons/Folder";
import LocalStorage from "../../Utils/localStorage";

function NoteBooks() {
  const classes = useStyles();
  const [activeNote, setActiveNote] = useState("all");
  const [, dispatch] = useStateValue();

  /**
   * show a list of notes of a notebook and dispatch it into Context
   **/
  function showNotesOf(Notebook) {
    let Lenguajes = LocalStorage.getNotebooks("Lenguajes Prog.");
    let Experiencia = LocalStorage.getNotebooks("Experiencia Usuario");
    let Diseno = LocalStorage.getNotebooks("Diseno S.Logicos");
    let Notes = LocalStorage.getNotebooks("notes");
    setActiveNote(Notebook);
    if (Notebook === "all") {
      let All;
      Lenguajes = Lenguajes !== null ? JSON.parse(Lenguajes) : [];
      Experiencia = Experiencia !== null ? JSON.parse(Experiencia) : [];
      Diseno = Diseno !== null ? JSON.parse(Diseno) : [];
      Notes = Notes !== null ? JSON.parse(Notes) : [];
      All = [...Lenguajes, ...Experiencia, ...Diseno, ...Notes];
      if (All.length > 0) {
        dispatch({ type: "newNote", notes: All });
      }
    } else {
      let Notes;
      if (Notebook === "Lenguajes Prog.") {
        Notes = Lenguajes;
      }
      if (Notebook === "Experiencia Usuario") {
        Notes = Experiencia;
      }
      if (Notebook === "Diseno S.Logicos") {
        Notes = Diseno;
      }

      Notes = Notes !== null ? JSON.parse(Notes) : [];
      dispatch({ type: "newNote", notes: Notes });
    }
  }

  return (
    <React.Fragment>
      <Typography
        variant="h5"
        align="center"
        color="primary"
        gutterBottom
        noWrap
      >
        Note Books
      </Typography>

      <div className={classes.noteBooksContainer}>
        <div className={classes.demo}>
          <List dense={false}>
            <ListItem
              className={[
                classes.noteBookList,
                activeNote === "all" && classes.active
              ].join(" ")}
              onClick={() => showNotesOf("all")}
            >
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="All" />
            </ListItem>

            <ListItem
              className={[
                classes.noteBookList,
                activeNote === "Lenguajes Prog." && classes.active
              ].join(" ")}
              onClick={() => showNotesOf("Lenguajes Prog.")}
            >
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Lenguajes Prog." />
            </ListItem>

            <ListItem
              className={[
                classes.noteBookList,
                activeNote === "Experiencia Usuario" && classes.active
              ].join(" ")}
              onClick={() => showNotesOf("Experiencia Usuario")}
            >
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Experiencia Usuario" />
            </ListItem>

            <ListItem
              className={[
                classes.noteBookList,
                activeNote === "Diseno S.Logicos" && classes.active
              ].join(" ")}
              onClick={() => showNotesOf("Diseno S.Logicos")}
            >
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Diseno S.Logicos" />
            </ListItem>
          </List>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NoteBooks;
