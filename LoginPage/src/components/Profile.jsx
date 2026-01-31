import React, { useContext } from "react";
import UserContext from "../context/UserContext";
export function Profile(){
    const {user} = useContext(UserContext)
        if (!user) return <div className="pt-5 flex justify-center text-2xl font-bold font-serif  bg-slate-100 h-screen">Please Login</div>
        return <div className="pt-5 flex justify-center text-2xl font-bold font-serif  bg-slate-100 h-screen">Welcome {user.username}</div>
}