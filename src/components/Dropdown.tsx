import NavigationIcon from "../icons/NavigationIcon";

export default function Dropdown() {
    return (
        <div className="dropdown pl-2 dropdown-end rounded-box ml-auto max-sm:ml-0">
            <label tabIndex={0} className="btn btn-ghost h-auto w-auto"><NavigationIcon /></label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow frosted-glass-light-i dark:frosted-glass-dark-i mt-4 rounded-box w-52">
                <li><a href={"/"} className="active:btn-info">Home</a></li>
                <li><a href={"about"} className="active:btn-info">About</a></li>
                <li><a className="active:btn-info">Item 3</a></li>
                <li><a className="active:btn-info">Item 4</a></li>
                <li><a className="active:btn-info">Item 5</a></li>
            </ul>
        </div>
    )
}