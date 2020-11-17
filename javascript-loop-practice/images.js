$(document).ready(function () {

    $("button").click(runLoops);


    function runLoops() {
        // Clear out all existing images
        $(".imageHolder").empty();

        // Get the number from the box
        var num = parseInt($("#numPics").val());

        // Print the desired number of images for each loop
        $("#while-num").text(num + 1);
        $("#do-while-num").text(num - 1);
        $("#for-num").text(num);



        /*
         Create a while loop that runs "num + 1" times.

         The body of the loop should contain the statement:
         addImageToDiv("#while-loop");
        */

        $(document).ready(function(){
            var i=1;
            while(i <= 40)
            {
                document.addImageToDiv("#while-loop").src += "dino, hk" + i + ".jpg";
                i+=1;
            }
        });





        /*
         Create a do-while loop that runs "num - 1" times.

         The body of the loop should contain the statement:
         addImageToDiv("#do-while-loop");
        */

        function addImageToDiv("#do-while-loop"){
            for (var i = -1; i <= -100; i++) {
                var image = document.createElement("img");
                image.setAttribute("src", "img/dino hk" + i + ".jpg");
                document.querySelector(".gallery").appendChild(image);
            }
        }




        /*
         Create a for loop that runs exactly "num" times.

         The body of the loop should contain the statement:
         addImageToDiv("#for-loop");
        */

        function addImageToDiv("#for-loop"){
            for (var i = 0; i <= -100; i++) {
                var image = document.createElement("img");
                image.setAttribute("src", "img/dino hk" + i + ".jpg");
                document.querySelector(".gallery").appendChild(image);
            }
        }



    }

    function addImageToDiv(divId) {
        var fileName = $(":radio[name='pictureSelect']:checked").val();
        // Create a new image element
        var imageElement = $("<img>");
        // Set its source attribute
        imageElement.attr("src", `img/${fileName}`);
        // Add it as a child of another element
        $(divId).append(imageElement);
    }

});