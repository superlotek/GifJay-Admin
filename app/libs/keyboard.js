// keyboard-0.8.9
// new key groupings

// used for Cursor Key FX
// maybe find alternative to this, Mousetrap should work, right?
kd.run(function () { kd.tick(); });

$(document).ready(function() {

  $('body').css('background-color', randomColorChange());

    startup();

    $('.logo a').click(function() {
      $(this).fadeOut(function() {
        $('.logo').remove();
        stageSetup();
      });
    });

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// KEY INPUT (Mousetrap.js) https://craig.is/killing/mice
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// *** SCREENSAVER ***
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  Mousetrap.bind("~", function() {

    if(!screensaver) {

      console.log('SCREENSAVER ON');
      screensaver = 1;
      roboScreen();

    } else {

      console.log('SCREENSAVER OFF');
      screensaver = 0;
      localStorage.setItem('killSwitch','killed');
      stageParameters();
      localStorage.setItem('stg1Bank',$(s1).attr('bank'));
      localStorage.setItem('stg2Bank',$(s2).attr('bank'));
      localStorage.setItem('stg1Gif',$(s1).attr('gif'));
      localStorage.setItem('stg2Gif',$(s2).attr('gif'));
      localStorage.setItem('stg1Repeat',$(s1).attr('repeat'));
      localStorage.setItem('stg2Repeat',$(s2).attr('repeat'));
      localStorage.setItem('stg1Size',$(s1).attr('size'));
      localStorage.setItem('stg2Size',$(s2).attr('size'));
      localStorage.setItem('stg1Blend',$(s1).attr('blend'));
      localStorage.setItem('stg2Blend',$(s2).attr('blend'));

      var bgSize2 = $(s2).attr('size');
      bleep = localStorage.getItem('killSwitch');
      location.reload();
    }
  });

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// *** BANK & FX SELECTOR ***
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// FX MODE [ ` ]
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  Mousetrap.bind("`", function() {

    if(!fxModeOn) {
    console.log('FX MODE ON');
    fxModeOn = 1;

    } else {

    console.log('FX MODE OFF');
    fxModeOn = 0;
    // $(s1).add(s2).css('-webkit-filter','none')
    }
  });

  // Kaleidoscope
  Mousetrap.bind("1", function() {
    if(!kaleidoscopeOn) {
      console.log('Kaleidoscope ON');
      kaleidoscopeOn = 1;
      buildKaleidoscope();
      fxChecker();
    } else {
      kaleidoscopeOn = 0;
      console.log('REMOVING KALEIDOSCOPE: ' + stgSelect);
      $(s1).add(s2)
        .removeClass('kaleidoscope');
      $(s1 + ' > div').add(s2 + ' > div')
        .detach().css('mix-blend-mode','normal');
      console.log('Kaleidoscope OFF');
    }
  });

  /* RoboChop */
  Mousetrap.bind("2", function() {
    if(!roboChopOn) {
      roboChopOn = 1;
      console.log('RoboChop ON');
    } else {
      $('.robochop > div').remove();
      $(stgSelect).removeClass('robochop');
      console.log('RoboChop OFF');
      roboChopOn = 0;
    }
  });

  /* SameSame */
  Mousetrap.bind("3", function() {
    if(!sameSameOn) {
      sameSameOn = 1;
      console.log('FX: SAMESAME ON');
      sameSame();
    } else {
      console.log('FX: SAMESAME OFF');
      sameSameOn = 0;
    }
  });

  // STG FADE
  Mousetrap.bind('4', function() {

    if(stgFadeOn == 0) {
    console.log('Fader FX ON');
    stgFadeOn = 1;

    } else {

    console.log('Fader FX OFF');
    stgFadeOn = 0;

    }
  });

  /* Saturate */
  Mousetrap.bind("8", function() {
    if(!saturateOn) {
      saturateOn = 1;
      console.log('FX: SATURATE ON');
      saturator();
    } else {
      console.log('FX: SATURATE OFF');
      saturateOn = 0;
      $(s1).add(s2).css('-webkit-filter', 'none')
    }
  });

  /* HueShift */
  Mousetrap.bind("9", function() {
    if(!hueShiftOn) {
      hueShiftOn = 1;
      console.log('FX: HUESHIFT ON');
      hueShift();
    } else {
      console.log('FX: HUESHIFT OFF');
      hueShiftOn = 0;
      $(s1).add(s2).css('-webkit-filter', 'none')
    }
  });

  /* Blurry */
  Mousetrap.bind("0", function() {
    if(!blurryOn) {
      blurryOn = 1;
      console.log('FX: BLURRY ON');
      blurry();
    } else {
      console.log('FX: BLURRY OFF');
      blurryOn = 0;
      $(s1).add(s2).css('-webkit-filter', 'none')
    }
  });
  
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// *** STAGE PARAMETERS ***
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// STAGE SELECT [ - ] [ = ] [ DEL ]
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  Mousetrap.bind("-", function() {
    console.log('STG1 SELECTED');
    stgSelect = s1;
    stgNotSelected = s2;
  });

  Mousetrap.bind("=", function() {
    console.log('STG2 SELECTED');
    stgSelect = s2;
    stgNotSelected = s1;
  });

  Mousetrap.bind("backspace", function() {
    console.log('All STG 1+2 SELECTED');
    stgSelect = "all";
  });

// STAGE ON/OFF [ SHIFT ] + [ - ], [ = ], [ DEL ]
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  // STAGE 1 ON [ SHIFT ] + [ - ]
  Mousetrap.bind("_", function() {
    console.log('STAGE 1 : ON');
    if(!stageOneOn) {
      stageOneOn = 1;
      $(s1).addClass('on');
      $(s1).removeClass('off');
    } else {
      stageOneOn = 0;
      $(s1).addClass('off');
      $(s1).removeClass('on');
      console.log('STAGE 1 : OFF');
    }
  });

  // STAGE 2 ON [ SHIFT ] + [ = ]
  Mousetrap.bind("+", function() {
    console.log('STAGE 2 : ON');
    if(!stageTwoOn) {
      stageTwoOn = 1;
      $(s2).addClass('on').removeClass('off');
    } else {
      stageTwoOn = 0;
      $(s2).addClass('off').removeClass('on');
      console.log('STAGE 2 : OFF');
    }
  });

  // STAGE 1 + 2 BLEND [ SHIFT ] + [ DEL ]
  Mousetrap.bind("shift+backspace", function() {
    $(s2).toggleClass('blend');
    console.log('S2 Blend to S1');
  });

// STAGE OPACITY [ ALT ] + [ - ], [ = ]
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  // OPACITY OUT SELECTED STAGE [ ALT ] + [ - ]
  Mousetrap.bind("alt+-", function() {
    opacity2 = opacity2 - .1;
    $(stgSelect).css('opacity',opacity2);
    if (opacity2 <= 0) { opacity2 = 0; return; }
  });

  // OPACITY IN SELECTED STAGE [ ALT ] + [ - ]
  Mousetrap.bind("alt+=", function() {
    opacity2 = opacity2 + .1;
    $(stgSelect).css('opacity',opacity2);
    if (opacity2 >= 1) { opacity2 = 1; return; }
  });

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// *** GRID SIZES & LOCKS ***
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// STAGE SIZE [ \ ], [ | ]
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// STAGE 1
  Mousetrap.bind("\\", function() {
    clearClass('grid');

    if(!stageOneLayout) {
      $(s1).css(sf);
      console.log('STAGE1 : Full Screen');
      stageOneLayout = 1;
    } else {
      $(s1).css(st);
      console.log('STAGE1 : Tile');
      stageOneLayout = 0;
    }
  });

// STAGE 2
  Mousetrap.bind("|", function() {
    clearClass('grid');

    if(!stageTwoLayout) {
      $(s2).css(sf);
      console.log('STAGE2 : Full Screen');
      stageTwoLayout = 1;
    } else {
      $(s2).css(st);
      console.log('STAGE2 : Tile');
      stageTwoLayout = 0;
    }
  });

// STAGE SIZE LOCK [ [ ]
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  Mousetrap.bind("[", function() { 

    if(!gifSizeLockOn) {

        console.log(stgSelect + ': Size Locked');

        if(stgSelect == 'all') {
          stageSizeLocked = $(s1).css('background-repeat');
          stageSizeLocked2 = $(s2).css('background-repeat');
          console.log(stageSizeLocked);
          console.log(stageSizeLocked2);
        } else {
          stageSizeLocked = $(stgSelect).css('background-repeat');
          console.log(stageSizeLocked);
        }

        gifSizeLockOn = 1;

    } else {
      gifSizeLockOn = 0;
      console.log(stgSelect + ':  Gif Size Unlocked');
    }
  });

// STAGE LOCK [ ] ]
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  Mousetrap.bind("]", function() { 

    if(!stageLockOn) {

        if(stgSelect == 'all') {

          console.log(stgSelect + ': Locked');
          stageLockedImage = $(s1).css('background-image');
          stageLockedImage2 = $(s2).css('background-image');

        } else {

          console.log(stgSelect + ': Locked');
          stageLockedImage = $(stgSelect).css('background-image');
          console.log('LAST BANK: ' + $(stgNotSelected).attr('bank'));
          lastBank = $(stgNotSelected).attr('bank');
        }

      stageLockOn = 1;

    } else {
      stageLockOn = 0;
      console.log(stgSelect + ': Unlocked');
    }

  });

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// *** SEQUENCERS AND BANKER ***
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// BANKER ON/OFF/CLEAR [ ' ]
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  Mousetrap.bind("'", function() { 

    if(!bankerOn) {
      console.log('CREATING BANKER');
      initialStartUp = 0;
      bankerOn = 1;
      bankerArray = [];
    } else {
      console.log('REMOVING BANKER');
      bankerOn = 0;
      bankerArray = [];
    }
  });

// SAMPLER [ RETURN, ENTER ]
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  Mousetrap.bind('return', function() {
    console.log('LOVE EFFECT');
    var stageSave = $(s1).attr('stage');
    var bankSave = $(s1).attr('bank');
    var gifSave = $(s1).attr('gif');
    var bgSize = $(s1).attr('size');
    var repeatSave = $(s1).attr('repeat');
    var stageSave2 = $(s2).attr('stage');
    var bankSave2 = $(s2).attr('bank');
    var gifSave2 = $(s2).attr('gif');
    var bgSize2 = $(s2).attr('size');
    var repeatSave2 = $(s2).attr('repeat');
    var blendSave = $(s1).attr('blend');
    var blendSave2 = $(s2).attr('blend');


    customSequence1.push([[bankSave],[gifSave],[repeatSave],[bgSize],[blendSave]]);
    customSequenceTwo.push([[bankSave2],[gifSave2],[repeatSave2],[bgSize2],[blendSave2]]);

    if(customSequencerOn) {
      console.log('this is firing during SEQ LOVE');
    }

    console.log('Custom Sequence1: ' + customSequence1);
    console.log('Custom SequenceTwo: ' + customSequenceTwo);
  });

// CUSTOM SEQUENCE PLAY [ SHIFT ] + [ ' ]
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  // INITIATE CUSTOM SEQUENCER
  Mousetrap.bind(';', function() {
    console.log('Loading Custom Sequence');
    customSequencerOn = 1;
    customSequencerOn2 = 1;
    customSeqNum = 1;
    customSeqNum2 = 1;
    curCustomSequencerIndex = -1;
    curCustomSequencerIndex2 = -1;
  });

// LOVE SEQUENCER OFF / CLEAR [ ; ]
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  Mousetrap.bind(":", function() {
    customSequencerOn = 0;
    curSequencerIndex = -1;
    console.log('CUSTOM SEQUENCER STOP');
  });

  Mousetrap.bind("alt+;", function() {
    customSequencerOn = 0;
    curSequencerIndex = -1;
    console.log('CUSTOM SEQUENCER STOP & CLEAR');
    customSequence1, customSequenceTwo = [];
  });

// SEQUENCER ON/OFF [ SHIFT ] + [ ; ]
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  Mousetrap.bind('"', function() {
    sequencerOn = 0;
    curSequencerIndex = -1;
    console.log('SEQUENCER STOP!!');
  });

// STORY MODE ON/OFF [ SHIFT ] + [ ' ]
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  Mousetrap.bind("alt+'", function() {
    console.log('+++ STORY MODE COMING SOON +++');

      if(!storyModeOn) {
        console.log('StoryMode ON');
        storyModeOn = 1;
      } else {
        console.log('StoryMode OFF');
        storyModeOn = 0;

      }
  });

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// *** ROBOMODE ***
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// STAGEFLIP [ SPACEBAR ] 
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    
    Mousetrap.bind("space", function() {

        if(!startUpKey) {

          console.log('STARTUP KEY IS STARTING THE APP');
          startUpKey = 1;
          giy = 1;
          stageSetup();
          $('.title-page').fadeOut('slow', function() { $(this).remove(); });
          
        } else {

          console.log('StageFlip');
          stageFlip();

        }
    });

// ROBOMODE [ SHIFT ] + [ . ]
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    
    Mousetrap.bind(">", function() {
      if(!robomodeOn) {
        giy = 0;
        console.log('INITIAL STARTUP ENDS NOW');
        console.log('RoboMode ON');
        robomodeOn = 1;
        startRobomode(beatTime);
        clearBeatTime();
      } else {
        giy = 1;
        stopRobomode();
        robomodeOn = 0;

      }
    });

// GPS SET [ SHIFT ] + [ . ]
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  
  Mousetrap.bind("<", function() {
    setGPS();
  });

// GPS SPEEDS [ , ] [ . ] [ / ]
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

    // GPS - HALF TIME [ , ]
    Mousetrap.bind(",", function() {
      if(robomodeOn == 1) {
        beatTime = (beatTime/2);
        clearBeatTime();
        console.log('GPS[1/2] :' + beatTime);
      }
    });

    // GPS - RoboFill [ . ]
    Mousetrap.bind(".", function() {
      if(robomodeOn == 1) {
        if(roboFillOn == 0) {
          previousGps = beatTime;
          roboFillOn = 1;
          beatTime = (beatTime / 8);
          console.log('previousGps: ' + previousGps);
          console.log('GPS - Super Fill ON :' + beatTime);
          clearBeatTime();
        } else {
          roboFillOn = 0;
          beatTime = previousGps;
          clearBeatTime();
          console.log('GPS - Super Fill OFF :' + beatTime);
          console.log('back to previousGps: ' + previousGps);
        }
      }
    });

    // GPS - X2 [ / ]
    Mousetrap.bind("/", function() {
      if(robomodeOn == 1) {
        beatTime = (beatTime*2);
        clearBeatTime();
        console.log('GPS[x2] :' + beatTime);
      }
    });

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// CURSOR KEY EFFECTS [ UP ], [ DOWN ], [ LEFT ], [ RIGHT ]
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  // BLUR - Down Arrow
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  kd.DOWN.down(function () {
    if (effectAmount >= 10) { return false; }
    $(stgSelect).css('-webkit-filter','blur('+ (effectAmount++) +'px)');
  });
  kd.DOWN.up(function () { $(stgSelect).css(filterClear); effectAmount = 0; });

  // SATURATE - Up Arrow
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  kd.UP.down(function () {
    if (effectAmount >= 10) { return false; }
    $(stgSelect).css('-webkit-filter','saturate('+ (effectAmount++) + ')');
  });
  kd.UP.up(function () { $(stgSelect).css(filterClear); effectAmount = 0; });

  // INVERT - Right Arrow
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  kd.RIGHT.down(function () {
    $(stgSelect).css('-webkit-filter','invert('+ (effectAmount++) + ')');
  });
  kd.RIGHT.up(function () { $(stgSelect).css(filterClear); effectAmount = 0; });

  // HUE ROTATE - Left Arrow
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  kd.LEFT.down(function () {
    $(stgSelect).css('-webkit-filter','hue-rotate('+ (effectAmount++) + 'deg)');
  });
  kd.LEFT.up(function () { $(stgSelect).css(filterClear); effectAmount = 0; });

  // KILL SWITCH
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    Mousetrap.bind("alt+ctrl+esc", function() {
      console.log('KILL SWITCH ENABLED');
      localStorage.setItem('killSwitch','killed');

      stageParameters();

      localStorage.setItem('stg1Bank',$(s1).attr('bank'));
      localStorage.setItem('stg2Bank',$(s2).attr('bank'));
      localStorage.setItem('stg1Gif',$(s1).attr('gif'));
      localStorage.setItem('stg2Gif',$(s2).attr('gif'));
      localStorage.setItem('stg1Repeat',$(s1).attr('repeat'));
      localStorage.setItem('stg2Repeat',$(s2).attr('repeat'));
      localStorage.setItem('stg1Size',$(s1).attr('size'));
      localStorage.setItem('stg2Size',$(s2).attr('size'));
      localStorage.setItem('stg1Blend',$(s1).attr('blend'));
      localStorage.setItem('stg2Blend',$(s2).attr('blend'));

          var bgSize2 = $(s2).attr('size');


      bleep = localStorage.getItem('killSwitch');
      location.reload();
    });

  // SELECTING BANKS
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

    var bankSelectKeyArray = [')','!','@','#','$','%','^','&','*','('];
    for(let i = 0; i < bankSelectKeyArray.length; i++) {
        Mousetrap.bind(bankSelectKeyArray[i], function() {
          bankNumber = i; console.log('S1 BANK SELECTED : ' + bankNumber);
          var numberKey = bankNumber;
          if(bankerOn == 1) {
            bankerArray.push(bankNumber);
            console.log('Bank ' + numberKey + ' added to Banker'); console.log(bankerArray);
          } else {
            console.log('BANK SELECTED : ' + bankNumber);
          }
        });
    }

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// MAIN KEYBOARD TRIGGERS
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

    for(let i = 0; i < letterArray.length; i++) {
      Mousetrap.bind(letterArray[i], function() {

        if (storyModeOn) {
          console.log('You can soon start selecting StoryMode Keys');

              sequencerOn = 1;
              sequenceNumber = letterArray[i];
              console.log(sequenceNumber);
              curSequencerIndex = 0;

        } else if (giy) {
            console.log('GIY MODE');

            if (bankNumber) {
              console.log('kickin" this letter thing?');
              bankNumberS1 = bankNumber;
              bankNumberS2 = bankNumber;
            } else {
              bankNumberS1 = bankSelectorS1;
              bankNumberS2 = bankSelectorS2;
            }

          if (stgSelect == s1) {
            $(stgSelect).css('background', bankLocation + bankNumberS1 + '/' + letterArray[i] + bgCenter);

          } else {
            $(stgSelect).css('background', bankLocation + bankNumberS2 + '/' + letterArray[i] + bgCenter);
          }

        } else {


          if (giy) {
            console.log('say yeah!!!');
          }

          console.log('when is this firing??');
          $(stgSelect).css('background', bankLocation + bankNumberS1 + '/' + letterArray[i] + bgCenter);
          // stageOneLayout = 0; stageTwoLayout = 0;

        }

      });
    }

});

