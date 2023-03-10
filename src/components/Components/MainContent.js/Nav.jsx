import classes from "./Nav.module.css";

import Input from "../UI/Input";
import Button from "../UI/Button";
import { useState, useContext } from "react";
import SearchContext from "../../../context/search-context";

export default function Nav(props) {
  const searchCtx = useContext(SearchContext);
  const [search, setSearch] = useState("");

  const onloadPageHandler = (e) => {
    const pageName = e.target.id;
    props.onLoadPage(pageName);
  };

  const onChangeValueHandler = (e) => {
    setSearch(e.target.value);
  };

  const submitSearchHandler = (e) => {
    e.preventDefault();
    searchCtx.onSearch(search);
  };

  return (
    <ul className={classes.navbar}>
      <li>
        <a href={"#"} onClick={onloadPageHandler}>
          <box-icon id="sidebar" color="#d9d9d9" name="slider"></box-icon>
        </a>
      </li>
      <li>
        <form onSubmit={submitSearchHandler}>
          <Input value={search} onChange={onChangeValueHandler} />
          <Button className={classes.btn} type={"submit"}>
            <box-icon id="search" color="#d9d9d9" name="search"></box-icon>
          </Button>
        </form>
      </li>
      <li>
        <a href={"#"} onClick={onloadPageHandler}>
          <box-icon id="user" color="#d9d9d9" name="user"></box-icon>
        </a>
      </li>
      <li>
        <a href={"#"} onClick={onloadPageHandler}>
          <box-icon id="watchlist" color="#d9d9d9" name="star"></box-icon>
        </a>
      </li>
      <li>
        <a href={"#"} onClick={onloadPageHandler}>
          <box-icon id="cart" color="#d9d9d9" name="cart"></box-icon>
        </a>
      </li>
    </ul>
  );
}
