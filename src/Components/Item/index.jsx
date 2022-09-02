import React from "react";
import styled from "styled-components";

const WrapperItem = styled.div`
  display:flex;
  flex-direction:column;

  .text{ font-weight:bold;}
`
export default function Item ({type,from, value}){
  return(
  <WrapperItem>
    <span className="text">{type}</span>
    <span>{from}</span>
    <span>{value}</span>
  </WrapperItem>)
}

