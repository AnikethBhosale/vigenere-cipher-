import React, { useState } from 'react';
import './App.css';

function App() {
  const [plaintext, setPlaintext] = useState(''); 
  const [key, setKey] = useState(''); 
  const [ciphertext, setCiphertext] = useState('');


  const alphabets = 'abcdefghijklmnopqrstuvwxyz';


  const EncryptText=(text,key)=>{
    let encryptedText ='';
    let keyIndex = 0;

    for (let i = 0; i < text.length; i++) {
      const currentLetter = text.charAt(i); 
      const isUpperCase = currentLetter === currentLetter.toUpperCase(); 
      const currentLetterLower = currentLetter.toLowerCase();

      if (alphabets.includes(currentLetterLower)) {
        const textPos = alphabets.indexOf(currentLetterLower);
        const keyPos = alphabets.indexOf(key.charAt(keyIndex % key.length).toLowerCase());

       
        const newPos = (textPos + keyPos) % 26; 
        const encryptedLetter = alphabets[newPos]; 
       
        encryptedText += isUpperCase ? encryptedLetter.toUpperCase() : encryptedLetter; 

        keyIndex++; 
      } else {
        encryptedText += currentLetter;
      }
    }
      return encryptedText;
  };


  const DecryptText = (text, key) => {
    let decryptedText = ''; 
    let keyIndex = 0; 

    for (let i = 0; i < text.length; i++) {
      const currentLetter = text.charAt(i); 

      
      const isUpperCase = currentLetter === currentLetter.toUpperCase(); 
      const currentLetterLower = currentLetter.toLowerCase(); 

      if (alphabets.includes(currentLetterLower)) { 

        const textPos = alphabets.indexOf(currentLetterLower);
        const keyPos = alphabets.indexOf(key.charAt(keyIndex % key.length).toLowerCase());

        const newPos = (textPos - keyPos + 26) % 26; 
        const decryptedLetter = alphabets[newPos];

        decryptedText += isUpperCase ? decryptedLetter.toUpperCase() : decryptedLetter; 
        keyIndex++; 
      } else {
        decryptedText += currentLetter; 
      }
    }
    return decryptedText; 
  };


  const handleEncrypt = () => {
    setCiphertext(EncryptText(plaintext, key)); 
  };


  const handleDecrypt = () => {
    setCiphertext(DecryptText(plaintext, key)); 
  };



  return (
    <div className="App">
      <form className='textForm'>
        <div className='enterText'>
          <div className='txt'>Enter Text</div>
                <input className='inp' type="text" value={plaintext} onChange={(e) => setPlaintext(e.target.value)}/>
        </div>

        <div className='enterKeyText'>
          <div className='txt'>Enter Key</div>
                <input className='inp' type="text" value={key}  onChange={(e) => setKey(e.target.value)}/>
        </div>
      </form>

      <div className='btns'>
      <button className='enbtn' onClick={handleEncrypt}>Encode</button> 
      <button className='debtn' onClick={handleDecrypt}>Decode</button>
      </div>

      <div className='result'>
        <div className='resulth'>Result:</div>
        <div className='resultc'>{ciphertext}</div>
      </div>
    </div>
  );
}

export default App;
