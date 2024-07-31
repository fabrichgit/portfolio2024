function Header() {
  return (
    <div className="absolute top-2 left-[50%] -translate-x-[50%] inset-0 backdrop-blur-sm bg-[#082f493b] w-max h-max px-5 py-3 rounded-2xl shadow-lg">
        <div className="flex gap-7">
            <a className="flex items-end gap-2"><span className="font-mono text-[#049bff]">0.</span> item1</a>
            <a className="flex items-end gap-2"><span className="font-mono text-[#049bff]">1.</span> item2</a>
            <a className="flex items-end gap-2"><span className="font-mono text-[#049bff]">2.</span> item3</a>
        </div>
    </div>
  )
}

export default Header