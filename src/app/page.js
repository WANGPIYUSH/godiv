import Image from "next/image";

export default function Home() {
  return (
   <>
      <div className="h-[100vh]">
      <div className="h-[70%] w-full bg-gradient-to-b from-blue-900 to-white">
        <div className="flex flex-row justify-evenly">
          <div></div>
          <div className="p-[40px]">
            <Image src={"/Logo.png"} width={300} height={300} className="animate-bounce"></Image>
          </div>
          <div className="p-[4px] text-[30px] font-bold">Discord</div>
        </div>
      </div>
      <div className="h-[40%] w-full bg-white">

      </div>
      </div>
   </>
  );
}
