let counter = 0;

outer: while (true) {
    counter++;
    let word = prompt('Enter your word');
    if (word === 'break' || word === null) {
        break outer;
    } else if (word === 'continue') {
        continue;
    }
    alert(counter);
}