import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import { useRef } from "react";

export default function SearchBar(props) {
  const { setSearch } = props;
  const searcRef = useRef();

  const handleSearch = () => {
    setSearch(searcRef.current.value);
    searcRef.current.value = "";
  };

  const handleKeyPress = (event) => {
    console.log("Event is ", event);
    if (event.keyCode == 13) {
      console.log("value", event.target.value);
      // put the login here
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Paper
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Address"
          inputProps={{ "aria-label": "search google maps" }}
          inputRef={searcRef}
          onKeyPress={handleKeyPress}
        />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={handleSearch}
        >
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      </Paper>
    </form>
  );
}
