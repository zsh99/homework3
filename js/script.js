
window.onload=tab;

function tab(){
  // µ±Ç°¸ßÁÁÏÔÊ¾µÄÒ³Ç©µÄË÷Òý
  var indexa=0;
  var indexb=0;
  var indexc=0;
  var indexd=0;
  var indexe=0;
  var indexf=0;
  var timer=null;
  function $(id){
  return typeof id==='string'?document.getElementById(id):id;
}

  // »ñÈ¡ËùÓÐµÄÒ³Ç©ºÍÒªÇÐ»»µÄÄÚÈÝ
  var lisa=$('notice-tita').getElementsByTagName('li');
  var divsa=$('notice-cona').getElementsByTagName('div');

  var lisb=$('notice-titb').getElementsByTagName('li');
  var divsb=$('notice-conb').getElementsByTagName('div');

  var lisc=$('notice-titc').getElementsByTagName('li');
  var divsc=$('notice-conc').getElementsByTagName('div');

  var lisd=$('notice-titd').getElementsByTagName('li');
  var divsd=$('notice-cond').getElementsByTagName('div');

  var lise=$('notice-tite').getElementsByTagName('li');
  var divse=$('notice-cone').getElementsByTagName('div');

  var lisf=$('notice-titf').getElementsByTagName('li');
  var divsf=$('notice-conf').getElementsByTagName('div');
  // ±éÀúÃ¿Ò»¸öÒ³Ç©ÇÒ¸øËûÃÇ°ó¶¨ÊÂ¼þ
  for(var i=0;i<lisa.length;i++){
    lisa[i].id=i;
    lisa[i].onmouseover=function(){
      clearInterval(timer);
      changeOptionA(this.id);
    }
    lisa[i].onmouseout=function(){  
      timer=setInterval(autoPlayA,3000);    
    }
  }
  //
  for(var i=0;i<lisb.length;i++){
    lisb[i].id=i;
    lisb[i].onmouseover=function(){
      clearInterval(timer);
      changeOptionB(this.id);
    }
    lisb[i].onmouseout=function(){  
      timer=setInterval(autoPlayB,3000);    
    }
  }
//
  for(var i=0;i<lisc.length;i++){
    lisc[i].id=i;
    lisc[i].onmouseover=function(){
      clearInterval(timer);
      changeOptionC(this.id);
    }
    lisc[i].onmouseout=function(){  
      timer=setInterval(autoPlayC,3000);    
    }
  }

  for(var i=0;i<lisd.length;i++){
    lisd[i].id=i;
    lisd[i].onmouseover=function(){
      clearInterval(timer);
      changeOptionD(this.id);
    }
    lisd[i].onmouseout=function(){  
      timer=setInterval(autoPlayD,3000);    
    }
  }

  for(var i=0;i<lise.length;i++){
    lise[i].id=i;
    lise[i].onmouseover=function(){
      clearInterval(timer);
      changeOptionE(this.id);
    }
    lise[i].onmouseout=function(){  
      timer=setInterval(autoPlayE,3000);    
    }
  }

  for(var i=0;i<lisf.length;i++){
    lisf[i].id=i;
    lisf[i].onmouseover=function(){
      clearInterval(timer);
      changeOptionF(this.id);
    }
    lisf[i].onmouseout=function(){  
      timer=setInterval(autoPlayF,3000);    
    }
  }
  if(timer){
    clearInterval(timer);
    timer=null;
  } 
  // Ìí¼Ó¶¨Ê±Æ÷£¬¸Ä±äµ±Ç°¸ßÁÁµÄË÷Òý
  timer=setInterval(autoPlayA,3000);

  timer=setInterval(autoPlayB,3000);

  timer=setInterval(autoPlayC,3000);

  timer=setInterval(autoPlayD,3000);

  timer=setInterval(autoPlayE,3000);

  timer=setInterval(autoPlayF,3000);
  function autoPlayA(){
      indexa++;
      if(indexa>=lisa.length){
         indexa=0;
      }
      changeOptionA(indexa);
  }

  function autoPlayB(){
      indexb++;
      if(indexb>=lisb.length){
         indexb=0;
      }
      changeOptionB(indexb);
  }

  function autoPlayC(){
      indexc++;
      if(indexc>=lisc.length){
         indexc=0;
      }
      changeOptionC(indexc);
  }  

  function autoPlayD(){
      indexd++;
      if(indexd>=lisd.length){
         indexd=0;
      }
      changeOptionD(indexd);
  }  

  function autoPlayE(){
      indexe++;
      if(indexe>=lise.length){
         indexe=0;
      }
      changeOptionE(indexe);
  }  

  function autoPlayF(){
      indexf++;
      if(indexf>=lisf.length){
         indexf=0;
      }
      changeOptionF(indexf);
  }  
  function changeOptionA(curIndex){
    for(var j=0;j<lisa.length;j++){
       lisa[j].className='';
       divsa[j].style.display='none';
    }
    // ¸ßÁÁÏÔÊ¾µ±Ç°Ò³Ç©
    lisa[curIndex].className='select';
    divsa[curIndex].style.display='block';
    indexa=curIndex;
  }

  function changeOptionB(curIndex){
    for(var j=0;j<lisb.length;j++){
       lisb[j].className='';
       divsb[j].style.display='none';
    }
    // ¸ßÁÁÏÔÊ¾µ±Ç°Ò³Ç©
    lisb[curIndex].className='select';
    divsb[curIndex].style.display='block';
    indexb=curIndex;
  }

  function changeOptionC(curIndex){
    for(var j=0;j<lisc.length;j++){
       lisc[j].className='';
       divsc[j].style.display='none';
    }
    // ¸ßÁÁÏÔÊ¾µ±Ç°Ò³Ç©
    lisc[curIndex].className='select';
    divsc[curIndex].style.display='block';
    indexc=curIndex;
  }

  function changeOptionD(curIndex){
    for(var j=0;j<lisd.length;j++){
       lisd[j].className='';
       divsd[j].style.display='none';
    }
    // ¸ßÁÁÏÔÊ¾µ±Ç°Ò³Ç©
    lisd[curIndex].className='select';
    divsd[curIndex].style.display='block';
    indexd=curIndex;
  }

  function changeOptionE(curIndex){
    for(var j=0;j<lise.length;j++){
       lise[j].className='';
       divse[j].style.display='none';
    }
    // ¸ßÁÁÏÔÊ¾µ±Ç°Ò³Ç©
    lise[curIndex].className='select';
    divse[curIndex].style.display='block';
    indexe=curIndex;
  }

  function changeOptionF(curIndex){
    for(var j=0;j<lisf.length;j++){
       lisf[j].className='';
       divsf[j].style.display='none';
    }
    // ¸ßÁÁÏÔÊ¾µ±Ç°Ò³Ç©
    lisf[curIndex].className='select';
    divsf[curIndex].style.display='block';
    indexf=curIndex;
  }
}