import React from "react";


export function NormalInput(props) {
  const {
    name,
    placeholder,
    type,
    required,
    styles,
    register,
    validationSchema,
    errors,
    value,
    readOnly,
    divStyles,
    icon,
    iconComponent,
  } = props;
  return (
    <div className={`${divStyles}`}>
      {icon && <>{iconComponent}</>}
      <input
        className={`py-3 appearance-none block w-full border border-[#e2e8f0] rounded px-4 leading-tight mb-3 h-[48px] ${styles}`}
        id={placeholder}
        type={type}
        placeholder={placeholder}
        required={required}
        {...register(name, validationSchema)}
        defaultValue={value}
        readOnly={readOnly}
      />

      <p className="error mb-3">
        {errors && errors[name]?.type === "maxLength"
          ? errors[name]?.message
          : errors[name]?.type === "required"
          ? errors[name]?.message
          : errors[name]?.type === "minLength" && errors[name]?.message}
      </p>
    </div>
  );
}

export function PassWordInput(props) {
  const {
    name,
    placeholder,
    type,
    required,
    styles,
    register,
    validationSchema,
    errors,
    eye,
    setEye,
  } = props;
  return (
    <>
      <div className="w-full border border-[#e2e8f0] flex items-center h-[48px] mb-3">
        <input
          className=" block rounded px-4 w-[93%] leading-tight"
          id={name}
          type={type === "password" && eye ? "text" : "password"}
          placeholder={placeholder}
          required={required}
          {...register(name, validationSchema)}
        />
      </div>

      <p className="error mb-3">
        {errors && errors[name]?.type === "maxLength"
          ? errors[name]?.message
          : errors[name]?.type === "required"
          ? errors[name]?.message
          : errors[name]?.type === "minLength" && errors[name]?.message}
      </p>
    </>
  );
}
