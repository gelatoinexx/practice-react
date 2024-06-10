import Button from "../components/Button";
import image from "../assets/image.svg";
import logo from "../assets/logo.svg";

function Login() {

  const generateAPIKey = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 32;
    let apiKey = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      apiKey += characters[randomIndex];
    }
  
    return apiKey;
  };
  
  const apiKey = generateAPIKey();
  console.log(apiKey);
  
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-20 min-h-80 bg-white rounded-lg shadow-2xl bg-opacity-90">
      <div className="hidden lg:block lg:w-2/3">
        <img
          src={image}
          alt="Login Image"
          className="object-cover w-full h-full rounded-l-lg"
        />
      </div>

      <div className="w-full lg:w-1/2 p-8 flex flex-col items-start lg:items-center justify-center sm:items-center sm:justify-center">
        <div className="block max-w-full lg:w-500 mb-4">
          <img
            src={logo}
            alt="Login Image"
            className="object-cover max-w-ful h-full rounded-lg"
          />
        </div>

        <div className="w-full lg:w-3/4 xl:w-2/3">
          <form className="space-y-4 ">
            <div className="flex flex-col items-start">
              <label
                htmlFor="username"
                className="text-md font-medium text-black-500 mb-1"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                className="mt-1 p-2 w-full rounded-md border border-red-500 focus:border-red-500 focus:ring focus:ring-red-300 bg-transparent"
              />
            </div>
            <div className="flex flex-col items-start">
              <label
                htmlFor="password"
                className="text-md font-medium text-black-500 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="mt-1 p-2 w-full rounded-md border border-red-500 focus:border-red-500 focus:ring focus:ring-red-300 bg-transparent"
              />
            </div>
            <div className="justify-center items-center mt-4">
            <Button onClick={() => console.log(generateAPIKey)}>Login</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );


  
}

export default Login;
