use std::io;
use rand::Rng;
fn main(){
let mut input = String::new();
io::stdin().read_line(&mut input).expect("Failed to read line");
let x: i32 = input.trim().parse().expect("Invalid input");
let mut input = String::new();
io::stdin().read_line(&mut input).expect("Failed to read line");
let y: i32 = input.trim().parse().expect("Invalid input");
let r = rand::thread_rng().gen_range(x..=y);
println!("Random Number generated between {} and {} is = {}",x,y,r);
}