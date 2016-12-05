document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    document.getElementById('howTall').focus();
});
console.log('Tree');

var e = document.getElementById('button').addEventListener('click', checkInput);
var f = document.getElementById('char').addEventListener('keyup', checkKeyPress);
var g = document.getElementById('howTall').addEventListener('keyup', checkKeyPress);


function checkKeyPress(event) {
    if (event.keyCode == "13") {
        checkInput();
    }
}

function checkInput() {
    var tree = {};

    var check = parseInt(document.getElementById('howTall').value);
    if (isNaN(check)) {
        alert('Try again. Use a number in the first box.');
    } else if (check > 20) {
        alert('A number between 1 and 20, please');
    } else if (check < 1) {
        alert('A number between 1 and 20, please');
    } else {
        tree.height = check;
        console.log(tree.height);
    }


    var checker = document.getElementById('char').value;
    if (checker.length < 1) {
        alert('Try again. Fill in the character to use.');
    } else if (checker.length > 1) {
        alert('Just one key entry. Any key');
    } else {
        tree.character = checker;
        console.log(tree.character);
    }
    buildTree(tree);
}

function buildTree(tree) {
    var treeHeight = tree.height;
        // console.log(treeHeight)
    var treeCharacter = tree.character;
        // console.log(treeCharacter)
    var counter = 1;
    for (var i = 0; i < treeHeight; i++) {

        console.log(' '.repeat(treeHeight - i) + treeCharacter.repeat(counter));
        counter += 2;
    }

}
