import { Timeline } from "../components/ui/timeline";
import solace from "../../public/images/solace-horizontal-sharing-template.png"
import jms from "../../public/images/jms.png"
import java from "../../public/images/java.svg"
import motion from "../../public/images/motion.png"
import tailwind from "../../public/images/Tailwind_CSS_Logo.svg.png"

const TimelineCards = () => {
  const data = [
    {
      title: "2023 - Current",
      content: (
        <div>
         
            <h1>Company: Oracle</h1>
            <h3>Position: Associate Consultant</h3>
            <ul>
              <li>
                {" "}
                Executed inter-branch transactions and logs systems for the
                bank’s products and services, encompassing bulk data retrieval
                and insertion. Optimized SQL queries and authored PL/SQL
                procedures to enhance performance and reliability.
              </li>
              <li>
                Engineered a robust, source-based credit card payment data
                maintenance system, improving system reliability,
                maintainability, and scalability
              </li>
              <li>
                Acquired proficiency in a diverse array of technologies,
                including Jackbe, .NET, Java, PL/SQL, Solace, JavaScript, HTML,
                and CSS, ASP.net, VB.net.
              </li>
              <li>
                Designed and implemented scripts to automate repetitive tasks,
                developed crucial API services, and refined code implementations
                and business logic for improved efficiency and effectiveness.
              </li>
            </ul>

          <div className="grid grid-cols-3 gap-4">
            <img
              src={solace}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={jms}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={java}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Apr 2023 - June 2023",
      content: (
        <div>
         
            <h1>Company: Youkoder</h1>
            <h3>Position: Frontend development intern</h3>
            <ul>
              <li>
                Worked with an in-house JavaScript framework called Elemental
                Web.
              </li>
              <li>
                Additionally, Contributed to the Skills-Factory project, which
                offers tech-based courses for engineers to upskill.
              </li>
              <li>
                Through this experience, Learned about system design and best
                practices in clean coding, which help in writing maintainable
                code.
              </li>
            </ul>
       

          <div className="grid grid-cols-2 gap-4">
            <img
              src={tailwind}
              alt="hero template"
              width={300}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={motion}
              alt="feature template"
              width={300}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    // {
    //   title: "Apr 2021 - May 2021",
    //   content: (
    //     <div>
    //       <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
    //         Deployed 5 new components on Aceternity today
    //       </p>
    //       <div className="mb-8 text-white">
    //         <div className="flex gap-2 items-center  dark:text-neutral-300 text-xs md:text-sm">
    //           ✅ Card grid component
    //         </div>
    //         <div className="flex gap-2 items-center  dark:text-neutral-300 text-xs md:text-sm">
    //           ✅ Startup template Aceternity
    //         </div>
    //         <div className="flex gap-2 items-center  dark:text-neutral-300 text-xs md:text-sm">
    //           ✅ Random file upload lol
    //         </div>
    //         <div className="flex gap-2 items-center  dark:text-neutral-300 text-xs md:text-sm">
    //           ✅ Himesh Reshammiya Music CD
    //         </div>
    //         <div className="flex gap-2 items-center  dark:text-neutral-300 text-xs md:text-sm">
    //           ✅ Salman Bhai Fan Club registrations open
    //         </div>
    //       </div>
    //       <div className="grid grid-cols-2 gap-4">
    //         <img
    //           src="https://assets.aceternity.com/pro/hero-sections.png"
    //           alt="hero template"
    //           width={500}
    //           height={500}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //         <img
    //           src="https://assets.aceternity.com/features-section.png"
    //           alt="feature template"
    //           width={500}
    //           height={500}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //         <img
    //           src="https://assets.aceternity.com/pro/bento-grids.png"
    //           alt="bento template"
    //           width={500}
    //           height={500}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //         <img
    //           src="https://assets.aceternity.com/cards.png"
    //           alt="cards template"
    //           width={500}
    //           height={500}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //       </div>
    //     </div>
    //   ),
    // },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
};

export default TimelineCards;
