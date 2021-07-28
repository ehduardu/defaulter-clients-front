import styled from "styled-components";
import { darken } from "polished";

const Container = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    select {
      background: rgba(0, 0, 0, 0.1);
      font-size: 14px;
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: rgba(255, 255, 255, 0.9);
      margin: 0 0 10px;
    }

    select option {
      color: #000;
      font-size: 12px;
      font-weight: bold;
      background: #f8e6e0;
      opacity: 0.1;
      border: 0;
      border-radius: 4px;
      line-height: 22px; /* altura das options */
      min-height: 22px; /* este valor deve ser o mesmo do acima */
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background: ${darken(0.03, "#3b9eff")};
      }
    }

    a {
      position: relative;
      top: 30px;
      border-radius: 3px;
      padding: 13px 75px;
      border: 1px solid #fff;
      text-decoration: none;
      color: #fff;
      transition: all 0.5s;

      &:hover {
        background: #fff;

        color: #f75a48;
      }
    }
  }
  img {
    max-width: 500px;
    max-height: 250px;
    width: auto;
    height: auto;
  }
  a {
    position: relative;
    top: 30px;
    border-radius: 3px;
    padding: 13px 75px;
    border: 1px solid #fff;
    text-decoration: none;
    color: #fff;
    transition: all 0.5s;

    &:hover {
      background: #fff;

      color: #f75a48;
    }
  }
`;

export default Container;
