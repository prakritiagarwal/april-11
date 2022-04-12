function reverse_a_number(n)
{
    let str = "" + n;
    const strArray = [...str];    
	return strArray.reverse().join('');	
}
console.log(reverse_a_number(32243));

function alphabetical_order(str)
{
    const strArray = [...str];
    const sortedArray = strArray.sort();
    return sortedArray.join('');
}
console.log(alphabetical_order('webmaster'));

function convert_first_letter_to_uppercase(str)
{
    const strArray = [...str];
    let retArray = [];
    for (let i = 0; i < strArray.length; i++) {
        if(i==0 || strArray[i-1] == ' ')
        {
            retArray.push(strArray[i].toUpperCase());
        }
        else
        {
            retArray.push(strArray[i]);   
        }
             
    }
    return retArray.join('');
}

console.log(convert_first_letter_to_uppercase('the quick brown fox'));

function check_if_prime(n)
{
    if(n <= 2)
        return true;
    for(let i = 2; i < n; i++)
        if(n % i == 0)
            return false;
    
    return true;
}

console.log(`7 is prime ${check_if_prime(7)}`);
console.log(`8 is prime ${check_if_prime(8)}`);

function get_unique_char(str)
{
    let uniq = "";
   
    for(let i = 0; i < str.length; i++) {   
        if(uniq.includes(str[i]) === false) {      
            uniq += str[i]
        }
    }
    return uniq;
}

console.log(get_unique_char('thequickbrownfoxjumpsoverthelazydog'));