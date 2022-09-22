import React from 'react';
import Pdf from '../../documents/Jullian_Yapeter_Resume.pdf';

const PDF = () => (
  <div className="skills">
    <div className="link-to" id="pdf" />
    <div className="title">
      <h3>Download</h3>
    </div>
    <div className="title">
      <a href={Pdf} without rel="noopener noreferrer" target="_blank">
        <button trailingIcon="picture_as_pdf" label="Resume" type="button">
          Resume PDF
        </button>
      </a>
    </div>
  </div>
);

export default PDF;
