# react-table-simple

![](example/screenshot.png)

## Installation

`npm install react-table-simple --save`

## Usage

```javascript
var React = require('react');
var table-view = require('react-table-simple');

// delay option is the delay on showing the update of the table-view, it does not effect the table-view clock.
var DATA = [ 
  { id: 0, make: 'Honda', model: 'NSX', year: '1997'},
  { id: 1, make: 'Toyota', model: 'Supra', year: '1996'},
  { id: 2, make: 'Nissan', model: '300ZX', year: '1998'}
]

React.render(
    React.createElement(
        TableView, 
        {data: DATA}
    ),
    document.getElementById("container")
);

```

## Styles

All React UI components are made to be compatible with [pure CSS](http://purecss.io/) which gives some nice responsive styles. 

The components can also be used with your own custom style sheets. A minimal table-view.css style sheet is included as a guide.

## Development

Initial set up, run:
    
    npm install

For watch on files, live reload, JSX transpiling and browserify, run:

    gulp

## License

(The MIT License)
