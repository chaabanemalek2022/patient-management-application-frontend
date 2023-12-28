import Link from 'next/link';

export default function Home() {
  return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to the Management Patient App</h1>
          <Link href="/patients" className="flex justify-center items-center">
            <div className="bg-blue-500 text-white px-4 py-2 rounded-md max-w-md">Go to Patient List</div>
          </Link>
        </div>
      </div>
  )
}
