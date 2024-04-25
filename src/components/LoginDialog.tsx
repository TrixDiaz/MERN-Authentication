import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import AuthTabs from "@/components/AuthTabs";


const LoginDialog = () => {
    return (<>
        <Dialog>
            <DialogTrigger>
                <span
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >Login
                </span>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className={'mb-2 text-center'}>Authentication</DialogTitle>
                    <DialogDescription className={'flex flex-row justify-center'}>
                        <AuthTabs/>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    </>);
};

export default LoginDialog