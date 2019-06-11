import React from "react";

import * as S from "./layout";
import Right from "./right";

function Left({ className, children }) {
  return <S.LeftContent className={className}>{children}</S.LeftContent>;
}

function Splitter({ children }) {
  return <S.Container>{children}</S.Container>;
}

Splitter.Left = Left;
Splitter.Right = Right;

export default Splitter;
