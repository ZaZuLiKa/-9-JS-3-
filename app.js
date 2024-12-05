//1. დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n)
// და დააბრუნებს რომელიც მეტია იმ რიცხვს , თუ რიცხვები ტოლია დააბრუნებს 0 -ს
function Comparision(m,n){
    if(m>n){
        return m;
    } else if (m<n){
        return n;
    }
    else{
        return 0;
    }
}

console.log(Comparision(2,2));
console.log("______________________________________________________");

//2. დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ რიცხვების ჯამი
function Sum(a,b){
    return a+b;
}
console.log(Sum(1,2));
console.log("______________________________________________________");
//3. დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს ( ფუნქციას არ აქვს პარამეტრი)
function PrintNameLastName(){
    let name="Zaza",LastName="Shavardenidze";
    console.log(name,LastName)
}
PrintNameLastName();
console.log("______________________________________________________");
//4. დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname 
//დააბრუნეთ სრული სახელი და დაბეჭდეთ ( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ)
function GetFullName(name,lastname){
    let FullName=name+' '+lastname;
    return FullName;
}
console.log(GetFullName("Zaza","Shavardenidze"));
console.log("______________________________________________________");
//5. Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n) და
// ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე  (n-მდე) რიცხვების ნამრავლი
// ( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 1*2*3 -ის მნიშვნელობა, 
//დაგჭირდებათ ახალი ცვლადის გამოცხადება ფუნქციის შიგნით რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას.
// Პ.ს. გამოიყენეთ თქვენთვის სასურველი ციკლი)
function Factorial(n){
    let cnt=1;
    for(let i=1;i<=n;i++){
        cnt*=i;
    }
    return cnt;
}
console.log(Factorial(5));
console.log("______________________________________________________");

var student ={
    firstName:"Zaza",
    lastName:"Shavardenidze",
    age:29,
    scores:[4,7,5,3,2],
    FullName(){
        let StudentFullName=this.firstName.concat(' ',this.lastName);
        return StudentFullName;
    }
}
//6. დაბეჭდეთ  სტუდენტის სრული სახელი (სახელი+გვარი-  გამოიყენეთ student ობიექტის მეთოდი)
console.log(student.FullName());
console.log("______________________________________________________");
//7. Დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულებს ( scores)
// და ფუნქცია დააბრუნებს  ქულების ჯამს
function FinalScores(arr){
    let FinalScore=0;
    for(let i=0;i<arr.length;i++){
        FinalScore+=arr[i];
    }
    return FinalScore;
}
console.log(FinalScores(student.scores));
console.log("______________________________________________________");
//8. დაბეჭდეთ სტუდენტის სახელი და ასაკი
const NameAndAge = (ObjectName) => {
    let nameAge = ObjectName.FullName().concat(' ', ObjectName.age);
    return nameAge;
};
console.log(NameAndAge(student));

