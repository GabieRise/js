//write a program to calculate the score of a student
function TotalScore(grade){
    if(grade >= 75 && grade <100){
        result = "A"
    }
    else if(grade >= 65 && grade <75 ){
        result = "B"
    }
    else if(grade >= 55 && grade <65 ){
        result = "C"
    }
    else if(grade >= 45 && grade <55 ){
        result = "D"
    }
    else if(grade >= 40 && grade <45 ){
        result = "E"
    }
    else if(grade >= 0 && grade <40 ){
        result = "F"
    }
    else{
        result = "invalid  score"
    }
    console.log(result)
}
function score(CA1, CA2, exam){
    if(CA1, CA2 >= 0 && CA1, CA2 <=20){
        return CA1+CA2+exam
    }
    else if(exam >= 20 && exam <= 100){
        return CA1+CA2+exam
    }
    else{
        console.log("invalid score")
    }
    
}
TotalScore(score(10, 15, 40))
TotalScore(score(-3,-7,-8))