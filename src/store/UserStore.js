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

    updateWishList(userId, updatedWishList) {
        const user = this.users.find((user) => user.id === userId);
        if (user) {
          user.wishList = updatedWishList;
        }
    }

    constructor(){
        makeAutoObservable(this,{
            currentUser:observable,
            setCurrentUser:action,
            clearCurrentUser:action,
            currentUserGuest:observable,
            setCurrentUserGuest:action,
            clearCurrentUserGuest:action,
            updateWishList:action
        })
    }
}

export default new UserStore();