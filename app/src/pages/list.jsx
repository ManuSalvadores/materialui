import React from "react";
import fakedata from "../fakedata.json";
import Thumbnail from "../components/thumbnail/thumbnail";
import Title from "../components/title/title";
import {ListContainer} from "./list.styles";

function List() {
  return (
    <>
      {fakedata.response.map((obj) => {
        const { id, img, name } = obj;
        return (
          <ListContainer>
            <Thumbnail key={id} src={img} alt={name} />
            <Title text={name} />
          </ListContainer>
        );
      })}
    </>
  );
}

export default List;
