// 1. Fix the below JavaScript code so that the correct index is printed to console.log on each
// iteration.

//  ------------------    WORKING CODE -----------------------------
// (function() {
//
//  var index,
//  length = 10;
//  for (i = 0; i < 10; i++) {
//     (function(index){
//       setTimeout(function() {
//          console.log("index " + index);
//        }, i * 100);
//     })(i);
//   }
//  })();
// ------------------------------------------------------------------


// getting the for loop to work by itself

// for (var i = 1; i < 11; i++) {
//     (function(index) {
//         setTimeout(function(){
//            console.log("index trial " + index);
//          }, i * 100);
//     })(i);
// }


// 2. Modify the below JavaScript so that it is called just after the DOM has loaded. No legacy
// browser support required.


// script tag to be loaded at the bottom of the html

// <script>
// (function() {
//  document.getElementById(“test”).innerHTML = “Hello World”;
// })();
// </script>



// 3. Modify the below code so that it will only display a message if the user is using Internet
// Explorer 7

//
// <!-- [if IE]>
//
// (function() {
//   alert(“Hello World”);
// })();
//
// <![endif] -->
//

// 4. Modify the below JavaScript code so that it uses a closure to return the response.


// original
// (function() {
//   function hello(name, age) {
//     return name + ", who is " + age + " years old, says hi!");
//     }
//     console.log(hello(‘John’, 33));
// }();

// ------------ FINAL ANSWER --------------
// (function() {
//   function hello(name, age) {
//     return (name + ", who is " + age + " years old, says hi!");
//     }
//
//     var response = hello('John', '33');
//     console.log(response);
// })();



//   working trial with change
// function hello(name, age) {
//   return (name + ", who is " + age + " years old, says hi!")
// };
//
// var response = hello('John', '33');
//
// console.log(response);


//
// 5. Finish the below JavaScript by implementing a simple flow control function (flow) that
// can take the provided array of functions and process them asynchronously before
// making a final callback.


// // getting this working
// var flowControl = function() {
//
//      var array = [
//          function(callback1) {
//            console.log("first function called in " + (new Date().getTime() - timestamp) + "ms");
//            callback1();
//          },
//
//          function(callback2) {
//            console.log("second function called in " + (new Date().getTime() - timestamp) + "ms");
//            callback2();
//          },
//
//          function(callback3) {
//            console.log("third function called in " + (new Date().getTime() - timestamp) + "ms");
//            callback3();
//          }
//      ],
//
//      timestamp = new Date().getTime();
//          function flow(array, callback) {
//        }
//
//      flow(array, function() {
//        console.log("all functions finished in " + (new Date().getTime() - timestamp) + "ms");
//      });
//
//
// };
//
// console.log(flowControl);






// 6. Modify the below code so that the return value can also be returned with a callback
// function (if a callback function has been specified).

// (function() {
//
//    function isArray(array) {
//      return typeof(array) === "object" && (array instanceof Array);
//      }
//
//    var result = isArray([
//        "item1",
//        "item2",
//        "item3"
//        ]);
//
//    console.log("isArray: " + result);
// })();


// (function() {
//
//    function isArray(array) {
//      return typeof(array) === "object" && (array instanceof Array);
//      }
//
//    var result = isArray([
//        "item1",
//        "item2",
//        "item3"
//        ]);
//
//    console.log("isArray: " + result);
//    console.log(isArray);
// })();



// I need to hoist the function out of the original

// (function() {
//
//     function callBack(){
//       return typeof(array) === "object" && (array instanceof Array);
//     }
//
//      function isArray(array) {
//        return callBack
//      }
//
//      var result = isArray([
//          "item1",
//          "item2",
//          "item3"
//          ]);
//
//    console.log("isArray: " + result);
//
//    console.log(callBack);
//
// })();



// 7. Optimize the below JavaScript to minimize the number of redraws and reflows required.

// (function() {
//         var element,
//          index,
//          length,
//          content = document.getElementById(“content”),
//          data = [{
//              id: 1,
//             name: "John",
//             color: "green"
//              }, {
//              id: 2,
//             name: "Sally",
//             color: "pink"
//              }, {
//              id: 3,
//             name: "Andrew",
//             color: "blue"
//              }, {
//              id: 4,
//             name: "Katie",
//             color: "purple"
//              }],
//       for (index = 0; index < data.length; index++) {
//           element = document.createElement(“li”);
//           content.appendChild(element);
//           element.setAttribute(“id”, data[index].id);
//           element.innerHTML = “<strong>” + data[index].name + “</strong>”;
//           element.style.color = data[index].color;
//         }
// })();



// (function() {
//         var element,
//          index,
//          length,
//          content = document.getElementById("content"),
//          data = [{
//              id: 1,
//             name: "John",
//             color: "green"
//              }, {
//              id: 2,
//             name: "Sally",
//             color: "pink"
//              }, {
//              id: 3,
//             name: "Andrew",
//             color: "blue"
//              }, {
//              id: 4,
//             name: "Katie",
//             color: "purple"
//           }];
//           console.log(element, index, length, content, data);
//       for (index = 0; index < data.length; index++) {
//
//           // create a li element
//           element = document.createElement("li");
//
//           // append the elements to the content
//           content.appendChild(element);
//
//           //
//           element.setAttribute("id", data[index].id);
//
//           // make the index bold
//           element.innerHTML = "<strong>" + data[index].name + "</strong>";
//
//           // make the index coloured
//           element.style.color = data[index].color;
//         }
// })();
//


// 8. Using the below JavaScript code as a starting point, implement a chain-able DOM
// Wrapper API that operates in a similar fashion to jQuery’s API (No native prototype
// extensions).


// (function() {
// NodeList.prototype.show = function() {
// var array = Array.prototype.slice.call(this, 0);
// array.forEach(function(node) {
// node.style.display = “block”;
// });
// }
// NodeList.prototype.hide = function() {
// var array = Array.prototype.slice.call(this, 0);
// array.forEach(function(node) {
// node.style.display = “none”;
// });
// }
// document.querySelectorAll(“#test”).show();
// document.querySelectorAll(“#test”).hide();
// })();



// 9. The below JavaScript is used to handle mousemove events amongst 3 divs which are
// nested inside each other. Find and fix the problem which is causing too many events to
// get fired.

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
