import React, { useState, useEffect, useMemo } from "react";
import { format } from "date-fns";
import { toast } from "react-toastify";
import { FaStore, FaSearch, FaSpinner } from "react-icons/fa";
import { useTable, useSortBy, usePagination } from "react-table";

import DefaultLayout from "../_layouts/default";
import api from "../../services/api";

import { Content, Form, SubmitButton, TableContainer } from "./styles";

function Table({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy,
      usePagination
    );

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
    </>
  );
}

export default function Home() {
  const [defaulterClients, setDefaulterClients] = useState([]);
  const [filterClientes, setFilterClientes] = useState([]);
  const [filterString, setFilterString] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        let clientsResponse = await api.get("/clients");

        clientsResponse = clientsResponse.data?.clients.map((client) => {
          return {
            ...client,
            date: format(new Date(client.date), "yyyy/MM/dd"),
          };
        });
        setDefaulterClients(clientsResponse);
      } catch (error) {
        console.log(error);

        toast.error(error, { autoClose: 5000 });
      }
      setLoading(false);
    }

    loadData();
  }, []);

  useEffect(() => {
    setFilterClientes(defaulterClients);
  }, [defaulterClients]);

  const columns = useMemo(
    () => [
      {
        Header: "Nome do cliente",
        accessor: "name",
      },
      {
        Header: "Endereço",
        accessor: "address",
      },
      {
        Header: "Desde",
        accessor: "date",
      },
      {
        Header: "Valor",
        accessor: "total",
      },
    ],
    []
  );

  const handleClients = () => {
    console.log(filterString);
    const filtered = defaulterClients.filter((client) =>
      client.name.toUpperCase()?.includes(filterString.toUpperCase())
    );

    console.log(filtered);

    setFilterClientes(filtered);
  };

  return (
    <DefaultLayout>
      <Content>
        <h1>
          <FaStore />
          Clientes Inadimplentes
        </h1>
        <Form>
          <input
            type="text"
            placeholder="Pesquisar cliente"
            onChange={(e) => setFilterString(e.target.value)}
          />
          <SubmitButton loading={loading} onClick={handleClients}>
            {loading ? (
              <FaSpinner color="#009879" size={14} />
            ) : (
              <FaSearch color="#009879" size={14} />
            )}
          </SubmitButton>
        </Form>
        <TableContainer>
          <Table columns={columns} data={filterClientes} />
        </TableContainer>
      </Content>
    </DefaultLayout>
  );
}
