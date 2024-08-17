export const CatListing = () => {

    return <div>
        {/* Card */}
        <div className="w-[314px] bg-white rounded-2xl ">
            {/* Cat Image */}
            <div className="">
                <img className="w-[314px] h-[296px] rounded-t-2xl" src="/cat1.png" alt="image " />
            </div>
            {/* Cat Details */}
            <div className=" p-4">
                {/* Cat bride */}
                <div className="text-2xl 	font-medium">
                    Kurilian
                </div>
                {/* Cat details text */}
                <div className="text-sm	mt-3">The character of the Kurilian Bobtail is independent, highly intelligent, clever, inquisitive, sociable, playful, trainable, absent of aggression and very gentle. They are devoted to their humans and when allowed are either on the lap of or sleeping in bed with their owners.</div>
                {/* Cat Origin  */}
                <div className="text-sm	font-normal flex gap-[69px] mt-2">
                    <label className="font-medium italic">Origin</label>
                    <div>Russia</div>
                </div>
                {/* Cat Temperament */}
                <div className="text-sm	font-normal flex flex-col mt-2 gap-1">
                    <label className="font-medium italic">Temperament</label>
                    <ul className="text-xs bg-gray rounded-2xl	flex gap-2 cursor-pointer	">
                    <li className="flex items-center justify-center px-[8px] py-[4px] bg-[#EFEFEF] hover:bg-[#D482DB] cursor-pointer rounded-3xl	text-black hover:text-white">Independent</li>
                
                    
                    </ul>
                    
                </div>
                {/* Life Span */}
                <div className="text-sm font-normal flex gap-[48px] mt-2">
                    <label className="font-medium italic">Life Span</label>
                    <div>15 - 20 years</div>
                </div>
                {/* Learn more  */}
                <div className="text-sm font-normal	mt-5 text-[#7D99E2]">Learn more</div>
            </div>
        </div>
    </div>
}