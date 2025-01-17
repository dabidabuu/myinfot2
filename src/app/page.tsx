import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Link href="/home" legacyBehavior>
        <a className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
          Go to Folder
        </a>
      </Link>
    </div>
  );
}
