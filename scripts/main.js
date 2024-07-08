alert('Hello')

// var iceCream = 'chocolate'

// if (iceCream === 'chocolate') {
//   alert('1')
// } else {
//   alert('2')
// }

function changeImage(){
  imgSrc = document.getElementById("imgClickAndChange").src
  
  if (imgSrc == "https://lktruc.github.io/images/images1.jpg"){
    
    document.getElementById("imgClickAndChange").src = 'images/image2.jpg'
  } else {
    document.getElementById("imgClickAndChange").src = 'images/images1.jpg'
  }
}
