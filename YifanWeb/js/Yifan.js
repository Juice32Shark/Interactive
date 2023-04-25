
        const A =document.querySelector('.A')
        const B =document.querySelector('.B')
        const C =document.querySelector('.C')
        const D =document.querySelector('.D')
        const M = document.querySelector('.bigIMg>img')
        const box = document.querySelector('.box')
        const bnm = document.querySelector('.bnm')
         


           A.addEventListener('mousedown',function(){

            function fn(e){
                let x = e.pageX - box.offsetLeft
                 let y = e.pageY - box.offsetTop
                var maskX = x - A.offsetWidth/2
                var maskY = y - A.offsetHeight/2 
            this.style.zIndex = 100
                if(maskX <= 0 ){
                    maskX = 0
                }else if(maskX >= 450){
                    maskX = 450
                }
                if(maskY <= 0 ){
                    maskY = 0
                }else if(maskY >= 550){
                    maskY = 550
                }
                A.style.left = maskX + 'px'
                A.style.top = maskY + 'px'
                console.log(A.style.top,'高');
                 console.log(A.style.left,'kuan');
                 
            }
            
            A.addEventListener('mousemove',fn)
           
           
            A.addEventListener('mouseup',function(){
                A.removeEventListener('mousemove',fn)
                
                if (parseInt(A.style.top) >= 200 && parseInt(A.style.top)<= 350) {
                   
                    bnm.src = './images/Grownup1.gif'
                   
                   
                }
                A.style.top = 0
                A.style.left = 0

              
            })
                 
           })

           B.addEventListener('mousedown',function(){

function fn(e){
    let x = e.pageX - box.offsetLeft
     let y = e.pageY - box.offsetTop
    var maskX = x - B.offsetWidth/2
    var maskY = y - B.offsetHeight/2 
this.style.zIndex = 100
    if(maskX <= 0 ){
        maskX = 0
    }else if(maskX >= 450){
        maskX = 450
    }
    if(maskY <= 0 ){
        maskY = 0
    }else if(maskY >= 550){
        maskY = 550
    }
    B.style.left = maskX + 'px'
    B.style.top = maskY + 'px'
   
}

B.addEventListener('mousemove',fn)


B.addEventListener('mouseup',function(){
    B.removeEventListener('mousemove',fn)
   
    if (parseInt(B.style.top) >= 200 && parseInt(B.style.top)<= 350) {
       
        bnm.src = './images/Grownup3.gif'
        
    
    }
    B.style.top = 0
        B.style.left = 450 + 'px'

  
})
     
})

           C.addEventListener('mousedown',function(){

            function fn(e){
                let x = e.pageX - box.offsetLeft
                let y = e.pageY - box.offsetTop
                var maskX = x - C.offsetWidth/2
                var maskY = y - C.offsetHeight/2 
            this.style.zIndex = 100
                if(maskX <= 0 ){
                    maskX = 0
                }else if(maskX >= 450){
                    maskX = 450
                }
                if(maskY <= 0 ){
                    maskY = 0
                }else if(maskY >= 550){
                    maskY = 550
                }
                C.style.left = maskX + 'px'
                C.style.top = maskY + 'px'
            
            }

            C.addEventListener('mousemove',fn)


            C.addEventListener('mouseup',function(){
                C.removeEventListener('mousemove',fn)
               
                if (parseInt(C.style.top) >= 200 && parseInt(C.style.top)<= 350) {
                
                    bnm.src = './images/Grownup2.gif'
                   
                
                }
                C.style.top = 550 + 'px'
                    C.style.left = 0

            
            })
                
            })

          
            D.addEventListener('mousedown',function(){

function fn(e){
    let x = e.pageX - box.offsetLeft
     let y = e.pageY - box.offsetTop
    var maskX = x - D.offsetWidth/2
    var maskY = y - D.offsetHeight/2 
this.style.zIndex = 100
    if(maskX <= 0 ){
        maskX = 0
    }else if(maskX >= 450){
        maskX = 450
    }
    if(maskY <= 0 ){
        maskY = 0
    }else if(maskY >= 550){
        maskY = 550
    }
    D.style.left = maskX + 'px'
    D.style.top = maskY + 'px'
   
}

D.addEventListener('mousemove',fn)


D.addEventListener('mouseup',function(){
    D.removeEventListener('mousemove',fn)
    
    if (parseInt(D.style.top) >= 200 && parseInt(D.style.top)<= 350) {
       
        bnm.src = './images/Grownup4.gif'
       
    
    }
    D.style.top = 550 + 'px'
    D.style.left = 450 + 'px'
  

  
})
     
})
