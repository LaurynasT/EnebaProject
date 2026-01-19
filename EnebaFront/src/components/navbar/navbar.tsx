import EnebaLogo from "../../assets/enebalogo.svg";
import userLogo from "../../assets/userlogo.svg";
import Search from "../search/search.tsx";
import Lithuania from "../../assets/lithuania.svg";

interface NavBarProps {
  onSearch: (query: string) => void;
}

function NavBar({ onSearch }: NavBarProps) {
  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <nav className="relative ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img src={EnebaLogo} alt="Your Company" className="h-10 mr-2" />
                <Search onSearch={onSearch} />
                <img src={Lithuania} alt="Lithuania" className="h-6 ml-2" />
                <p className="ml-2 text-white text-sm">
                  <strong>English EU | EUR</strong>
                </p>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full p-1 text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="size-6"
                >
                  <path
                    d="M12,21.844l-9.588-10A5.672,5.672,0,0,1,1.349,5.293h0a5.673,5.673,0,0,1,9.085-1.474L12,5.384l1.566-1.565a5.673,5.673,0,0,1,9.085,1.474h0a5.673,5.673,0,0,1-1.062,6.548Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="relative rounded-full p-1 text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.2}
                  aria-hidden="true"
                  className="size-8 mt-2.5"
                >
                  <path
                    d="M12 12.7499H5.386C5.1498 12.75 4.9212 12.6664 4.74067 12.5139C4.5602 12.3615 4.43953 12.1502 4.4 11.9173L2.642 1.58395C2.60233 1.35119 2.4816 1.13996 2.30113 0.987686C2.12067 0.835406 1.89213 0.7519 1.656 0.751953H1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="currentColor"
                  />
                  <path
                    d="M10.75 14.75C10.8881 14.75 11 14.6381 11 14.5C11 14.3619 10.8881 14.25 10.75 14.25"
                    stroke="currentColor"
                  />
                  <path
                    d="M10.75 14.75C10.6119 14.75 10.5 14.6381 10.5 14.5C10.5 14.3619 10.6119 14.25 10.75 14.25"
                    stroke="currentColor"
                  />
                  <path
                    d="M5.75 14.75C5.88807 14.75 6 14.6381 6 14.5C6 14.3619 5.88807 14.25 5.75 14.25"
                    stroke="currentColor"
                  />
                  <path
                    d="M5.75 14.75C5.61193 14.75 5.5 14.6381 5.5 14.5C5.5 14.3619 5.61193 14.25 5.75 14.25"
                    stroke="currentColor"
                  />
                  <path
                    d="M4.03141 9.75007H12.0787C12.5247 9.75001 12.9578 9.60094 13.3093 9.32647C13.6608 9.05207 13.9105 8.66801 14.0187 8.23541L14.9854 4.36873C15.0038 4.29499 15.0052 4.21802 14.9895 4.14366C14.9737 4.0693 14.9412 3.99952 14.8944 3.93961C14.8476 3.87971 14.7878 3.83126 14.7194 3.79795C14.6511 3.76465 14.5761 3.74736 14.5001 3.7474H3.01075"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="relative rounded-full p-1 text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 hover:text-white"
              >
                <img
                  className="size-8 rounded-full border-2 border-solid border-gray-500"
                  src={userLogo}
                ></img>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
