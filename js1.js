//Основные переменные
candyp=1
candy=1
rows=3
steps=0
heart=1
pila=11
for(i=1;i<2;i++){
    idImg=document.getElementById('heart'+i)
    idImg.src="./img/heart_full.png"
}

//Начало и перезапуск игры
function start(){
    for(i=1;i<2;i++){
        idImg=document.getElementById('heart'+i)
        idImg.src="./img/heart_full.png"
    }
    idImg=document.getElementById('pole'+rows+'_'+steps)
    idImg.src='./img/pila.png'
    pole3_0.src="./img/pengui.png"
    rows=3
    steps=0
    heart=1
    idImgC=document.getElementById('pole1_9')
    //Спавн конфеты
    idImgC.src="./img/candy.png"
}

//Функция передвижения
function move(event){
    switch(event.key){
        //Движение вверх
        case 'ArrowUp':
            if(rows!=5){
                idImg=document.getElementById('pole'+rows+'_'+steps);
                idImg.src="img/spacer.png";
                rows++;
                idImg=document.getElementById('pole'+rows+'_'+steps);
                idImg.src="img/pengui.png";
                if(steps>0 && rows==5 || steps==1 && rows!=1 || steps>2 && steps<8 && rows<4 || steps==9 && rows>1){
                    idImg=document.getElementById('heart'+heart)
                    idImg.src="./img/heart_not_full.png"
                    heart--;
                    start()
                }
            }

        break;
        //Движение вниз
        case 'ArrowDown':
            if(rows!=1){
                idImg=document.getElementById('pole'+rows+'_'+steps);
                idImg.src="img/spacer.png";
                rows--;
                idImg=document.getElementById('pole'+rows+'_'+steps);
                idImg.src="img/pengui.png";
                if(candyp==1){
                if(rows==candy&&steps==9){
                    lv1.innerHTML='ДАЛЕЕ'
                }
            }
            if(steps>0 && rows==5 || steps==1 && rows!=1 || steps>2 && steps<8 && rows<4 || steps==9 && rows>1){
                idImg=document.getElementById('heart'+heart)
                idImg.src="./img/heart_not_full.png"
                heart--;
                start()
            }
        }
        break;
        //Движение вправо
        case 'ArrowRight':
            if(steps<=10){
                idImg=document.getElementById('pole'+rows+'_'+steps);
                idImg.src="img/spacer.png";
                steps++;
                if(steps>=9){
                    steps=9
                }
                idImg=document.getElementById('pole'+rows+'_'+steps);
                idImg.src="img/pengui.png";
                if(candyp==1){
                    if(rows==candy&&steps==9){
                        lv1.innerHTML='ДАЛЕЕ'
                    }
                }
                if(steps>0 && rows==5 || steps==1 && rows!=1 || steps>2 && steps<8 && rows<4 || steps==9 && rows>1){
                    idImg=document.getElementById('heart'+heart)
                    idImg.src="./img/heart_not_full.png"
                    heart--;
                    start()
                }
            }
        break;
        //Движение влево
        case 'ArrowLeft':
            if(steps<10){
                idImg=document.getElementById('pole'+rows+'_'+steps);
                idImg.src="img/spacer.png";
                steps--;
                if(steps<=0){
                    steps=0
                }

                idImg=document.getElementById('pole'+rows+'_'+steps);
                idImg.src="img/pengui.png";
                if(candyp==1){
                    if(rows==candy&&steps==9){
                        lv1.innerHTML='ДАЛЕЕ'
                    }
                }
                if(steps>0 && rows==5 || steps==1 && rows!=1 || steps>2 && steps<8 && rows<4 || steps==9 && rows>1){
                    idImg=document.getElementById('heart'+heart)
                    idImg.src="./img/heart_not_full.png"
                    heart--;
                    start()
                }
            }
        break;
            


}
  
    
    
    }


document.addEventListener('keydown',move);