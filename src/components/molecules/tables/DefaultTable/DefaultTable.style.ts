import styled from "styled-components";

export const DefaultTableContainer = styled.table`
  border: 1px #a39485 solid;
  font-size: 1.4em;
  font-weight: 800;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  width: 90%;
  border-collapse: collapse;
  border-radius: 5px;
  overflow: hidden;
  th {
    text-align: left;
  }
  
  thead {
    font-weight: bold;
    color: #fff;
    background: #73685d;
  }
  td,
  th {
    padding: 1em 0.5em;
    vertical-align: middle;
  }

  td {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    background: #fff;
  }

  @media all and (max-width: 768px) {
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }
  
    th {
      text-align: right;
    }
  
    table {
      position: relative;
      padding-bottom: 0;
      border: none;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
  
    thead {
      float: left;
      white-space: nowrap;
    }
  
    tbody {
      overflow-x: auto;
      overflow-y: hidden;
      position: relative;
      white-space: nowrap;
    }
  
    tr {
      display: inline-block;
      vertical-align: top;
    }
  
    th {
      border-bottom: 1px solid #a39485;
    }
  
    td {
      border-bottom: 1px solid #e5e5e5;
    }
  } 
`;