
function request_reserve_admin() {

  var rtext = document.querySelector('textarea[id="request_text"]').value;

  var data = {
    rtext: rtext
  };
  // alert(rtext);

  fetch("/calendar/admin", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      alert("완료\n" + json.result );
    });
}


function process_naver_request(){
  alert("-------naver request process first");

  
  var iframe = document.getElementById('naver-iframe');
  var text = $(iframe).contents().find("html").html();

  alert(text);
}


function print_iframe(frame_name) {


  var iframe = document.getElementById('naver-iframe');

    var doc = iframe.contentWindow.document;
  
  // alert(frames[frame_name].document.body.innerHTML);
}
