// for-loop
for(let  i = 0;  i <= 10;  i++) {
    const element =  i;
    if(element == 5) {
         continue;
    }
    // console.log(element);
}


for(let i = 0; i <= 10; i++) {
    // console.log(`Outer loop is : ${i}`);
    for(let j = 0; j <= 10; j++) {
        // console.log(`Inner loop is : ${j}`);
    }
}


// Array with Loop

const myCars = ["Fortuner", "Volvo", "Range-Rover", "Land-Cruiser"];

for(let i = 0; i<myCars.length; i++) {
    const data = myCars[i];
    // console.log(data);
}



// Break & Continue

// for(let index = 1; index <= 20; index++) {
//     if(index == 5) {
//         break;
//     }
//     console.log(`Index is : ${index}`);
    
// }


for(let index = 1; index <= 20; index++) {
    if(index == 5) {
        console.log('Read 5');
        continue;
    }
    console.log(`Index is : ${index}`);
    
}

 