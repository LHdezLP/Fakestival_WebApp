import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import TicketReport from "../../components/reports/ticket-report/TicketReport";
import PurchaseReport from "../../components/reports/purchase-report/PurchaseReport";
import "./ReportPage.css";

function ReportPage() {
  const purchaseReportRef = useRef(null);
  const reportRef = useRef(null);

  const handleExportPDF = async () => {
    const pdf = new jsPDF("p", "mm", "a4");

    
    const purchaseReportCanvas = await html2canvas(purchaseReportRef.current);
    const purchaseReportImg = purchaseReportCanvas.toDataURL("image/png");

    
    const reportCanvas = await html2canvas(reportRef.current);
    const reportImg = reportCanvas.toDataURL("image/png");

    
    pdf.addImage(purchaseReportImg, "PNG", 10, 10, 190, 0);
    pdf.addPage(); 

    
    pdf.addImage(reportImg, "PNG", 10, 10, 190, 0);

    
    pdf.save("informe_completo.pdf");
  };

  return (
    <div className="report-page">
      
      <header>
        <h1>Sistema de Informes</h1>
      </header>
     
      <main>
        
        <section ref={purchaseReportRef}>
          <PurchaseReport />
        </section>
      
        <section ref={reportRef}>
          <TicketReport />
        </section>
      </main>
     
      <footer>
        <p>&copy; Fakestival 2025. Todos los derechos reservados.</p>
      </footer>
     
      
      <button
        onClick={handleExportPDF}
        style={{
          margin: "20px",
          backgroundColor: "#3a415f",
          color: "rgba(239, 176, 98)",
          border: "2px solid rgba(239, 176, 98)",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          fontFamily: "Oswald, sans-serif",
          fontSize: "16px",
        }}
      >
        Exportar a PDF
      </button>
    </div>
  );
}

export default ReportPage;