/*
* pure Java Script
* author: Soufyane Hedidi;
*/
var classList = ['card-stats-1','card-stats-2','card-stats-3'],
    states    = document.getElementById('stats'),
    charState = states.children,
    strength  = charState[0].firstChild.firstChild,
    speed     = charState[1].firstChild.firstChild,
    cost      = charState[2].firstChild.firstChild,
    level     = document.getElementById('level'),
    charName  = document.getElementById('name'); console.log(charName);

//characters infos
var chars  = [{
        name: 'The Barbarian',
        level: 'LEVEL 4',
        strength: 20,
        speed: 16,
        cost: 250
    },
    {
        name: 'The King',
        level: 'LEVEL 5',
        strength: 25,
        speed: 19,
        cost: 300
    },
    {
        name: 'The Giant',
        level: 'LEVEL 7',
        strength: 35,
        speed: 12,
        cost: 2250
    },
];

// control the changing of characters: left/right.
function showSlides(n, ...effects) {
  var i;
  var slides = document.getElementsByClassName("slide");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      var prevEff = [ slides[i].classList[1], slides[i].classList[2] ];
      slides[i].classList = slides[i].className.
                            replace(prevEff[0], '').
                            replace(prevEff[1], '').
                            replace(/\s+/, '');
  }

  slides[slideIndex-1].style.display = "block";
  slides[slideIndex-1].className += ' ' + effects[0];
  states.className = 'card-stats-' + slideIndex;
  states.children[1].className = 'card-color-' + slideIndex;

}

// change the character infos
function changeInfo(char){
    level.innerText = char.level;
    charName.innerText = char.name;
    strength.innerText = char.strength;
    speed.innerText = char.speed;
    cost.innerText = char.cost;
}

function fade(dir) {
    level.className = dir
    charName.className = dir
    strength.className = dir
    speed.className = dir
    cost.className = dir
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n, ...effects) {
  showSlides(slideIndex += n, ...effects);
  changeInfo(chars[slideIndex-1]);
}

var arrows = [ document.getElementsByTagName('a')[0],
               document.getElementsByTagName('a')[1]
            ];

// Listenning to each arrow (perv, next) for a click action.
arrows.forEach( function(c, i){
  c.addEventListener(
      'click',
      function(e){
          // which arrow has clicked, right or left?
          var arrow = e.target.parentNode.attributes.class.nodeValue;
          if (arrow === 'next') {
            //   fade('');
              plusSlides(1, 'slide-fwd-right');
              fade("fade-in-fwd");
          }
          if (arrow === 'prev') {
            //   fade('')
              plusSlides(-1, 'slide-fwd-left');
              fade("fade-in-fwd");
          }
      })
})
