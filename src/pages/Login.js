import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { npiNumberApi } from "../Api";
import Spinner from "../components/LoadingSpiner";
import { NormalInput, PassWordInput } from "../components/Input";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState({ text: "", error: false });
  const [loading, setLoading] = useState(false);
  const [npiNum, setnpiNum] = useState("");
  const [loginSuccessful, setLoginSuccessful] = useState(false);

  //const redirectUrl = "/assessment-history";


//   npi number
  const onSubmit = async (data) => {
    if(data.npi.length==10){
      setnpiNum(data.npi);
      setLoading(true);
      setError({ text: "", error: false });
      const res = await npiNumberApi(npiNum);
      console.log(res)
      if (res[0]==1) {
        setLoginSuccessful(true);
        console.log("succussful login")
        //window.location.href = redirectUrl;
      }
      else{
        console.log("unsuccessful")
      }
      setLoading(false);
    }
  };

  return (
    <div style={{width:'50%'}} className="md:pt-32 md:pb-20 container sm:container mx-auto">
      <div className=" md:grid gap-7 spac-y-4">
        <div>
          <div className="py-7">
            <h2 className="text-[36px] font-semibold">Welcome Back</h2>
            <p className="text-[18px] font-[500]">
              We are Happy to see you again. let's get started
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6 mt-4">
              <NormalInput
                name={"npi"}
                placeholder="NPI Number"
                required={true}
                styles="py-4 appearance-none block"
                register={register}
                validationSchema={{
                  required: "Email is required",
                }}
                errors={errors}
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <button
                className="py-3 w-full bg-[#3c7fff] hover:bg-indigo-800 font-bold px- rounded text-white flex justify-center"
                type="submit"
              >
                Log in
              </button>
              {loading && (
                <div style={{ paddingTop: "40px" }}>
                    <Spinner />
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
