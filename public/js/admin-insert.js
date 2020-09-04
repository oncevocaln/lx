
function request_reserve_admin() {

  var rtext = document.querySelector('textarea[id="request_text"]').value;

  var data = {
    rtext: rtext
  };
  alert(rtext);

  fetch("/calendar/admin", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log('-------------got response------');
      console.log(json);
      if (json.possible == "NO") {
        alert("" + json.reason);
      } else {
        alert("완료\n" + json.result );

      }
    });
}

