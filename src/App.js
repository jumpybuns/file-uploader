import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
  state = {
    selectedFile: null,
  };

  fileSelectedHandler = (event) => {
    console.log(event.target.files[0]);
  };

  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
    axios
      .post('https://obscure-waters-43656.herokuapp.com/uploads', fd)
      .then((res) => {
        console.log(
          'Upload Progress: ' +
            Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
            '%'
        );
      });
  };
  render() {
    return (
      <div>
        <input
          type="file"
          style={{ display: 'none' }}
          onChange={this.fileSelectedHandler}
          ref={(fileInput) => (this.fileInput = fileInput)}
        />
        <button onClick={() => this.fileInput.click()}>Pick File</button>
        <button onClick={this.fileUploadHandler}>Upload</button>
      </div>
    );
  }
}
