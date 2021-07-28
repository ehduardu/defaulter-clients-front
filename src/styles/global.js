import { createGlobalStyle } from "styled-components";

import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus{
    outline: 0!important;
  }

  html, body, #root{
    height: 100%
  }

  body{
    line-height: 1.43 !important;
    background: #f1f4f6;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font: 14px 'Roboto', sans-serif;
    caret-color: transparent;
  }

  a {
   text-decoration: none!important;
  }
  p{
   margin-bottom: 0rem;
  }
  ul{
    list-style: none;
  }

  button{
    cursor: pointer;
  }
  hr{
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  #md-app-widget.md-chat-widget-wrapper.RightSide .md-chat-widget-container, #md-app-widget.md-chat-widget-wrapper.RightSide .md-chat-widget-btn-container{
    right: 37px!important;
  }
  .md-chat-widget-container{
  }
  svg#Layer_1{
    fill:#fff!important
  }
  .md-chat-widget-wrapper{
    bottom: 15px!important;
  }
`;
