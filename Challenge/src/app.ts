class Person {
    id: number
    name: string;
    age: number;
    location: string;
    hobbies: string[];
    favourites: string[];
    img: string;

    constructor(id: number, name: string, age: number, location: string, hobbies: string[], favourites: string[], img: string) {
        this.id  = id
        this.name = name,
        this.age = age,
        this.location = location,
        this.hobbies = hobbies,
        this.favourites = favourites,
        this.img = img

        this.printing();
    }

    printing() {
        let person = `  <div id="${this.id}" class="col-md-4 profile">
                            <div class="card" style="width: 18rem;">
                                <img src="${this.img}" class="card-img-top" alt="...">
                                <div class="card-body bg-light">
                                    <h5 class="card-title">Name: ${this.name}</h5>
                                    <p class="card-text">Age: ${this.age}</p>
                                    <p class="card-text">Location: ${this.location}</p>
                                    <p class="card-text">Hobbies: ${this.hobbies}</p>
                                    <p class="card-text">Favourites: ${this.favourites}</p> 
                                </div>
                            </div>
                        </div>`

        $(".out").append(person);
    }

}

let person1 = new Person(1, "Bart Simpson", 22, "Springfield", ["Football, Baseball"], ["Pizza, Music"], "img/bart.jpeg")
let person2 = new Person(2, "Lisa Simpson", 18, "Springfield", ["School, Books"], ["Saxophon, Music"], "img/lisa.jpeg")
let person3 = new Person(3, "Homer Simpson", 40, "Springfield", ["Moe's Bar, Beer"], ["Cats, More Beer"], "img/homer.jpg")
let person4 = new Person(4, "Bart Simpson", 22, "Springfield", ["Football, Baseball"], ["Pizza, Music"], "img/bart.jpeg")
let person5 = new Person(5, "Lisa Simpson", 18, "Springfield", ["School, Books"], ["Saxophon, Music"], "img/lisa.jpeg")
let person6 = new Person(6, "Homer Simpson", 40, "Springfield", ["Moe's Bar, Beer"], ["Cats, More Beer"], "img/homer.jpg")


let jumboBox = `
                <div class="jumbotron jumbotron-fluid bg-warning">
                    <div class="container">
                        <h1 class="display-4">My Favourite Simpsons</h1>
                        <p class="lead">Choose your favorite character.</p>
                    </div>
                </div>`

$(".jumboBox").append(jumboBox);
for (let i: number = 1; i <= 6; i++) {
        $(`#${i}`).on("click", () => {
            const personDiv = $(`#${i}`)
            personDiv.hide()
            
            $(".favouriteBox").append(personDiv.html());
    })
}
