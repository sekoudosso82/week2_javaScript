// JavaScript Data Types
        // An object is a collection of key/value pairs
            true 

        // 2  A String can be made using either the single or double quotes characters.
            TRUE

        // 3 How many elements does the following array have
            [1,2,'3'] //  => 3
 
// JavaScript Variables

        // What is the final result of a, given the following:
        var a = 'Jonny';    
        a = 'Billy';
        var b = 'Susan';    
        a = b;
            undefined
            Susan // true
            Billy
            Jonny

        // 2 You can chose any name that you want for a variable.
            FALSE
        // 3 A variable name can have any amount of numbers in 
        // it as long as it starts with a letter, underscore (_), or dollar sign ($)
            TRUE

        // 4 What is the name of the process to associate a value with a variable name?

            association
            identification
            declaration
            assignment // true 


// JavaScript Operators

        // What is the result of s, given the following:
            var num = 14;  
            var s = 'Hello';  
            s = s + num + 23;
                Hello
                Hello1423 // true
                Hello 37
                snum23

        2 What is the result of s, given the following:
            var s = 'Good ';  
            var t = 'Morning';  
            s = s + t;  
            s *= 2;

                Good Morning
                Good Morning Good Morning
                NaN // true 
                Good


        3 Which operator is associated with addition?

            + // true 
            -
            *
            "/"


        4 What is the value of a, given the following
        var a = 6 % 4;

            2 // true 
            6
            4
            FALSE 

    // JavaScript Comments and the Console  

        // /* ... */ denotes a comment that can be used only on one line.
            FALSE

        // 2 The following is an example of a multi-line comment
            /* This is a multi-line comment */

            TRUE

// JavaScript Introduction 

        // JavaScript is a server-side language like C#.
            FALSE

        // 2 You need special developer tools to run JavaScript code.
            FALSE

        // 3 JavaScript statements end with a period.
            FALSE
        // 4 If you write JavaScript code in an external file, 
        // you need to use the < import > tag to link it to your HTML code.

            FALSE

// JavaScript Conditional Statements  

        // == compares value and === compares value and type
            TRUE

        // 2 An else-if statement MUST follow immediately after an else-statement
            FALSE

        // 3 What is the result of this comparison
        "25" === "(5 * 5)"
            FALSE

        // 4 What is the final value of result after, given the following:
        var bool = false; var result; if (bool = true) {result = 1;} else { result = 2;}
            2
            1 // true 

// Boolean Logic  

        // In boolean logic, if A and B represent inputs and 
        // if A is true and B is false, what is the value of A AND B?
            FALSE

        // 2 In boolean logic, if A and B represent inputs and 
        // if A is false and B is false, what is the value of A OR B?
            FALSE

        // 3 In boolean logic, if A and B represent inputs and 
        // if A is true and B is false, what is the value of A OR B?
            TRUE

        // 4 In boolean logic, if A and B represent inputs and 
        // if A is true and B is true, what is the value of A OR B?
            TRUE

        // 5 In boolean logic, if A and B represent inputs and 
        // if A is true and B is true, what is the value of A XOR B?
            FALSE

        // 6 In boolean logic, if A and B represent inputs and 
        // if A is true and b is true, what is the value of A XNOR B?
            TRUE

        // 7 In boolean logic, if A and B represent inputs and 
        // if A is true and B is true, what is the value of A XAND B?
            TRUE

        // 8 In boolean logic, if A and B represent inputs and 
        // if A is false and B is true, what is the value of A XAND B?
            FALSE 

// JavaScript Loops  

        // What is the result of num, given the following:
        var num = 5;    
        for (i = 1; i <=5; i++){  
            num+=i;  
        }
            20 // true 
            5
            11
            15

        // 2 To specify a for-loop you need to use the keyword while.
            FALSE

        // 3 What is the value of b, given the following
        var b = 1000; for (b = 1; b < 10; b++){ }
            9
            1,000
            1
            10 // true 

// JavaScript Functions 

        // Given the following, what is the result of b at line 6.
            1.  var b = 6;  
            2.  function add(num) {  
            3.  var b = 8;  
            4.   return b;  
            5.  }  
            6.  b = add(2);

                undefined
                6
                8 // true 
                2

        // 2 Given the following, how do you "call" the function?
        function test(){ return 'Hello'; }
            function test()
            test[]
            test
            test()  // true 

        // 3 Given the following, what is the final value of a?
        function add(b, c) { return a + b; } var a = 1; var b = 3; var c = add(a, b);
            undefine
            4
            3
            1 // true 

// JavaScript Objects 
        // A function that is a property of an object is called a method.
            TRUE

        // 2 Given the following, how would we invoke the method named "talk"?
            var person = {   
                name: 'Michelle',    
                talk: function() {     
                    return 'Hello, my name is Michelle';   
                }  
            };

                talk()
                person.talk() // true 
                talk[]
                person['talk']

        // 3 An event listener is an object registered with a particular event.
            TRUE


// JavaScript Object Notation 

        // JSON stands for

            Java Object Notes
            Java Objective Notation
            JavaScript Object Notation  // true 
            JavaScript Objective Notation


        // 2 Given the following, what is the result of val? 
        // var person = { "name" : "Lane Brian", "age" : 26 } var val = person.name;
            26
            Lane Brian // true 
            person.name
            person

        // 3 What is the value of result, given the following:
        var json = { opt1: 'A', opt2: 'B', opt3: 'C' }; 
        var result = JSON.parse(json).opt1;

            json
            C
            B
            A // true 

// JavaScript Event Handling  

    // The change event occurs when a user chooses an option from a drop-down menu
        FALSE
        TRUE // true 

    // 2 Which event corresponds to a user's mouse click?
        keydown
        mouseover
        mouseclick
        click // true 

// The DOM 

        // In a typical HTML document, < head > element is the root of all other elements
            FALSE

        // 2 The DOM is a programming interface that allows 
        // you to retrieve and manipulate elements of a webpage
            TRUE

        // 3 Each element of the DOM is referred to as a node
            TRUE 
            
// JavaScript Event Propogation  

        // Capturing is the propagation of events down the DOM to the target
            TRUE
        
        // 2 Given the following, is the code capturing or bubbling 
        // elem.addEventListener('click', myFunc, false);

            capturing
            bubbling // true 

// JavaScript DOM Manipulation  

// getElementsByClassName returns an array-like object.
// It can be used to retrieve all elements which have the provided class names
    TRUE

// 2 Which method is best to use if you want to grab a unique element 
// with the following attributes set:
name="username", id="special"
    setAttribute()
    getElementsByTagName()
    getElementById() // true
    getElementsByClassName()

// 3 Which method do you call to retrieve all elements with a class of "bold"?
    setAttribute()
    getElementsByTagName()
    getElementById()
    getElementsByClassName() // true 










