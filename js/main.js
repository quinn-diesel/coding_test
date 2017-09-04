1. Fix the below JavaScript code so that the correct index is printed to console.log on each
iteration.


(function() {

 var index,
 length = 10;
 for (i = 0; i < 10; i++) {
    (function(index){
      setTimeout(function() {
         console.log("index " + index);
       }, i * 100);
    })(i);
  }
 })();



2. Modify the below JavaScript so that it is called just after the DOM has loaded. No legacy
browser support required.

Comment:
script tag to be loaded at the bottom of the html. I have also tried to chain the method together.

<script>
  (function() {
   document.onload.getElementById(“test”).innerHTML = “Hello World”;
  })();
</script>



3. Modify the below code so that it will only display a message if the user is using Internet
Explorer 7

Comment:
I've never dealth with IE7, had to look this how to do this. The comment should remain comment in the javascript file. This means other browsers don't read the text, only IE would.


<!-- [if IE]>

  (function() {
    alert(“Hello World”);
  })();

<![endif] -->


4. Modify the below JavaScript code so that it uses a closure to return the response.

Comment:
Had to remind myself what a closure what, but this should run in the console


  (function() {
    function hello(name, age) {
      return (name + ", who is " + age + " years old, says hi!");
      }

      var response = hello('John', '33');
      console.log(response);
  })();






5. Finish the below JavaScript by implementing a simple flow control function (flow) that
can take the provided array of functions and process them asynchronously before
making a final callback.

Comment:
my idea is to implement a simple if statement to trigger the correct function in the array.

var flowControl = function() {

    var callBack1 = 0;
    var callBack2 = 0;
    var callBack  = 0;

     var array = [
         function(callback1) {
           console.log("first function called in " + (new Date().getTime() - timestamp) + "ms");
           callback1();
         },

         function(callback2) {
           console.log("second function called in " + (new Date().getTime() - timestamp) + "ms");
           callback2();
         },

         function(callback3) {
           console.log("third function called in " + (new Date().getTime() - timestamp) + "ms");
           callback3();
         }
     ],

     timestamp = new Date().getTime();

     function flow(array, callback) {
       if (callback1 === 1) {
          return array[0];
         }
         else if (callback2 === 2 ) {
         return array[1];
         }
        else if (callback3 === 3){
         return array[2];
       };

     flow(array, function() {
       console.log("all functions finished in " + (new Date().getTime() - timestamp) + "ms");
     });


};

console.log(flowControl);






6. Modify the below code so that the return value can also be returned with a callback
function (if a callback function has been specified).


Commnent:
I need to hoist the function out of the original in order to induce the callback. However I was having some trouble to get the right scoping for this.

(function() {

    function callBack(){
      return typeof(array) === "object" && (array instanceof Array);
    }

     function isArray(array) {
       return callBack
     }

     var result = isArray([
         "item1",
         "item2",
         "item3"
         ]);

   console.log("isArray: " + result);

   console.log(callBack);

})();



7. Optimize the below JavaScript to minimize the number of redraws and reflows required.



Comment:
Would need to create an addClass which would add all the class at the bottom.


(function() {
        var element,
         index,
         length,
         content = document.getElementById("content"),
         data = [{
             id: 1,
            name: "John",
            color: "green"
             }, {
             id: 2,
            name: "Sally",
            color: "pink"
             }, {
             id: 3,
            name: "Andrew",
            color: "blue"
             }, {
             id: 4,
            name: "Katie",
            color: "purple"
          }];
          console.log(element, index, length, content, data);
      for (index = 0; index < data.length; index++) {

          // create a li element
          element = document.createElement("li");

          // append the elements to the content
          content.appendChild(document.createElement('li'));

          //
          element.setAttribute("id", data[index].id);

          // make the index bold
          element.innerHTML = "<strong>" + data[index].name + "</strong>";

          // make the index coloured
          element.style.color = data[index].color;
        }
})();
//


8. Using the below JavaScript code as a starting point, implement a chain-able DOM
Wrapper API that operates in a similar fashion to jQuery’s API (No native prototype
extensions).

Comment:
I am geussing here. My idea would be to toggle between the show and hide function with something like jquery.

Original Code

(function() {
  NodeList.prototype.show = function() {
    var array = Array.prototype.slice.call(this, 0);
    array.forEach(function(node) {
      node.style.display = "block";
    });
  }
  NodeList.prototype.hide = function() {
    var array = Array.prototype.slice.call(this, 0);
    array.forEach(function(node) {
      node.style.display = "none";
    });
  }
  document.querySelectorAll("#test").show();
  document.querySelectorAll("#test").hide();
})();


$('#test').('toggle', function (){
  var array = $(this, 0).slice.each(function(node){
    node.style.display = "block";
  }),
  var array = $(this, 0 ).slice.each(function(node){
    node.style.display = "none";
  })
});




9. The below JavaScript is used to handle mousemove events amongst 3 divs which are
nested inside each other. Find and fix the problem which is causing too many events to
get fired.

Comment:
It need to make sure that only the div that was clicked rendered the console log. Need to ingore the rest of the code firing.
Use the if statement to render all the event or return to get out of the event beign called
I would reach out for help to get this to work at this point.

(function() {

    var boxes = [
    document.getElementById("box1"),
    document.getElementById("box2"),
    document.getElementById("box3")
     ];


    boxes[0].addEventListener("mousemove", function (event){
      console.log("Box 1");
    });
    boxes[1].addEventListener("mousemove", function(event) {
      console.log("Box 2");
    });
    boxes[2].addEventListener("mousemove", function(event) {
      console.log("Box 3");
    });

})();
