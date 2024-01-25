
fn fun1(s: String){
    println!("This '{}'value is passed from Main Func2on\n",s);
    }
    fn fun2(t: i64) -> i64{
    t*t*t
    }
    fn main() {
    println!("Assigning Values to Variables");
    let x = 5;
    let y = x;
    println!("Assigned Values are: x = {}, y = {}\n",x,y);
    println!("Passing Values to Func2ons");
    let i = String::from("Harish");
    fun1(i);
    println!("Returning Values from Func2ons");
    let z = fun2(x);
    println!("The returned Value from Func2on is = {}",z);
    }