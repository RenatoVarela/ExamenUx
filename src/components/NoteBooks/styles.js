import { makeStyles } from "@material-ui/core/styles";

export const useListStyles = makeStyles(theme => ({
  noteBooksContainer: {
    backgroundColor: "#E6E6E6",
    minHeight: "100%"
  },
  noteBookList: {
    cursor: "pointer"
  },
  active: {
    backgroundColor: "#ccc"
  }
}));
