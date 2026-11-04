import { Zap } from "lucide-react";
import { ChevronRight } from "lucide-react";
function Mainn() {
    return (
        <>
            <div className="flex flex-col items-center pt-27">
                <h1 className="text-5xl ">با سرچ کمتر نتیجه بهتر بگیر</h1>
                <h1 className="mt-8 text-blue-950">کانسپتو اولین مرجع معتبر معرفی استارتاپ ها و شرکت های ایرانی</h1>
                <div className="mt-14 flex gap-4">
                    <button className="flex cursor-pointer h-10 w-36 items-center justify-center gap-2 rounded-[8px] border-[1.2px] border-black" >
                        <ChevronRight></ChevronRight>
                        <span>درباره کانسپتو</span>
                    </button>
                    <button className="flex h-10 items-center justify-center gap-1 rounded-[8px] bg-blue-600 px-6 text-white">
                        <span className="leading-none">!رایگان شروع کن</span>
                        <Zap size={12} className="fill-white"></Zap>
                    </button>
                </div>

                <div className="relative mt-13 w-205 max-w-full">
                    <img className=" h-auto w-full pb-48" src="Imageee.png" alt="" />
                    <img className="absolute left-160 bottom-81.25 w-[310px] h-112.5" src="Image.png" alt="" />
                    <img className="absolute right-127.5 bottom-8 z-20 h-82.5 w-110" src="Imageaa.png" alt="" />
                </div>
            </div>
        </>
    )
}
export default Mainn