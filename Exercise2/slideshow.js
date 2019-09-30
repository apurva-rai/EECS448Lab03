
  var counter = 0;
  var imageArray = [
                      "Image1.jpeg",
                      "Image2.jpeg",
                      "Image3.jpg",
                      "Image4.jpg",
                      "Image5.jpg"
                    ];

  var imgTag = document.getElementById("please")
  imgTag.src = imageArray[counter];

  function next()
  {

    if(counter > 3) counter = 0;
    else counter++;

    imgTag.src = imageArray[counter];
    console.log(counter);
  }

  function previous()
  {

    if(counter == 0) counter = 4;
    else counter--;

    imgTag.src = imageArray[counter];
    console.log(counter);

  }
