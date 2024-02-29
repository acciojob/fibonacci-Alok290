function fibonacci(num) {
// your code here
	if(num<=2) return num-1;
	return fibonacci(n-1)+fibonacci(n-2);
}

module.exports = fibonacci;
