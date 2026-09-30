const Login = () => {
  return (
    <section className=" w-full h-screen bg-background flex flex-col justify-center items-center gap-5">

      <h1 className="text-blue-500">Login</h1>

      <form className="w-[80%] shadow-xl rounded-xl flex flex-col justify-center items-center p-5">

        <div className="rounded-md w-[80%] md:w-[60%] lg:w-[40%]  p-2 my-2">
          <label htmlFor="email">Email * </label>

          <input type="email" id="email" className="input-field" />

        </div>

        <div className="rounded-md w-[80%] md:w-[60%] lg:w-[40%]  p-2 my-2">
          <label htmlFor="email">Password * </label>

          <input type="password" id="password" className="input-field" />

        </div>

        <button type="submit" className="btn-primary">Submit</button>
      </form>
    </section>
  )
}

export default Login