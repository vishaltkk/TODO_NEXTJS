import { useState } from 'react';

import axios from 'axios';
import FormData from 'form-data';

const UploadButton = () => {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState('');

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', fileName);
    try {
      await axios.post('/api/test/upload/', formData);
    } catch (ex) {
      // eslint-disable-next-line no-console
      console.log(ex);
    }
  };

  return (
    <div className="App">
      <input type="file" onChange={saveFile} />
      <button onClick={uploadFile}>Upload</button>
    </div>
  );
};

export { UploadButton };
