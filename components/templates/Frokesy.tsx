import React from "react";
import Layout from "./Layout";

const Frokesy = () => {
  return (
    <>
      <Layout>
        <a href="/api/pdf" download="generated_pdf.pdf" className="absolute top-10 left-10">
          Download PDF
        </a>
        <h1>Generated PDF</h1>
        <p>This text will be in the PDF!</p>
      </Layout>
    </>
  );
};

export default Frokesy;
