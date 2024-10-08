import useLoginModal from "@/hooks/useLoginModal"
import { useCallback, useState } from "react";
import Input from "../layout/Input";
import Modal from "../layout/Modal";
import useRegiterModal from "@/hooks/useRegisterModal";

const RegisterModal = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegiterModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name,setName] = useState('');
    const [username,setUsername] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = useCallback(async () => {
        setIsLoading(true);
        try {

            //register and login logic here
            registerModal.onClose()
        } catch (e) {
            console.log("error", e);

        } finally {
            setIsLoading(false);
        }

    }, [registerModal])

    const onToggle = useCallback(()=>{
        if(isLoading) {
            return
        }

        registerModal.onClose();
        loginModal.onOpen();

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
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                disabled={isLoading}
            />
             <Input
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
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
            <p>Already have an account ?
                <span onClick={onToggle} className="text-white cursor-pointer hover:underline"> Sign In</span>
            </p>

        </div>
    )
    return (
        <Modal
        disabled={isLoading}
        isOpen={registerModal.isOpen}
        title={"Create an account"}
        actionLable={"Register"}
        onClose={registerModal.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
        footer={footerContent}
         />
    )
}

export default RegisterModal