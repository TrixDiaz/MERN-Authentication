import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import AuthTabs from "@/components/AuthTabs.tsx";


const LoginDialog = () => {
    return (<>
        <Dialog>
            <DialogTrigger>
                <Button>Login</Button>
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