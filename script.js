/** @format */

let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    //This is for console.log
    arr.map(function(student){
      if( student.marks > 50 ){
        console.log(student);
      }
    });
  }
  
  function PrintStudentsbyForEach() {
    //This is for console.log
    arr.forEach(function(student){
      if(student.marks > 50 ){
        console.log(student)
      }
    });
  }
  
  function addData() {
    //This is for console.log
    let newStudent = {id:4, name:"megha", age:"25" , marks:46};
    arr.push(newStudent);
    console.log(arr);
  }
  
  function removeFailedStudent() {
    //This is for console.log
   let failed_Students = arr.filter((student) => student.marks < 50)
   console.log(failed_Students);
  }
  
  function concatenateArray() {
    //This is for just console.log
    let new_Arr = [
      { id: 4, name: "Aman", age: "28", marks: 92 },
      { id: 5, name: "Rohan", age: "18", marks: 56 },
      { id: 6, name: "Mohit", age: "18", marks: 58 },
    ];
  
    let concatenatedArr = arr.concat(new_Arr);
    console.log(concatenatedArr);
  }