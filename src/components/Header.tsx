import { useState } from "react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { Link, useLocation } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import { LogoIcon } from "./Icons";

interface RouteProps {
    href: string;
    label: string;
}

const routeList: RouteProps[] = [
    {
        href: "#features",
        label: "Features",
    },
    {
        href: "#testimonials",
        label: "Testimonials",
    },
    {
        href: "#pricing",
        label: "Pricing",
    },
    {
        href: "#faq",
        label: "FAQ",
    },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const location = useLocation();
    const isLoginPage = location.pathname.includes('login');
    return (
        <>
            <header
                className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
                <NavigationMenu className="mx-auto">
                    <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
                        <NavigationMenuItem className="font-bold flex">
                            <Link to={'/'}
                                  className="ml-2 font-bold text-xl flex"
                            >
                                <LogoIcon />
                                React
                            </Link>
                        </NavigationMenuItem>

                        {/* mobile */}
                        <span className="flex md:hidden">
                            <ModeToggle />

                            <Sheet
                                open={isOpen}
                                onOpenChange={setIsOpen}
                            >
                                <SheetTrigger className="px-2">
                                    <Menu
                                        className="flex md:hidden h-5 w-5"
                                        onClick={() => setIsOpen(true)}
                                    >
                                        <span className="sr-only">Menu Icon</span>
                                    </Menu>
                                </SheetTrigger>

                                <SheetContent side={"left"}>
                                    <SheetHeader>
                                        <SheetTitle className="font-bold text-xl">
                                            React
                                        </SheetTitle>
                                    </SheetHeader>
                                    <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                                        {routeList.map(({href, label}) => (
                                            <Link
                                                key={label}
                                                to={href}
                                                onClick={() => setIsOpen(false)}
                                                className={buttonVariants({variant: "ghost"})}
                                            >
                                                {label}
                                            </Link>
                                        ))}
                                        <Link
                                            to={isLoginPage ? "/register" : "/login"}
                                            className={`w-[110px] border ${buttonVariants({
                                                variant: "secondary",
                                            })}`}
                                        >
                                            {isLoginPage ? "Register" : "Login"}
                                        </Link>
                                    </nav>
                                </SheetContent>
                            </Sheet>
                        </span>

                        {/* desktop */}
                        <nav className="hidden md:flex gap-2">
                            {routeList.map((route) => (
                                <Link
                                    key={route.label}
                                    to={route.href}
                                    className={`text-[17px] ${buttonVariants({
                                        variant: "ghost",
                                    })}`}
                                >
                                    {route.label}
                                </Link>
                            ))}
                        </nav>

                        <div className="hidden md:flex gap-2">
                            <Link to={isLoginPage ? '/register' : '/login'}
                                  className={`border ${buttonVariants({ variant: "secondary" })}`}
                            >
                                {isLoginPage ? 'Register' : 'Login'}
                            </Link>

                            <ModeToggle />
                        </div>
                    </NavigationMenuList>
                </NavigationMenu>
            </header>
        </>
    );
};

export default Header;
