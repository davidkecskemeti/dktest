import * as React from "react";
import "./styles.css";
var mammoth = require("mammoth");

export default function App() {
  const [document, setDocument] = React.useState("");

  const extractContentControlsFromHTML = (html) => {
    // Define a regular expression to match content controls
    const regex = /<w:sdt\b[^>]*>[\s\S]*?<\/w:sdt>/g;

    // Use the regex to extract content controls from the HTML
    const matches = html.match(regex);

    // Return the matched content controls
    return matches || [];
  };

  const readFileInputEventAsArrayBuffer = (event: any, callback: any) => {
    var file = event.target.files[0];

    var reader = new FileReader();

    reader.onload = (loadEvent: any) => {
      var arrayBuffer = loadEvent.target.result;
      callback(arrayBuffer);
    };

    reader.readAsArrayBuffer(file);
  };

  const handleChange = (event: any) => {
    const options = {
      ignoreEmptyParagraphs: false
    };
    readFileInputEventAsArrayBuffer(event, (arrayBuffer: any) => {
      mammoth
        .convertToHtml({ arrayBuffer: arrayBuffer }, options)
        .then((result: any) => setDocument(result.value))
        .done();
    });
  };

  return (
    <div className="App">
      <input type="file" onChange={handleChange} />
      {document && (
        <div
          className="converted-file-container"
          dangerouslySetInnerHTML={{ __html: document }}
        />
      )}
    </div>
  );
}
