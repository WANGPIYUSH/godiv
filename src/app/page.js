import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-[100vh] bg-gradient-to-b from-blue-900 to-white">
        <div className="h-[60%] w-full ">
          <div className="flex flex-row justify-evenly">
            <div></div>
            <div className="p-[40px]">
              <Image src={"/Logo.png"} width={300} height={300} className="floatm"></Image>
              <h1 className="text-center text-[40px] font-bold text-purple-700">GOD IV</h1>
            </div>
            <div className="p-[4px] text-[30px] font-bold"></div>
          </div>
        </div>
        <br></br>
        <div className="h-[40%] w-full ">
          <h1 className="text-center text-[40px] font-bold pt-[10px]">COMING SOON!</h1>
        </div>
      </div>
    </>
  );
}
