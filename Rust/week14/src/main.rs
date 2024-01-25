use std::io;
use rand::Rng;
fn main() {
let secret_number = rand::thread_rng().gen_range(1..101);
println!("Guess the secret number between 1 and 100");
loop {
let mut guess = String::new();
io::stdin().read_line(&mut guess).expect("Failed to read line");
let guess: i32 = match guess.trim().parse() {
Ok(num) => num,
Err(_) => continue,
};
if guess == secret_number {
println!("Congratula2ons, you guessed right!");
break;
} else if guess < secret_number {
println!("Too low! Try again.");
} else {
println!("Too high! Try again.");
}
}
}