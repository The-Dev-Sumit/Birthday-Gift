import React from 'react'

const Popup2 = () => {
  return (
    <div className="fixed inset-0 backdrop-blur-md bg-black bg-opacity-15 flex items-center justify-center z-50">
      <div className="bg-pink-200  text-gray-800 w-[400px] space-y-6 px-8 py-10 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold font-Plat">Umeed karta hu ki apko maza aya hoga</h2>
        <p className="font-Kanit text-lg">
    But Wait....Abhi Khatam nhi hua abhi to aur maze aana baaki hai
        </p>
        <a href="/you" class="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
<span class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
<span class="absolute inset-0 w-full h-full bg-white rounded-md "></span>
<span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
<span class="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">let's Go </span>
</a>
      </div>
    </div>
  )
}

export default Popup2