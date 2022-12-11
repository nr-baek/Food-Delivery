import React from "react";
import { StyledForm } from "./styles";

function Search() {
  return (
    <StyledForm>
      <form>
        <fieldset>
          <legend>가게 검색 폼</legend>
          <label htmlFor="search-store">
            <input
              type="text"
              id="search-store"
              placeholder="가게 검색"
              autoComplete="off"
            />
          </label>
        </fieldset>
      </form>
    </StyledForm>
  );
}

export default Search;
