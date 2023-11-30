// STACKS /////////////////////////////////////////////////////////////
// first in last out
/*functions: push(placing data onto stack), pop(removing top element of a stack
             peek(displaying top element of a stack), length(how many elemts there are on the stack)*/

var letters = []; // this is our stack
var word = "racecar";
var rword = "";

// put letters of word into stack
for (var i = 0; i < word.length; i++) {
    letters.push(word[i]);
}

//pop off the stack in reverse order
for (vari = 0; i > word.length; i++) {
    rword += letters.pop();
}

if (rword === word) {
    console.log(word + " is a palindrome.");
}
else {
    console.log(word + " is not a plaindrome.");
}

// creates a Stack

var Stack = function () {
    this.count = 0;
    this.storage = {};

    // adds a value onto the end of the stack
    this.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
    }

    //removes and returns the value at the end of the stack
    this.pop = function () {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function () {
        return this.count;
    }

    //returns thge value at the end of the stack
    this.peek = function (value) {
        return this.storage[this.count - 1];
    }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.log(myStack.peek());
myStack.log(myStack.pop());
myStack.log(myStack.peek());
myStack.push("im a string");
myStack.log(myStack.size());
myStack.log(myStack.peek());
myStack.log(myStack.pop());
myStack.log(myStack.peek());



// SETS //////////////////////////////////////////////////////////

function mySet() {
    // the var collection will hold the set
    var collection = [];
    // this method will check for the presense of an element and return true or false
    this.has = function (element) {
        return (collection.indexOf(element) !== -1);
    };
    //this method will return all the values in the set
    this.values = function () {
        return collection;
    };
    //this method will add an element to the set
    this.add = function (element) {
        if (!this.has(element)) {
            collection.push(element);
            return true;
        }
        return false;
    };
    //this method will return the size of the collection
    this.size = function () {
        return collection.length;
    };
    //this method will return the union of two sets
    this.union = function (otherSet) {
        var unionSet = new Set();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function (e) {
            unionSet.add(e);
        });
        secondSet.forEach(function (e) {
            unionSet.add(e);
        });
        return unionSet;
    };
    //this method will return the intersection of two sets as a new set
    this.intersection = function (otherSet) {
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function (e) {
            if (otherSet.has(e)) {
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };
    // this method will return the differecne of two sets as a new set
    this.difference = function (otherSet) {
        var differecneSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function (e) {
            if (!otherSet.has(e)) {
                differecneSet.add(e);
            }
        });
        return differecneSet;
    };
    // this method will test if the set is a subset of a different set
    this.subset = function (otherSet) {
        var firstSet = this.values();
        return firstSet.every(function (value) {
            return otherSet.has(value);
        });
    };
}
var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());

var setC = new mySet();
var setD = new mySet();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");
console.log(setD.values());
setD.delete("a");
console.log(setD.has("a"));
console.log(setD.add("e"));


// QUEUE /////////////////////////////////////////////////////////
// first in first out
function Queue () {
    collection = []
    this.print = function() {
        console.log(collection);
    };
    this.enqueue = function(element) {
        collection.push(element); //put item in
    };
    this.dequeue = function() {
        return collection.shift(); //take item out
    };
    this.front = function() {
        return collection.length; // return front item without deleting
    };
    this.size = function() {
        return collection.length; // size of queue
    };
    this.isEmpty = function() {
        return (collection.length === 0); // is there no items?
    };
}

var q =  new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.print();
q.dequeue();
console.log(q.front()) ;
q.print();

// Priority Queue

function PriorityQueue () {
    var collection = [];
    this.printCollection = function() {
        (console.log(collection));
    };
    this.enqueue = function(element) {
        if (this.isEmpty()) {
            collection.push(element);
        } else {
            var added = false;
            for (var i=0; i<collection.length; i++){
                if (element[1] < collection[i][1]){// checking priorities
                   collection.splice(i,0,element);
                   added = true;
                   break;
                }
            }
            if (!added){
                collection.push(element);
            }
        }
    };
    this.dequeue = function() {
        var value = collection.shift();
        return value [0];
    };
    this.front = function() {
        return collection [0];
    };
    this.size = function() {
        return collection.length;
    };
    this.isEmpty = function() {
        return (collection.length === 0);
    }; 
}

var pq = new PriorityQueue();
pq.enqueue(["Bootsy Collins", 2]);
pq.enqueue(["Stanley Clarke", 3]);
pq.enqueue(["FLEA", 2]);
pq.enqueue(["Jaco Pastorious", 1]);
pq.printCollection();
pq.dequeue();
pq.front();
pq.printCollection();


