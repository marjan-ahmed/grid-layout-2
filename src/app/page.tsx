import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-darkgrey text-center text-lg text-white h-screen grid grid-rows-6 grid-cols-5 gap-6 p-6">
      <div className="bg-gradient-to-r from-lightviolet to-darkviolet shadow-gray-950 rounded-md shadow-lg col-span-full content-center">
        Header
      </div>
      <div className="bg-gradient-to-r from-lightseagreen to-darkseagreen rounded-md shadow-gray-950 shadow-lg row-span-4 col-span-1  content-center">
        SideBar
      </div>
      <div className="bg-gradient-to-r from-darkviolet via-lightblue to-lightseagreen rounded-md shadow-gray-950 shadow-lg row-span-2 col-span-4 content-center">
        Content-1
      </div>
      <div className="bg-gradient-to-r from-darkviolet via-lightblue to-lightseagreen rounded-md shadow-gray-950 shadow-lg col-span-2 row-span-2 content-center">
        Content-2
      </div>
      <div className="bg-gradient-to-r from-darkviolet via-lightblue to-lightseagreen rounded-md shadow-gray-950 shadow-lg col-span-2 row-span-2 content-center">
        Content-3
      </div>
      <div className="bg-gradient-to-r from-lightviolet to-darkviolet rounded-md shadow-gray-950 shadow-lg col-span-full content-center">
        Footer
      </div>
    </div>
  );
}
