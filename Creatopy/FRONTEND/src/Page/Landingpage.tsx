import com from "../assets/Screenshot 2024-10-09 021539.png";
import fender from "../assets/Screenshot 2024-10-09 030843.png";
import A from "../assets/Screenshot 2024-10-09 035052.png";
import h from "../assets/Screenshot 2024-10-09 040732.png";
import un from "../assets/Screenshot 2024-10-09 044204.png";
import br from "../assets/Screenshot 2024-10-09 045600.png";
import png from "../assets/Screenshot 2024-10-09 045802.png";
import blue from "../assets/Screenshot 2024-10-09 054338.png";
import { BiGlobe } from "react-icons/bi";
import f from "../assets/Screenshot 2024-10-09 072343.png";
import d from "../assets/Screenshot 2024-10-09 072354.png";

import ur from "../assets/Screenshot 2024-10-09 072531.png";
import ba from "../assets/Screenshot 2024-10-09 072657.png";
import or from "../assets/Screenshot 2024-10-09 072707.png";
import Al from "../assets/Screenshot 2024-10-09 072740.png";
import bigger from "../assets/Screenshot 2024-10-09 073119.png";

const box = [
  {
    id: 1,
    img: <img src={A} alt="" />,
  },
  {
    id: 2,
    img: <img src={h} alt="" />,
  },
  {
    id: 3,
    img: <img src={f} alt="" />,
  },
  {
    id: 4,
    img: <img src={d} alt="" />,
  },
];
const box1 = [
  {
    id: 1,
    img1: <img src={ur} alt="" />,
  },
  {
    id: 2,
    img1: <img src={ba} alt="" />,
  },
  {
    id: 3,
    img1: <img src={or} alt="" />,
  },
  {
    id: 4,
    img1: <img src={Al} alt="" />,
  },
];

const box2 = [
  {
    id: (
      <div className="w-[50px] h-[50px] rounded-md bg-[#005BE5] flex items-center justify-center text-white text-[20px] font-semibold">
        1
      </div>
    ),
    title1: (
      <h1>
        <strong className=" text-[20px]">
          Increased <br /> efficiency
        </strong>
      </h1>
    ),
    title2: (
      <div>
        Creatopy can generate a multitude of ad variations in a fraction of the
        time it takes to create them manually. By automating content generation,
        AI frees up valuable time and resources for users to focus on other
        aspects of their advertising strategy.
      </div>
    ),
  },

  {
    id: (
      <div className="w-[50px] h-[50px] rounded-md bg-[#005BE5] flex items-center justify-center text-white text-[20px] font-semibold">
        2
      </div>
    ),
    title1: "Highly scalable",
    title2:
      "The AI Ad generator was designed to efficiently create ads and manage large numbers of ad creatives simultaneously. This is important for businesses that run multiple ad campaigns or need assistance creating ads in different languages",
  },

  {
    id: (
      <div className="w-[50px] h-[50px] rounded-md bg-[#005BE5] flex items-center justify-center text-white text-[20px] font-semibold">
        {" "}
        3
      </div>
    ),
    title1: "Integration with other tools",
    title2:
      "Working with Creatopy, you can publish your ad campaigns without leaving our platform, thanks to the 25+ integrated ad networks. You will be able to launch your ads on some of the major networks, like Google Ads or AdRoll, without even switching tabs.",
  },
  {
    id: (
      <div className="w-[50px] h-[50px] rounded-md bg-[#005BE5] flex items-center justify-center text-white text-[20px] font-semibold">
        4
      </div>
    ),
    title1: "Built for collaborations",
    title2:
      "We’ve made it easy for teams to collaborate on designs at any stage of the ad production process. You can collaborate with teammates and clients on our platform and avoid the back-and-forth emailing.",
  },
];
const box3 = [
  {
    id: (
      <div className="w-[50px] h-[50px] rounded-md bg-[#005BE5] flex items-center justify-center text-white text-[20px] font-semibold">
        1
      </div>
    ),
    title1: (
      <h1>
        <strong className=" text-[20px]">How to generate ads with AI</strong>
      </h1>
    ),
    title2: (
      <div
        className="flex
       justify-center items-center text-center"
      >
        Creatopy can generate a multitude of ad variations in a fraction of the
        time it takes to create them manually. By automating content generation,
        AI frees up valuable time and resources for users to focus on other
        aspects of their advertising strategy.
      </div>
    ),
  },

  {
    id: (
      <div className="w-[50px] h-[50px] rounded-md bg-[#005BE5] flex items-center justify-center text-white text-[20px] font-semibold">
        2
      </div>
    ),
    title1: "Highly scalable",
    title2:
      "The AI Ad generator was designed to efficiently create ads and manage large numbers of ad creatives simultaneously. This is important for businesses that run multiple ad campaigns or need assistance creating ads in different languages",
  },

  {
    id: (
      <div className="w-[50px] h-[50px] rounded-md bg-[#005BE5] flex items-center justify-center text-white text-[20px] font-semibold">
        {" "}
        3
      </div>
    ),
    title1: "Integration with other tools",
    title2:
      "Working with Creatopy, you can publish your ad campaigns without leaving our platform, thanks to the 25+ integrated ad networks. You will be able to launch your ads on some of the major networks, like Google Ads or AdRoll, without even switching tabs.",
  },
  {
    id: (
      <div className="w-[50px] h-[50px] rounded-md bg-[#005BE5] flex items-center justify-center text-white text-[20px] font-semibold">
        4
      </div>
    ),
    title1: "Built for collaborations",
    title2:
      "We’ve made it easy for teams to collaborate on designs at any stage of the ad production process. You can collaborate with teammates and clients on our platform and avoid the back-and-forth emailing.",
  },
];

const round1 = [
  {
    id: 1,
    title: "Can AI create Facebook ads?",
  },
  {
    id: 2,
    title: "What is the best AI ad maker?",
  },
  {
    id: 3,
    title: "How can AI help me save time and effort on social media?",
  },
];
const round2 = [
  {
    id: 1,
    title: "Can AI create Facebook ads?",
  },
  {
    id: 2,
    title: "What is the best AI ad maker?",
  },
];
const round3 = [
  {
    id: 1,
    title: "Banner Maker",
  },
  {
    id: 2,
    title: "Create displays ads",
  },
  {
    id: 3,
    title: "Socials media graphics",
  },
  {
    id: 4,
    title: "Youtube ads",
  },
];
const round4 = [
  {
    id: 1,
    title: "Facebooks ads",
  },
  {
    id: 2,
    title: "LinkedIn ads",
  },
  {
    id: 3,
    title: "Video ads",
  },
  {
    id: 4,
    title: "Instagrams ads",
  },
];

const Landingpage = () => {
  return (
    <div className="font-sans">
      <div className="w-[100%] items-center  flex flex-col">
        <div className="w-[75%] h-[90vh] flex  mt-[180px]">
          <div className="w-[50%] ">
            <p className="text-[18px] font-semibold text-[#005BE5]">
              Home / AI ad generator
            </p>
            <p className="text-[50px] font-bold w-[90%]">
              AI advertisement generator
            </p>
            <p className="w-[95%] font-normal text-[20px] mt-1">
              Enhance brand awareness and boost conversions with AI-generated
              ads. Create and scale designs in a user-friendly AI ad generator
              that can maximize your creative output and positively impact
              campaign performance.
            </p>
            <div className="w-[170px] flex items-center justify-center h-[55px] text-white font-semibold rounded-md bg-[#005BE5] hover:bg-[#DDDDDD] mt-5 cursor-pointer ">
              Design your Ad
            </div>
          </div>
          <div className="w-[40%] mt-8">
            <img src={com} alt="" className="w-[700px] h-[350px]" />
          </div>
        </div>
        <div className="w-[100%] h-[80vh] bg-[#003E3A] flex flex-col justify-center items-center">
          <div className="w-[75%] h-[100%] flex flex-col justify-center items-center text-center">
            <p className="text-[40px] w-[60%] font-bold text-white">
              AI powered design for every campaign
            </p>
            <p className="text-[20px] w-[85%] font-semibold text-white">
              Transform complex design challenges into stunning visuals in
              seconds. Our user-friendly tool uses AI to create endless designs
              based on your campaign brief.
            </p>
            <div className="w-[400px] rounded-[20px] mt-10 h-[75px] bg-white flex items-center justify-center gap-2">
              <BiGlobe size={30} className="text-[#8B8C93] " />
              <input type="text" placeholder="Add your website URL" />
              <button className="w-[150px] h-[55px] rounded-[10px] bg-[#005BE5] text-white flex justify-center items-center hover:bg-[#DDDDDD]">
                Generate Ads
              </button>
            </div>
          </div>
        </div>
        <div className="w-[75%] h-[100%] gap-3 flex flex-col items-center justify-center text-center">
          <p className="text-[20px] font-semibold mt-5 ">
            Businesses all over the world trust Creatopy
          </p>
          <img src={fender} alt="" className="w-[90%] h-[100%]" />
          <p className="text-[18px] font-semibold mt-10 text-blue-500">
            An inspired start
          </p>
          <p className="text-[30px] font-semibold">Customizable ad templates</p>
          <p className="w-[70%] text-[18px] font-semibold">
            Get a headstart on the creative process using ad templates. You have
            access to professional designs for any industry or use case.
            Customize any of them with numerous design elements and branded
            assets for a personal touch. Regardless of the template’s
            dimensions, you can later scale it on multiple sizes using AI
            advertising technology.
          </p>
          <div className="w-[195px] flex justify-center items-center text-[16px] mt-4 text-white font-semibold h-[50px] rounded-md bg-[#005BE5]">
            Browse more templates
          </div>
          <div className="w-[95%] h-[80vh] border mt-6 flex flex-col justify-center items-center ">
            <div className="flex h-[50vh] gap-7 justify-center items-center ">
              {box.map((el) => (
                <div className="w-[200px] h-[180px]  rounded-md gap-3 flex">
                  {el.img}
                </div>
              ))}
            </div>
            <div className="flex h-[50%]  gap-7">
              {box1.map((el) => (
                <div className="w-[200px] h-[180px] rounded-md gap-8 justify-around flex">
                  {el.img1}
                </div>
              ))}
            </div>
          </div>
          <div className="w-[100%] h-[80vh] flex mt-10">
            <div className="w-[50%]  ">
              <p className="text-[18px] font-semibold text-[#005BE5]">
                AI-Powered Ad Creation
              </p>
              <p className="text-[40px] font-bold w-[70%]">
                AI-powered ad copy generator
              </p>
              <p className="w-[80%]  font-normal text-[20px] mt-1 flex- flex-col justify-start">
                Optimize your advertising efforts and streamline your
                copywriting process by leveraging AI technology. Effortlessly
                generate ad copy with attention-grabbing headlines and
                descriptions using simple input while having the flexibility to
                explore a multitude of text variations to ensure that you
                achieve the best possible results for your campaigns, all just a
                click away.
              </p>
              <div className="w-[180px] flex items-center justify-center h-[55px] text-white font-semibold rounded-md bg-[#005BE5] hover:bg-[#DDDDDD] mt-5">
                Create your own Ad
              </div>
            </div>
            <div className="w-[40%] mt-8">
              <img src={com} alt="" className="w-[700px] h-[350px]" />
            </div>
          </div>
          <div className="w-[100%] h-[80vh] flex mt-10">
            <div className="w-[50%]  ">
              <p className="text-[18px] font-semibold text-[#005BE5]">
                AI-Powered Ad Creation
              </p>
              <p className="text-[40px] font-bold w-[70%]">
                AI-powered ad copy generator
              </p>
              <p className="w-[80%]  font-normal text-[20px] mt-1 flex- flex-col justify-start">
                Optimize your advertising efforts and streamline your
                copywriting process by leveraging AI technology. Effortlessly
                generate ad copy with attention-grabbing headlines and
                descriptions using simple input while having the flexibility to
                explore a multitude of text variations to ensure that you
                achieve the best possible results for your campaigns, all just a
                click away.
              </p>
              <div className="w-[180px] flex items-center justify-center h-[55px] text-white font-semibold rounded-md bg-[#005BE5] hover:bg-[] mt-5">
                Create your own Ad
              </div>
            </div>
            <div className="w-[40%] mt-8">
              <img src={com} alt="" className="w-[700px] h-[350px]" />
            </div>
          </div>
          <div className="w-[100%] h-[80vh] flex mt-10">
            <div className="w-[50%]  ">
              <p className="text-[18px] font-semibold text-[#005BE5]">
                AI-Powered Ad Creation
              </p>
              <p className="text-[40px] font-bold w-[70%]">
                AI-powered ad copy generator
              </p>
              <p className="w-[80%]  font-normal text-[20px] mt-1 flex- flex-col justify-start">
                Optimize your advertising efforts and streamline your
                copywriting process by leveraging AI technology. Effortlessly
                generate ad copy with attention-grabbing headlines and
                descriptions using simple input while having the flexibility to
                explore a multitude of text variations to ensure that you
                achieve the best possible results for your campaigns, all just a
                click away.
              </p>
              <div className="w-[180px] flex items-center justify-center h-[55px] text-white font-semibold rounded-md bg-[#005BE5] hover:bg-[] mt-5">
                Create your own Ad
              </div>
            </div>
            <div className="w-[40%] mt-8">
              <img src={com} alt="" className="w-[700px] h-[350px]" />
            </div>
          </div>
          <div className="w-[75%] h-[50vh] flex items-center justify-center  flex-col">
            <p className="text-[20px] font-semibold   text-blue-500">
              cutting-edge capabilities
            </p>
            <p className="text-[40px] font-bold">
              Fully equipped AI ad <br /> generator
            </p>
            <p className="text-[20px]">
              Experience a dynamic blend of creative freedom and automation with
              our AI ad creator. Leverage the power of AI to generate ad
              creatives quickly and efficiently, expediting the design process
              and accelerating your ability to deliver impactful campaigns
              across diverse channels.
            </p>
          </div>
          <div className="w-[75%] h-[70vh]  gap-9 flex">
            <div className="flex flex-col w-[50%] h-[100%] text-[18px] justify-start">
              <img src={un} alt="" className="w-[300px] h-[200px]" />
              <h1 className="w-[100%] flex justify-start">
                <strong>Brand Alignment</strong>
              </h1>
              <p className=" flex  w-[100%] text-[18px] mr-10">
                Maintain brand consistency across all ads. Keep assets like
                logos, fonts, and colors on hand when designing by storing them
                in brand kits.
              </p>
            </div>
            <div className="flex flex-col w-[50%] h-[100%]">
              <img src={un} alt="" className="w-[300px] h-[200px]" />
              <h1 className="w-[100%] flex justify-start">
                <strong>Brand Alignment</strong>
              </h1>
              <p className=" flex  w-[100%] text-[18px] mr-10">
                Maintain brand consistency across all ads. Keep assets like
                logos, fonts, and colors on hand when designing by storing them
                in brand kits.
              </p>
            </div>
          </div>
          <div className="w-[75%] h-[80vh] gap-9 flex">
            <div className="flex flex-col w-[50%] h-[100%] text-[18px] justify-start">
              <img src={br} alt="" className="w-[300px] h-[200px]" />
              <h1 className="w-[100%] flex justify-start">
                <strong>Brand Alignment</strong>
              </h1>
              <p className=" flex  w-[100%] text-[18px] mr-10">
                Maintain brand consistency across all ads. Keep assets like
                logos, fonts, and colors on hand when designing by storing them
                in brand kits.
              </p>
            </div>
            <div className="flex flex-col w-[50%] h-[100%]">
              <img src={un} alt="" className="w-[300px] h-[200px]" />
              <h1 className="w-[100%] flex justify-start">
                <strong>Brand Alignment</strong>
              </h1>
              <p className=" flex  w-[100%] text-[18px] mr-10">
                Maintain brand consistency across all ads. Keep assets like
                logos, fonts, and colors on hand when designing by storing them
                in brand kits.
              </p>
            </div>
          </div>
          <div className="w-[75%] h-[70vh] gap-9 flex">
            <div className="flex flex-col gap-7 w-[50%] h-[100%] text-[18px] justify-start">
              <img src={png} alt="" className="w-[300px] h-[200px]" />
              <h1 className="w-[100%] flex justify-start">
                <strong>Brand Alignment</strong>
              </h1>
              <p className=" flex  w-[100%] text-[18px] mr-10">
                Maintain brand consistency across all ads. Keep assets like
                logos, fonts, and colors on hand when designing by storing them
                in brand kits.
              </p>
            </div>
            <div className="flex flex-col w-[50%] h-[100%]">
              <img src={un} alt="" className="w-[300px] h-[200px]" />
              <h1 className="w-[100%] flex justify-start">
                <strong>Brand Alignment</strong>
              </h1>
              <p className=" flex  w-[100%] text-[18px] mr-10">
                Maintain brand consistency across all ads. Keep assets like
                logos, fonts, and colors on hand when designing by storing them
                in brand kits.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[120vh] bg-[#10205A] flex items-center justify-center">
          <div className="w-60%] h-[70%] rounded-[30px] bg-[#203583]">
            <img src={bigger} alt="" className="w-[100%] h-[100%]" />
          </div>
        </div>
        <div className="w-[100%] h-[120vh] flex flex-col justify-center items-center">
          <p className="text-[40px] font-bold text-center">
            Why use Creatopy's AI ad <br /> generator
          </p>
          <div className="gap-3 flex">
            {box2.map((el) => (
              <div className="w-[200px] h-[450px] border rounded-[20px] flex  flex-col justify-center items-center gap-4">
                {el.id}
                {el.title1}
                {el.title2}
              </div>
            ))}
          </div>
        </div>
        <div className="w-[100%] h-[200vh]  flex justify-center items-center">
          <div className="w-[70%] h-[100%] gap-4 flex flex-col justify-center items-center">
            <p className="text-[20px] font-semibold">
              transforming ad production
            </p>
            <p className="text-[40px] font-bold">
              The future of creative automation
            </p>
            <p className="text-[20px] text-center font-normal">
              Take a sneak peek at our vision of AI-driven features that’ll
              introduce new ways for marketers and designers to be creative. We
              are ideating with AI to make ad production and delivery efficient,
              personalized, and enjoyable.
            </p>
            <img src={blue} alt="" className="w-[700px] h-[700px]" />
            <div className="w-[100%] h-[120vh] flex flex-col justify-center items-center">
              <p>STEP BY STEP</p>
              <p className="text-[40px] font-bold text-center">
                Why use Creatopy's AI ad <br /> generator
              </p>
              <div className="gap-3 flex">
                {box3.map((el) => (
                  <div className="w-[200px] h-[450px] border rounded-[20px] flex  flex-col justify-center items-center gap-4">
                    {el.id}
                    {el.title1}
                    {el.title2}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[90vh] flex flex-col items-center justify-center">
          <p className="text-[40px] font-bold mt-10 ">
            Frequently asked questions
          </p>
          <div className="w-[70%] h-[100%] flex justify-between items-center">
            <div className="w-[50%] flex flex-col gap-6 justify-center items-center">
              {round1.map((el) => (
                <div className="w-[400px] text-[19px] font-semibold flex justify-around items-center  h-[70px] rounded-[20px] border ">
                  {el.title} <p>+</p>
                </div>
              ))}
            </div>
            <div className="w-[50%] flex flex-col gap-6 justify-center items-center">
              {round2.map((el) => (
                <div className="w-[400px] text-[19px] font-semibold flex justify-around items-center  h-[70px] rounded-[20px] border ">
                  {el.title} <p>+</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" w-[100%] h-[70vh] flex justify-center items-center">
          <div className="w-[80%] h-[100%] gap-9 flex flex-col justify-center items-center">
            <p className="text-[40px] font-bold ">Discover more creatives</p>
            <div className="w-[90%] flex  gap-6 justify-center items-center">
              {round3.map((el) => (
                <div className="w-[800px] text-[15px] font-semibold flex justify-around items-center  h-[40px] rounded-[20px] border ">
                  {el.title}
                </div>
              ))}
            </div>
            <div className="w-[70%] flex  gap-6 justify-center items-center">
              {round4.map((el) => (
                <div className="w-[400px] text-[16px] font-semibold flex justify-around items-center  h-[40px] rounded-[20px] border ">
                  {el.title}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[100vh] flex justify-center items-center">
          <div className="w-[70%] h-[90%] gap-4 flex flex-col  bg-[#10205A] rounded-[20px] justify-center items-center  ">
            <p className="text-[40px] font-bold text-white w-[100%] text-center">
              Create ad creatives with AI <br /> for superior performance
            </p>
            <p className="text-[17px] w-[100%] text-center   font-normal text-white">
              Upgrade digital marketing strategy with AI ad design. Create high-{" "}
              <br />
              converting ads for Google Ads campaigns or social media faster
              than <br /> ever before. Start a free trial to see what Creatopy's
              AI ad generator has to offer.
            </p>
            <div className="w-[140px] h-[45px] flex justify-center items-center font-semibold  rounded-[7px] bg-[#BAD2F5]">
              Design your ad
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
