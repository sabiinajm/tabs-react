import { useState } from "react"
import content from "./data"
import Content from "./Content"

function Main() {
  const [index, setIndex] = useState(0)
  function choose(i){
    setIndex(i)
  }
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow">
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-pink-100" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
      {
        Array(4).fill("").map((_, i) => {
          return (<li key={i} onClick={()=> choose(i)} className='me-2'>
                <button
                  className={`inline-block p-4 hover:text-pink-600 hover:bg-pink-50 ${
                    index === i ? "text-pink-600 bg-white" : ""
                  }`}
                >
                  Tab {i + 1}
                </button>
                  </li>
                )})
      }
      </ul>
      <Content data={content[index]} />
    </div>
  )
}
export default Main