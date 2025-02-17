import React, { useEffect, useRef, useState } from "react";
import { useTable } from "react-table";
import { Bar } from "react-chartjs-2";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import axios from "axios";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TicketReport = () => {
  const [entriesData, setEntriesData] = useState([]);
  const chartRef = useRef(null);

  //COnexión Base de Datos
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/tickets/report");

        if (Array.isArray(response.data)) {
          setEntriesData(response.data);
        } else {
          console.error("La respuesta de la API no es un array:", response.data);
          setEntriesData([]);
        }
      } catch (error) {
        console.error("Error fetching tickets data:", error);
        setEntriesData([]);
      }
    };

    fetchData();
  }, []);

  
  const columns = React.useMemo(
    () => [
      { Header: "Tipo de Entrada", accessor: "type" },
      { Header: "Cantidad Vendida", accessor: "sold" },
      {
        Header: "Beneficio Total",
        accessor: "revenue",
        Cell: ({ value }) => `$${value.toFixed(2)}`, 
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data: entriesData });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  
  const chartData = {
    labels: entriesData.map((entry) => entry.type),
    datasets: [
      {
        label: "Entradas Vendidas",
        data: entriesData.map((entry) => entry.sold),
        backgroundColor: "rgba(239, 176, 98)",
        yAxisID: "y1",
      },
      {
        label: "Beneficio Total",
        data: entriesData.map((entry) => entry.revenue),
        backgroundColor: "#3a415f",
        yAxisID: "y2",
      },
    ],
  };

  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Informe de Tickets Vendidos",
      },
    },
    scales: {
      y1: {
        type: "linear",
        display: true,
        position: "left",
        title: {
          display: true,
          text: "Entradas Vendidas",
        },
      },
      y2: {
        type: "linear",
        display: true,
        position: "right",
        title: {
          display: true,
          text: "Beneficio Total",
        },
        grid: {
          drawOnChartArea: false, 
        },
        ticks: {
          callback: (value) => `$${value.toFixed(2)}`, 
        },
      },
    },
  };

  // Exportar a Excel
  const exportToExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Informe");

    // Agregar encabezados
    worksheet.columns = [
      { header: "Tipo de Entrada", key: "type", width: 20 },
      { header: "Cantidad Vendida", key: "sold", width: 20 },
      { header: "Beneficio Total", key: "revenue", width: 20 },
    ];

    // Agregar filas
    entriesData.forEach((entry) => {
      worksheet.addRow({
        type: entry.type,
        sold: entry.sold,
        revenue: entry.revenue.toFixed(2), 
      });
    });

    // Capturar el gráfico como imagen
    const chart = chartRef.current;
    if (chart) {
      const image = chart.toBase64Image();
      const imageId = workbook.addImage({
        base64: image,
        extension: "png",
      });

      // Agregar la imagen al Excel
      worksheet.addImage(imageId, {
        tl: { col: 0, row: entriesData.length + 2 },
        ext: { width: 500, height: 300 },
      });
    }

    // Descargar archivo
    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(new Blob([buffer]), "informe_entradas.xlsx");
  };

  return (
    <div>
      <h1>Informe de Tickets Vendidos</h1>

      {/* Tabla */}
      <table
        {...getTableProps()}
        style={{
          border: "1px solid rgb(239, 176, 98)",
          marginBottom: "20px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  key={column.id}
                  {...column.getHeaderProps()}
                  style={{ border: "3px solid #3a415f", padding: "5px" }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr key={row.id} {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td
                    key={cell.column.id}
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

      {/* Gráfico */}
      <Bar ref={chartRef} data={chartData} options={options} />

      
    </div>
  );
};

export default TicketReport;