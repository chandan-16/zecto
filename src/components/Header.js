const Header = () => {
  return (
    <header className="bg-gray-800 text-white px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 top-0 left-0">
        <h1 className="text-2xl font-bold text-green-500">ZECTO</h1>

        <form  className="w-full sm:w-auto flex flex-col sm:flex-row gap-2">
            <input type="text" placeholder="Enter Product Name..." className="px-3 bg-white py-2 rounded-md text-black w-full sm:w-64" />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white">Search</button>
        </form>

        <div className="flex justify-between sm:justify-end gap-6 text-sm">
            <span className="flex items-center gap-1 cursor-pointer"><i className="bi bi-cart"></i> Cart</span>
            <span className="flex items-center gap-1 cursor-pointer"><i className="bi bi-person"></i> Login</span>        
        </div>
    </header>
  )
}

export default Header