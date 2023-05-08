import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-gray-400 shadow-md flex sticky top-0 justify-around text-white items-center h-10">
      <div className="text-2xl font-semibold">
        <span className="text-green-600">{`<`}</span> <span>Donglv</span>
        <span className="text-green-600">{` />`}</span>
      </div>
      <div className="flex justify-between">
        <div className="flex justify-center items-center hover:underline hover:text-green-600 py-2 pr-6 mr-2 group relative">
          <Link href="#about">About me</Link>
          <div className="hidden rotate-90 group-hover:block absolute right-1 animate-bounce">
            <FontAwesomeIcon
              className="w-4 text-green-600"
              icon={faArrowDown}
            />
          </div>
        </div>
        <div className="flex justify-center items-center hover:underline hover:text-green-600 py-2 pr-6 mr-2 group relative">
          <Link href="#project">Project</Link>
          <div className="hidden rotate-90 group-hover:block absolute right-1 animate-bounce">
            <FontAwesomeIcon
              className="w-4 text-green-600"
              icon={faArrowDown}
            />
          </div>
        </div>
        <div className="flex justify-center items-center hover:underline hover:text-green-600 py-2 pr-6 mr-2 group relative">
          <Link href="#skill">Skill</Link>
          <div className="hidden rotate-90 group-hover:block absolute right-1 animate-bounce">
            <FontAwesomeIcon
              className="w-4 text-green-600"
              icon={faArrowDown}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
