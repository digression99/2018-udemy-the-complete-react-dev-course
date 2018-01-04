 nameVar = 'kim';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'kim2';
nameLet = 'julie';

console.log('nameLet', nameLet);

const nameConst = 'frank';
// const nameConst;
// nameConst = 'frank2';

console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'kal';
    return petName;
}

// var wow = getPetName();
// wow = 'lala';
//
// var wow2 = getPetName();
// console.log(wow2);

//getPetName();
//console.log(petName);

var fullName = 'kim ilsik*baba';

if (fullName) {
    //var firstName = fullName.split(' ')[0];
    const firstName = fullName.split(' ')[0];
    //var wow = fullName.split(' *')[2];
    console.log(firstName);
    //console.log(wow);
}

let firstName = 'song';

// error.
console.log(firstName);