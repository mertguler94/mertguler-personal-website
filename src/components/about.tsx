import Image from "next/image";
import logo from "../../public/logo.png";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen p-36 flex  items-center flex-col gap-10"
    >
      <h1 className="text-5xl ">About Me</h1>
      <div className="flex justify-center items-center gap-10">
        <Image src={logo} alt="Mock image" />
        <p className="w-2/5 text-xl text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veniam
          laudantium laborum dicta, amet autem unde. Temporibus debitis
          officiis, autem iusto unde nam, rerum aut tenetur quis alias facilis
          ullam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          veniam laudantium laborum dicta, amet autem unde. Temporibus debitis
          officiis, autem iusto unde nam, rerum aut tenetur quis alias facilis
          ullam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          veniam laudantium laborum dicta, amet autem unde. Temporibus debitis
          officiis, autem iusto unde nam, rerum aut tenetur quis alias facilis
          ullam?
        </p>
      </div>
    </section>
  );
}

export default About;
