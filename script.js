function submitDonation(event) {
  event.preventDefault();

  const donorName = document.getElementById('donorName').value;
  const donationAmount = parseFloat(document.getElementById('donationAmount').value);
  const paymentMethod = document.getElementById('paymentMethod').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;

  console.log('Donor Name:', donorName);
  console.log('Donation Amount:', donationAmount);
  console.log('Payment Method:', paymentMethod);
  console.log('Email:', email);
  console.log('Phone:', phone);
  console.log('Address:', address);

  alert('Thank you for your donation!');
  
  // Redirect to the homepage
  window.location.href = 'index.html';
}