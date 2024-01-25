
use std::io;
fn main() {
println!("Week-9 (A)");
println!("Hello, World!\n");
println!("Week-9 (B)");
week9b();
println!("\nWeek-9 (C)");
week9c();
println!("\nWeek-9 (D)");
println!("Enter any 2 numbers: ");
let mut input = String::new();
io::stdin()
.read_line(&mut input)
.expect("Failed to read line");
let a: i32 = input.trim().parse().expect("Invalid input");
let mut input = String::new();
io::stdin()
.read_line(&mut input)
.expect("Failed to read line");
let b: i32 = input.trim().parse().expect("Invalid input");
week9d(a, b);
println!("\nWeek-9 (E)");
week9e(a, b);
println!("\nWeek-9 (F)");
week9f(a, b);
}
fn week9b() {
let i: i32 = 42;
let f: f64 = 3.14;
let c: char = '?';
let b: bool = true;
let gre: &str = "Hello, Rust!";
println!("Integer: {}", i);

println!("Floa2ng Point: {}", f);
println!("Character: {}", c);
println!("Boolean: {}", b);
println!("String: {}", gre);
}
fn week9c() {
let name = "Harish";
let age = 20;
println!("My name is {} and I am {} years old.", name, age);
println!("Forma`ed Age: {:05}", age);
println!("Forma`ed PI: {:.2}", 3.14159);
}
fn week9d(x: i32, y: i32) {
println!("Sum: {}", x + y);
println!("Difference: {}", x - y);
println!("Product: {}", x * y);
println!("Quo2ent: {}", x / y);
println!("Remainder: {}", x % y);
}
fn week9e(a: i32, b: i32) {
println!("Bitwise AND: {}", a & b);
println!("Bitwise OR: {}", a | b);
println!("Bitwise XOR: {}", a ^ b);
println!("Logical AND: {}", a > 0 && b > 0);
println!("Logical OR: {}", a > 0 || b > 0);
println!("Logical NOT: {}", !(a > 0));
}
fn week9f(mut x: i32, mut y: i32) {
println!("Before Swapping, x = {}, y = {}", x, y);
x = x + y;
y = x - y;
x = x - y;
println!("Aper Swapping, x = {}, y = {}", x, y);
}
