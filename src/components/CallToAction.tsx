import profile from "../../public/mert.jpg";
import Image from "next/image";

function CallToAction() {
  return (
    <section className="flex items-center">
      <div className="bg-gray-800 w-1/2 flex justify-center ">
        <div className="w-3/5">
          <h1 className="text-9xl my-4">Hi, I&apos;m Mert!</h1>
          <p>A Front End Developer from Toronto!</p>
        </div>
      </div>
      <div className="bg-gray-800 w-1/2 flex justify-center">
        <Image
          src={profile}
          alt="A photograph of Mert Guler"
          className="rounded-full w-2/5"
        />
      </div>
    </section>
  );
}

export default CallToAction;
