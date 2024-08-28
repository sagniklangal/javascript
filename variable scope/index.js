// variable scope = Where a variable is recognized and accessible(local vs global)

// let x = 1;
// let x = 2;

// function fun1(){
//   let x = 1;
//   console.log(x);
// }
// function fun2(){
//   let x = 2;
//   console.log(x);
// }
// fun1();
// fun2();


// If there is a conflict between local and global scope variable. The local will be evaluated first 

let x = 3;

fun1();
fun2();

function fun1(){
  // let x = 1;
  x = 1;
  console.log(x);
}
function fun2(){
  // let x = 2;
  x = 2;
  console.log(x);
}

