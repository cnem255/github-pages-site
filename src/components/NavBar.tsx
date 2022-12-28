import NavigationIcon from '../icons/NavigationIcon';

export default function Navbar() {
    return (
        <nav className="z-50 frosted-glass-white-i dark:frosted-glass-dark-i">
            <div className="mx-auto border-2 border-red-500 max-w-[90rem]">
                <div className="flex">
                    <div className="text-black font-poppins text-2xl items-center justify-center flex dark:text-white border border-sky-500">
                        cnem
                    </div>
                    <div className="text-black font-source_code_pro text-lg items-center justify-center flex dark:text-white border border-sky-500">
                        home
                    </div>
                    
                    <div className="text-black font-source_code_pro text-lg items-center justify-center flex dark:text-white border border-sky-500">
                        about
                    </div>
                </div>
            </div>
        </nav>
    );
}