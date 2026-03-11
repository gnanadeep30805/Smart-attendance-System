function Register(){

  return(

    <div className="container-center">

      <div className="card w-96">

        <h2 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h2>

        <input type="text" placeholder="Name" className="input-field mb-4" />

        <input type="email" placeholder="Email" className="input-field mb-4" />

        <input type="password" placeholder="Password" className="input-field mb-6" />

        <button className="primary-btn">
          Register
        </button>

      </div>

    </div>

  )
}

export default Register