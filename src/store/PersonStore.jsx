import { makeAutoObservable } from "mobx";



class PersonStore{
    people=[
        {
            id:1, 
            name:"Rimma",
            photo:"johne.jps",
            description:"Rimma`s description",
            email:"rimma@gmail.com",
            parol:"lalal",
            wishList:[
                {
                    id:1,
                    wishName:'car',
                    price:120,
                    deccription:"alalalal",
                    link:"http/........."
                },
                {
                    id:2,
                    wishName:'vacuum cleaner',
                    price:1320,
                    deccription:"alalalal",
                    link:"http/........."
                },
                {
                    id:3,
                    wishName:'lego',
                    price:567,
                    deccription:"alalalal",
                    link:"http/........."
                }
            ]

        },
        {
            id:2, 
            name:"Tom",
            photo:"johne.jps",
            description:"Tom`s description",
            email:"TomLi",
            parol:"lalal"
        },
        {
            id:3, 
            name:"Ron",
            photo:"johne.jps",
            description:"Ron`s description",
            email:"RonLi",
            parol:"lalal"
        },
        {
            id:4, 
            name:"Bob",
            photo:"johne.jps",
            description:"Bob`s description",
            email:"BobLi",
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

export default new PersonStore();