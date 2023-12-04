// eslint-disable-next-line react/prop-types
export default function Hand({hand, background, position, onClick, playHand}) {
    return(
        <div onClick={onClick} className={`${background} h-[150px] w-[150px] rounded-full flex justify-center items-center ${position} cursor-pointer  ${playHand}`}>
            <div className="bg-white h-[110px] w-[110px] rounded-full flex justify-center items-center ">
                <img className="" src={`../../images/icon-${hand}.svg`} alt="" />
            </div>
        </div>
    )
}