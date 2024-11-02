import { CanActivateFn } from "@angular/router";

export function AdminGuard():CanActivateFn{
    let role=localStorage.getItem('role')
    //let role="user"
    return()=>{
        if(role === "admin" || role ==="faculty")
            return true;
        alert("Sorry no access");
        return false;
    }
}