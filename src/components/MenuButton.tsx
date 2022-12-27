import { Menu } from '@headlessui/react'
import NavigationIcon from '../icons/NavigationIcon'

export default function MenuBtn() {
    return (
        <Menu>
            <Menu.Button className={"flex items-center justify-center h-full w-[50px] hover:shadow-lg hover:shadow-black bg-transparent transition-all m-auto"}><NavigationIcon /></Menu.Button>
            <Menu.Items className={"ml-[46.75vw] mt-2 outline outline-offset-[-2px] outline-0 flex items-center rounded-tl-md rounded-tr-md transition-opacity justify-center h-8 w-24 bg-sky-500 hover:outline-sky-300 hover:outline-2"}>
                {({}) => (
                    <a href={"about"} className="text-xl font-sans">
                        About
                    </a>
                )}
            </Menu.Items>
            <Menu.Items className={"ml-[46.75vw] transition-opacity flex items-center outline outline-offset-[-2px] outline-0 rounded-bl-md rounded-br-md justify-center h-8 w-24 bg-sky-500 hover:outline-sky-300 hover:outline-2"}>
                {({}) => (
                    <a href={"/"} className="text-xl font-sans">
                        Home
                    </a>
                )}
            </Menu.Items>
        </Menu>
    )
}