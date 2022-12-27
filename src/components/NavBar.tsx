import NavigationIcon from '../icons/NavigationIcon';
import MenuBtn from './MenuButton';

export default function Navbar() {
    return (
        <div className="top-0 left-0 w-full h-12 frosted-glass-light dark:frosted-glass-dark text-black dark:text-white flex-row-reverse flex-nowrap">
            <MenuBtn/>
        </div>
    );
}