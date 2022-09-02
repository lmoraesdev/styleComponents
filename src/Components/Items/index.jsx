import React from "react";
import styled from "styled-components";
import Item from "../Item";

const WrapperItems = styled.div`
  box-shadow: 4px 4px 20px 0 px rgb(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 2px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-size: 12px;
`
export default function Items(props){
  return(
    <WrapperItems >
      <Item {...props}/>
    </WrapperItems>
  )
}
