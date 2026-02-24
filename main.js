// Source - https://stackoverflow.com/a/14053147
// Posted by Hardik Sondagar, modified by community. See post 'Timeline' for change history
// Retrieved 2026-02-24, License - CC BY-SA 3.0

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#blah')
        .attr('src', e.target.result)
        .width(150)
        .height(200);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
