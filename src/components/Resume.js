import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
// import myResume from "../assets/resume-bryan-windsor.pdf";
// import myCV from "../assets/Bryan Windsor-CV.pdf";
import myCV from "../assets/Bryan Windsor-CV.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  return (
    <div className="container-fluid align-items-center">
      <button
        style={{
          marginTop: "20px",
          background: "#203864",
          borderRadius: "25px",
          color: "white",
        }}
      >
        <a href={myCV} download>
          Download
        </a>
      </button>
      <Document className="Resume align-items-center  " file={myCV}>
        <Page pageIndex={0} />
        <hr />
        <Page pageIndex={1} />
        <hr />
        <Page pageIndex={2} />
        <hr />
        <Page pageIndex={3} />
        <hr />
        <Page pageIndex={4} />
      </Document>
    </div>
  );
};

export default Resume;
