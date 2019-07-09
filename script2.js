
//this is the myPreferenceButton section
var count = 3; //initial # of buttons is 3
var allowx = true; //allow the buttons to be deleted
$('#myPreferenceButton').click(function (event){
  if(allowx==false){ //do not allow a new one to be made
    event.preventDefault();
    return false;
  }
  count++; //add one to the number of buttons
  //this part appends a new box
  $('#preferencesAdded').append("<div id = 'pref'>   <input type = 'text' id = 'firstNameIn' value = ''><!-- preference x  --><button class='btn' id ='xbtn'><i class='fa fa-close'></i></button> <!-- x button  --></div> <br>");
  $('#pref').attr('id','pref'+count); //append a new button above here this sets the id of the new button
  $('#firstNameIn').attr('id','firstNameIn'+count); //the id of the text
   allowx = false;

   //this part will stop the listening of myPreferenceButton as well as change the input to a text
  $('#firstNameIn'+count).on('keyup', function(event) {
      if (event.keyCode === 13) {
          allowx=true;
         tex = $('#firstNameIn'+count).val();
         var id1 = $(this).parent().attr('id');
         $('#'+id1).html("<!-- preference x  --><button class='btn'><i class='fa fa-close' ></i></button> <!-- x button  -->");
         $('#'+id1).prepend(tex);
         $('#'+id1).click(function(){
          var id1= $(this).attr('id')
           $('#' +id1).remove();
         });
     }
  });
});
//this sets the remove button
for(x=1; x<=3; x++){
  $('#pref'+x).click(function(){
   var id1= $(this).attr('id')
    $('#' +id1).remove();
  });
}
//here ends the myPreferenceButton section
/*
In Exercise 3 we need Register and LogIn in the header so we'll add in click events.
*/
$('#register').click(function(){
  $('#body2').html("<div id='bodyLogout'></div>");
  $('#ulxx').html('<li id = "register" class="firstH"><a>Register</a></li><li id="logIn" class="secondH"><a>Login</a></li>');
  $('#bodyLogout').html(registerForm);
  $('#body').remove();
});
//After this, you should now make new click events for login and register. To make things cleaner, make a seperate helper function that you call inside your event listener! You should change what is in the #bodyLogout div element not the #body element. This will keep the css looking good.
//below is the logIn button function
$('#logIn').click(function(){
  $('#body2').html("<div id='bodyLogout'></div>");
  $('#ulxx').html('<li id = "register" class="firstH"><a>Register</a></li><li id="logIn" class="secondH"><a>Login</a></li>');
  $('#bodyLogout').html(logInForm);
  $('#body').remove();
});
/*
    HERE IS THE START OF THE LOGOUT PAGE. YOU WILL PROBABLY BE BASING A LOT OF CODE ON THIS WHEN YOU DO LOGIN AND REGISTER SO MAKE SURE YOU READ OVER THIS AND THE CORRESPONDING HTML TAGS!!!!!
*/
$('#logout').click(function(){
  $('#body').remove();
  $('#body2').html("<div id='bodyLogout'></div>");
  $('#ulxx').html('<li id = "register" class="firstH"><a>Register</a></li><li id="logIn" class="secondH"><a>Login</a></li>');
  $('#register').click(function(){
    $('#bodyLogout').html(registerForm);
  });
  //After this, you should now make new click events for login and register. To make things cleaner, make a seperate helper function that you call inside your event listener! You should change what is in the #bodyLogout div element not the #body element. This will keep the css looking good.
  //below is the logIn button function
  $('#logIn').click(function(){
    $('#bodyLogout').html(logInForm);

  });
});

function helperRegister(){  //gets the registerFile form and puts it into storeValues
  var el = document.getElementById('registerFile');
  storeValues(el);
}

function setCookie(name,value, count){ //concatenates strings together
  document.cookie=name + count + "=" + escape(value) + "; path=/;"//gets the ASCII version of the  value
  document.cookie=name + 'Current' + "=" + escape(value) + "; path=/;" //overrides the current cookie
}

function getCookie(cname){
  var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie); //reverse of escape
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {//string splits to decode the cookie
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function storeValues(form){ //this form puts the values in the cookie when you register
  var count = 0; //sets the base
  var add = true;
    while (count<1000){
    if (regForm.username.value === getCookie('username'+count)){ //If email already exists.
      alert('You are already registered');
      add = false; //Do not add new cookie because it already exists
      break;
      }
    if (getCookie('username'+count) === ""){ //Add cookie in first empty slot
      break;
    }
      count++; //Iterate up, we haven't found a blank spot, nor a matching cookie.
    }
    if (add){ //Puts all of the information into a cookie
        setCookie('username', regForm.username.value, count);
        setCookie('psw', regForm.psw.value, count);
        setCookie('firstName', regForm.firstName.value, count);
        setCookie('lastName', regForm.lastName.value, count);
        setCookie('email', regForm.email.value, count);
        setCookie('birthday', regForm.birthday.value, count);
        setCookie('address', regForm.address.value, count);
        setCookie('profilePicture', regForm.profilePicture.value, count);
      }
      return true;
    }

    function helperLogIn(){ //Sets new current cookie on login
    for (var i=0; i<1000; i++){//searches through every cookie to see if the username and passwrd are the same
        if (getCookie('email'+i)===regForm.logInEmail.value && getCookie('psw'+i)===regForm.psw.value){
          setCookie('username', getCookie('username'+i), i);
          setCookie('psw', getCookie('psw'+i), i);
          setCookie('firstName', getCookie('firstName'+i), i);
          setCookie('lastName', getCookie('lastName'+i), i);
          setCookie('email', getCookie('email'+i), i);
          setCookie('birthday', getCookie('birthday'+i), i);
          setCookie('address', getCookie('address'+i), i);
          setCookie('profilePicture', getCookie('profilePicture'+i), i);
          return;
        }
      }
      alert('Password is incorrect'); //Alerts that password is incorrect
    }

/*
This section will change Personal Information to the Current Cookie
*/
$('#personalInfoName').html('Name: '+ getCookie('firstNameCurrent') + ' ' + getCookie('lastNameCurrent'));
$('#personalInfoPlace').html('Address: ' + getCookie('addressCurrent'));
$('#firstName').val(getCookie('firstNameCurrent'));
$('#lastName').val(getCookie('lastNameCurrent'));
$('#email').val(getCookie('emailCurrent'));
$('#address').val(getCookie('addressCurrent'));
$('#birthday').val(getCookie('birthdayCurrent'));
$('#firstName').val(getCookie('firstNameCurrent'));

/*gallery portion below*/

/*I had to move galleryDescription up here for some reason i think because it is an array*/
var galleryDescription = ["The Ritz hotel provides a luxurious experience","The Sacha hotel provides a wondrous experience","The Ardosa hotel provides a cool experience"];
var counter=0;

){rightArrow()}); /*sets the initial event handlers*/
$('#leftArrow').click(function(){leftArrow()}); /*sets the initial event handlers*/
console.log("clickNow");

galleryRunner = setInterval(function(){ /*this starts the timer*/
  $('#leftArrow').off(); /*have to remove previous event handlers*/
  $('#rightArrow').off();
  $('#rightArrow').click(function(){rightArrow()}); /*sets the event handlers in the loop*/
  $('#leftArrow').click(function(){
    leftArrow()
  });
  /*the below code describes the changes in the images and text that must be made*/
  /*it assumes there are 3 images and accounts for text changes*/
  counter+=1;
  $('#galleryDescription').html(galleryDescription[counter]);
  $('#slidesID').css('margin-left','-=100%');

  if(counter>2){
    counter =0;
    $('#slidesID').css('margin-left','0%');
    $('#galleryDescription').html(galleryDescription[counter]);
  }
  if(counter<0){
    counter=2;
    $('#slidesID').css('margin-left','-=300%');
    $('#galleryDescription').html(galleryDescription[counter]);
  }
},5000);
