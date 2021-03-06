const LocalStorage = {};

LocalStorage.get = key => {
  return localStorage.getItem(key);
};
LocalStorage.set = (key, value) => {
  return localStorage.setItem(key, value);
};
LocalStorage.remove = key => {
  return localStorage.removeItem(key);
};


LocalStorage.getNotes = () => {
  return LocalStorage.get("notes");
};


LocalStorage.getNotebooks = notebook => {
  return LocalStorage.get(notebook);
};


LocalStorage.setNotes = value => {
  LocalStorage.set("notes", value);
};


LocalStorage.rmNotes = () => {
  LocalStorage.remove("notes");
};


LocalStorage.rmNoteBook = notebok => {
  LocalStorage.remove(notebok);
};


LocalStorage.note = id => {
  if (LocalStorage.getNotes() !== null) {
    const List = JSON.parse(LocalStorage.getNotes());
    return List[id];
  }
  return [];
};


LocalStorage.rowExists = object => {
  const List = JSON.parse(LocalStorage.getNotes());
  if (List !== null && List.length > 0) {
    return List.filter(item => {
      return object.id === item.id;
    });
  } else {
    return [];
  }
};


LocalStorage.rowExistsIn = (notebook, object) => {
  const List = JSON.parse(localStorage.getItem(notebook));
  if (List !== null && List.length > 0) {
    return List.filter(item => {
      return object.id === item.id;
    });
  } else {
    return [];
  }
};
LocalStorage.getAllNotes = () => {
  let Lenguajes = LocalStorage.getNotebooks("Lenguajes Prog.");
  let Experiencia = LocalStorage.getNotebooks("Experiencia Usuario");
  let Diseno = LocalStorage.getNotebooks("Diseno S.Logicos");
  let Notes = LocalStorage.getNotebooks("notes");
  let All;
  Lenguajes = Lenguajes !== null ? JSON.parse(Lenguajes) : [];
  Experiencia = Experiencia !== null ? JSON.parse(Experiencia) : [];
  Diseno = Diseno !== null ? JSON.parse(Diseno) : [];
  Notes = Notes !== null ? JSON.parse(Notes) : [];
  All = [...Lenguajes, ...Experiencia, ...Diseno, ...Notes];

  return All;
};

LocalStorage.findId = id => {
  const List = LocalStorage.getAllNotes();
  if (List !== null && List.length > 0) {
    return List.filter(item => {
      return id === item.id;
    });
  } else {
    return [];
  }
};


LocalStorage.updateId = (id, itemObject) => {
  const List = JSON.parse(
    LocalStorage.getNotebooks(
      itemObject.notebook === "" ? "notes" : itemObject.notebook
    )
  );

  let notebookIs = itemObject.notebook;
  if (List !== null && List.length > 0) {
    const updatedList = List.filter(item => {
      if (id === item.id) {
        const { title, message, category } = itemObject;
        item.title = title;
        item.message = message;
        item.category = category;
      }
      return item;
    });
    LocalStorage.set(
      notebookIs === "" ? "notes" : notebookIs,
      JSON.stringify(updatedList)
    );
    return true;
  } else {
    return false;
  }
};

export default LocalStorage;
