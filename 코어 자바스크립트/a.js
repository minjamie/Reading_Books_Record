var fruits = ["apple", "banna"];
var $ul = document.createElement("ul");

fruits.forEach(function (fruit) {
  var $li = document.createElement("li");
  $li.innerText = fruit;
  $li.addEventListener("click", function () {
    alert("your choice is " + fruit);
  });
  $ul.appendChild($li);
});

document.body.appendChild($ul);
