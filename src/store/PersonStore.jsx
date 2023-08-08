import { action, makeAutoObservable, observable } from "mobx";



class PersonStore{
    people=[
        {
            id:1, 
            name:"Rimma",
            photo:"data:image/jpeg;base64,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",
            description:"Rimma`s description",
            email:"r",
            parol:"b",
            wishList:[
                {
                    wishId: 1,
                    wishName: 'car',
                    price: 120,
                    description:"alalalal",
                    link: "http/........."
                },
                {
                    wishId: 2,
                    wishName:'vacuum cleaner',
                    price:1320,
                    description:"alalalal",
                    link:"http/........."
                },
                {
                    wishId:3,
                    wishName:'lego',
                    price:567,
                    description:"alalalal",
                    link:"http/........."
                },
                {
                    wishId:4,
                    wishName:'apple',
                    price:567,
                    description:"alalalal",
                    link:"https://auto.ria.com/uk/newauto/auto-nissan-juke-1897326.html"
                }
            ]

        },
        {
            id:2, 
            name:"Tom",
            photo:"https://cs13.pikabu.ru/post_img/big/2023/02/13/8/167629632911850940.png",
            description:"Tom`s description",
            email:"TomLi",
            parol:"lalal",
            wishList:[
                {
                    id:1,
                    wishName:'iphone',
                    price:1200,
                    description:"alalalal",
                    link:"http/........."
                },
                {
                    id:2,
                    wishName:'vacuum cleaner',
                    price:1320,
                    description:"alalalal",
                    link:"http/........."
                },
                {
                    id:3,
                    wishName:'lego',
                    price:567,
                    description:"alalalal",
                    link:"http/........."
                },
                {
                    id:4,
                    wishName:'laptop',
                    price:5867,
                    description:"alalalal",
                    link:"http/........."
                }
            ]
        },
        {
            id:3, 
            name:"Ron",
            photo:"https://abrakadabra.fun/uploads/posts/2021-12/1639417324_2-abrakadabra-fun-p-krasivie-avi-zhivotnikh-2.jpg",
            description:"Ron`s description",
            email:"RonLi",
            parol:"lalal",
            wishList:[
                {
                    wishId: 1,
                    wishName: 'car',
                    price: 120,
                    description:"alalalal",
                    link: "http/........."
                },
                {
                    wishId: 2,
                    wishName:'vacuum cleaner',
                    price:1320,
                    description:"alalalal",
                    link:"http/........."
                },
                {
                    wishId:3,
                    wishName:'lego',
                    price:567,
                    description:"alalalal",
                    link:"http/........."
                },
                {
                    wishId:4,
                    wishName:'apple',
                    price:567,
                    description:"alalalal",
                    link:"https://auto.ria.com/uk/newauto/auto-nissan-juke-1897326.html"
                }
            ]
        },
        {
            id:4, 
            name:"Bob",
            photo:"https://hypeava.ru/uploads/posts/2018-03/1521122114_2.png",
            description:"Bob`s description",
            email:"BobLi",
            parol:"lalal",
            wishList:[
                {
                    wishId: 1,
                    wishName: 'car',
                    price: 120,
                    description:"alalalal",
                    link: "http/........."
                },
                {
                    wishId: 2,
                    wishName:'vacuum cleaner',
                    price:1320,
                    description:"alalalal",
                    link:"http/........."
                },
                {
                    wishId:3,
                    wishName:'lego',
                    price:567,
                    description:"alalalal",
                    link:"http/........."
                },
                {
                    wishId:4,
                    wishName:'apple',
                    price:567,
                    description:"alalalal",
                    link:"https://auto.ria.com/uk/newauto/auto-nissan-juke-1897326.html"
                }
            ]
        },
        {
            id:5, 
            name:"Ron",
            photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu4Sycdwjt8svmmwHVv3V9XUp0a91sfrT_vxStmOCVWPbKFv7pUMeyYM7gU-V9Tz6BFso&usqp=CAU",
            description:"Ron`s description",
            email:"RonLi",
            parol:"lalal",
            wishList:[
                {
                    wishId: 1,
                    wishName: 'car',
                    price: 120,
                    description:"alalalal",
                    link: "http/........."
                },
                {
                    wishId: 2,
                    wishName:'vacuum cleaner',
                    price:1320,
                    description:"alalalal",
                    link:"http/........."
                },
                {
                    wishId:3,
                    wishName:'lego',
                    price:567,
                    description:"alalalal",
                    link:"http/........."
                },
                {
                    wishId:4,
                    wishName:'apple',
                    price:567,
                    description:"alalalal",
                    link:"https://auto.ria.com/uk/newauto/auto-nissan-juke-1897326.html"
                }
            ]
        },
        {
            id:6, 
            name:"Katerina",
            photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIz-SQ-YT4OHylkJbBP4slJcBsBX4CU1JT5w&usqp=CAU",
            description:"Bob`s description",
            email:"BobLi",
            parol:"lalal",
            wishList:[
                {
                    wishId: 1,
                    wishName: 'car',
                    price: 120,
                    description:"alalalal",
                    link: "http/........."
                },
                {
                    wishId: 2,
                    wishName:'vacuum cleaner',
                    price:1320,
                    description:"alalalal",
                    link:"http/........."
                },
                {
                    wishId:3,
                    wishName:'lego',
                    price:567,
                    description:"alalalal",
                    link:"http/........."
                },
                {
                    wishId:4,
                    wishName:'apple',
                    price:567,
                    description:"alalalal",
                    link:"https://auto.ria.com/uk/newauto/auto-nissan-juke-1897326.html"
                }
            ]
        },
        {
            id:7, 
            name:"Roman",
            photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQbYfm9QNvieeDpHkYWmnT8O2niBd5nYLvLg&usqp=CAU",
            description:"Ron`s description",
            email:"RonLi",
            parol:"lalal",
            wishList:[
                {
                    wishId: 1,
                    wishName: 'car',
                    price: 120,
                    description:"alalalal",
                    link: "http/........."
                },
                {
                    wishId: 2,
                    wishName:'vacuum cleaner',
                    price:1320,
                    description:"alalalal",
                    link:"http/........."
                },
                {
                    wishId:3,
                    wishName:'lego',
                    price:567,
                    description:"alalalal",
                    link:"http/........."
                },
                {
                    wishId:4,
                    wishName:'apple',
                    price:567,
                    description:"alalalal",
                    link:"https://auto.ria.com/uk/newauto/auto-nissan-juke-1897326.html"
                }
            ]
        },
        {
            id:8, 
            name:"Viktor",
            photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwHAWiGLSZ-cP9ndJCx5PAmIjm3xCy9VynWw&usqp=CAU",
            description:"Bob`s description",
            email:"Viktor@gmail.com",
            parol:"19111999",
            wishList:[
                {
                    wishId: 1,
                    wishName: 'car',
                    price: 120,
                    description:"alalalal",
                    link: "http/........."
                },
                {
                    wishId: 2,
                    wishName:'bmv',
                    price:1320,
                    description:"alalalal",
                    link:"http/........."
                },
                {
                    wishId:3,
                    wishName:'lego',
                    price:567,
                    description:"alalalal",
                    link:"http/........."
                },
                {
                    wishId:4,
                    wishName:'playstation',
                    price:567,
                    description:"alalalal",
                    link:"https://auto.ria.com/uk/newauto/auto-nissan-juke-1897326.html"
                }
            ]
        }
    ];

    selectedPersonId=null;

    sortWishlistAlphabetically(userId) {
        const person = this.people.find((person) => person.id === userId);
        person.wishList = person.wishList.sort((a, b) => a.wishName.localeCompare(b.wishName));
      }

      sortWishlistPrice(userId) {
        const person = this.people.find((person) => person.id === userId);
        person.wishList =person.wishList.sort((a, b) => a.price - b.price);;
      }

    constructor(){
        makeAutoObservable(this,{
            people:observable,
            addWish:action,
        });
    }

    addWish(personId, newWish,newList) {
        const person = this.people.find((p) => p.id === personId);
        if (person) {
          newList.push(newWish);
        }
        
      }

    removeWishItem(personId, id){
        const person=this.people.find((p)=>p.id===personId)
        if(person){
            person.wishList=person.wishList.filter((item)=>item.id !==id)
        }
    } 

    selectedPerson(id){
        this.selectedPersonId=id
    }

    get selectedPerson(){
        return this.people.find((person)=>person.id === this.selectedPersonId)
    }

}
const personStore = new PersonStore()
export default new PersonStore();