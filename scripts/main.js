var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/amsterdam.png') {
      myImage.setAttribute ('src','images/newyorkcity.jpg');
    } else {
      myImage.setAttribute ('src','images/amsterdam.jpg');
    }
}