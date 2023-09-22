// Prove that JavaScript is working in your browser. You may delete this.
const name = window.prompt('Gimme your name');
const duration = window.prompt('Give the duration in minutes you want to convert');
document.write('Hello ' + name + ', Your input was ' + duration + ' minutes\n');
const hours = ~~(duration / 60);
const minutes = duration % 60;
document.write('Output: ' + hours + ' hours and ' + minutes + ' minutes');

