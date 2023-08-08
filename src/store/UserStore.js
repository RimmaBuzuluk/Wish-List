import { makeAutoObservable, observable, action } from "mobx";


class UserStore{
    currentUser=null;

    setCurrentUser(user){
        this.currentUser=user
    }
    clearCurrentUser(){
        this.currentUser=null;
    }

    currentUserGuest=null;

    setCurrentUserGuest(user){
        this.currentUserGuest=user
    }
    clearCurrentUserGuest(){
        this.currentUserGuest=null;
    }

    constructor(){
        makeAutoObservable(this,{
            currentUser:observable,
            setCurrentUser:action,
            clearCurrentUser:action,
            currentUserGuest:observable,
            setCurrentUserGuest:action,
            clearCurrentUserGuest:action,
        })
    }
}

export default new UserStore();