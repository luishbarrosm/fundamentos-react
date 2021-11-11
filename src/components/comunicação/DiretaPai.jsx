import React from "react";
import DiretaFilho from "./DiretaFilho";

export default (props) => {
  return (
    <div>
      <DiretaFilho nome="José" idade={20} nerd={false}></DiretaFilho>
      <DiretaFilho nome="Luiza" idade={12} nerd={true}></DiretaFilho>
      <DiretaFilho nome="Marcos" idade={23} nerd={true}></DiretaFilho>
    </div>
  );
};
