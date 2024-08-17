import { useEffect, useState } from "react";
import { CallMeSVG, LocationSVG, ReloadSVG, RightArrowSVG } from "../assets/Svgs/Svgs"

const RandomUser = () => {



    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch("https://api.freeapi.app/api/v1/public/randomusers/user/random");
                const response = await res.json();
                setLoading(false);
                setUser(response.data)
            } catch (error) {
                setLoading(false);
                console.error("Error fetching data:", error);
            }
        };



        fetchData();

    }, [])

console.log(user)
    return <div className="bg-white rounded-xl p-2">
        <div className="rounded-xl  bg-sky p-5 flex flex-col justify-center items-center">
            <div className="flex justify-between items-center w-full">
                <div>
                    <RightArrowSVG width="16" height="12" />
                </div>

                <div className="text-base font-normal font-serif ">Profile Overview</div>

                <div>
                    <ReloadSVG width="24" height="24" />

                </div>

            </div>
            <div className="relative flex justify-center items-center mt-9">
                <div style={{ right: "-1rem" }} className="absolute  top-0 transform -translate-y-1/2  w-6 bg-black bg-black text-white text-xxs rounded-xl flex justify-center items-center absolute	">
                    {user?.name?.title}
                </div>
                <img className="rounded-full" src={user?.picture?.thumbnail} />
            </div>
            <div className="mt-3 text-base font-normal font-serif text-2xl">{user?.name?.first + user?.name?.last}</div>
            <div className="mt-4 text-base font-normal font-serif text-xxs">beautifulkoala355</div>
            <hr className="w-full h-px my-4 bg-black border-0 dark:bg-black-700" />
            <div className="flex w-full justify-center items-center gap-7">
                <div className="flex justify-center items-center gap-1">

                    <LocationSVG width="22" height="22" />
                    <div className="text-xxs">Location</div>
                </div>
                <div className="flex justify-center items-center gap-1">
                    <CallMeSVG width="22" height="22" />
                    <div className="text-xxs">Call me</div>
                </div>
            </div>
            <hr className="w-full h-px my-4 bg-black border-0 dark:bg-black-700" />

            <div className="w-full grid grid-cols-2 gap-4">
                <div className="flex flex-col justify-start ">
                    <div className="text-xxs">city</div>
                    <div className="text-lg">Mildura</div>

                </div>
                <div className="flex flex-col justify-start ">
                    <div className="text-xxs">Nationality</div>
                    <div className="text-lg">AU</div>

                </div>
                <div className="flex flex-col justify-start ">
                    <div className="text-xxs">Date off birth</div>
                    <div className="text-lg">09 December, 1982</div>

                </div>
                <div className="flex flex-col justify-start ">
                    <div className="text-xxs">Phone No.</div>
                    <div className="text-lg">0486-362-738</div>

                </div>
                <div className="flex flex-col justify-start ">
                    <div className="text-xxs">Time Zone</div>
                    <div className="text-lg">-10:00 (Hawaii)</div>

                </div>
                <div className="flex flex-col justify-start ">
                    <div className="text-xxs">Registered Since</div>
                    <div className="text-lg">13 November, 2013</div>

                </div>
            </div>
            <div className="mt-11 w-full flex justify-between items-end">
                <div></div>
                <div className="text-xxs text-white font-bold	font-dmsarin">@ chai aur code</div>
                <div>
                    <img src="/chaiaurcode.png" className="w-16 h-16 rounded-xl	" />
                </div>
            </div>
        </div>
    </div>

}



export default RandomUser