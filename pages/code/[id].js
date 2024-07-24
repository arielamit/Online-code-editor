// pages/code/[id].js
import { useRouter } from 'next/router';
import CodeEditor from '../../components/CodeEditor';

const codeBlocks = [
  { title: 'Async case', code: 'const asyncExample = async () => { /* code */ };' },
  { title: 'Closure', code: 'function closure() { /* code */ }' },
  { title: 'Promises', code: 'const promiseExample = new Promise((resolve, reject) => { /* code */ });' },
  { title: 'Event Loop', code: 'setTimeout(() => { /* code */ }, 0);' }
];

export default function CodeBlockPage() {
  const router = useRouter();
  const { id } = router.query;

  if (!id || !codeBlocks[id]) {
    return <div>Code block not found</div>;
  }

  const codeBlock = codeBlocks[id];
  const isMentor = true; // This should be determined dynamically

  return (
    <div>
      <h1>{codeBlock.title}</h1>
      <CodeEditor codeBlock={codeBlock} isMentor={isMentor} />
    </div>
  );
}
