var slider = document.getElementById('slider'),
    sliderItems = document.getElementById('slides'),
    prev = document.getElementById('prev'),
    next = document.getElementById('next');


var zadnji = document.getElementById('slika9');
document.getElementById('slides').style.left = -zadnji.clientWidth + 'px';




let trimText = (items, direction) => {
  if(direction == 1){
    while(items.firstChild.nodeName == '#text'){
      items.removeChild(items.firstChild);
    }
    items.removeChild(items.firstChild);
  }
  else{
    while(items.lastChild.nodeName == '#text'){
      items.removeChild(items.lastChild);
    }
    items.removeChild(items.lastChild);
  }
}


function f(wrapper, items, prev, next){

let children = [...items.childNodes];
children.forEach(node=>{
  if(node.nodeName === '#text') node.remove();
});
  /*console.log(items.childNodes[0].nodeName)
  l = items.childNodes.length
  for (let i = 0; i<l; i++ ) {
    console.log(items.childNodes[i].nodeName)
    a = items.childNodes[i].nodeName;
    if(a == '#text') {items.removeChild(items.childNodes[i]);}}*/

  //items.removeChild(#text)
  
  console.log(items.childNodes)
  var slides = items.getElementsByClassName('slide'),
      slidesLength = slides.length,
      
      slideSize = items.getElementsByClassName('slide')[0].offsetWidth,
      firstSlide = slides[0],
      lastSlide = slides[slidesLength - 1],
      clone1 = firstSlide.cloneNode(true),
      clone2 = lastSlide.cloneNode(true),
      index = 0,
      allowShift = true,
      posInitial,
      k = 1,
      index=0,
      fokus = document.getElementById('slika'+ String(k));

      //console.log('items.style.left: ' +items.style.left)
      //console.log('ukupno' + slidesLength)


  items.appendChild(clone1);
  items.insertBefore(clone2, firstSlide);


  prev.addEventListener('click', function(){shiftSlide(-1)});
  next.addEventListener('click', function(){shiftSlide(1)});

  //items.addEventListener('transitionend', checkIndex);

  //console.log(items.childNodes[0])
  //console.log(document.getElementById('slika9'))
  //console.log(items.firstChild.nextElementSibling.clientWidth)
  //console.log(items.childNodes.length);
  //console.log(items.childNodes)
//**************************************************************************** */
  function shiftSlide(dir){
    items.classList.add('shifting');

    if(allowShift){
      posInitial = items.offsetLeft;
      //console.log(items.offsetLeft)
//DESNO
      if(dir == 1){
        //console.log('items.style.left (if) prije radnje: ' +items.style.left);
        var pomak = (posInitial - fokus.clientWidth);
        items.style.left = pomak +'px';
        k = k % 9 + 1;
        //console.log(k)
        fokus = document.getElementById('slika'+ String(k));
        
        //console.log(fokus)
        setTimeout(function(){  
          //blokada pomaka
          items.classList.add('notransition');
          //items.classList.remove('shifting');
          //console.log(items.childNodes[0].clientWidth)
          console.log(items.childNodes.length)
          console.log(items.childNodes)
          console.log(items.childNodes[0])
          items.style.left = pomak + items.firstChild.clientWidth +'px';
          //items.removeChild(items.childNodes[0]);
          //console.log(items.childNodes.length)
          //console.log(items.childNodes[0])
          //console.log(items.childNodes[0].length)
          //items.removeChild(items.childNodes[0]);
          

          cloneFokus = fokus.cloneNode(true);
          items.appendChild(cloneFokus);

          trimText(items, dir);
          //skini blokadu
          items.offsetHeight;
          items.classList.remove('notransition');
        }, 100);
        console.log('items.style.left (if):  ' +items.style.left);
        index++;
      }
//LIJEVO
      else if(dir == -1){
        
        if(k==1){k=9;}
        else{k=k-1}
        fokus = document.getElementById('slika'+ String(k));
        var pomak = (posInitial + fokus.clientWidth);
        //fokus = items.childNodes[0];
        items.style.left = pomak +'px';
        index--;
//ovo////////////////////////////////////////////////////////////////////////////////////////////////////
        setTimeout(function(){  
          //blokada pomaka
          items.classList.add('notransition');
          //items.classList.remove('shifting');
          if(k==1){k2=9;}
          else{k2=k-1}

          trimText(items, dir);
          
          cloneFokus2 = document.getElementById('slika'+ String(k2)).cloneNode(true);
          //items.removeChild(items.childNodes[10]);
          items.insertBefore(cloneFokus2, items.firstChild);
          items.style.left = (pomak - items.firstChild.clientWidth) +'px';
          //k = k2;

          
          //skini blokadu
          items.offsetHeight;
          items.classList.remove('notransition');
        }, 100);
      }
    }
    
  }

}
f(slider, sliderItems, prev, next);