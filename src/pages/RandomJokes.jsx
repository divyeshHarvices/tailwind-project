import { useEffect, useState } from "react"
import { BlueTickSVG, BookmarkSVG, CommentSvg, DownloadSVG, LikeSVG, ProfileInfoSVG, RetweetSVG, RightArrowSVG } from "../assets/Svgs/Svgs"
import { IconText } from "../Components/IconText"

const RandomJokes = () => {

    const [jokes, setJokes] = useState("");
    const [randomData, setRandomData] = useState({});
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch("https://api.freeapi.app/api/v1/public/randomjokes/joke/random");
                const response = await res.json();
                setLoading(false);
                setJokes(response.data.content)
            } catch (error) {
                setLoading(false);
                console.error("Error fetching data:", error);
            }
        };

        const randomGeration = () => {
            setLoading(true);
            const randomHour = Math.floor(Math.random() * 12) + 1;
            const randomMin = Math.floor(Math.random() * 60).toString().padStart(2, '0');
            const amPm = Math.random() > 0.5 ? "AM" : "PM";
            const time = `${randomHour} : ${randomMin} ${amPm}`

            const randomView = (Math.random() * (40 - 1) + 1).toFixed(1);
            const views = `${randomView}M`;

            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            const randomDay = Math.floor(Math.random() * 28) + 1;
            const randomMonth = monthNames[Math.floor(Math.random() * monthNames.length)];
            const randomYear = Math.floor(Math.random() * 5) + 2020;
            let combineDate = `${randomMonth} ${randomDay}, ${randomYear}`;


            setLoading(false);
            return { time, views, combineDate }
        }



        setRandomData(randomGeration())


        fetchData();

    }, [])

    let Spinner = () => {
        return <div role="status" class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
            <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
            <span class="sr-only">Loading...</span>
        </div>
    }


    return <>


        <div className="flex justify-center items-center ">
            <div className="bg-black border-solid border-2 rounded-xl rounded- border-black p-6 w-[550px]" >
                {loading ? <Spinner /> :
                    <div>
                        <div className="flex items-center gap-6">
                            <div>
                                <RightArrowSVG color={'white'} width={18} height={16} />
                            </div>
                            <div className="text-white font-bold text-base">Post</div>
                        </div>
                        <div>
                            <div className="flex justify-between mt-3">
                                <div className="flex gap-2">
                                    <div>
                                        <img src="/elon.png " className="rounded-full w-12 h-12" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex gap-1 items-center">

                                            <div className="font-bold text-sm text-white">Elon Musk</div>
                                            <BlueTickSVG />

                                        </div>
                                        <div className="text-xxs text-custom-gray	">@Elonsusk</div>
                                    </div>
                                </div>
                                <div>
                                    <ProfileInfoSVG />
                                </div>
                            </div>

                            <div className="jokes mt-3">
                                <p className="text-white text-sm font-normal">{jokes}</p>
                            </div>

                            <div className="flex gap-2 mt-3 items-center text-custom-gray text-xxs">
                                <div>{randomData?.time}</div>
                                <div> · </div>
                                <div>{randomData?.combineDate}</div>
                                <div> · </div>
                                <div className="text-white font-semibold">{randomData.views}</div>
                                <div>Views</div>
                            </div>

                            <hr className="w-full h-px my-3 bg-border-grey-color border-0 dark:bg-black-700" />
                            <div className="flex justify-between px-4	">
                                <IconText icon={CommentSvg} color="#A0A0A0" text="19k" />
                                <IconText icon={RetweetSVG} text="59K" />
                                <IconText icon={LikeSVG} text="59K" />
                                <IconText icon={BookmarkSVG} text="1.1K" />
                                <IconText icon={DownloadSVG} />


                            </div>
                            <hr className="w-full h-px my-3 bg-border-grey-color border-0 dark:bg-black-700" />
                            <div className="flex justify-center text-xxs text-custom-gray font-semibold font-dmsarin ">@ chai aur code</div>
                        </div>
                    </div>
                }
            </div>
        </div>

    </>
}



export default RandomJokes