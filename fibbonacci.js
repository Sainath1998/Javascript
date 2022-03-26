function getNthFibo(k) {
    if (k <= 1) {
    return k;
    } else {
    return (getNthFibo(k - 1) + getNthFibo(k - 2));
    }
   }
n = 10
for(let k = 0 ; k < n ; k ++ )
{
    console.log(getNthFibo(k));
}
