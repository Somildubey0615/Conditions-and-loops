function gradeStudent(marks) {
    if (marks > 90) {
        return 'A';
    } else if (marks >= 70 && marks <= 90) {
        return 'B';
    } else if (marks >= 50 && marks < 70) {
        return 'C';
    } else {
        return 'F';
    }
}

result = gradeStudent(55)
console.log(result);