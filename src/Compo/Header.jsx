import { Zap } from "lucide-react";
import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <div className="w-full h-21.25 flex items-center">

                <div className="relative left-15">
                    <button className="w-36 h-9 border-black border-[1.2px] rounded-[8px] text-center flex items-center justify-center gap-2" >
                        <span>ورود/ثبت نام</span>
                        <LogOut></LogOut>
                    </button>
                </div>
                <div className=" relative left-19 w-46">
                    <button className=" flex items-center justify-center gap-1 h-9 px-6 rounded-[8px] bg-blue-600 text-white">
                        <span className="leading-none">!رایگان شروع کن</span>
                        <Zap size={12} className="fill-white"></Zap>
                    </button>

                </div>

                <div className="relative left-58">
                    <Link to={"/Search"}> <input
                        className="bg-gray-200 h-9 w-89 rounded-[6px] text-end" type="text" placeholder="جستجو کسب کار" />
                    </Link>
                </div>

                <div className="w-45 ml-64"><img src="logo1.png" alt="" /></div>
            </div>

            <div className="flex gap-6 relative ml-158.75">
                <div><Link to={"/Phone"}><h1>تماس باما</h1></Link></div>
                <div><Link to={"/About"}><h1>درباره ما</h1></Link></div>
                <div><Link to={"/Event"}><h1>اخبار رویدادها</h1></Link></div>
                <div><Link to={"/Work"}><h1>فرصت های شغلی</h1></Link></div>
                <div><Link to={"/Company"}><h1>شرکت  ها</h1></Link></div>
            </div>
        </>
    )
}
export default Header