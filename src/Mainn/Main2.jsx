import { Logs, Mail, Phone, Search } from "lucide-react"

function Main2(){
    return(
        <>
        <div className="flex w-full items-center justify-around py-10">

      <div className="flex items-center gap-3 ml-5">
        <span className="text-lg font-bold mr-8">سرمایه‌گذار</span>
        <div className="relative flex h-18 w-18 items-center justify-center rounded-full bg-[#FFECB3]">
          <span className="absolute -left-10 z-10 whitespace-nowrap text-3xl font-bold">
            +۴۹۶
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-lg font-bold mr-4">میلیارد تومان سرمایه‌گذاری</span>
        <div className="relative flex h-18 w-18 items-center justify-center rounded-full bg-[#FFECB3]">
          <span className="absolute -left-5 z-10 whitespace-nowrap text-4xl font-bold">
            +۱۱
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-lg font-bold mr-19">شرکت فعال</span>
        <div className="relative flex h-18 w-18 items-center justify-center rounded-full bg-[#FFECB3]">
          <span className="absolute -left-22 z-10 whitespace-nowrap text-4xl font-bold">
            +۱۱۲,۶۱۰
          </span>
        </div>
      </div>
    </div>

     <div className="flex gap-7 justify-center mt-45">

        <div className="w-82.5 h-32.5 bg-[#287EFD] rounded-4xl flex flex-col items-center relative">
        <div className="w-62.5 h-52.5 bg-[#E9EAEE] absolute -top-19.75 left-1/2 -translate-x-1/2
         w-62.5 h-45 bg-[#E9EAEE] rounded-t-[27px] flex flex-col items-center ">
          <div className="w-57.5 h-17.5 bg-white mt-5 rounded-2xl"></div>
          <div className="w-17.5 h-15 mr-35 absolute bottom-25"> <img src="home.png" alt="" /></div>
          <div className="flex gap-3 mt-14">
            <div className="w-25 h-12.5 bg-white rounded-2xl flex justify-center items-center"><Phone size={17}></Phone></div>
            <div className="w-25 h-12.5 bg-white rounded-2xl flex justify-center items-center"><Mail size={17}></Mail></div>
          </div>
        </div>
       </div>
       
       <div className="w-82.5 h-32.5 bg-[#79AEFE] rounded-4xl flex flex-col items-center relative ">
        <div className="w-62.5 h-52.5 bg-[#E9EAEE] absolute -top-19.75 left-1/2 -translate-x-1/2 bg-[#E9EAEE] rounded-t-[27px]">
        <div className="flex justify-center mt-4 gap-2">
           <div className="w-11.25 h-11.25 bg-white rounded-2xl"><Logs className="relative left-3 top-3"></Logs></div>
          <div><input className=" w-45 h-11.25 bg-white rounded-2xl text-center" type="text" placeholder="جستجو"/><Search className="relative bottom-8 left-35"></Search></div>
        </div>
        <div className="flex justify-center gap-3">
          <div className="w-16.25 h-17.5 bg-white rounded-2xl"></div>
          <div className="w-16.25 h-17.5 bg-white rounded-2xl"><img className="h-full" src="Button.png" alt="" /></div>
          <div className="w-16.25 h-17.5 bg-white rounded-2xl"></div>
        </div>

         <div className="flex justify-center gap-3 relative top-3">
          <div className="w-16.25 h-17.5 bg-white rounded-2xl"></div>
          <div className="w-16.25 h-17.5 bg-white rounded-2xl"></div>
          <div className="w-16.25 h-17.5 bg-white rounded-2xl"></div>
        </div>

        </div>
       </div>
       
      <div className="w-82.5 h-32.5 bg-[#AECFFE] rounded-4xl flex flex-col items-center relative">
        <div className="w-62.5 h-52.5 bg-[#E9EAEE] absolute -top-19.75 left-1/2 -translate-x-1/2
         w-62.5 h-52.5 bg-[#E9EAEE] rounded-t-[27px] flex flex-col items-center ">
          <div className="w-57.5 h-17.5 bg-white mt-5 rounded-2xl"></div>
          <div className="w-17.5 h-15 mr-35 absolute bottom-25"> <img src="home.png" alt="" /></div>
          <div className="flex gap-3 mt-14">
            <div className="w-25 h-12.5 bg-white rounded-2xl flex justify-center items-center"><Phone size={17}></Phone></div>
            <div className="w-25 h-12.5 bg-white rounded-2xl flex justify-center items-center"><Mail size={17}></Mail></div>
          </div>
        </div>
       </div>
      </div>
        </>
    )
}
export default Main2