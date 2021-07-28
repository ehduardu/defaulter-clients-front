import styled, { keyframes, css } from "styled-components";

export const Content = styled.div`
  /* background-color: #81d2eb; */
  background-color: #f3f3f3;
  color: black;

  width: 700px;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    align-items: center;
    flex-direction: row;

    svg {
      margin-right: 10px;
    }
  }
`;

export const Title = styled.h1`
  color: #fff;
`;

export const Form = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  input {
    flex: 1;
    border: ${(props) => (props.error ? "1px solid #f00" : "1px solid #eee")};
    border-radius: 4px;
    font-size: 16px;
    padding: 10px 15px;
  }
`;

const rotate = keyframes`
   from{
     transform: rotate(0deg)
   }
   to{
     transform: rotate(360deg)
   }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid #eee;
    }
    a {
      color: #fff;
      text-decoration: none;
    }
  }
`;

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

    thead tr {
      background-color: #009879;
      color: #ffffff;
      text-align: left;
    }

    tbody tr {
      border-bottom: 1px solid #dddddd;
    }

    tbody tr:nth-of-type(even) {
      background-color: #c5c3c3;
    }

    tbody tr:last-of-type {
      border-bottom: 2px solid #009879;
    }

    tbody tr.active-row {
      font-weight: bold;
      color: #009879;
    }

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 12px 15px;
      border-bottom: 1px solid black;
      /* border-right: 1px solid black; */

      :last-child {
        border-right: 0;
      }
    }
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: "submit",
  disabled: props.loading,
}))`
  background: #fff;
  border: 0;
  padding: 0 15px;
  border-radius: 4px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #81d2eb;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
