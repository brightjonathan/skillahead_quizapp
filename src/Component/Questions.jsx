export const questions = [
    {
      id: 1,
      questionText: 'What does HTML stand for?',
      options: [
        'HTML stands for Hyperup Marktext Language',
        'HTML stands for HyperText Markup Language',
        'HTML stands for Hyper Markting Language tool',
      ],
      correctAnswer: 'HTML stands for HyperText Markup Language',
      timer: 120, // Timer in seconds
    },
    {
      id: 2,
      questionText: 'What is the basic structure of an HTML document?', 
      options: [
          'An HTML document typically starts with <!DOCTYPE html>, followed by <html>, <head>, and <body> elements.', 
          'An HTML document typically starts with <html>, followed by <html>, <head>, and <body> elements.', 
          'An HTML document typically starts with <h1>, followed by <p>, <div>, and <body> elements.', ],
      correctAnswer: 'An HTML document typically starts with <!DOCTYPE html>, followed by <html>, <head>, and <body> elements.',
      timer: 120, // Timer in seconds
    },
    {
      id: 3,
      questionText: 'How do you create a hyperlink in HTML?',
      options: [
        'You can create a hyperlink using the <a> element, like this: <Link to="https://example.com">Visit Example</Link>.',
        'You can create a hyperlink using the <a> element, like this: <href="https://example.com"Visit Example /a>.',
        'You can create a hyperlink using the <a> element, like this: <a href="https://example.com">Visit Example</a>.',
      ],
      correctAnswer: 'You can create a hyperlink using the <a> element, like this: <a href="https://example.com">Visit Example</a>.',
      timer: 120, // Timer in seconds
    },
    {
      id: 4,
      questionText: 'What does the HTML <br> element do?',
      options: [
        'The <br> element is used to insert a line cut within text.',
        'The <br> element is used to insert a line break within text.',
        'The <br> element is used to insert nothing within text.',
      ],
      correctAnswer: 'The <br> element is used to insert a line break within text.',
      timer: 120, // Timer in seconds
    },
    {
      id: 5,
      questionText: 'Explain the difference between <ol> and <ul> in HTML.',
      options: [
        '<ol> is used for ordered (numbered) lists, while <ul> is used for unordered (bulleted) lists.',
        '<ol> is used for ordered (letter) lists, while <ul> is used for unordered (slashes) lists.',
        '<ol> is used for ordered (Ruman number) lists, while <ul> is used for unordered (ashes) lists.',
      ],
      correctAnswer: '<ol> is used for ordered (numbered) lists, while <ul> is used for unordered (bulleted) lists.',
      timer: 120, // Timer in seconds
    },
    {
      id: 6,
      questionText: 'How do you add comments in HTML?',
      options: [
        'You can add comments in HTML using the <*** This is a comment ***> syntax.',
        'You can add comments in HTML using the // This is a comment syntax.',
        'You can add comments in HTML using the <!-- This is a comment --> syntax.',
      ],
      correctAnswer: 'You can add comments in HTML using the <!-- This is a comment --> syntax.',
      timer: 120, // Timer in seconds
    },
    {
        id: 7,
        questionText: 'What is the purpose of the <div> element in HTML?',
        options: [
          'The <div> element is a block-low container used for styling other ',
          'The <div> element is a inline-level container used for grouping only ',
          'The <div> element is a block-level container used for grouping and styling other ',
        ],
        correctAnswer: 'The <div> element is a block-level container used for grouping and styling other ',
        timer: 120, // Timer in seconds
      },
      {
        id: 8,
        questionText: 'How can you add a line of horizontal rule in HTML?',
        options: [
          'You can add a horizontal rule using the <hr> element.',
          'You can add a horizontal rule using the <br> element.',
          'You can add a horizontal rule using the <span> element.',
        ],
        correctAnswer: 'You can add a horizontal rule using the <hr> element.',
        timer: 120, // Timer in seconds
      },
      {
        id: 9,
        questionText: 'What does CSS stand for?',
        options: [
          'CSS stands for Cascading Style Shirts.',
          'CSS stands for Cascading Strings Sheets.',
          'CSS stands for Cascading Style Sheets.',
        ],
        correctAnswer: 'CSS stands for Cascading Style Sheets.',
        timer: 120, // Timer in seconds
      },
      {
        id: 120,
        questionText: 'What does HTML stand for?',
        options: [
          'HTML stands for Hyperup Marktext Language',
          'HTML stands for HyperText Markup Language',
          'HTML stands for Hyper Markting Language tool',
        ],
        correctAnswer: 'HTML stands for HyperText Markup Language',
        timer: 120, // Timer in seconds
      },
      {
        id: 11,
        questionText: 'How do you include an external CSS file in an HTML document?',
        options: [
          '<script src"style.css"></Script>',
          '<link rel="stylesheet" type="text/css" href="styles.css">',
          '<script src"style.js"></Script>',
        ],
        correctAnswer: '<link rel="stylesheet" type="text/css" href="styles.css">',
        timer: 120, // Timer in seconds
      },
      {
        id: 12,
        questionText: 'What is the purpose of CSS selectors?',
        options: [
          'CSS selectors are used to select and style HTML.',
          'CSS selectors are used to select and style JS elements on a web page.',
          'CSS selectors are used to select and style HTML elements on a web page.',
        ],
        correctAnswer: 'CSS selectors are used to select and style HTML elements on a web page.',
        timer: 120, // Timer in seconds
      },
      {
        id: 13,
        questionText: 'How do you center an element horizontally in CSS?',
        options: [
          'You can center an element horizontally using margin: 0 auto; on the element with a specified width.',
          'You can center an element horizontally using padding',
          'You can center an element horizontally using border ',
        ],
        correctAnswer: 'You can center an element horizontally using margin: 0 auto; on the element with a specified width.',
        timer: 120, // Timer in seconds
      },
      {
        id: 14,
        questionText: 'How do you create a CSS class that applies styles to elements with a specific class name in HTML?',
        options: [
          'You can define a CSS class using a period (.) followed by the class name, like this: .my-class {}. Then, you can apply this class to HTML elements using the class attribute, such as <div class="my-class">.',
          'You can define a CSS class using a period (#) followed by the class name, like this: #my-class {}. Then, you can apply this class to HTML elements using the class attribute, such as <div id="my-class">.',
          'You can define a CSS class using a tag followed by the tag name, like this: div {}. Then, you can apply this class to HTML elements using the class attribute, such as <div>.',
        ],
        correctAnswer: 'You can define a CSS class using a period (.) followed by the class name, like this: .my-class {}. Then, you can apply this class to HTML elements using the class attribute, such as <div class="my-class">.',
        timer: 120, // Timer in seconds
      },
      {
        id: 15,
        questionText: 'What is JavaScript?',
        options: [
          'JavaScript is a programming language that is used to make web pages interactive. It can be thought of as the language of the web.',
          'JavaScript is not a programming language that is used to make web pages interactive. It cannot be thought of as the language of the web.',
          'JavaScript is a programming language that cannot interact with web pages.',
        ],
        correctAnswer: 'JavaScript is a programming language that is used to make web pages interactive. It can be thought of as the language of the web.',
        timer: 120, // Timer in seconds
      },
      {
        id: 16,
        questionText: 'How do you write a comment in JavaScript?',
        options: [
          'You can write a comment in JavaScript using two slashes like this: // This is a comment.',
          'You can write a comment in JavaScript using two slashes like this: <// This is a comment //>',
          'You can write a comment in JavaScript using two slashes like this: <** This is a comment **>',
        ],
        correctAnswer: 'You can write a comment in JavaScript using two slashes like this: // This is a comment.',
        timer: 120, // Timer in seconds
      },
      {
        id: 17,
        questionText: 'What is a variable in JavaScript?',
        options: [
          ' A variable in JavaScript is a container that holds data, like numbers or text.',
          ' A variable in JavaScript are not container that holds data',
          ' A variable in JavaScript is a text that holds data, like numbers or text.',
        ],
        correctAnswer: ' A variable in JavaScript is a container that holds data, like numbers or text.',
        timer: 120, // Timer in seconds
      },
      {
        id: 18,
        questionText: 'How do you declare a variable in JavaScript?',
        options: [
          ' You can declare a variable using the var, let, or const keyword followed by the variable name, like var myVariable',
          ' You can declare a variable using the ool, let, or const keyword followed by the variable name, like var myVariable;.',
          'Nothing at all',
        ],
        correctAnswer: ' You can declare a variable using the var, let, or const keyword followed by the variable name, like var myVariable;.',
        timer: 120, // Timer in seconds
      },
      {
        id: 19,
        questionText: 'What is an alert box in JavaScript?',
        options: [
          'An alert box is a pop-up window that displays a message to the user. You can create one using alert("Your message here");',
          'An alert box is a pop-up window that displays a message to the user. You can create one using prompt("Your message here");',
          'An alert box is a pop-up window that displays a message to the user. You can create one using pop("Your message here");',
        ],
        correctAnswer: 'An alert box is a pop-up window that displays a message to the user. You can create one using alert("Your message here");',
        timer: 120, // Timer in seconds
      },
      {
        id: 20,
        questionText: 'How do you write "Hello, World!" in JavaScript?',
        options: [
          'You can display "Hello, World!" in JavaScript using alert("Hello, World!"); or by writing it to the HTML page',
          'You can display "Hello, World!" in JavaScript using innerhtml("Hello, World!"); or by writing it to the HTML page',
          'non of the above',
        ],
        correctAnswer: 'You can display "Hello, World!" in JavaScript using alert("Hello, World!"); or by writing it to the HTML page',
        timer: 120, // Timer in seconds
      },
      {
        id: 21,
        questionText: 'How do you write an if statement in JavaScript?',
        options: [
          'if () {}',
          'else () {}',
          'nothing () {}',
        ],
        correctAnswer: 'if () {}',
        timer: 120, // Timer in seconds
      },
      {
        id: 22,
        questionText: 'What is a loop in JavaScript?',
        options: [
          ' A loop is a construct that allows you to repeatedly execute a block of code. Two common types are for and while loops',
          'HTML stands for HyperText Markup Language',
          'CSS stands for Hyper Markting Language tool',
        ],
        correctAnswer: ' A loop is a construct that allows you to repeatedly execute a block of code. Two common types are for and while loops',
        timer: 120, // Timer in seconds
      },
      {
        id: 23,
        questionText: 'What is an array in JavaScript?',
        options: [
          'An array is a data structure that can hold multiple values in a single variable. Values in an array are indexed starting from 0.',
          'An array is nothing.',
          'HTML stands for Hyper Markting Language tool',
        ],
        correctAnswer: 'An array is a data structure that can hold multiple values in a single variable. Values in an array are indexed starting from 0.',
        timer: 120, // Timer in seconds
      },
      {
        id: 24,
        questionText: 'How do you add two numbers in JavaScript?',
        options: [
          'You can add two numbers in JavaScript using the - operator, like let sum = num1 - num2;.',
          'You can add two numbers in JavaScript using the * operator, like let sum = num1 * num2;.',
          'You can add two numbers in JavaScript using the + operator, like let sum = num1 + num2;',
        ],
        correctAnswer: 'You can add two numbers in JavaScript using the + operator, like let sum = num1 + num2;',
        timer: 120, // Timer in seconds
      },
      {
        id: 25,
        questionText: 'What is React?',
        options: [
          'React is a JavaScript library used for building user interfaces on websites and web applications.',
          'React is a JavaScript library used for building user interfaces on mobile ',
          'React is a JavaScript library used for building user interfaces on games',
        ],
        correctAnswer: 'React is a JavaScript library used for building user interfaces on websites and web applications.',
        timer: 120, // Timer in seconds
      },
      {
        id: 26,
        questionText: 'Who created React?',
        options: [
          'React was created by Facebook.',
          'React was created by Amazon',
          'React was created by Google',
        ],
        correctAnswer: 'React was created by Facebook.',
        timer: 120, // Timer in seconds
      },
      
    // Add more questions here
  ];