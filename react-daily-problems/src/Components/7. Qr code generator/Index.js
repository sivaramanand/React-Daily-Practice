import React,{useState,useRef} from 'react'
import QRCode from 'qrcode.react';
import "./Style.css"
const QrCodeGenerator = () => {
    const [text, setText] = useState('');
    const qrCodeRef = useRef(null);
  
    const handleDownload = () => {
      const canvas = qrCodeRef.current.querySelector('canvas');
      const url = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = url;
      link.download = 'qrcode.png';
      link.click();
    };
  
    return (
      <div className="container">
        <input 
          type="text" 
          placeholder="Enter text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          className="input"
        />
        <div ref={qrCodeRef} className="qr-code">
          <QRCode value={text || ' '} size={256} />
        </div>
        <button onClick={handleDownload} className="download-button">Download QR Code</button>
      </div>
    );
}

export default QrCodeGenerator
