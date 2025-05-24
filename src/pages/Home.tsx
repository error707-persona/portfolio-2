import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Quote from "../components/Quote";
import SkillCard from "../components/SkillCard";
import TimelineCards from "../components/Timeline";
import Education from "../components/Education";
import Footer from "../components/Footer";
import dots from "./../assets/Dots.png";
import box from "./../assets/box.png";
import light_icon from "./../assets/light_icon.png";
import Projects from "../components/Projects";
import rectangle24 from "./../assets/Rectangle 24.png";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  // @ts-expect-error
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // @ts-expect-error
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      emailjs.send(
        "service_fvpic3q",
        "template_4iu89q8",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "lE3jpP8ZYNnl1katD"
      );
      alert("Your Message has been sent!");
    } catch (error) {
      console.log(error);
      alert("Something went wrong, please try again later");
    }
    setLoading(false);
  };

  return (
    <div className="scroll-smooth h-screen font-firacode text-white">
      <Navbar />
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="lg:px-30">
        {/* <Particles options={options} init={customInit} /> */}

        <Hero />
        <Quote />
        <div className="px-5 lg:px-0">
          <div className=" lg:text-2xl flex items-center" id="projects">
            <span className="text-purple-700">#</span>projects
            {/* <button className='hover:translate-x-3 transition underline-animation text-sm ml-auto items-center flex gap-2 cursor-pointer'>View all<MoveRight /></button> */}
          </div>
          <hr className="text-purple-700 mt-5" />
          <div
            className="flex gap-10 lg:mt-10 mt-5 lg:flex-row flex-col"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* <Card tech="html" title="title" description="good project" />
          <Card tech="html" title="title" description="good project" />
          <Card tech="html" title="title" description="good project" /> */}
            <Projects />
          </div>
          <div></div>
          <div className="my-10 lg:text-2xl" id="skills">
            <span className="text-purple-700">#</span>skills{" "}
            <hr className="text-purple-700 mt-5" />
          </div>
          <img
            src={dots}
            alt=""
            width={80}
            height={0.5}
            className="absolute -left-10"
          />
          <img
            src={box}
            alt=""
            width={120}
            height={7}
            className="absolute -right-10 top-200"
          />

          <div className="lg:flex hidden flex-col relative gap-10">
            <img
              src={dots}
              alt=""
              width={80}
              height={0.5}
              className="absolute left-50 top-60"
            />
            <img
              src={light_icon}
              alt=""
              width={120}
              height={7}
              className="absolute left-10 top-10"
            />
            <img
              src={rectangle24}
              alt=""
              width={120}
              height={7}
              className="absolute left-1 top-70"
            />
            {/* large screen */}
            <div className="ml-auto flex gap-10 relative">
              <SkillCard
                title="Languages"
                skills="Python Java JavaScript TypeScript PLSQL"
              />
              <SkillCard
                title="Databases"
                skills="MYSQL Firebase Mongodb PostgreSQL"
              />
              <SkillCard
                title="Tools"
                skills="VSCode eclipse Postman Graphana"
              />
            </div>
            <div className="ml-auto flex gap-10">
              {/* <img src={box} alt="" /> */}
              <SkillCard
                title="Other"
                skills="hibernate html css tailwind scss FastApi"
              />
              <SkillCard title="Frameworks" skills="Reactjs Nextjs Solace" />
            </div>
          </div>
          {/* mobile */}
          <div
            className="flex flex-col lg:hidden gap-5 overflow-x-scroll"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <SkillCard
              title="Languages"
              skills="Python Java JavaScript TypeScript PLSQL"
            />
            <SkillCard
              title="Databases"
              skills="MYSQL Firebase Mongodb PostgreSQL"
            />
            <SkillCard title="Tools" skills="VSCode eclipse Postman Graphana" />

            <SkillCard
              title="Other"
              skills="hibernate html css tailwind scss FastApi"
            />
            <SkillCard title="Frameworks" skills="Reactjs Nextjs Solace" />
          </div>

          <div className="my-10 lg:text-2xl" id="experience">
            <span className="text-purple-700">#</span>experience
            <hr className="text-purple-700 mt-5" />
          </div>
          <TimelineCards />
          <div className="my-10 lg:text-2xl" id="education">
            <span className="text-purple-700">#</span>education
            <hr className="text-purple-700 mt-5" />
          </div>
          <Education />
          <div className="my-10 lg:text-2xl" id="contact-me">
            <span className="text-purple-700">#</span>contact-me{" "}
            <hr className="text-purple-700 mt-5" />
          </div>
          <div className="flex flex-col mt-10">
            <div className="w-full  text-sm text-center lg:text-left text-gray-400">
              I’m interested in freelance opportunities. However, if you have
              other request or question, don’t hesitate to contact me Whether
              you’re looking to build a new website, improve your existing
              platform, or bring a unique project to life, I’m here to help.
              <div className="min-h-fit w-full border-1 border-gray-500 mt-10 rounded-2xl overflow-clip mb-20">
                <div className="h-6 bg-gradient-to-r from-black-700 via-gray-500 to-black-700 flex items-center">
                  <div className="ml-3 rounded-full h-2 w-2 bg-red-500"></div>
                  <div className="ml-3 rounded-full h-2 w-2 bg-yellow-500"></div>
                  <div className="ml-3 rounded-full h-2 w-2 bg-green-500"></div>
                </div>

                <form // @ts-expect-error
                  ref={formRef}
                  onSubmit={handleSubmit}
                >
                  <div className="flex my-10 justify-center py-5 flex-col gap-7 items-center h-full">
                    <input
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      className="rounded p-2 w-56 lg:w-80 outline-0 bg-gray-800"
                      placeholder="Your Name"
                    />
                    <input
                      type="text"
                      value={form.email}
                      onChange={handleChange}
                      className="rounded p-2 w-56 lg:w-80 outline-0 bg-gray-800"
                      placeholder="Your Email"
                    />

                    <textarea // @ts-expect-error
                      rows="7"
                      value={form.message}
                      onChange={handleChange}
                      className="resize-none rounded p-2 w-56 lg:w-80 outline-0 bg-gray-800"
                      placeholder="Your Message or queries"
                      style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                      }}
                    />
                    <button
                      className="p-2 flex justify-center bg-gray-700 rounded items-center cursor-pointer w-56 lg:w-80 hover:bg-slate-700"
                      disabled={loading}
                      type="submit"
                    >
                      {loading ? "Sending Message..." : "Send Message"}{" "}
                      <ArrowUpRight height={15} />
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* <Canvas shadows style={{ height: "70vh", display: "flex", justifyContent: "center", alignItems: "center" }} camera={{ position: [2, 5, 10], fov: 50 }}>
          
              <ambientLight intensity={0.5} />
            
              <directionalLight position={[3, 5, 2]} intensity={1.2} castShadow />
         
              <ShibiAvatar />
          
              <OrbitControls />
            </Canvas> */}
          </div>
        </div>
      </div>
      <hr className="w-screen my-5" />
      <Footer />
    </div>
  );
};

export default Home;
