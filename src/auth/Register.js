import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import Error from "../components/ui/Error";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/features/auth/authSlice";

export default function Register() {
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = getAuth();
  const db = getDatabase();
  const [inputs, setInputs] = useState({ ...initialState });
  const [err, setErr] = useState("");

  const handeOnChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, name, confirmPassword } = inputs;
    if (password !== confirmPassword) {
      setErr("Password does not match");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCre) => {
          console.log(userCre);
          updateProfile(auth.currentUser, {
            displayName: name,
          }).then(() => {
            const uid = auth.currentUser.uid;
            set(ref(db, "users/" + uid), {
              username: name,
              email: email,
            });
            setErr("");
            setInputs({ ...initialState });
            dispatch(signIn({ user: { name, email }, token: userCre.user.accessToken }));
            navigate("/home");
          });
        })
        .catch((error) => {
          if (error?.code.includes("auth/email-already-in-use")) {
            setErr("This Email already in use. Please use another one.");
          }

          if (error?.code.includes("auth/weak-password")) {
            setErr("Password should be at least 6 characters");
          }
          // ..
        });
    }
  };

  return (
    <div className="grid place-items-center h-screen bg-[#F9FAFB">
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="Name"
                  autoComplete="Name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                  onChange={handeOnChange}
                  value={inputs.name}
                />
              </div>

              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={handeOnChange}
                  value={inputs.email}
                />
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={handeOnChange}
                  value={inputs.password}
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="current-confirmPassword"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                  placeholder="confirmPassword"
                  onChange={handeOnChange}
                  value={inputs.confirmPassword}
                />
              </div>
            </div>

            <div className="flex items-center justify-end">
              <div className="text-sm">
                <Link to="/" className="font-medium text-violet-600 hover:text-violet-500">
                  Login
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                Sign up
              </button>
            </div>
          </form>

          {err && <Error message={err} />}
        </div>
      </div>
    </div>
  );
}
