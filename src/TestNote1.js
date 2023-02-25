import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function TestNote1() {
  const [value, setValue] = useState('');

  return (
    <section className='note'>
      <header className='note-header'>
        <div className='note-info'>
          <textarea rows="1" type='text' className='note-title-input'>Untitled</textarea>
          <input type="datetime-local" />
        </div>
        <div className='note-buttons'>
          <p className='save'>Save</p>
          <p className='delete'>Delete</p>
        </div>
      </header>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </section>
  );
}

export default TestNote1;