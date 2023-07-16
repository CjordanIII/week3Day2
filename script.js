class cat {
    constructor(color,sex,stray,name){
        this.color = color
        this.sex = sex
        this.stray = stray
        this.name = name
    }
    message(){
        console.log(`I love ${this.name} and the her color because its ${this.color}`)
    }
    info(){
        console.log(`The cat is ${this.color}.${this.sex}, was a ${this.stray} and the name is ${this.name}`)
    }
    lastmethod(){
        console.log("just need one more method")
    }
}

const honey = new cat('black','male', false,'honey')
const anothercat = new cat('green','femail','yolo' )


honey.message()
honey.info()
honey.lastmethod()
anothercat.message()
anothercat.info()
anothercat.lastmethod()


console.table(honey)
console.table(anothercat)



class Pirate{
    constructor(pirate, crewNumber, numOfBoats,baotename){
        this.pirate = pirate
        this.crewNumber = crewNumber
        this.numOfBoats = numOfBoats
        this.baotname = baotename
    }
    introduce(){
        console.log(`Ahoy! I'm ${this.pirate} and I have ${this.crewNumber} crew numbers`)
    }
    boat(){
        console.log(`${this.pirate} has ${this.crewNumber} on a boat ${this.baotname} and I own ${this.numOfBoats}`)
    }
    retire(){
        console.log(`I ${this.pirate} is going to reture`)
    }
}


const jollyRoger = [new Pirate('Jack sperro',120,2,'Jolly Roger',),new Pirate('Barbossa',10,1,'Jolly Rogger jr'),new Pirate('Elizabeth',200,2,'jolly Roger sr.')]
const blackPearl = [new Pirate('Hector Barbossa',200,2,'Black Pearl',),new Pirate('Angelica Teach',15,4,'Black Pearl jr',) ,new Pirate('Joshamee Gibbs',300,5,'Black Pearl sr.',) ]


jollyRoger.forEach(pirate => {
    console.table(pirate)
    pirate.introduce()
    pirate.boat()
    pirate.retire()
})
console.log('<===============================================================================================================================================>')
blackPearl.forEach(pirate => {
    console.table(pirate)
    pirate.introduce()
    pirate.boat()
    pirate.retire()
})



