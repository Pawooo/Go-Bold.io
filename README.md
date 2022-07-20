![Go_Bold io](https://user-images.githubusercontent.com/106813449/175611867-9fa9283f-b63d-4ecc-b868-890a7c135e2b.png)

#### AKA Go-bold.io (Dota 2 Reference Intended) / hage-maho (禿魔法) / hagemashou (励ましょう) / Project memento 毛根

My first ever webpage. The goal of the project is to showcase what can be done with Lottie and to test my knowledge of webdev basics. Also it's a great way to demonstrate just how freaking amazing my multilingual puns are. 

Everything here is made by me, except for @unsplash images and font (authors listed at the end of the document):

* Animations were made using After Effects/Bodymovin/Lottie Plugin
* Vectors were done in Illustrator
* HTML/CSS/JS
* Sliders are a courtesy of Splide.js


#### Things I discovered as I pieced this together: 

1. Adding additional effects in After Effects (albeit officially supported, as claimed in official documentation [[1]](https://airbnb.io/lottie/#/after-effects)), will make animation heavier than modifying the element’s metadata (Fill 32 vs Fill Color). In my case, I had pixelations as animation was rendered because the original comp size was smaller than intended. Another possible reason is that Fill(32) is applied as a postprocessor, resulting in pixelations on trigger.
2. How to play Lottie to a certain segment on hover and reset it after full play(). I couldn’t find a use case like this on any website up until now (maybe because to an average developer this is too easy :sob:), there’s no code on Codepen etc. that fits this use case so I’m quite proud of this haphazard implementation I came up with. 
3. Putting a Lottie element into Splide will turn off the latter (tried all I could—the issue is not resolved).
4. Dialog element [[2]]([https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog), [[3]](https://webkit.org/blog/12209/introducing-the-dialog-element/) by default can be removed by pressing Esc, which in this case ruined user journey I originally came up with, so I had to drop a fallback for that. 
5. You cannot setTimeout() directly on EventListener function, create a callback or add it in a separate function definition.
6. Using @layer can save you so much specificity-related trouble in your CSS, I hope more people adapt it soon.
7. Clamp() initially felt like a weird unusable thing, but once I figured it out I cannot help but admit that this is mindblowingly convenient way to size things. 
8. Sometimes not putting huge descriptive objects into short patternized functions is the best choice because otherwise readability would become a thing of the past. 

#### Credits
  
@Unsplash gods: 
- angshu-purkait-t5RBpttNfj0
- caique-silva-3ujVzg9i2EI
- chalo-garcia-2mWKL_I70qk
- charles-etoroma-95UF6LXe-Lo
- chrissie-kremer-ttCxuHlS03M
- kevin-jackson-11UhA-nsrdk
- markus-spiske-q8ajgadT6Lc
- paul-szewczyk-QqvPrhyS_wI
- quinten-de-graaf-TJSDFQ5kSrY


@nonsplash demiurge:
- Evgeny 
