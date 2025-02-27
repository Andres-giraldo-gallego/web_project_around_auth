const Login = () => {
  return (
    <div className='login'>
      <div className='login-container'>
        <div className='login-form'>
          <h1>Login</h1>
          <form>
            <input type='text' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <button type='submit'>Login</button>
          </form>
        </div>
        <div className='login-footer'>
          <p>
            <a href='/signup'>Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
