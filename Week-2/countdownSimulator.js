/*2.OTP Countdown Simulator (Console App)
------------------------------------
        
        Simulate OTP sending flow in Node.js:
        
        Show “OTP Sent Successfully”
        
        Start 10-second countdown
        
        Allow resend only after countdown ends*/
        console.log("OTP Sent Successfully")
       let sec=10; 
       let interval= setInterval(()=>{
            for(let i=10;i>=0;i--){
                console.log(i)
            
            if(i==0)
            {
                console.log("Resend OTP")
                clearInterval(interval)
            }
        }
        },10000)
       