/**
 * *# Modules

In this exercise, you will refactor some code that manages student enrollment records for a workshop, to use the module pattern.

## Instructions

1. Wrap all of the functions in a module factory (ie, function named `defineWorkshop()`). This function should make a return a public API object.

2. The returned public API object should include the following methods:

	- `addStudent(id,name,paid)`
	- `enrollStudent(id)`
	- `printCurrentEnrollment()`
	- `enrollPaidStudents()`
	- `remindUnpaidStudents()`,

3. Move the `currentEnrollment` and `studentRecords` arrays inside the module definition, but as empty arrays.

4. Create an instance of this module by calling `defineWorkshop()`, and name it `deepJS`.

5. Define all the student records by calling `deepJS.addStudent(..)` for each.

6. Define the student enrollments by calling `deepJS.enrollStudent(..)` for each.

7. Change the execution code (the console output steps) to references to `deepJS.*` public API methods.

 */

 function defineWorkshop(){

    var currentEnrollment = [];
    var studentRecords =[];
    var publicAPI={addStudent,enrollStudent,printCurrentEnrollment,enrollPaidStudents,remindUnpaidStudents};
    return publicAPI;

    function addStudent(id,name,paid){
        studentRecords.push({id,name,paid});
    }

    function enrollStudent(id){
        if(!currentEnrollment.includes(id)){
            currentEnrollment.push(id);
        }
    }

    function printCurrentEnrollment(){
        printRecords(currentEnrollment);
    }

    function getStudentFromId(studentId) {
        return studentRecords.find(matchId);
    
        // *************************
    
        function matchId(record) {
            return (record.id == studentId);
        }
    }

    function sortByNameAsc(record1,record2){
        if (record1.name < record2.name) return -1;
        else if (record1.name > record2.name) return 1;
        else return 0;
    }

    function printRecord(record) {
        console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
    }

    
    function enrollPaidStudents(){
        currentEnrollment = paidStudentsToEnroll();
    }

    function remindUnpaidStudents(){
        remindUnpaid(currentEnrollment);
    }

    function paidStudentsToEnroll() {
        var recordsToEnroll = studentRecords.filter(needToEnroll);
        var idsToEnroll = recordsToEnroll.map(getStudentId);
        return [ ...currentEnrollment, ...idsToEnroll ];
    }
    
    function needToEnroll(record) {
        return (record.paid && !currentEnrollment.includes(record.id));
    }
    
    function getStudentId(record) {
        return record.id;
    }


    function remindUnpaid(recordIds) {
        var unpaidIds = recordIds.filter(notYetPaid);

        printRecords(unpaidIds);
    }

    function notYetPaid(studentId) {
        var record = getStudentFromId(studentId);
        return !record.paid;
    }

	function printRecords(recordIds) {
		var records = recordIds.map(getStudentFromId);

		records.sort(sortByNameAsc);

		records.forEach(printRecord);
	}
 }

 var currentEnrollment = [ 410, 105, 664, 375 ];

var studentRecords = [
	{ id: 313, name: "Frank", paid: true, },
	{ id: 410, name: "Suzy", paid: true, },
	{ id: 709, name: "Brian", paid: false, },
	{ id: 105, name: "Henry", paid: false, },
	{ id: 502, name: "Mary", paid: true, },
	{ id: 664, name: "Bob", paid: false, },
	{ id: 250, name: "Peter", paid: true, },
	{ id: 375, name: "Sarah", paid: true, },
	{ id: 867, name: "Greg", paid: false, },
];


var deepJS = defineWorkshop();

studentRecords.forEach(record=>deepJS.addStudent(record.id,record.name,record.paid));
currentEnrollment.forEach(deepJS.enrollStudent);

deepJS.printCurrentEnrollment();
console.log("----");
deepJS.enrollPaidStudents();
deepJS.printCurrentEnrollment();
console.log("----");
deepJS.remindUnpaidStudents();
/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
