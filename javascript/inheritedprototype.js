const  myInfo={
    isMale:true,
    Bio:function(){
        console.log(`my name is ${this.name}. am i male? ${this.isMale}`);

    }
}
const myself=Object.create(myInfo);
myself.name='john';
myself.Bio();