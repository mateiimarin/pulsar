export const useAuthUser = () => useState('authUser', () => {})
export const useAuthUserData = () => useState('authUserData', () => {})
export const useCurrentProject = () => useState('currentProject', () => {})
export const useCurrentProjectFile = () => useState('currentProjectFile', () => null)
export const useNodes = () => useState('nodes', () => []);
export const useConnections = () => useState('connections', () => []);
export const useVariables = () => useState('variables', () => null);

export const useAppComponents = () => useState('appComponents', () => 
    [
          {
            name: 'Heading 1',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="25px"
            height="25px"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 64C0 46.3 14.3 32 32 32H80h48c17.7 0 32 14.3 32 32s-14.3 32-32 32H112V208H336V96H320c-17.7 0-32-14.3-32-32s14.3-32 32-32h48 48c17.7 0 32 14.3 32 32s-14.3 32-32 32H400V240 416h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H368 320c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V272H112V416h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V240 96H32C14.3 96 0 81.7 0 64z"/></svg>`,
            template: `\n <h1 id="<id>">This is a Heading</h1> \n`,
          },
          {
            name: 'Container',
            icon: `<svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            version="1.1"
            id="svg1059"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg"><defs
              id="defs1063" /><path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="m 1.1413969,6.6101382 c 0,-1.7944504 1.4571004,-3.2491482 3.2545145,-3.2491482 H 19.583646 c 1.797468,0 3.254514,1.4546978 3.254514,3.2491482 V 17.440632 c 0,1.794505 -1.457046,3.249148 -3.254514,3.249148 H 4.3959114 c -1.7974141,0 -3.2545145,-1.454643 -3.2545145,-3.249148 z M 21.10446,19.01868 H 2.89011 V 5.05608 h 18.21435 z"
              fill="#000000"
              id="path1057"
              style="fill:#3d3d3d;fill-opacity:1;stroke-width:1.08394" /></svg>`,
            template: '\n <div class="container container-placeholder-x"></div> \n',
          },
          {
            name: 'Fluid Container',
            icon: `<svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            version="1.1"
            id="svg1059"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg"><defs
              id="defs1063" /><path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="m 1.1413969,6.6101382 c 0,-1.7944504 1.4571004,-3.2491482 3.2545145,-3.2491482 H 19.583646 c 1.797468,0 3.254514,1.4546978 3.254514,3.2491482 V 17.440632 c 0,1.794505 -1.457046,3.249148 -3.254514,3.249148 H 4.3959114 c -1.7974141,0 -3.2545145,-1.454643 -3.2545145,-3.249148 z M 21.10446,19.01868 H 2.89011 V 5.05608 h 18.21435 z"
              fill="#000000"
              id="path1057"
              style="fill:#3d3d3d;fill-opacity:1;stroke-width:1.08394" /></svg>`,
            template: '\n <div class="container-fluid container-placeholder-x"></div> \n',
          },
          {
            name: 'Column Section',
            icon: `<svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            version="1.1"
            id="svg1059"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg"><defs
              id="defs1063" /><path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="m 1.1413969,6.6101382 c 0,-1.7944504 1.4571004,-3.2491482 3.2545145,-3.2491482 H 19.583646 c 1.797468,0 3.254514,1.4546978 3.254514,3.2491482 V 17.440632 c 0,1.794505 -1.457046,3.249148 -3.254514,3.249148 H 4.3959114 c -1.7974141,0 -3.2545145,-1.454643 -3.2545145,-3.249148 z M 21.10446,19.01868 H 2.89011 V 5.05608 h 18.21435 z"
              fill="#000000"
              id="path1057"
              style="fill:#3d3d3d;fill-opacity:1;stroke-width:1.08394" /></svg>`,
            template: '\n <div class="row container-placeholder-x"></div> \n',
          },
          {
            name: '1/2 Column',
            icon: `<svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            version="1.1"
            id="svg27"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg"><defs
              id="defs31" /><g
              id="g25"
              transform="matrix(-0.61024834,-6.8071431e-4,5.7624964e-4,-0.72087641,17.414873,20.495142)"><path
                fill-rule="nonzero"
                d="m 6.7039192,-1.1581676 -13.0958992,0.0018 -0.00447,25.8124066 13.0958991,-0.0018 z m 4.3653018,-6.947e-4 -0.0044,25.8124043 13.095898,-0.0018 0.0044,-25.8124044 z m -19.643211,-3.6845515 34.9224,-0.00513 a 1.8437433,2.1826503 89.945894 0 1 2.182331,1.8434249 l -0.0052,29.4998929 a 1.8437433,2.1826503 89.945894 0 1 -2.18297,1.844064 l -34.9223873,0.0052 A 1.8437433,2.1826503 89.945894 0 1 -10.76215,26.500597 l 0.0051,-29.4998927 a 1.8437433,2.1826503 89.945894 0 1 2.18297,-1.8440658 z"
                id="path23"
                style="fill:#3d3d3d;fill-opacity:1;stroke-width:2.00606;" /></g></svg>`,
            template: '\n <div class="col-sm-6 container-placeholder-x"></div> \n',
          },
          {
            name: '1/3 Column',
            icon: `<svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            version="1.1"
            id="svg142"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg"><defs
              id="defs146" /><path
              style="fill:#3d3d3d;fill-opacity:1;stroke-width:0.0242191"
              d="M 3.0123029,21.510806 C 2.2208806,21.372685 1.445385,20.936124 0.9374187,20.342764 0.50097952,19.832953 0.23144979,19.267329 0.11646398,18.619936 0.07359733,18.378563 0.07154812,18.08446 0.07154812,12.153592 c 0,-5.9308684 0.0020254,-6.2249714 0.04491586,-6.466344 C 0.38134963,4.1958874 1.538891,3.0473803 3.0307744,2.7956825 3.3060466,2.7492406 3.4617069,2.7485479 12.078937,2.7554326 l 8.768071,0.00701 0.210179,0.051854 c 0.978947,0.2415206 1.723847,0.7565635 2.248399,1.5546036 0.254815,0.3876688 0.431318,0.8380819 0.516621,1.3183535 0.04287,0.2413726 0.04492,0.5354756 0.04492,6.4663443 0,5.930867 -0.002,6.22497 -0.04492,6.466343 -0.254769,1.434401 -1.288735,2.50873 -2.76502,2.872957 l -0.210179,0.05186 -8.792427,0.0048 c -8.3898889,0.0046 -8.8038655,0.0028 -9.0422781,-0.03877 z M 7.2199638,12.153592 V 5.0851673 h -1.897183 c -1.8236746,0 -1.9032483,0.00185 -2.0537284,0.047811 -0.4078956,0.124576 -0.7094848,0.4494673 -0.8105026,0.8731247 -0.05428,0.2276719 -0.05428,12.067306 0,12.294977 0.1001016,0.419804 0.3816633,0.728164 0.7908647,0.866127 0.1588223,0.05354 0.1595038,0.05357 2.064712,0.05419 l 1.9058373,6.22e-4 z m 7.1362362,0 V 5.0851673 H 11.969336 9.5824714 v 7.0684247 7.068425 H 11.969336 14.3562 Z m 6.31342,7.020614 c 0.306655,-0.09366 0.558924,-0.303133 0.703453,-0.584127 0.152557,-0.296603 0.142998,0.133726 0.142998,-6.436487 0,-6.5702131 0.0095,-6.1398835 -0.142998,-6.4364873 C 21.228544,5.4361108 20.976275,5.2266348 20.66962,5.1329785 20.519139,5.0870196 20.439565,5.0851677 18.61589,5.0851677 h -1.897183 v 7.0684243 7.068425 h 1.897183 c 1.823675,0 1.903249,-0.0019 2.05373,-0.04781 z"
              id="path595" /></svg>`,
            template: '\n <div class="col-sm-4 container-placeholder-x"></div> \n',
          },
          {
            name: '1/4 Column',
            icon: `<svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            version="1.1"
            id="svg1059"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg"><defs
              id="defs1063" /><path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="m -0.00340719,5.9879065 c 0,-1.9362846 1.23598729,-3.5059625 2.76064629,-3.5059625 H 21.180996 c 1.524703,0 2.740824,1.5696779 2.740824,3.5059625 V 17.674449 c 0,1.936343 -1.216121,3.505962 -2.740824,3.505962 H 2.7572391 c -1.524659,0 -2.76064629,-1.569619 -2.76064629,-3.505962 z M 2.7572391,4.8192524 c -0.5082166,0 -0.9202155,0.5232298 -0.9202155,1.1686541 V 17.674449 c 0,0.645447 0.4119989,1.168655 0.9202155,1.168655 H 5.5178854 V 4.8192524 Z M 11.039179,18.843104 H 7.3583161 V 4.8192524 h 3.6808629 z m 1.84043,0 c 1.214318,0.0057 2.307768,-0.04668 3.521055,0.0053 L 16.520518,4.8337622 c -1.213445,-0.025187 -2.427272,-0.01451 -3.640909,-0.01451 z m 5.485382,0.06354 h 2.37844 c 0.437871,0 1.321114,-0.196919 1.321114,-0.860529 V 6.0307164 c 0,-0.6635859 -0.883243,-1.2015398 -1.321114,-1.2015398 h -2.37844 z"
              fill="#000000"
              id="path1057"
              style="fill:#3d3d3d;fill-opacity:1;stroke-width:1.03701" /></svg>`,
            template: '\n <div class="col-sm-3 container-placeholder-x"></div> \n',
          },
          {
            name: 'Paragraph',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="25px"
            height="25px"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M192 32h64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384l0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-352H288V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H192c-88.4 0-160-71.6-160-160s71.6-160 160-160z"/></svg>`,
            template: '\n <p id="<id>">This is a paragraph</p> \n',
          },
          {
            name: 'Button',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="25px"
            height="25px"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M160 64c0-8.8 7.2-16 16-16s16 7.2 16 16V200c0 10.3 6.6 19.5 16.4 22.8s20.6-.1 26.8-8.3c3-3.9 7.6-6.4 12.8-6.4c8.8 0 16 7.2 16 16c0 10.3 6.6 19.5 16.4 22.8s20.6-.1 26.8-8.3c3-3.9 7.6-6.4 12.8-6.4c7.8 0 14.3 5.6 15.7 13c1.6 8.2 7.3 15.1 15.1 18s16.7 1.6 23.3-3.6c2.7-2.1 6.1-3.4 9.9-3.4c8.8 0 16 7.2 16 16l0 16V392c0 39.8-32.2 72-72 72H272 212.3h-.9c-37.4 0-72.4-18.7-93.2-49.9L50.7 312.9c-4.9-7.4-2.9-17.3 4.4-22.2s17.3-2.9 22.2 4.4L116 353.2c5.9 8.8 16.8 12.7 26.9 9.7s17-12.4 17-23V320 64zM176 0c-35.3 0-64 28.7-64 64V261.7C91.2 238 55.5 232.8 28.5 250.7C-.9 270.4-8.9 310.1 10.8 339.5L78.3 440.8c29.7 44.5 79.6 71.2 133.1 71.2h.9H272h56c66.3 0 120-53.7 120-120V288l0-16c0-35.3-28.7-64-64-64c-4.5 0-8.8 .5-13 1.3c-11.7-15.4-30.2-25.3-51-25.3c-6.9 0-13.5 1.1-19.7 3.1C288.7 170.7 269.6 160 248 160c-2.7 0-5.4 .2-8 .5V64c0-35.3-28.7-64-64-64zm48 304c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304zm48-16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304c0-8.8-7.2-16-16-16zm80 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304z"/></svg>`,
            template: '\n <button id="<id>">Button</button> \n',
          },
          {
            name: 'Webcam',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="25px" height="25px"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg>',
            template: `\n      
              <div id="liveView" class="videoView">
                <video id="webcam" autoplay style="background-color: #f5f5f5; border-radius: 10px;"></video>
                <div style="display: flex; padding: 10px; margin-top: 20px; border-radius: 10px; background-color: #f9f9f9; align-items:center; width: 640px;">
                  <i class="fa-solid fa-circle-dot" id="liveIcon"></i> 
                  <h4 style="font-weight: 600; margin:0px 0px 0px 15px;">Live Cam</h4>
                  <button id="webcamButton" style="font-family: 'Rubik', sans-serif; margin-left: auto; border: none; padding: 0px 14px; height: 32px; border-radius: 5px; font-size: 14px; background-color: #1D5EE0; color: #f5f5f5;">Enable Webcam</button>
                </div>
              </div>
            \n`,
          },
          {
            name: 'Input text',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="25px" height="25px"><path d="m19,3H5C2.243,3,0,5.243,0,8v8c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5v-8c0-2.757-2.243-5-5-5Zm3,13c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3v-8c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3v8Zm-11.863-7.343c-.227-.996-1.065-1.665-2.085-1.665s-1.859.669-2.085,1.665l-1.621,7.121c-.123.538.215,1.074.753,1.196.538.129,1.074-.214,1.197-.753l.278-1.222h2.956l.278,1.222c.105.464.518.778.974.778.074,0,.148-.008.223-.025.539-.122.876-.658.753-1.196l-1.621-7.121Zm-3.108,4.343l.887-3.899c.01-.045.024-.108.135-.108s.125.063.135.108l.887,3.899h-2.045Z"/></svg>',
            template: `\n <input type="text"> \n`,
        },
        {
            name: 'Input slider',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="25px" height="25px"><path d="m19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm3,19c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V5c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3v14Zm-3-11c0,.553-.447,1-1,1h-8v1c0,.553-.447,1-1,1s-1-.447-1-1v-1h-2c-.553,0-1-.447-1-1s.447-1,1-1h2v-1c0-.553.447-1,1-1s1,.447,1,1v1h8c.553,0,1,.447,1,1Zm0,8c0,.553-.447,1-1,1h-2v1c0,.553-.447,1-1,1s-1-.447-1-1v-1H6c-.553,0-1-.447-1-1s.447-1,1-1h8v-1c0-.553.447-1,1-1s1,.447,1,1v1h2c.553,0,1,.447,1,1Z"/></svg>',
            template: `\n <input type="range" min="1" max="100" value="50" class="slider" id="myRange"> \n`,
        },
        {
            name: 'Link',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="25px" height="25px"><path d="M7.896,16.104c-.586-.585-.586-1.536,0-2.121,.586-.586,1.535-.586,2.121,0,1.326,1.326,3.64,1.327,4.966,0l4.989-4.989c1.369-1.369,1.369-3.597,0-4.966s-3.597-1.369-4.966,0c-.586,.586-1.535,.586-2.121,0-.586-.585-.586-1.536,0-2.121,2.538-2.539,6.67-2.539,9.208,0,2.539,2.539,2.539,6.669,0,9.208l-4.989,4.989c-1.27,1.27-2.937,1.904-4.604,1.904s-3.335-.635-4.604-1.904Zm-1.384,7.893c1.667,0,3.334-.635,4.604-1.904,.586-.585,.586-1.536,0-2.121-.586-.586-1.535-.586-2.121,0-1.37,1.37-3.598,1.369-4.966,0-1.369-1.369-1.369-3.597,0-4.966l4.961-4.961c1.37-1.37,3.598-1.37,4.966,0,.586,.586,1.535,.586,2.121,0,.586-.585,.586-1.536,0-2.121-2.539-2.539-6.669-2.539-9.208,0L1.907,12.885c-2.539,2.539-2.539,6.669,0,9.208,1.27,1.27,2.937,1.904,4.604,1.904Z"/></svg>',
            template: `\n <a href="https://google.com" target="_blank">Google</a> \n`,
        },
        {
            name: 'Image',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="25px" height="25px"><path d="M8.5,5c.83,0,1.5,.67,1.5,1.5s-.67,1.5-1.5,1.5-1.5-.67-1.5-1.5,.67-1.5,1.5-1.5Zm7.32,3.18l-.35-1.42c-.11-.44-.51-.76-.97-.76s-.86,.31-.97,.76l-.35,1.41-1.4,.32c-.45,.1-.77,.5-.77,.96,0,.46,.3,.86,.74,.98l1.43,.39,.36,1.43c.11,.44,.51,.76,.97,.76s.86-.31,.97-.76l.35-1.42,1.42-.35c.44-.11,.76-.51,.76-.97s-.31-.86-.76-.97l-1.42-.35Zm.79-3.3l1.76,.74,.7,1.75c.15,.38,.52,.63,.93,.63s.78-.25,.93-.63l.7-1.74,1.74-.7c.38-.15,.63-.52,.63-.93s-.25-.78-.63-.93l-1.74-.7-.7-1.74c-.15-.38-.52-.63-.93-.63s-.78,.25-.93,.63l-.69,1.73-1.73,.66c-.38,.14-.64,.51-.65,.92,0,.41,.23,.78,.61,.94Zm7.39,4.12v10c0,2.76-2.24,5-5,5H5c-2.76,0-5-2.24-5-5V5C0,2.24,2.24,0,5,0H15c.55,0,1,.45,1,1s-.45,1-1,1H5c-1.65,0-3,1.35-3,3v6.59l.56-.56c1.34-1.34,3.53-1.34,4.88,0l5.58,5.58c.54,.54,1.43,.54,1.97,0l.58-.58c1.34-1.34,3.53-1.34,4.88,0l1.56,1.56V9c0-.55,.45-1,1-1s1,.45,1,1Zm-2.24,11.17l-2.74-2.74c-.56-.56-1.48-.56-2.05,0l-.58,.58c-1.32,1.32-3.48,1.32-4.8,0l-5.58-5.58c-.56-.56-1.48-.56-2.05,0l-1.98,1.98v4.59c0,1.65,1.35,3,3,3h14c1.24,0,2.3-.75,2.76-1.83Z"/></svg>',
            template: `\n      
            <img src="https://placehold.co/600x400/png" alt="Loremipsum" />
            \n`,
        },
        {
            name: 'Files Upload',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="25px" height="25px"><path d="m19.95,5.536l-3.485-3.485c-1.322-1.322-3.08-2.05-4.95-2.05h-4.515C4.243,0,2,2.243,2,5v14c0,2.757,2.243,5,5,5h10c2.757,0,5-2.243,5-5v-8.515c0-1.87-.728-3.627-2.05-4.95Zm-1.414,1.414c.318.318.587.671.805,1.05h-4.341c-.551,0-1-.449-1-1V2.659c.379.218.733.487,1.05.805l3.485,3.485Zm1.464,12.05c0,1.654-1.346,3-3,3H7c-1.654,0-3-1.346-3-3V5c0-1.654,1.346-3,3-3h4.515c.163,0,.325.008.485.023v4.977c0,1.654,1.346,3,3,3h4.977c.015.16.023.322.023.485v8.515Zm-4.293-4.519c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-1.293-1.293v4.398c0,.552-.448,1-1,1s-1-.448-1-1v-4.398l-1.293,1.293c-.391.391-1.023.391-1.414,0s-.391-1.023,0-1.414l1.614-1.614c1.154-1.154,3.032-1.154,4.187,0l1.614,1.614Z"/></svg>',
            template: `\n 
              <label for="files" class="form-label">Select files:</label>
              <input type="file" id="<id>" name="files" class="form-control" multiple><br><br>
              <button id="fileSubmit">Submit</button>
            \n`,
        },
    
        {
            name: 'Block',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="25px" height="25px"><path d="m19.95,5.536l-3.485-3.485c-1.322-1.322-3.08-2.05-4.95-2.05h-4.515C4.243,0,2,2.243,2,5v14c0,2.757,2.243,5,5,5h10c2.757,0,5-2.243,5-5v-8.515c0-1.87-.728-3.627-2.05-4.95Zm-1.414,1.414c.318.318.587.671.805,1.05h-4.341c-.551,0-1-.449-1-1V2.659c.379.218.733.487,1.05.805l3.485,3.485Zm1.464,12.05c0,1.654-1.346,3-3,3H7c-1.654,0-3-1.346-3-3V5c0-1.654,1.346-3,3-3h4.515c.163,0,.325.008.485.023v4.977c0,1.654,1.346,3,3,3h4.977c.015.16.023.322.023.485v8.515Zm-4.293-4.519c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-1.293-1.293v4.398c0,.552-.448,1-1,1s-1-.448-1-1v-4.398l-1.293,1.293c-.391.391-1.023.391-1.414,0s-.391-1.023,0-1.414l1.614-1.614c1.154-1.154,3.032-1.154,4.187,0l1.614,1.614Z"/></svg>',
            template: `\n <div class="container-placeholder-x"></div> \n`,
        },
        {
                name: 'Icon',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="25px" height="25px"><path d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z"/></svg>',
                template: `\n <i class="fi fi-rr-home"></i> \n`,
        },
        {
                name: 'List',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"  width="25px" height="25px">     <path d="m19,1H5C2.243,1,0,3.243,0,6v12c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V6c0-2.757-2.243-5-5-5Zm3,17c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V6c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3v12Zm-3-11c0,.552-.448,1-1,1h-7c-.552,0-1-.448-1-1s.448-1,1-1h7c.552,0,1,.448,1,1Zm-11,0c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm11,5c0,.552-.448,1-1,1h-7c-.552,0-1-.448-1-1s.448-1,1-1h7c.552,0,1,.448,1,1Zm-11,0c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm11,5c0,.552-.448,1-1,1h-7c-.552,0-1-.448-1-1s.448-1,1-1h7c.552,0,1,.448,1,1Zm-11,0c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Z"/></svg>',
                template: `\n <ul class="list">
                <li class="list-item one">Item 1</li>
                <li class="list-item two">Item 2</li>
                <li class="list-item three">Item 3</li>
                <li class="list-item four">Item 4</li>
                </ul> \n`,
        },
        {
          name: 'Table',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="25px" height="25px"><path d="m19,2H5C2.243,2,0,4.243,0,7v10c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V7c0-2.757-2.243-5-5-5ZM2,10h4v4H2v-4Zm6,0h14v4h-14v-4Zm14-3v1h-14v-4h11c1.654,0,3,1.346,3,3ZM5,4h1v4H2v-1c0-1.654,1.346-3,3-3Zm-3,13v-1h4v4h-1c-1.654,0-3-1.346-3-3Zm17,3h-11v-4h14v1c0,1.654-1.346,3-3,3Z"/></svg>',
          template: `\n 
          <table class="table" id="myTable">
            <thead>
              <tr>
                <th scope="col">Column 1</th>
                <th scope="col">Column 2</th>
                <th scope="col">Column 3</th>
                <th scope="col">Column 4</th>
                <th scope="col">Column 5</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
          
          \n`,
        },
    ]
)

export const useAppModules = () => useState('appModules', () => 
    [
        {
            name: 'Object Identification', 
            icon: 'fi fi-rr-object-subtract',
            startScript: `
            var model = undefined;

            cocoSsd.load().then(function (loadedModel) {
              model = loadedModel;
            });
            const video = document.getElementById('webcam');
            const liveView = document.getElementById('liveView');
            
            // Check if webcam access is supported.
            function hasGetUserMedia() {
              return !!(navigator.mediaDevices &&
                navigator.mediaDevices.getUserMedia);
            }
            
            // Keep a reference of all the child elements we create
            // so we can remove them easilly on each render.
            var children = [];
            
            
            // If webcam supported, add event listener to button for when user
            // wants to activate it.
            if (hasGetUserMedia()) {
              const enableWebcamButton = document.getElementById('webcamButton');
              enableWebcamButton.addEventListener('click', enableCam);
            } else {
              console.warn('getUserMedia() is not supported by your browser');
            }
            
            
            // Enable the live webcam view and start classification.
            function enableCam(event) {
              if (!model) {
                console.log('Wait! Model not loaded yet.')
                return;
              }
              
              // Hide the button.
              event.target.classList.add('removed');  
              
              // getUsermedia parameters.
              const constraints = {
                video: true
              };
            
              // Activate the webcam stream.
              navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
                video.srcObject = stream;
                video.addEventListener('loadeddata', predictWebcam);
              });
            }
            
            const objects = new Map();
            // Prediction loop!
            async function predictWebcam() {
              // Now let's start classifying the stream.
              model.detect(video).then(function (predictions) {
                // Remove any highlighting we did previous frame.
                for (let i = 0; i < children.length; i++) {
                  liveView.removeChild(children[i]);
                }
                children.splice(0);

                // Now lets loop through predictions and draw them to the live view if
                // they have a high confidence score.
                for (let n = 0; n < predictions.length; n++) {
                  if (predictions[n].score > 0.66) {
                    const p = document.createElement('p');
                    var cocoPrediction = predictions[n].class;
                    p.innerText = cocoPrediction  + ' - with ' 
                        + Math.round(parseFloat(predictions[n].score) * 100) 
                        + '% confidence.';
                    // Draw in top left of bounding box outline.
                    p.style = 'left: ' + predictions[n].bbox[0] + 'px;' +
                        'top: ' + predictions[n].bbox[1] + 'px;' + 
                        'width: ' + (predictions[n].bbox[2] - 10) + 'px;';
            
                    // Draw the actual bounding box.
                    const highlighter = document.createElement('div');
                    highlighter.setAttribute('class', 'highlighter');
                    highlighter.style = 'left: ' + predictions[n].bbox[0] + 'px; top: '
                        + predictions[n].bbox[1] + 'px; width: ' 
                        + predictions[n].bbox[2] + 'px; height: '
                        + predictions[n].bbox[3] + 'px;';
            
                    liveView.appendChild(highlighter);
                    liveView.appendChild(p);
                    
                    // Store drawn objects in memory so we can delete them next time around.
                    children.push(highlighter);
                    children.push(p);

                    const time = Date.now();
                    let isObjectNewIdentification = false;
                    if(objects.has(cocoPrediction)) {
                      const lastIdentification = objects.get(cocoPrediction);
                      if(time - lastIdentification > 3000) {
                        isObjectNewIdentification = true;
                        console.log(time, lastIdentification, time-lastIdentification)
                      }
                      objects.set(cocoPrediction, time);
                    }
                    else {
                      objects.set(cocoPrediction, time);
                      isObjectNewIdentification = true;
                    }

                    if(isObjectNewIdentification) {
            `, 
            endScript: `
                    }
                  }
                }
                
                // Call this function again to keep predicting when the browser is ready.
                window.requestAnimationFrame(predictWebcam);
              });
            }`,
            editable: false,
            output: 'cocoPrediction'
        },
        {
            name: 'Image Classifier', 
            icon: 'fi fi-rr-picture',
            startScript: `console.log(result/3) \n`, 
            endScript: `john doe \n`,
            editable: true,
        },
        {
            name: 'ChatGPT', 
            icon: 'fi fi-rr-align-left',
            startScript: `
            var chatGPTResponse;
            const chatgpt = async  () => {
              const response = await fetch("http://localhost:3000/api/chatgpt", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: <variable>,
              });
              json = await response.json();
              chatGPTResponse = json.result;
            `, 
            endScript: `
          }

          chatgpt();`,
            output: 'chatGPTResponse',
            editable: true,
        },
        {
            name: 'Speech To Text', 
            icon: 'fi fi-rr-music-file',
            startScript: ``, 
            endScript: ``,
            editable: false,
        },
        {
          name: 'Text to Speech', 
          icon: 'fi fi-rr-music-file',
          startScript: `
          if('speechSynthesis' in window) {
            var speech = new SpeechSynthesisUtterance();
            speech.text = <variable>;
            window.speechSynthesis.speak(speech);
          `, 
          endScript: `
          }
          else alert("Text to Speech is not supported by your browser");
          `,
          editable: true,
        },
        {
            name: 'Javascript', 
            icon: 'fi fi-rr-code-simple',
            startScript: ``, 
            endScript: ``,
            editable: true,
        },
        {
          name: 'Notification', 
          icon: 'fi fi-rr-bell',
          startScript: `
          
            Notification.requestPermission().then(function(permission) {
              if (permission === 'granted') {
                new Notification('<variable>');
              }
            });

          `, 
          endScript: ``,
          editable: true,
      },
      {
        name: 'PDF Text Extraction', 
        icon: 'fi fi-rr-file-pdf',
        startScript: `
        let uploadFiles= document.getElementById("upfile").files;

        uploadFiles.forEach((file) => {
            const formData = new FormData();
            formData.append('pdf', file);

            fetch('https://pdf-parse.vercel.app', {
              method: 'POST',
              body: formData
            }).then(response => response.text())
            .then(text => {
                let pdfText = text.trim();
        `, 
        endScript: `
        })
      })
        `,
        output: 'pdfText',
        editable: true,
    },
    {
      name: 'Event Listener', 
      icon: 'fi fi-rr-bullseye-pointer',
      startScript: `
      document.getElementById(<elementId>).addEventListener("<event>", async function() {
        
      `, 
        endScript: `
      });
        `,
        editable: true,
    },
    {
      name: 'Create DB Doc', 
      icon: 'fi fi-rr-add-document',
      startScript: `
      await fetch('http://localhost:3000/api/add-document', {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ projectId: '<projectId>', collectionName: '<collectionName>', documentData: { <documentData> }}),
      });
        
      `, 
        endScript: ``,
        output: 'newDocument',
        editable: true,
    },
    {
      name: 'Write to Table', 
      icon: 'fi fi-rr-table-list',
      startScript: `
      function addRowFromObject(obj) {
        // Get the table by its id
        var table = document.getElementById("myTable");
      
        // Get the current row count of the table (excluding the header row)
        var currentRowCount = table.rows.length - 1;
      
        // Create a new row
        var newRow = table.insertRow(-1);
      
        // Create a cell for the index and set its text content to the current row count
        var indexCell = newRow.insertCell(-1);
        indexCell.setAttribute("scope", "row");
        indexCell.textContent = currentRowCount;
      
        // Iterate through the properties of the input object
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            // Create a cell and set its text content to the property value
            var cell = newRow.insertCell(-1);
            cell.textContent = obj[key];
          }
        }
      }
      let object = JSON.parse(<variable>);
      addRowFromObject(object);
        
      `, 
        endScript: ``,
        editable: true,
    },
    ]
)

export const useHtmlSkeleton = () => useState('htmlSkeleton', () => [{
  head: `
  <!DOCTYPE html>
  <html lang="en">
  <meta charset="UTF-8">
  <title> {pageTitle} </title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <script src="https://kit.fontawesome.com/bd8cc152d1.js" crossorigin="anonymous"></script>
  <style>
  body {
    font-family: 'Rubik', sans-serif;
    margin: 0px !important;
    overflow-x: hidden;
  }

  .container-fluid {
    padding: 0px !important;
  }

  .videoView {
    position: relative;
    float: left;
    width: 48%;
    margin: 2% 1%;
    cursor: pointer;
  }

  video {
    clear: both;
    display: block;
  }  
  
  .videoView p {
    position: absolute;
    padding: 5px;
    background-color: black;
    border-radius: 4px 4px 0px 0px;
    padding-top: 8px;
    padding-bottom: 8px;
    color: #FFF;
    z-index: 2;
    font-size: 12px;
    margin: 0;
  }
  
  .highlighter {
    background: rgba(254, 254, 254, 0.35);
    border: 1px dashed #fff;
    z-index: 1;
    position: absolute;
  }

  #liveIcon{
    color:red;
    opacity: 1;
    animation: fade 1.5s infinite;
  }  
  @keyframes fade {
    0%,100% { opacity: 0 }
    50% { opacity: 1 }
  } 
  
  </style>
  <body> 
    {htmlContent} 
  </body>
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@3.11.0/dist/tf.min.js" type="text/javascript"></script>
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd"></script>
  <script> 
    {scriptContent} 
  </script>
  </html>
  `,
}])