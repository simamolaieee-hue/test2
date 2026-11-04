import { Bookmark, Flag, Zap } from "lucide-react"
import List from "./List"
function Search() {
    return (
        <>
            <div className="w-full h-220 mt-3 -500 border-t border-[#CBCED7]">
                <div className="flex justify-end relative right-20 mt-2.5"><h1 className="text-3xl ">جستجو</h1></div>

                <div className="flex justify-end gap-15 mt-8 mr-19">
                    <div><h1>رویداد‌ها</h1></div>
                    <div><h1>سرمایه گذار</h1></div>
                    <div><h1>راه‌های تماس</h1></div>
                    <div><h1>شرکت‌ها</h1></div>
                    <div><h1>ذخیره شده‌ها</h1></div>
                </div>

                <div className="w-full h-px bg-[#CBCED7] mt-3.5"></div>

                <div className=" flex flex-col items-center gap-2.5 rounded-b-[10px] ">
                    <div className="w-240 h-12  flex justify-end items-center rounded-t-[13px] gap-2.5 relative top-2 mt-2">
                        <div className="flex relative right-165 gap-3"><h1 className="text-blue-500">مشاهده بیشتر</h1><Zap className="fill-blue-700 text-blue-700"></Zap></div>
                        <h1 className="text-2xl">پیشنهادها</h1><Flag className="mr-3" size={23}></Flag>

                    </div>

                    {List.map((item) => (
                        <>
                            <div className="w-220 h-px bg-[#CBCED7] mr-20"></div>

                            <div className="w-240 h-12 flex justify-start flex-row-reverse items-center gap-20 "
                                key={item.id}>

                                <img
                                    src={item.Image}
                                    alt={item.name}
                                    className="w-10 h-10 mr-5"
                                />
                                <h1 className="relative right-5">{item.name}</h1>
                                <div>
                                    <Bookmark></Bookmark>
                                </div>
                            </div>

                        </>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Search