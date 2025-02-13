import { useNavigate } from "react-router-dom";


const Und = () => {


    document.title = "Register"
    const navigate = useNavigate
    
  return (
    <div>
      <div className="w-full h-[150vh] flex justify-center items-center flex-col">
        <div className="w-[500px]  min-h-[500px] rounded-md mt-[200px] border flex justify-center items-center gap-6">
          <form
            action=""
            className="flex flex-col gap-6 items-center justify-center"
          >
            <div className="flex flex-col">
              <label htmlFor="" className="text-[12px] font-semibold ">
                Username
              </label>

              <input
                type="Username"
                title="user"
                className="border rounded-md w-[400px] h-[45px] text-[16px] text-black p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-[12px] font-semibold">
                Email
              </label>
              <input
                type="Email"
                title="user"
                className="border rounded-md w-[400px] h-[45px] text-[16px] text-black p-2"
              />
            </div>
            <div className=" flex flex-col">
              <label htmlFor="" className="text-[12px] font-semibold">
                Password
              </label>
              <input
                type="Password"
                title="user"
                className="border rounded-md w-[400px] h-[45px] text-[16px] text-black p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold text-[12px]">
                School Name
              </label>
              <input
                type="SchoolName"
                title="user"
                className="border rounded-md w-[400px] h-[45px] text-[16px] text-black p-2"
              />
            </div>
            <div className="">
              <label htmlFor="" className="font-semibold text-[12px]"></label>
              <input
                type="Phone Number"
                title="user"
                className="border rounded-md w-[400px] h-[45px] text-[16px] text-black p-2"
              />
            </div>
            <div className="flex flex-col w-[400px] h-[45px] border rounded-md">
              <input className="w-[400px] h-[45px] rounded-md border" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Und;
