import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-purple-600 mb-4">Tailwind CSS Demo</h1>
        <p className="text-lg text-gray-700 mb-2">If you see this styled box, Tailwind CSS is working!</p>
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Test Button</button>
      </div>
    </div>
  );
}

export default App
