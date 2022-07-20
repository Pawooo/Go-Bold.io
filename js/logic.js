// Dialog
let dialog = document.getElementById("settings");
let dialogBtn = document.getElementById("confirm-settings");

document.addEventListener( 'DOMContentLoaded', function() {
      dialog.showModal();
}
)

// Fire loadLotties on esc press if dialog window was active
document.addEventListener('keydown', dialogCancelButSubmit);

function dialogCancelButSubmit(e){
    if (e.key === 'Escape') {
      applySettings();
      console.log('potato');
    }
}

dialogBtn.addEventListener( 'click', applySettings);

function applySettings() {
     if (!dlModeSwitcher.classList.contains('active') && !langIcon.classList.contains('wayaku')) {
       console.log('engDark');

       const section1Anim = bodymovin.loadAnimation({
        container: section1, // Required
        path: 'lottie/Hero-text-dark.json', // Required
        renderer: 'svg', // Required
        loop: false, // Optional
        autoplay: true, // Optional
        name: "Section 1 Animation", // Name for future reference. Optional.
      })

       const section2Anim = bodymovin.loadAnimation({
          container: section2, // Required
          path: 'lottie/db-bold-dark.json', // Required
          renderer: 'svg', // Required
          loop: false, // Optional
          autoplay: true, // Optional
          name: "Section 1 Animation", // Name for future reference. Optional.
        })

        const profxAnim = bodymovin.loadAnimation({
          container: bCardProfX, // Required
          path: 'lottie/profx-dark.json', // Required
          renderer: 'svg', // Required
          loop: false, // Optional
          autoplay: false, // Optional
          name: "Section 2 ProfX Animation", // Name for future reference. Optional.
        })
      
        const eggAnim = bodymovin.loadAnimation({
          container: bCardEgg, // Required
          path: 'lottie/egg-dark.json', // Required
          renderer: 'svg', // Required
          loop: false, // Optional
          autoplay: false, // Optional
          name: "Section 2 Egg Animation", // Name for future reference. Optional.
        })
      
        const mahatmaAnim = bodymovin.loadAnimation({
          container: bCardMahatma, // Required
          path: 'lottie/ghandi-dark.json', // Required
          renderer: 'svg', // Required
          loop: false, // Optional
          autoplay: false, // Optional
          name: "Section 2 Ghandi (Saitama) Animation", // Name for future reference. Optional.
        })
      
        // Animation Trigger for Mouse Interface
        cardListener(bCardProfX, profxAnim, 'mouseenter');
        cardListener(bCardProfX, profxAnim, 'mouseleave');
        cardListener(bCardEgg, eggAnim, 'mouseenter');
        cardListener(bCardEgg, eggAnim, 'mouseleave');
        cardListener(bCardMahatma, mahatmaAnim, 'mouseenter');
        cardListener(bCardMahatma, mahatmaAnim, 'mouseleave');

        // Animation Trigger for Smaller Screens
        cardListener(bCardProfX, profxAnim, 'touchstart');
        cardListener(bCardProfX, profxAnim, 'touchend');
        cardListener(bCardEgg, eggAnim, 'touchstart');
        cardListener(bCardEgg, eggAnim, 'touchend');
        cardListener(bCardMahatma, mahatmaAnim, 'touchstart');
        cardListener(bCardMahatma, mahatmaAnim, 'touchend');
     } else if (dlModeSwitcher.classList.contains('active') && !langIcon.classList.contains('wayaku')) {
       console.log('engLight');

       const section1Anim = bodymovin.loadAnimation({
          container: section1, // Required
          path: 'lottie/Hero-text.json', // Required
          renderer: 'svg', // Required
          loop: false, // Optional
          autoplay: true, // Optional
          name: "Section 1 Animation", // Name for future reference. Optional.
        })

        const section2Anim = bodymovin.loadAnimation({
          container: section2, // Required
          path: 'lottie/db-bold.json', // Required
          renderer: 'svg', // Required
          loop: false, // Optional
          autoplay: true, // Optional
          name: "Section 1 Animation", // Name for future reference. Optional.
        })

        const profxAnim = bodymovin.loadAnimation({
          container: bCardProfX, // Required
          path: 'lottie/profx.json', // Required
          renderer: 'svg', // Required
          loop: false, // Optional
          autoplay: false, // Optional
          name: "Section 2 ProfX Animation", // Name for future reference. Optional.
        })
      
        const eggAnim = bodymovin.loadAnimation({
          container: bCardEgg, // Required
          path: 'lottie/egg.json', // Required
          renderer: 'svg', // Required
          loop: false, // Optional
          autoplay: false, // Optional
          name: "Section 2 Egg Animation", // Name for future reference. Optional.
        })
      
        const mahatmaAnim = bodymovin.loadAnimation({
          container: bCardMahatma, // Required
          path: 'lottie/ghandi.json', // Required
          renderer: 'svg', // Required
          loop: false, // Optional
          autoplay: false, // Optional
          name: "Section 2 Ghandi (Saitama) Animation", // Name for future reference. Optional.
        })
      
        // Animation Trigger for Mouse Interface
        cardListener(bCardProfX, profxAnim, 'mouseenter');
        cardListener(bCardProfX, profxAnim, 'mouseleave');
        cardListener(bCardEgg, eggAnim, 'mouseenter');
        cardListener(bCardEgg, eggAnim, 'mouseleave');
        cardListener(bCardMahatma, mahatmaAnim, 'mouseenter');
        cardListener(bCardMahatma, mahatmaAnim, 'mouseleave');
              
        // Animation Trigger for Smaller Screens
        cardListener(bCardProfX, profxAnim, 'touchstart');
        cardListener(bCardProfX, profxAnim, 'touchend');
        cardListener(bCardEgg, eggAnim, 'touchstart');
        cardListener(bCardEgg, eggAnim, 'touchend');
        cardListener(bCardMahatma, mahatmaAnim, 'touchstart');
        cardListener(bCardMahatma, mahatmaAnim, 'touchend');
     } else if (!dlModeSwitcher.classList.contains('active') && langIcon.classList.contains('wayaku')) {
       console.log('japDark');

       const section1Anim = bodymovin.loadAnimation({
          container: section1, // Required
          path: 'lottie/Hero-text-wayaku-dark.json', // Required
          renderer: 'svg', // Required
          loop: false, // Optional
          autoplay: true, // Optional
          name: "Section 1 Animation", // Name for future reference. Optional.
        })

        const section2Anim = bodymovin.loadAnimation({
          container: section2, // Required
          path: 'lottie/db-bold-dark.json', // Required
          renderer: 'svg', // Required
          loop: false, // Optional
          autoplay: true, // Optional
          name: "Section 1 Animation", // Name for future reference. Optional.
        })

        const profxAnim = bodymovin.loadAnimation({
          container: bCardProfX, // Required
          path: 'lottie/profx-dark.json', // Required
          renderer: 'svg', // Required
          loop: false, // Optional
          autoplay: false, // Optional
          name: "Section 2 ProfX Animation", // Name for future reference. Optional.
        })
      
        const eggAnim = bodymovin.loadAnimation({
          container: bCardEgg, // Required
          path: 'lottie/egg-dark.json', // Required
          renderer: 'svg', // Required
          loop: false, // Optional
          autoplay: false, // Optional
          name: "Section 2 Egg Animation", // Name for future reference. Optional.
        })
      
        const mahatmaAnim = bodymovin.loadAnimation({
          container: bCardMahatma, // Required
          path: 'lottie/ghandi-dark.json', // Required
          renderer: 'svg', // Required
          loop: false, // Optional
          autoplay: false, // Optional
          name: "Section 2 Ghandi (Saitama) Animation", // Name for future reference. Optional.
        })
      
        // Animation Trigger for Mouse Interface
        cardListener(bCardProfX, profxAnim, 'mouseenter');
        cardListener(bCardProfX, profxAnim, 'mouseleave');
        cardListener(bCardEgg, eggAnim, 'mouseenter');
        cardListener(bCardEgg, eggAnim, 'mouseleave');
        cardListener(bCardMahatma, mahatmaAnim, 'mouseenter');
        cardListener(bCardMahatma, mahatmaAnim, 'mouseleave');
              
        // Animation Trigger for Smaller Screens
        cardListener(bCardProfX, profxAnim, 'touchstart');
        cardListener(bCardProfX, profxAnim, 'touchend');
        cardListener(bCardEgg, eggAnim, 'touchstart');
        cardListener(bCardEgg, eggAnim, 'touchend');
        cardListener(bCardMahatma, mahatmaAnim, 'touchstart');
        cardListener(bCardMahatma, mahatmaAnim, 'touchend');
     } else {
       console.log('japLight');
       
       const section1Anim = bodymovin.loadAnimation({
        container: section1, // Required
        path: 'lottie/Hero-text-wayaku.json', // Required
        renderer: 'svg', // Required
        loop: false, // Optional
        autoplay: true, // Optional
        name: "Section 1 Animation", // Name for future reference. Optional.
      })

      const section2Anim = bodymovin.loadAnimation({
        container: section2, // Required
        path: 'lottie/db-bold.json', // Required
        renderer: 'svg', // Required
        loop: false, // Optional
        autoplay: true, // Optional
        name: "Section 1 Animation", // Name for future reference. Optional.
      })

      const profxAnim = bodymovin.loadAnimation({
        container: bCardProfX, // Required
        path: 'lottie/profx.json', // Required
        renderer: 'svg', // Required
        loop: false, // Optional
        autoplay: false, // Optional
        name: "Section 2 ProfX Animation", // Name for future reference. Optional.
      })
    
      const eggAnim = bodymovin.loadAnimation({
        container: bCardEgg, // Required
        path: 'lottie/egg.json', // Required
        renderer: 'svg', // Required
        loop: false, // Optional
        autoplay: false, // Optional
        name: "Section 2 Egg Animation", // Name for future reference. Optional.
      })
    
      const mahatmaAnim = bodymovin.loadAnimation({
        container: bCardMahatma, // Required
        path: 'lottie/ghandi.json', // Required
        renderer: 'svg', // Required
        loop: false, // Optional
        autoplay: false, // Optional
        name: "Section 2 Ghandi (Saitama) Animation", // Name for future reference. Optional.
      })
    
      // Animation Trigger for Mouse Interface
      cardListener(bCardProfX, profxAnim, 'mouseenter');
      cardListener(bCardProfX, profxAnim, 'mouseleave');
      cardListener(bCardEgg, eggAnim, 'mouseenter');
      cardListener(bCardEgg, eggAnim, 'mouseleave');
      cardListener(bCardMahatma, mahatmaAnim, 'mouseenter');
      cardListener(bCardMahatma, mahatmaAnim, 'mouseleave');
            
      // Animation Trigger for Smaller Screens
      cardListener(bCardProfX, profxAnim, 'touchstart');
      cardListener(bCardProfX, profxAnim, 'touchend');
      cardListener(bCardEgg, eggAnim, 'touchstart');
      cardListener(bCardEgg, eggAnim, 'touchend');
      cardListener(bCardMahatma, mahatmaAnim, 'touchstart');
      cardListener(bCardMahatma, mahatmaAnim, 'touchend');
     }
}

// Splider

document.addEventListener( 'DOMContentLoaded', function() {
      const splide = new Splide( '.splideFor', {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        arrows: false,
        pagination: false,
        perPage: 3,
        snap: true,
        // gap: '1rem',
        autoScroll: {
            speed: 1,
        }
      });
    splide.mount( window.splide.Extensions );
} );
    
document.addEventListener( 'DOMContentLoaded', function() {
      const splideRev = new Splide( '.splideRev', {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        pagination: false,
        arrows: false,
        perPage: 3,
        direction: "rtl",
        snap: true,
        autoScroll: {
            speed: 1,
        }
      });
    splideRev.mount( window.splide.Extensions );
} );

// Dark Mode Icon
const dlModeSwitcher = document.querySelector(".l-mode-switcher");
const langIcon = document.querySelector(".lang-icon");

dlModeSwitcher.addEventListener('click', dlModeSwitch);

function dlModeSwitch() {
  dlModeSwitcher.classList.toggle("active");
  langIcon.classList.toggle('active');
  if (dlModeSwitcher.classList.contains('active')) {
    setTheme('light');
  } else {
    setTheme('dark');
  }
}

const setTheme = theme => document.documentElement.className = theme;

// Lang Switcher
langIcon.addEventListener('click', langSwitcher)

function langSwitcher(){
  setTimeout( () => {
    langIcon.classList.toggle('wayaku');

    // Elements with text content to be changed
    const quoteTop = document.querySelector('.quote h2:nth-of-type(1)');
    const quoteBtm = document.querySelector('.quote h2:nth-of-type(2)');
    const settingsTitle = document.querySelector('#settings h1');
    const settingsColor = document.querySelector('#settings h2:nth-of-type(1)');
    const settingsLang = document.querySelector('#settings div:nth-of-type(2) h2');
    const settingsCTA = document.querySelector('#settings #confirm-settings');  
    const heroesH1Wrapper = document.querySelectorAll('.heroes-h1wrapper h1');
    const theBaldestTitle = document.querySelector('#the-baldest h1');

    if (langIcon.classList.contains('wayaku')){
      quoteTop.textContent='memento 毛根';
      quoteBtm.textContent='森さん';
      settingsTitle.textContent='表示設定をお選びください';
      settingsColor.textContent='配色';
      settingsLang.textContent='言語';
      settingsCTA.innerText='ファンタイム！';
      for (h1s of heroesH1Wrapper) {
        h1s.textContent='真の勇者をご覧あれ！';
      }
      theBaldestTitle.textContent='最も励ているやつらの仲間になれ！';

    } else {
      quoteTop.textContent='Stop feeling bad about becoming the better version of yourself';
      quoteBtm.textContent='GHANDAM';
      settingsTitle.textContent='Tweak Your Viewing Experience';
      settingsColor.textContent='Color';
      settingsLang.textContent='Language';
      settingsCTA.innerText='Begin the Show';
      for (h1s of heroesH1Wrapper) {
        h1s.textContent='Meet Your Heroes';
      }
      theBaldestTitle.textContent='Join the Baldest';
    }
  }, 300);
}

const section1 = document.querySelector('#section-1');
const section2 = document.querySelector('#section-2');
const bCardProfX = document.querySelector('#profx-anim');
const bCardEgg = document.querySelector('#egg-anim');
const bCardMahatma = document.querySelector('#ghandi-anim');
const dolla1 = document.querySelector('#dolla-anim1');
const dolla2 = document.querySelector('#dolla-anim2');
const dolla3 = document.querySelector('#dolla-anim3');
const langIconL = document.querySelector('#lang-l');
const langIconD = document.querySelector('#lang-d');


// All-modes-compatible animations
  const langLAnim = bodymovin.loadAnimation({
    container: langIconL, // Required
    path: 'lottie/langIcon-or-tr.json', // Required
    renderer: 'svg', // Required
    loop: false, // Optional
    autoplay: false, // Optional
    name: "Section 3 Save Word Anim", // Name for future reference. Optional.
  })

  const langDAnim = bodymovin.loadAnimation({
    container: langIconD, // Required
    path: 'lottie/langIcon-wh-tr.json', // Required
    renderer: 'svg', // Required
    loop: false, // Optional
    autoplay: false, // Optional
    name: "Section 3 Save Word Anim", // Name for future reference. Optional.
  })

  const dollaAnim1 = bodymovin.loadAnimation({
    container: dolla1, // Required
    path: 'lottie/Wd-Save.json', // Required
    renderer: 'svg', // Required
    loop: false, // Optional
    autoplay: false, // Optional
    name: "Section 3 Save Word Anim", // Name for future reference. Optional.
  })

  const dollaAnim2 = bodymovin.loadAnimation({
    container: dolla2, // Required
    path: 'lottie/Wd-Dolla.json', // Required
    renderer: 'svg', // Required
    loop: false, // Optional
    autoplay: false, // Optional
    name: "Section 3 Numbers Anim", // Name for future reference. Optional.
    initialSegment: [15, 100],
  })

  const dollaAnim3 = bodymovin.loadAnimation({
    container: dolla3, // Required
    path: 'lottie/Wd-Year.json', // Required
    renderer: 'svg', // Required
    loop: false, // Optional
    autoplay: false, // Optional
    name: "Section 3 Numbers Anim", // Name for future reference. Optional.
  })   

function cardListener (htmlElement, animName, method) {
  const directionMenu = 1;
  if (method === "mouseenter" || method === "touchstart") {
  htmlElement.addEventListener(method, (e) => {
    animName.setDirection(directionMenu);
    animName.play();
  })} else {
  htmlElement.addEventListener(method, (e) => {
    animName.setDirection(-directionMenu);
    animName.play();
  })}
} 


// Language Icon Listener
let langIconPlayed = false;

function langIconListener (htmlElement, animName, method) {
  const directionMenu = 1;

  if (method === "mouseenter") {
  htmlElement.addEventListener(method, (e) => {
    animName.setDirection(directionMenu);
    animName.playSegments([0, 10], true);
  })} else if (method === "mouseleave") {
  htmlElement.addEventListener(method, (e) => {
    if(!langIconPlayed) {
      animName.setDirection(-directionMenu);
      animName.playSegments([10, 0], true);
    } else {
      langIconPlayed = false;
    }
  })}
} 

function langIconListenerCompleteAnim (htmlElement, animName, method) {
  const directionMenu = 1;

  if ((method === "click" || method === "touchstart") && !langIconPlayed) {
  htmlElement.addEventListener(method, (e) => {
    if (!langIconPlayed) {
      animName.setDirection(directionMenu);
      animName.playSegments([10, 22], true);
      langIconPlayed = true;
    } else {
      animName.setDirection(-directionMenu);
      animName.playSegments([22, 10], true);
      langIconPlayed = false;
    }
  })} 
} 

langIconListener(langIconL, langLAnim, 'mouseenter');
langIconListener(langIconL, langLAnim, 'mouseleave');
langIconListener(langIconD, langDAnim, 'mouseenter');
langIconListener(langIconD, langDAnim, 'mouseleave');
langIconListenerCompleteAnim(langIconL, langLAnim, 'click');
langIconListenerCompleteAnim(langIconD, langDAnim, 'click');

// Scroll Trigger 
const saveMonay = document.querySelector('#save-your-money');
const scrollContainer = document.querySelector('.scroll-container');

function isInView() {
  const box = saveMonay.getBoundingClientRect();
  if (box.y < 100) {
    dollaAnim1.play();
    dollaAnim2.play();
    dollaAnim3.play();
  }
}

scrollContainer.addEventListener('scroll', isInView);
