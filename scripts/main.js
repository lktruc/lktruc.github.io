alert('Hello')
imgSrc = document.getElementById("imgClickAndChange").src
alert(imgSrc)
// var iceCream = 'chocolate'

// if (iceCream === 'chocolate') {
//   alert('1')
// } else {
//   alert('2')
// }

function changeImage(){
  imgSrc = document.getElementById("imgClickAndChange").src
  alert(imgSrc)
  if (imgSrc == "images/images1.jpg"){
    document.getElementById("imgClickAndChange").src = 'images/image2.jpg'
  } else {
    document.getElementById("imgClickAndChange").src = 'images/images1.jpg'
  }
}
