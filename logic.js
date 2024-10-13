function showAlertOnce() {
    // Check if the alert has already been shown
    if (!sessionStorage.getItem('alertShown')) {
        alert("Provide a fake email and password that meet all the specified criteria; no authentication or authorization is required.");
        // Set a flag in sessionStorage to indicate the alert has been shown
        sessionStorage.setItem('alertShown', 'true');
    }
}

// Execute the function when the page loads
window.onload = showAlertOnce;
function setcolorto_indicator(password_condition , con1){
    console.log(con1);

    let condition1_checker1 = document.getElementById("condition1");
    let condition1_checker2 = document.getElementById("condition2");
    let condition1_checker3 = document.getElementById("condition3");
    let condition1_checker4 = document.getElementById("condition4");
    let condition1_checker5 = document.getElementById("condition5");
    
    password_condition[0] > 0 ?
        condition1_checker1.style.backgroundColor = "#00ff29" :condition1_checker1.style.backgroundColor = "red" ;  
    
    password_condition[1] > 0 ?
        condition1_checker2.style.backgroundColor = "#00ff29":condition1_checker2.style.backgroundColor = "red" ; 
    password_condition[2] > 0 ?
        condition1_checker3.style.backgroundColor = "#00ff29":condition1_checker3.style.backgroundColor = "red" ; 
    password_condition[3] > 0 ?
        condition1_checker4.style.backgroundColor = "#00ff29":condition1_checker4.style.backgroundColor = "red" ; 
    password_condition[4] == 1 ?
        condition1_checker5.style.backgroundColor = "#00ff29":condition1_checker5.style.backgroundColor = "red" ; 

    if(condition1_checker1.style.backgroundColor=='red' || condition1_checker2.style.backgroundColor=='red' || condition1_checker3.style.backgroundColor=='red' ||condition1_checker4.style.backgroundColor=='red' || condition1_checker5.style.backgroundColor=='red' || con1==false){
        alert("Enter password with given format : \n\n Dot 1. There should be an Uppercase character \n Dot 2. There should be a Lowercase character \n Dot 3. There should be a Special Symbol \n Dot 4. There should be a digit \n Dot 5. Password Length must be >=8\n\n 6) There should not be any white space or empty character  (It is checked internally no significance with dots in password bar)");

        let apple_submit_logo = document.getElementById('apple_submit_logo');
        apple_submit_logo.style.display = "block";
        let loading_spinner =  document.getElementById("extra_target");
        loading_spinner.style.display = 'none';
        // let forgot_password = document.getElementById('forgot_password');
        // forgot_password.style.zIndex = -100;
    }
    
    else{
        alert("Sucessfully registered !!!");
        // window.location.href = "./dashboard/final_dashboard.html";
    }
}

// osOnChangeTimerDelay = 1000;


function check_password_same() {
    let getter_value = document.getElementById("sign_up_user_password");
    const checker = getter_value.value;
    
    let getter_value2 = document.getElementById("sign_up_user_reenter_password");
    const checker2 = getter_value2.value; // Fixed this line

    console.log(checker);
    console.log(checker2);

    if (checker === "" || checker2 === "") {
        alert("Password cannot be empty");
        return false; // Return false if empty
    } else {
        if (checker !== checker2) {
            alert("Password and Re-enter Password are not the same");
            return false; // Return false if passwords don't match
        } else {
            return true; // Return true if passwords match
        }
    }
}


function color_updater(){
    
    // forgot_password.style.marginRight = '55px';


    // let apple_submit_logo = document.getElementById('apple_submit_logo');
    // apple_submit_logo.style.display = "none";
    // let loading_spinner =  document.getElementById("extra_target");
    // loading_spinner.style.display = 'block';


    var con1 = check_password_same();
    // console.log(con1);

    let getter_value = document.getElementById("sign_up_user_password");
    const checker = getter_value.value;

    // 0 => UpperCase;  
    // 1 => LowerCase;
    // 2 => SpecialSymbol;
    // 3 => NumberPresent;
    // 4 => Whitespace;
    // 5 => Length > 8;

    

    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const number_checker = /\d/;
    const upper_case = /[A-Z]/;
    const lower_case = /[a-z]/;

    let password_condition = [0,0,0,0,0];
    // console.log(checker.length);
    for(let i=0 ; i<checker.length ; i++){
        // console.log("checking ",checker[i]," ");
        if(upper_case.test(checker[i])){
            password_condition[0]++;
        }
        
        else if(lower_case.test(checker[i])){
            password_condition[1]++;
        }
        
        else if(specialChars.test(checker[i])){
            password_condition[2]++;
        }
        
        else if(number_checker.test(checker[i])){
            password_condition[3]++;
        }
    }

    checker.length >= 8 ? password_condition[4] = 1 : password_condition[5] = 0;

    // console.log(password_condition);
    setcolorto_indicator(password_condition , con1);

    // setInterval(color_updater , 10000)
}


function check_login_id_pass(){
    let apple_submit_logo = document.getElementById('apple_submit_logo');
    apple_submit_logo.style.display = "none";
    let loading_spinner =  document.getElementById("extra_target");
    loading_spinner.style.display = 'block';
}

function show_menu() {
    const menu = document.getElementById("display_options_menu");
    if (menu.style.display === "inline") {
        menu.style.display = "none";
    } else {
        menu.style.display = "inline";
    }
}
