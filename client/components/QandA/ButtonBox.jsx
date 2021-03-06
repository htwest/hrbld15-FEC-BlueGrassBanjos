/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';

function ButtonBox({ toggleAskQuestion, addMoreQuestions }) {
  return (
    <div className="row">
      <button type="button" className="col-3 btn m-3 btn-light btn-lg" onClick={addMoreQuestions}>More Questions</button>
      <button type="button" className="col-3 btn m-3 btn-light btn-lg" onClick={toggleAskQuestion}>Add A Question</button>
    </div>
  );
}

export default ButtonBox;
