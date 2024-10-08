import { IconType } from "react-icons"

interface SidebarItemsProps {
    key?: String,
    label?: String,
    icon?: IconType,
    href?: String,
    onClick? : () => void
}
const SidebarItems: React.FC<SidebarItemsProps> = ({label, icon: Icon, key, href, onClick}) => {
  return (
    <div className="flex flex-row items-center">
        <div className="
        relative
        rounded-full
        h-14
        w-14
        flex
        items-center
        justify-center
        p-4
        hover:bg-slate-300
        hover:bg-opacity-10
        cursor-pointer
        lg:hidden
        ">
            <Icon size={28} color="white"/>
        </div>

        <div className="
        relative
        hidden
        lg:flex
        items-center
        gap-4
        p-4
        rounded-full
        hover:bg-slate-300
        hover:bg-opacity-10
        cursor-pointer
        ">
            <Icon size={28} color="white"/>
            <p className="hidden lg:block text-white text-xl">
                {label}
            </p>
        </div>
    </div>
  )
}

export default SidebarItems