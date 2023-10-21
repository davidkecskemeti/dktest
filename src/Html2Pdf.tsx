import * as React from "react";
import "./styles.css";

const pdf2html = require("pdf2html");

export default function App() {
  const handleChange = (event: any) => {
    pdf2html.html(event.target.value, (err: any, html: any) => {
      if (err) {
        console.error("Conversion error: " + err);
      } else {
        console.log(html);
      }
    });
  };

  return (
    <div className="App">
      <h1>.pdf to html with pdf2html</h1>
      <input type="file" onChange={handleChange} />
      {/* <div dangerouslySetInnerHTML={{ __html: document }} /> */}
    </div>
  );
}
