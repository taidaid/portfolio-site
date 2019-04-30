import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import myResume from "../assets/resume-bryan-windsor.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
  pdfjs.version
}/pdf.worker.js`;

const Resume = () => {
  return (
    <div className="container-fluid align-items-center">
      <button style={{ marginTop: "20px" }}>
        <a href="https://app.zety.com/mycv/8ed5ad11-0a66-4f73-a7f8-a61ef8b39b87/download">
          Click to download
        </a>
      </button>
      <Document className="Resume align-items-center " file={myResume}>
        <Page pageIndex={0} />
      </Document>
    </div>
  );
};

export default Resume;
