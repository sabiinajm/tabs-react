import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { TbPlus } from "react-icons/tb";

function Content({data}) {
    const [flag, setFlag] = useState(true)
    const [count, setCount] = useState(0)
    function hidDetails(){
        setFlag(!flag)
    }
    function likeCount(arg){
        setCount(count + arg)
    }
    function undo(arg){
        setTimeout(() => {
            setCount(0)
        }, arg);
    }

    return (
    <div className="w-full min-h-[300px] bg-white border border-gray-200 rounded-lg shadow">
        <div id="defaultTabContent" >
            <div className=" p-8 min-h-[250px] flex flex-col justify-between bg-white rounded-lg md:p-8" id="about" role="tabpanel" aria-labelledby="about-tab">
                <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 ">{data?.summary}</h2>
                    { data?
                        <p className={`${flag ? '' : 'hidden'} mb-3 text-gray-500`} >{data?.details}</p>
                        :
                        "No result"
                    }
                <div className="flex flex-wrap justify-between py-4">
                    <a onClick={hidDetails} href="#" className="inline-flex items-center font-medium text-pink-400 hover:text-pink-800">
                        {flag? 'Hide details' : 'Show details'}
                        <svg className="w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                            />
                        </svg>

                    </a>
                    <div className="w-[140px] flex justify-between">
                        <button className="flex items-center justify-center rounded-sm text-xs font-semibold text-pink-400 gap-1 "><FaHeart />{count}</button>
                        <button onClick={()=>{likeCount(1)}}  className="flex items-center justify-center rounded-sm text-white text-xs w-8 h-8 font-semibold bg-pink-400"><TbPlus /></button>
                        <button onClick={()=>{likeCount(3)}}  className="flex items-center justify-center rounded-sm text-white text-xs w-9 h-8 font-semibold bg-pink-400"><TbPlus /> 3</button>
                    </div>
                </div>
                    <div className="flex w-[120px] justify-between">
                        <button onClick={() => {undo(0)}} className="rounded-sm text-white text-xs w-12 h-8 font-semibold bg-pink-400" > Undo </button>
                        <button onClick={()=>{undo(3000)}}  className="rounded-sm text-white text-xs w-16 h-8 font-semibold bg-pink-400"> Undo in 3s</button>
                    </div>
            </div>
        </div>
    </div>
    )
    }
export default Content