import { Link } from "react-router-dom";
const ProgramCard = ({ name, code }) => {
  return (
    <>
      <Link to={"/programs/coach-list"}>
        <div className="border-2 w-96 h-80 rounded-lg text-left  shadow-lg cursor-pointer">
          <div className="bg-orange-100 rounded-t-lg px-2 flex justify-center items-center">
            <img src={`/${code}.png`} alt="" className="h-[160px] w-[300px]" />
          </div>
          <div className="h- px-5 pt-4 pb-4 flex flex-col justify-betwee">
            <p className="font-bold"> {name}</p>
            <div className="mt-7">
              <p className="text-sm font-medium text-gray-500">No. of Coach</p>
              <p className="text-base font-medium">0 Curriculum Coach</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProgramCard;
