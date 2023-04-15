function fibonacci(num) {
   if(n==1)
   {
	   return 0;
   }
	if(n==2){
		return 1;
	}
	let a=[];
     a[0]=0;
     a[1]=1;
	for(let i=2;i<=n;i++){
		a[i]=a[i-1]+a[i-2];
	}
	return a[n-1];
	// your code here
}

module.exports = fibonacci;
