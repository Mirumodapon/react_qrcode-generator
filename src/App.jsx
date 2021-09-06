import React, { useState, useEffect } from 'react';
import QRcode from 'qrcode.react';
import Popup from 'reactjs-popup';

import useSearch from './hooks/useSearch';
import useHash from './hooks/useHash';
import './App.css';

const App = () => {
  const search = useSearch();
  const hash = useHash();
  const [value, setValue] = useState(null);
  const [popup, setPopup] = useState(false);
  const [size, setSize] = useState(200);
  
  useEffect(() => {
    if (search.value)
	setValue(search.value);
	else if (hash)
	setValue(hash);
  },[search,hash]);
  
  const handleChange = (e) => {
	setValue(e.target.value);
  }
  const handleBlur = (e) => {
	window.location.hash = `#${e.target.value}`;
  }
  const handleKeyDown = ({key,ctrlKey}) => {
    if (key === '+' || (key === '=' && ctrlKey)) {
	  setSize(size+25);
	}
    if (key === '-' || (key === '-' && ctrlKey)) {
	  setSize(size-25);
	}
	console.log(size);
  }

  return (
    <div className="container">
      <h1>QRcode Generate</h1>
      <QRcode value={value || 'mirumo.org'} onClick={()=>setPopup(true)}/>
	  <textarea value={value || ''} placeholder="mirumo.org" onChange={handleChange} onBlur={handleBlur}></textarea>
	  <Popup open={popup} onClose={()=>setPopup(false)} closeOnDocumentClick >
	    <QRcode value={value || 'mirumo.org'} style={{height: `${size}px`,width: `${size}px`}}/>
		<input  style={{opacity: 0,position: 'absolute'}} onKeyDown={handleKeyDown} />
	  </Popup>
	</div>
  );
}

export default App;
