import { makeAutoObservable, observable, action } from "mobx";


class UserStore{
    currentUser=null;

    setCurrentUser(user){
        this.currentUser=user
    }
    clearCurrentUser(){
        this.currentUser=null;
    }

    constructor(){
        makeAutoObservable(this,{
            currentUser:observable,
            setCurrentUser:action,
            clearCurrentUser:action,
        })
    }
}

export default new UserStore();