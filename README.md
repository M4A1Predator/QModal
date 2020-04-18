# QModal
A snippet of code to display Bootstrap Modal Sequenctialy

# Dependcy
- Bootstrap
- Jquery
# Usage
```html
<script src="main.min.js"></script>
```
```js
var q = new QModal([
  {
    selector: '#exampleModal',
    keyboard: false,
    backdrop: 'static'
  }, 
  {
    selector: '#exampleModal2',
    keyboard: false,
    backdrop: 'static'
  },
  {
    selector: '#exampleModal3',
    keyboard: false,
    backdrop: 'static'
  }
])
q.start()

// To break sequence
q.isBreak = true
```
check demo file index.html
