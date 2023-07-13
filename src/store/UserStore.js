import { makeObservable, observable, action } from "mobx";


class UserStore{
    currentUser=null;

    setCurrentUser(user){
        this.currentUser=user
    }
    clearCurrentUser(){
        this.currentUser=null;
    }

    constructor(){
        makeObservable(this,{
            currentUser:observable,
            setCurrentUser:action,
            clearCurrentUser:action,
        })
    }
}