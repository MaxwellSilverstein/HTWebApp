//this is the lastOpinionButton section
$('#lastOpinionButton').click(function(){
  $('#rightBox').html(lastOpinionButtonString);
  $('#ritz2Button').click(function(){
    alert(ritzButtonString);
  });
  $('#ardosa2Button').click(function(){
    alert(ardosaString);
  });
});
//here ends the lastOpinionButton section

//this is the personalInformationButton section
$('#personalInformationButton').click(function(){
  $('#rightBox').html(personalInformationButtonString);
});
//here ends the personalInformationButton section



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
    Here is the alert box section. These alerts create a popup box when certain paragraphs are clicked.
*/
var modal = document.getElementById('myModal'); //create modal boxes here
var btn = document.getElementById("ritzButton");
var span = document.getElementsByClassName("close")[0];
btn.onclick=function(){
  modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}


var modal2 = document.getElementById('ardosaM'); //create modal boxes here
var btn2 = document.getElementById("ardosa");
var span2 = document.getElementsByClassName("close")[1];
btn2.onclick=function(){
  modal2.style.display = "block";
}
span2.onclick = function() {
    modal2.style.display = "none";
}

var modal3 = document.getElementById('sachaM'); //create modal boxes here
var btn3 = document.getElementById("sacha");
var span3 = document.getElementsByClassName("close")[2];
btn3.onclick=function(){
  modal3.style.display = "block";
}
span3.onclick = function() {
    modal3.style.display = "none";
}


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
    if (regForm.email.value === getCookie('email'+count)){ //If email already exists.
      alert('You are already registered');
      add = false; //Do not add new cookie because it already exists
      break;
      }
    if (getCookie('email'+count) === ""){ //Add cookie in first empty slot
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

function rightArrow(){ /*when you click the right Arrow*/
  counter+=1;
  $('#galleryDescription').html(galleryDescription[counter]);
  $('#slidesID').css('margin-left','-=100%');
  /*makes sure you don't run out images on the right side*/
    if(counter>=galleryDescription.length){
      counter =0;
      $('#galleryDescription').html(galleryDescription[counter]);
      $('#slidesID').css('margin-left','0%');
     }
}
function leftArrow(){ /*when you click the left arrow*/
   counter-=1;
   $('#galleryDescription').html(galleryDescription[counter]);
   $('#slidesID').css('margin-left','+=100%');
 /*makes sure you don't run out of images on the left side*/
   if(counter<0){
     counter=2;
     $('#galleryDescription').html(galleryDescription[counter]);
     $('#slidesID').css('margin-left','-=300%');
   }
}
$('#rightArrow').click(function(){rightArrow()}); /*sets the initial event handlers*/
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

/*gallery portion ends*/




/*
  This section will deal with the search engine.
*/
$('#myName').autocomplete({
  source: ["La Castela","El Doble", "La Ardosa", "El Boqueron", "Sanlúcar", "Alagarabia", "DiverXO", "Botin", "Yoka Loka", "Kappo"]
});
$('#myLocation').autocomplete({
  source: ["La Castela","El Doble", "La Ardosa", "El Boqueron", "Sanlúcar", "Alagarabia", "DiverXO", "Botin", "Yoka Loka", "Kappo"]
});


/*
    MOVED ALL OF THE LARGE STRINGS HERE SO WE DON'T HAVE TO LOOK AT ALL OF THIS JUNK. NOW WE CAN QUICKLY THROUGH OUR ACTUAL IMPORTANT CODE RATHER THAN THESE LONG STRINGS.
*/
var lastOpinionButtonString = "<h1>Last Opinions<h1><div><div class='noBorder'><img class='imgOpinion' src='images/ritz.jpg'> <!-- image of ritx  --> <h5 id = 'ritz2Button'>Hotel Ritz</h5> <!-- hotel name  --><h5>Madrid, Spain</h5> <!-- location  --><h5>16-5-1986</h5> <!-- date  --></div><div class='noBorder'><p id='opinions'>This is my favorite hotel in Madrid! The hotel restaurant is amazing - I would definitely recommend trying the lobster! The location is perfect and is near many of the main tourist sights that you should see when you are visiting the city! It is a little expensive, but worth it!</p> <!-- hotel review  --></div></div> <!-- close div object 1  --><div> <!-- start new div object  --><div class='noBorder'><img class='imgOpinion' src='images/laArdosa.jpg'><!-- La Ardosa image   --><h5 id = 'ardosa2Button'>La Adorsa</h5> <!-- restaurant name  --><h5>Madrid, Spain</h5> <!-- location  --><h5>23-8-2005</h5> <!-- date  --></div><div class='noBorder'><p id='opinions'>This is a great bodega in a busy and popular area of the city. It gets pretty crowded at night so I would recommend getting there early to secure a good seat. I heard that they are famous for their tortillas and they lived up to the expectation! Very fair pricing as well. </p> <!-- restaurant review  --></div>  </div> <!-- close reviews div object  --></div>";

var personalInformationButtonString = "<h1>Personal Information</h1> <!-- beginning of right box personal information section  --><br><br><form> <!-- start of form object  --><input type = 'text' id = 'firstName' value = 'First Name'> <!-- insert first name box  -->&nbsp &nbsp &nbsp<input type = 'text' id = 'lastName' value = 'Last Name'> <!-- insert last name box  --><br><br><input type = 'text' id = 'email' value = 'Email address'> <!-- insert email box  --> <br><br><input type = 'text' id = 'address' value = 'Home address'> <!-- insert address box  --> &nbsp &nbsp &nbsp<input type = 'text' id = 'phone' value = 'Phone number'> <!-- insert phone number box  --><br><br><input type = 'text' id = 'birthday' value = 'Birthday'> <!-- insert birthday box  --><br><br><p> <button type='submit'>Submit Information</button> </p> <!-- submit information button  --><br><br></form> <!-- end of form object  --><h2> My Activity in the App </h2> <!-- my activiyy in the app section --><br><br><div class='activity'>POINTS: 2</div> <!-- points circle  --><div class='activity'>LEVEL: 10</div> <!-- level circle  --><div class='activity'>OPINIONS: 3</div> <!-- opinions circle  --> <div class='activity'>PHOTOS: 5</div> <!-- photos circle  -->";

var ritzButtonString = "Name: Hotel Ritz Madrid\nAddress: Plaza de la Lealtad, 5, 28014 Madrid\nWebsite: https://www.mandarinoriental.com/madrid/hotel-ritz/luxury-hotel \nTelephone Number: (+34) 91 701 67 67 \nEmail: RZMAD-RESERVATIONS@MOHG.COM \nFacebook: Hotel Ritz, Madrid\nPrice: At least 300 per night\nDescription: Set in a grand building built in 1910, this plush luxury hotel is a 4-minute walk from the Museo del Prado and 15 km from Madrid-Barajas Airport \nOpinion: This is my favorite hotel in Madrid! The hotel restaurant is amazing I would definitely recommend trying the lobster! The location is perfect and is near many of the main tourist sights that you should see when you are in the city! It is a little expensive, but worth it!";

var ardosaString = "Name: La Ardosa\nAddress: Calle de Colon, 13, 28004 Madrid\nWebsite: http://www.laardosa.es/ \nTelephone Number: (+34) 91 521 49 79 \nEmail: N/A \nFacebook: Bodega La Ardosa\nPrice: $$-$$$ (Moderately Priced)\nDescription: They offer a wide variety of Irish beers at very reasonable prices, vermouth on tap, lagers, fine wines from La Ribera and Rioja. For snacks, they offer a variety of 'tapas', 'salmorejo' (a thick, cold tomato and garlic soup), cold meats, cured meat from Leon, duck ham and potato omelette, among other things. \nOpinion: This is a great bodega in a busy and popular area of the city. It gets pretty crowded at night so I would recommend getting there early to secure a good seat. I heard that they are famous for their tortillas and they lived up to the expectation! Very fair pricing as well";

var sachaButtonString = "Name: Restaurante Sacha\nAddress: 11, Calle de Juan Hurtado de Mendoza, 28036 Madrid\nTrip Advisor: https://www.tripadvisor.com/Restaurant_Review-g187514-d991775-Reviews-Sacha-Madrid.html \nTelephone Number: (+34) 913 45 59 52 \nEmail: N/A \nFacebook: Restaurante Sacha\nPrice: $$$$ (Expensive)\nDescription: Sacha, an old-school Spanish restaurant that was originally started by a couple who named the place after their only son. As luck would have it, Sacha is now the head chef and proprietor, helming a menu that has become a staple for Madrid foodies. The offerings here change seasonally, but the selection always has its foundation in traditional Spanish cuisine \nOpinion: This is a top tier restaurant in Madrid. It is a very popular restaurant with the locals and there are not many tourists! They have a great wine list and every item on the menu has been carefully thought out. It is a little hard to find, but I will be back next time I am in Madrid!";
//registerForm html.  when you click submit it runs the helperRegister function
var registerForm = "<b>Account Information</b><br><form id='registerFile' method='post' onsubmit='helperRegister()' name='regForm'>Username: <input type='text' name='username' required><br>Password: <input type = 'password' pattern = '[a-z0-9]{1,8}' name = 'psw'required><br><br><b>Personal Information</b><br>First Name: <input type='text' name='firstName' required><br>Last Name: <input type = 'text' name = 'lastName' required><br>E-mail Address: <input type = 'email' name = 'email' required><br>Birthday: <input type = 'date' name = 'birthday' required><br>Address: <input type = 'text' name = 'address' required><br><br><br>Profile Picture: <div id='browse'><input type = 'file' name = 'profilePicture'></div><br><br><input type = 'checkbox' name = 'terms' value = 'read' required>I have read and accept the terms of use<br><br><input type = 'submit' value = 'Save'><br><input type = 'reset' value = 'Delete'> </form>";
//logIn form html.  when you click submit it runs the helperLogIn function
var logInForm = "<b>Account Log In</b><br><form name='regForm' method='post' onsubmit='helperLogIn()'>Email: <input type='email' name='logInEmail' required><br>Password: <input type = 'password' pattern = '[a-z0-9]{1,8}' name = 'psw'required><br><br><br><br><input type = 'submit' value = 'Log In'></form>";
