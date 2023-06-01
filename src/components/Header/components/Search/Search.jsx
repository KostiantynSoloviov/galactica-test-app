import { useState } from "react";

import { useTranslation } from "react-i18next";

import SVGgeneral from "../../../../utils/generalSprite";

import styles from "./Search.module.css";

const Search = () => {
  const [inputValue, setInputValue] = useState("");

  const { t } = useTranslation();
  function formSubmit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={(e) => formSubmit(e)} className={styles.search}>
      <button className={styles.search__button}>
        <SVGgeneral id="search" />
      </button>
      <input
        type="text"
        placeholder={t("search")}
        className={styles.search__input}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
};

export default Search;
