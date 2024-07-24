import Link from 'next/link';

const codeBlocks = [
  { title: 'Async case', code: 'const asyncExample = async () => { /* code */ };' },
  { title: 'Closure', code: 'function closure() { /* code */ }' },
  { title: 'Promises', code: 'const promiseExample = new Promise((resolve, reject) => { /* code */ });' },
  { title: 'Event Loop', code: 'setTimeout(() => { /* code */ }, 0);' }
];

export default function Lobby() {
  return (
    <div>
      <h1>Choose code block</h1>
      <ul>
        {codeBlocks.map((block, index) => (
          <li key={index}>
            <Link href={`/code/${index}`}>
              <a>{block.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
