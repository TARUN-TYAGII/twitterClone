import useLoginModal from "@/hooks/useLoginModal"
import useRegiterModal from "@/hooks/useRegisterModal";
import { useCallback, useState } from "react";
import Input from "../layout/Input";
import Modal from "../layout/Modal";

const LoginModal = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegiterModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = useCallback(async () => {
        setIsLoading(true);
        try {

            // login logic here
            loginModal.onClose()
        } catch (e) {
            console.log("error", e);

        } finally {
            setIsLoading(false);
        }

    }, [loginModal])

    const onToggle = useCallback(()=>{
        if(isLoading) {
            return
        }

        loginModal.onClose();
        registerModal.onOpen()

    },[isLoading,registerModal,loginModal])


    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoading}
            />

            <Input
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={isLoading}
            />

        </div>
    )

    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
            <p>First time using twitter ?
                <span onClick={onToggle} className="text-white cursor-pointer hover:underline"> Create an account </span>
            </p>

        </div>
    )


    return (
        <Modal
        disabled={isLoading}
        isOpen={loginModal.isOpen}
        title={"Login"}
        actionLable={"Sign in"}
        onClose={loginModal.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
        footer={footerContent}
         />
    )
}

export default LoginModal