
 const obj = {
    nane : "Ankit",
    city : {
        cityName : "Noida"
    },
    data : function() {
        return 5;
    }
 }

 console.log(obj.data);
 
 const obj1 = JSON.stringify(obj) // Convert into string
 console.log(obj1);
 const obj2 = JSON.parse(obj1)  // again original condtion pasrse
 console.log(obj2);