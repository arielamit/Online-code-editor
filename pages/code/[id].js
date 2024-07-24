// pages/code/[id].js
import { useRouter } from 'next/router';
import CodeEditor from '../../components/CodeEditor';
import { useEffect, useState } from 'react';

const codeBlocks = [
  { title: 'Async case', code: 'const asyncExample = async () => { /* code */ };' },
  { title: 'Closure', code: 'function closure() { /* code */ }' },
  { title: 'Promises', code: 'const promiseExample = new Promise((resolve, reject) => { /* code */ });' },
  { title: 'Event Loop', code: 'setTimeout(() => { /* code */ }, 0);' }
];

export default function CodeBlockPage() {
  const router = useRouter();
  const { id } = router.query;
  const [codeBlock, setCodeBlock] = useState(null);
  const [isMentor, setIsMentor] = useState(true); // This should be determined dynamically

  useEffect(() => {
    if (id) {
      const block = codeBlocks[id];
      if (block) {
        setCodeBlock(block);
      } else {
        setCodeBlock({ title: 'Code block not found', code: '' });
      }
    }
  }, [id]);

  if (!codeBlock) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{codeBlock.title}</h1>
      <CodeEditor codeBlock={codeBlock} isMentor={isMentor} />
    </div>
  );
}
