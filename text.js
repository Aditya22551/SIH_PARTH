// main.js

  // Initialize Firebase
  const database = getDatabase();

  // Handle form submission

  // Handle form submission
  document.getElementById('registration-form').addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the form from submitting the traditional way
  
      // Get form data
      const formData = {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          dob: document.getElementById('dob').value,
          gender: document.querySelector('input[name="xyz"]:checked').value,
          address: document.getElementById('Address').value,
          city: document.getElementById('city').value,
          state: document.getElementById('state').value,
          pincode: document.getElementById('pincode').value,
          phonenumber: document.getElementById('phonenumber').value,
      };
  
      // Store data in Firebase
      database.ref('students').push(formData)
          .then(() => {
              // Data successfully stored
              console.log('Data stored in Firebase');
              // You can redirect to another page or show a success message here
          })
          .catch((error) => {
              // Handle errors
              console.error('Error storing data in Firebase:', error);
          });
  });
  