//  class SimpleDate{
//     constructor(givenDay,givenMonth,givenYear){
//         this.year=givenYear;
//         this.month=givenMonth;
//         this.day=givenDay
//     }
//     addMonth(nMonths){

//     }
//     getMonth(){
//         return this.month;
//     }
//  }


class car{
    constructor(givenName,givenYear){
        this.name=givenName;
        this.year=givenYear;
    }
    greet(){
        return `${this.name} say hello`
    }
}

class Bike extends car{
    constructor(givenname,givenyear,givenspeed){
        super(givenname,givenyear)
            this.givenspeed=givenspeed
        
    }
}
const bike1=new Bike('suzuki',2022,222)
const car1=new car('bmw','2022');