
                function dis(val) 
                { 
                        if(val=='+/-'){
                            var a= document.getElementById("result").value;
                            if(a.charAt(0)=='-'){
                           
                           document.getElementById("result").value=a.slice(1,a.length);
                        }
                            else{
                                document.getElementById("result").value='-'+a
                            }
                        }
                        else{
                        document.getElementById("result").value+=val;
                    }
                }
                
             
                function solve() 
                { 
                        var x = document.getElementById("result").value 
                        var y = eval(x) 
                        document.getElementById("result").value = y 
                } 
                
            
                function clr() 
                { 
                        document.getElementById("result").value = "" 
                } 