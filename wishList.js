       //var printButton = document.getElementById("printable");
        printable.addEventListener("click", printView);
        //var addButton = document.getElementById("addIt");
        addIt.addEventListener("click", addTheThing);
        var myList = [];
        var myListArea = document.getElementById("wishList");



        function addTheThing() {
            var theThing = document.getElementById("iWant");
            addToTheList(theThing);
            resetInput(theThing);
        }


        function addToTheList(thingToAdd) {
            myList.push(thingToAdd.value);
            var newListItem = document.createElement("li");
            newListItem.innerHTML = myList[myList.length - 1];
            myListArea.appendChild(newListItem);

        }

        function resetInput(inputToReset) {
            inputToReset.value = "";
        }

        function printView() {
            var listPage2 = document.getElementById("listPage");
            console.log("listPage2 " + listPage2);
            console.log("listPage " + listPage);
            var formArea = document.getElementById("formArea");
            formArea.style.display = "none";
            listPage2.className = "print";
            myListArea.innerHTML = "";
            myList.sort();
            for (var i = 0; i < myList.length; i++) {
                wishList.innerHTML += "<li>" + myList[i] +
                    "</li>";
            }
            window.print();
        }
    