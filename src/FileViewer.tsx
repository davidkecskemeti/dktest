import * as React from "react";
import "./styles.css";

const App = () => {
  const sampleFile =
    // "https://docs.google.com/viewerng/viewer?chrome=true&embedded=true&&url=https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=d5048c9386&attid=0.1&permmsgid=msg-f:1663372897816249255&th=17157cd66f5983a7&view=att&disp=inline&realattid=f_k8pnwi3n0&saddbat=ANGjdJ_jUT_ktTYqFoNYpm9kPWsyJ5IumLwPKcgTFOfwrNjipuDYepjUp6_EdcU_e1EPnUi5HczzxOtY4406n0Bbrs88y4-o3pdbKQVQcTvsBT5T6CaPFT7XdlOVooXbUMk8NuQQSIU0xSQHgE1I2aINY6IvDv3N9yNCZXGJFqeCcznVxrrUHVAPCuKKB7pkfs8qrhphMJVIdJ6xZWUIlnFcFMoUuu50MigBVtQWpSRdBPYBpS6l7y0kolP4wNjYp_YQI1BaIOGDeesqC6f-Pxo8Y_AZYJOGatwsnr0nqy2wvD6YORlDil2a47GXrY0xS2fn0Jp0uZLvN-xaqqiEEluO_UCLTuktX4Bh3-KEvDGLBkRMKRf_scN6BcnzgInX5hxIeTEVtrBWcNX-EOCxvQJdLIGUwv1CzrK2Kf7aRvkBMowY_sATEfKkjSSNpa_cc1NpeMdpQzYvWIilrCQEGqOA0KT8dAj_Zm-YKBs62eO6Lj4WbaFy-ujIIwHZIzk4CDCQNPRVuTjxwaoC-nWvfUy5_YCKjpv1Bk8NTfDoI5YI_8zBEnGrbhbkBPGTHCHvWTgP4dmOm6cHK58KOxUv9SSH8BEt6qdHHn8OaI6mBGgZt0IIhzkVplHKj40syjuBQjWEby4mtjuq1XT-e5G0B81BZsVXSJgyoHhBG_xTs3QURIMaz7U8bkmd334JRy0";
    "https://docs.google.com/viewerng/viewer?chrome=true&embedded=true&&url=https://uatcdn.ubidyapp.com/employer-documents/6418b718-64a4-468b-9483-5eba692cd059.pdf";
  const [document, setDocument] = React.useState(sampleFile);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    var file = event.target.files ? event.target.files[0] : null;

    var reader = new FileReader();

    reader.onload = () => {
      var loadedFile = reader.result ? reader.result.toString() : sampleFile;
      setDocument(`data:application/pdf;base64,${loadedFile}`);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="App">
      <h1>iframe</h1>
      <input type="file" onChange={handleChange} />
      <div>
        <iframe
          title="file-viewer"
          src={document}
          width="100%"
          height="500px"
        />
      </div>
    </div>
  );
};

export default App;
