function App() {
  return (
    <>
    <div className="flex items-center flex-col w-4/6 bg-slate-50 h-screen m-auto relative">
      <h1 className="text-3xl font-bold text-center p-4">Hello World from Vite React Tailwind!</h1>
      <button className="bg-black text-white font-bold px-4 py-2 rounded-lg absolute left-0 top-1/2 w-32">Previous</button>
      <button className="bg-black text-white font-bold px-4 py-2 rounded-lg absolute right-0 top-1/2 w-32">Next</button>
      <div className="bg-yellow-100 w-8/12 h-4/6 mt-10">
        </div>  
    </div>
    </>
  )
}

export default App
