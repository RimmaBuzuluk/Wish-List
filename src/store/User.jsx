import { makeAutoObservable } from "mobx";



class Person{
    people=[
        {
            id:1, 
            name:"John",
            photo:"johne.jps",
            description:"John`s description",
            userName:"JoneLi",
            parol:"lalal"

        },
        {
            id:2, 
            name:"Tom",
            photo:"johne.jps",
            description:"Tom`s description",
            userName:"TomLi",
            parol:"lalal"
        },
        {
            id:3, 
            name:"Ron",
            photo:"johne.jps",
            description:"Ron`s description",
            userName:"RonLi",
            parol:"lalal"
        },
        {
            id:4, 
            name:"Bob",
            photo:"johne.jps",
            description:"Bob`s description",
            userName:"BobLi",
            parol:"lalal"
        }
    ];

    selectedPersonId=null;

    constructor(){
        makeAutoObservable(this);
    }

    selectedPerson(id){
        this.selectedPersonId=id
    }

    get selectedPerson(){
        return this.people.find((person)=>person.id === this.selectedPersonId)
    }

}

export default new Person();