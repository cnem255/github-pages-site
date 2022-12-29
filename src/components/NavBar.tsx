import NavigationIcon from '../icons/NavigationIcon';
import Dropdown from './Dropdown';

export default function Navbar() {
    return (
        <div className="navbar max-sm:center z-50 max-sm:max-w-2xl navbar-center text-center frosted-glass-light-i dark:frosted-glass-dark-i text-black dark:text-white top-0 left-0 right-0 shadow-lg fixed">
            <a href={"/"} className="text-4xl max-sm:text-xl font-poppins visible text-center max-xs:absolute max-xs:invisible">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 pr-2 max-sm:pr-1 max-sm:w-10 max-sm:h-10">
                    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z" clipRule="evenodd" />
                    
                </svg>
                cnem
            </a>
            <Dropdown />
        </div>
    );
}