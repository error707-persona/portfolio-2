
import quote from "./../assets/quote.png"
const Quote = () => {
  return (
    <div className='text-xs lg:text-lg flex flex-col justify-center items-center mt-10'>
        <div className='max-w-fit relative'>
            <img src={quote} alt="quote" className='absolute ml-6 -mt-2' height={20} width={20} />
            <div className='border-1 max-w-fit p-3 border-white'>With great power comes great electricity bill</div>
            <img src={quote} alt="quote" className='absolute lg:ml-[28rem] ml-[20rem] -mt-2' height={20} width={20} />
        <div className='border-1 max-w-fit p-3 border-white ml-auto'>-Dr. Who</div>
        </div>
    </div>
    
  )
}

export default Quote