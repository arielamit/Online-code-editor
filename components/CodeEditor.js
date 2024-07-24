import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

const socket = io();

export default function CodeEditor({ codeBlock, isMentor }) {
  const [code, setCode] = useState(codeBlock.code);

  useEffect(() => {
    socket.on('codeUpdate', (newCode) => {
      setCode(newCode);
    });

    return () => {
      socket.off('codeUpdate');
    };
  }, []);

  useEffect(() => {
    hljs.highlightAll();
  }, [code]);

  const handleChange = (e) => {
    const newCode = e.target.value;
    setCode(newCode);
    socket.emit('codeUpdate', newCode);
  };

  return (
    <div>
      <pre>
        <code className="javascript">{code}</code>
      </pre>
      {!isMentor && <textarea value={code} onChange={handleChange} />}
    </div>
  );
}
