fetch(
  "https://script.google.com/macros/s/AKfycbwjcuIkb5l59KzT_lThr6MqsB7zKk0EBjgkIaWz674Bp7k5to67TlJL0mmmSRS1APpeOA/exec",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: "Dip Das",
      phone: "9876543210",
      email: "dip@gmail.com",
      department: "CSE"
    })
  }
)
.then(res => res.text())
.then(console.log)
.catch(console.error);