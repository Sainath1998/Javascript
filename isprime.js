function isprime(n)
{
    for(let i = 2 ; i < n ; i++)
    {
        if(n<=2)
        {
            return true
        }
        if (n % i == 0)
        {
            return false
        }
    }
    return true
}
function checkPrime(number) {
    if (number <= 1) {
      return false;
    } else {
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          return false;
        }
      }
      return true;
    }
  }
n = 15
console.log(isprime(n))
