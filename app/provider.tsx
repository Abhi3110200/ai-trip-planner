import { PropsWithChildren, useEffect, useState } from "react";
import Header from "./_components/Header";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { UserDetailContext } from "../context/UserDetailContext";
import { useContext } from "react";

function Provider({ children }: PropsWithChildren) {

    const CreateUser = useMutation(api.user.CreateNewUser);

    const { user } = useUser(); 

    const [userDetail, setUserDetail] = useState<any>();
    
    const CreateNewUser = async()=>{
        if (!user) return;
        
        const result = await CreateUser({
            name: user?.fullName??'',
            email: user?.primaryEmailAddress?.emailAddress??'',
            imageUrl: user?.imageUrl??'',
        })  
        setUserDetail(result)
    }

    useEffect(() => {
        user&&CreateNewUser()
    }, [user])

    return (
        <UserDetailContext.Provider value={{userDetail, setUserDetail}}>
        <div>
            <Header />
            {children}
        </div>
        </UserDetailContext.Provider>
    );
}

export default Provider

export const useUserDetail = () => {
    return useContext(UserDetailContext)
}