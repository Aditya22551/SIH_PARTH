
//initialise firebase


const firebaseConfig = {
    apiKey: "AIzaSyAYehy9ApuLnz4kW4ITPZ_jelPDViAfwiw",
    authDomain: "parthtest-228cb.firebaseapp.com",
    databaseURL: "https://parthtest-228cb-default-rtdb.firebaseio.com",
    projectId: "parthtest-228cb",
    storageBucket: "parthtest-228cb.appspot.com",
    messagingSenderId: "955201959682",
    appId: "1:955201959682:web:523b760df8d6bcca06741b",
    measurementId: "G-C4DGQT8ERT"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

//reference data collection
var nameref = firebase.database().ref('name');

//listen for register
document.getElementById('registration-form').addEventListener('submit', submitform);

//submit form
function submitform(e)
{
    e.preventDefault();

    //get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var dob = getInputVal('dob');
    var Gender = getInputVal('Gender');
    var Address = getInputVal('Address');
    var city = getInputVal('city');
    var state = getInputVal('state');
    var pincode = getInputVal('pincode');
    var phonenumber = getInputVal('phonenumber');

//save form
saveform(name, email, dob, Gender, Address, city, state, pincode, phonenumber);


}


// Function to get get form values
function getInputVal(id)
  {
     return document.getElementById(id).value;
  }
  
//save messeges to firebase
function saveform(name, email, dob, Gender, Address, city, state, pincode, phonenumber){
    var newname = nameref.push();
    newname.set({
        name:name,
        email:email,
        dob:dob,
        Gender:Gender,
        Address:Address,
        city:city,
        state:state,
        pincode:pincode,
        phonenumber:phonenumber
    }) .then(() => {
      // Data successfully saved
      alert('Data successfully saved to Firebase!');
      window.location.href = "/index3.html";
      // You can add additional actions here if needed
    })
    .catch((error) => {
      // Handle errors
      console.error('Error saving data to Firebase:', error);
      alert('Error saving data to Firebase. Please try again.');
    });
}

// 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