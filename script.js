function fibonacci(n) {
  // write code here
    if(n==1) return 0;
    if (n==2 ) return 1;

    return fibonacci(n-1)+fibonacci(n-2);
    }

module.exports = fibonacci;


module.exports = fibonacci;
