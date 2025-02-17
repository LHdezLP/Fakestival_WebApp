import React, { useEffect, useState, useMemo } from "react";
import { useTable } from "react-table";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale);

const PurchaseReport = () => {
  const [purchases, setPurchases] = useState([]);
  const [totals, setTotals] = useState({

    
    totalPurchases: 0,
    totalTickets: 0,
    totalRevenue: 0,
  });

  //Conexión con la API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/compras");
        setPurchases(response.data);

        //Campos Calculados
        const totalTickets = response.data.reduce(
          (acc, purchase) => acc + purchase.tickets.length,
          0
        );
        const totalRevenue = response.data.reduce(
          (acc, purchase) =>
            acc +
            purchase.tickets.reduce((sum, ticket) => sum + ticket.price, 0),
          0
        );

        //Campos Calculados
        setTotals({
          totalPurchases: response.data.length,
          totalTickets,
          totalRevenue,
        });
      } catch (error) {
        console.error("Error fetching purchases data:", error);
      }
    };

    fetchData();
  }, []);

  //Datos Gráfico
  const ticketTypesCount = useMemo(() => {
    const counts = {};
    purchases.forEach((purchase) => {
      purchase.tickets.forEach((ticket) => {
        counts[ticket.type] = (counts[ticket.type] || 0) + 1;
      });
    });
    return counts;
  }, [purchases]);

  const doughnutData = {
    labels: Object.keys(ticketTypesCount),
    datasets: [
      {
        label: "Tickets Vendidos",
        data: Object.values(ticketTypesCount),
        backgroundColor: [
          "rgba(239, 176, 98)",
          " #3a415f",
          "rgba(218, 44, 10, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgb(255, 187, 99)",
          "rgb(23, 26, 37)",
          "rgb(62, 7, 7)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Columnas para la tabla de compras
  const purchaseColumns = useMemo(
    () => [
      { Header: "Fecha", accessor: "fecha" },
      { Header: "ID Compra", accessor: "identificador" },
      {
        Header: "Comprador",
        accessor: "comprador",
        Cell: ({ value }) => (
          <div>
            <div>{`${value.nombre} ${value.apellido}`}</div>
            <div>{value.email}</div>
          </div>
        ),
      },
      { Header: "Tickets", accessor: (row) => row.tickets.length },
      {
        Header: "Total Gasto",
        accessor: (row) =>
          row.tickets
            .reduce((sum, ticket) => sum + ticket.price, 0)
            .toFixed(2) + " €",
      },
    ],
    []
  );

  const {
    getTableProps: getPurchaseTableProps,
    getTableBodyProps: getPurchaseTableBodyProps,
    headerGroups: purchaseHeaderGroups,
    rows: purchaseRows,
    prepareRow: preparePurchaseRow,
  } = useTable({ columns: purchaseColumns, data: purchases });

  // Columnas tabla de tickets por compra
  const ticketColumns = useMemo(
    () => [
      { Header: "Tipo de Ticket", accessor: "type" },
      { Header: "ID Ticket", accessor: "identifier" },
      { Header: "Precio", accessor: (row) => row.price.toFixed(2) + " €" },
    ],
    []
  );

  return (
    <div>
      {/* Encabezado */}
      <section>
        <h1>Informe de Compras Registradas</h1>
        <p>Fecha de generación: {new Date().toLocaleDateString()}</p>
        <hr />
      </section>

      {/* Resumen general */}
      <section>
        <h2>Resumen General</h2>
        <table
          style={{
            border: "3px solid #3a415f",
            marginBottom: "20px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <thead>
            <tr>
              <th style={{ border: "3px solid #3a415f", padding: "5px" }}>
                Compras Totales
              </th>
              <th style={{ border: "3px solid #3a415f", padding: "5px" }}>
                Total de Tickets Vendidos
              </th>
              <th style={{ border: "3px solid #3a415f", padding: "5px" }}>
                Ingresos Totales
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "3px solid #3a415f", padding: "5px" }}>
                {totals.totalPurchases}
              </td>
              <td style={{ border: "3px solid #3a415f", padding: "5px" }}>
                {totals.totalTickets}
              </td>
              <td style={{ border: "3px solid #3a415f", padding: "5px" }}>
                {totals.totalRevenue.toFixed(2)} €
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
      </section>

      {/* Gráfico" */}
      <section>
        <h2>Distribución de Tickets Vendidos</h2>
        <div
          style={{
            width: "50%",
            margin: "0 auto",
            display: "flex",
            flexdirection: "row",
            justifyContent: "center",
          }}
        >
          <Doughnut data={doughnutData} />
        </div>
        <hr />
      </section>

      {/* Detalle de la compras */}
      <section className="detalle-compra">
        <h2>Detalle de las Compras</h2>
        <table
          {...getPurchaseTableProps()}
          style={{
            border: "3px solid #3a415f",
            marginBottom: "20px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <thead>
            {purchaseHeaderGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    style={{ border: "3px solid #3a415f", padding: "5px" }}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getPurchaseTableBodyProps()}>
            {purchaseRows.map((row) => {
              preparePurchaseRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      style={{ border: "3px solid #3a415f", padding: "5px" }}
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        <hr />
      </section>

      {/* Detalle de tickets por compra */}
      <section>
        <h2>Detalle de Tickets por Compra</h2>
        <div
          style={{
            display: "flex",
            flexdirection: "row",
            justifyContent: "center",
          }}
        >
          {purchases.map((purchase) => (
            <div key={purchase.identificador} style={{ padding: "5px" }}>
              <h3>Compra: {purchase.identificador}</h3>
              <table
                style={{
                  border: "3px solid #3a415f",
                  marginBottom: "20px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <thead>
                  <tr>
                    <th style={{ border: "3px solid #3a415f", padding: "5px" }}>
                      Tipo de Ticket
                    </th>
                    <th style={{ border: "3px solid #3a415f", padding: "5px" }}>
                      ID Ticket
                    </th>
                    <th style={{ border: "3px solid #3a415f", padding: "5px" }}>
                      Precio
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {purchase.tickets.map((ticket) => (
                    <tr key={ticket.identifier}>
                      <td
                        style={{ border: "3px solid #3a415f", padding: "5px" }}
                      >
                        {ticket.type}
                      </td>
                      <td
                        style={{ border: "3px solid #3a415f", padding: "5px" }}
                      >
                        {ticket.identifier}
                      </td>
                      <td
                        style={{ border: "3px solid #3a415f", padding: "5px" }}
                      >
                        {ticket.price.toFixed(2)} €
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
          <hr />
        </div>
      </section>
    </div>
  );
};

export default PurchaseReport;
