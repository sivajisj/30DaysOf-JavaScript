const allTitle = document.querySelectorAll('h1');
allTitle[1].classList.remove('class','hi')
allTitle[0].innerHTML = "first heading"
allTitle[1].innerHTML = "second heading"
allTitle[2].innerHTML = "third heading"

console.log(allTitle);

const lists = `
                <li>Sj is a brand</li>
              <li>SJ IS A MAX</li>
               <li>DONT MESS WITH LEO SJ</li>
               `

const ull = document.querySelector('ul')
ull.innerHTML = lists;

allTitle.forEach((title,i)  =>{
  title.style.fontSize='24px';
  if(i%2==0){
    title.style.color= 'red';
  }
  else{
    title.style.color= 'green';

  }
})

const plist = document.querySelectorAll('p')
console.log(plist[0]);
console.log(plist[1]);console.log(plist[2]);console.log(plist[3]);
plist[3].innerHTML="text changed";
plist[0].style.color = 'red';
plist[2].style.backgroundColor = 'yellow';