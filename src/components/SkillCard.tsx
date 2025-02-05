
// @ts-expect-error
const SkillCard = ({title, skills}) => {
  return (
    <div className='border-2 duration-100 ease-in hover:scale-105 transform transition lg:p-5 p-2 flex flex-col gap-5 border-white min-h-fit w-full lg:w-56'>
        <div className="">{title}</div>
        <hr />
        <div className="text-slate-400">{skills}</div>
    </div>
  )
}

export default SkillCard