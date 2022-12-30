import { CodeBracketSquareIcon } from '@heroicons/react/24/solid';
import Dropdown from './Dropdown';

export default function Navbar() {
    return (
        <div className="navbar max-sm:center z-50 max-sm:max-w-2xl navbar-center text-center frosted-glass-light-i dark:frosted-glass-dark-i text-black dark:text-white top-0 left-0 right-0 shadow-lg fixed">
            <a href={"/"} className="text-4xl max-sm:text-xl font-poppins visible text-center max-xs:absolute max-xs:invisible">
                <CodeBracketSquareIcon className="w-12 h-12 pr-2 max-sm:pr-1 max-sm:w-10 max-sm:h-10"/>
                cnem
            </a>
            <Dropdown />
        </div>
    );
}