// Prove that JavaScript is working in your browser. You may delete this.
const name = window.prompt('Gimme your name');
const duration = window.prompt('Give the duration in minutes you want to convert');
document.write('Hello\n' + name + ',\nYour input was\n' + duration + '\nminutes\n');
const hours = ~~(duration / 60);
const minutes = duration % 60;
document.write('Output:\n' + hours + '\nhours and\n' + minutes + '\nminutes');

