    // function rabbi(){
    //     var myCal = document.getElementById("display").value; 
    //     var y = math.evaluate(myCal);
    //     document.getElementById("display").value = y;
        
    // }

    let nam = prompt("Enter Your Names First Letter: ");
    let finNam = nam.toUpperCase();
    console.log(finNam);
    
    switch (finNam) {
        case 'R':
            console.log("Rabbi Yusuf");
            break;
        case 'A':
            console.log("Carbon Anik");
            break;    
        case 'M':
            console.log("Monajer Hakim Munna");
            break;
        default:
            console.log("Sorry :) ");
    }