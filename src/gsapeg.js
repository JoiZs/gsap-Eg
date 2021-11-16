import { Bounce, gsap } from "gsap";
import React from "react";
import { useEffect } from "react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function Gsapeg() {
  const header = React.createRef();
  const rotateLogo = () => {
    var tl = gsap.timeline();

    var tween1 = gsap.fromTo(
      "#d30",
      { opacity: 0, rotation: 90, transformOrigin: "center" },
      { opacity: 1, rotation: 0, duration: 2.6 }
    );
    var tween2 = gsap.fromTo(
      "#d30n",
      { opacity: 0, rotation: -90, transformOrigin: "center" },
      { opacity: 1, rotation: 0, duration: 2.8, delay: 0.2 }
    );
    var tween3 = gsap.fromTo(
      "#d90",
      { opacity: 0, rotation: -180, transformOrigin: "center" },
      { opacity: 1, rotation: 0, duration: 3, delay: 0.4 }
    );
  };
  useEffect(() => {
    // gsap.to(header.current, {color:"#AAEE33", duration:2 });
    rotateLogo();
  }, [header]);

  return (
    <div style={{ height: "100vh" }}>
      <section
        id="section1"
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Scroll To</h1>
        <button
          style={{
            background: "rgb(211,10,10)",
            color: "#fff",
            borderRadius: "3px",
            border: "none",
            padding: "5px",
          }}
          onClick={() => {
            gsap.to(window, { duration: 2.5, scrollTo: "#section2" });
            rotateLogo();
          }}
        >
          React
        </button>
      </section>
      <section
        id="section2"
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "visible",
        }}
      >
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="200.000000pt"
          height="300.000000pt"
          viewBox="0 0 1000.000000 1000.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(75.000000,800.000000) scale(0.100000,-0.100000)"
            fill="#ab3433"
            stroke="none"
            id="d30g"
          >
            <path
              id="d30"
              d="M6965 6603 c-67 -5 -328 -33 -355 -38 -14 -2 -56 -9 -95 -15 -183
                -29 -558 -119 -746 -179 -53 -17 -101 -31 -107 -31 -15 0 -302 -101 -412 -145
                -167 -67 -329 -134 -347 -144 -10 -6 -47 -22 -83 -37 -90 -36 -468 -220 -605
                -294 -27 -15 -99 -53 -160 -85 -135 -71 -512 -297 -618 -370 -42 -29 -104 -70
                -138 -90 -88 -54 -382 -261 -547 -387 -79 -59 -145 -108 -147 -108 -13 0 -356
                -284 -465 -385 -36 -33 -113 -102 -170 -154 -135 -121 -517 -505 -639 -641
                -52 -58 -109 -121 -127 -142 -55 -60 -286 -341 -339 -412 -27 -37 -54 -72 -60
                -79 -74 -91 -272 -390 -362 -547 -364 -632 -503 -1208 -387 -1608 115 -395
                452 -622 1014 -683 93 -10 460 -13 510 -5 14 3 61 7 105 11 44 3 87 8 95 10 8
                2 38 6 65 10 90 11 288 46 375 66 47 11 93 22 103 24 30 6 247 64 317 84 36
                10 108 31 160 45 52 15 104 32 115 37 12 6 27 11 35 13 8 2 29 9 45 15 17 7
                64 25 105 41 41 15 136 53 210 83 126 51 171 70 276 118 22 11 43 19 47 19 16
                0 504 238 672 329 292 157 426 233 595 340 58 37 118 72 133 79 41 18 796 548
                842 591 22 21 69 60 105 87 76 57 277 223 370 305 175 154 269 239 306 275 22
                21 86 84 143 139 114 110 370 377 422 440 19 22 54 60 78 85 97 99 226 264
                452 580 70 97 219 324 259 395 10 16 34 59 55 95 39 68 178 346 207 415 90
                211 155 433 183 625 23 156 16 390 -15 505 -98 366 -380 594 -847 684 -54 10
                -123 22 -153 26 -60 7 -410 13 -475 8z m355 -457 c58 -3 115 -7 126 -10 12 -2
                39 -7 60 -10 76 -12 190 -48 260 -81 177 -85 254 -217 254 -436 0 -268 -119
                -629 -334 -1019 -57 -101 -230 -380 -268 -430 -11 -14 -62 -81 -113 -150 -123
                -163 -141 -185 -296 -369 -30 -35 -61 -74 -70 -87 -84 -127 -822 -842 -1079
                -1046 -30 -23 -62 -50 -70 -58 -21 -19 -218 -176 -334 -264 -301 -229 -732
                -517 -991 -661 -22 -12 -69 -40 -105 -62 -119 -73 -435 -235 -707 -364 -92
                -43 -387 -172 -423 -184 -3 -1 -18 -7 -35 -14 -32 -14 -148 -57 -255 -97 -362
                -134 -822 -257 -1080 -289 -25 -3 -58 -8 -74 -11 -79 -16 -298 -32 -441 -32
                -198 0 -310 11 -440 44 -317 79 -435 215 -435 499 0 319 162 755 455 1225 96
                154 286 423 331 470 13 14 61 75 107 136 45 61 105 138 134 170 28 32 68 80
                89 105 102 123 249 278 454 481 260 257 301 295 469 438 68 58 156 133 196
                166 250 215 930 689 1175 822 36 19 83 47 105 62 98 66 533 295 760 400 50 23
                113 52 140 65 172 80 436 187 745 301 262 96 477 156 755 208 105 20 213 41
                240 46 106 21 454 48 550 43 22 -1 87 -4 145 -7z"
            />
          </g>
          <g
            transform="translate(75.000000,800.000000) scale(0.100000,-0.100000)"
            fill="#265e57"
            stroke="none"
            id="d30ng"
          >
            <path
              id="d30n"
              d="M1100 6594 c-19 -2 -82 -11 -140 -20 -661 -99 -991 -485 -939 -1099
                  8 -90 9 -101 29 -205 50 -264 198 -629 393 -970 85 -148 328 -513 408 -611 19
                  -24 45 -60 57 -79 11 -19 32 -46 44 -60 13 -14 30 -34 38 -46 16 -22 100 -119
                  190 -219 30 -33 70 -78 90 -100 124 -139 283 -301 575 -584 97 -94 340 -314
                  411 -371 23 -19 112 -90 196 -158 84 -68 178 -144 208 -171 58 -50 812 -581
                  825 -581 5 0 65 -35 134 -79 140 -87 283 -171 411 -241 47 -26 108 -60 135
                  -75 59 -33 447 -227 555 -277 70 -33 250 -110 515 -221 96 -40 176 -69 330
                  -122 22 -7 65 -20 95 -28 30 -9 109 -31 175 -50 693 -201 1306 -263 1760 -177
                  492 93 790 354 861 755 42 234 0 564 -112 870 -20 55 -43 118 -51 140 -26 72
                  -179 377 -258 515 -99 173 -241 384 -424 630 -80 107 -148 197 -151 200 -3 3
                  -33 37 -65 75 -302 361 -825 878 -1225 1211 -149 123 -244 200 -275 220 -16
                  10 -73 52 -125 92 -331 253 -853 602 -1165 777 -358 201 -770 403 -1100 540
                  -49 20 -115 47 -145 60 -142 60 -540 200 -745 263 -220 68 -553 138 -840 178
                  -114 15 -589 28 -675 18z m445 -454 c77 -6 169 -15 205 -20 36 -6 97 -15 135
                  -21 225 -34 767 -170 785 -198 3 -4 23 -11 45 -15 44 -8 321 -98 372 -122 17
                  -8 36 -14 41 -14 12 0 207 -79 337 -136 17 -7 59 -25 95 -39 116 -47 641 -312
                  795 -401 83 -47 184 -105 225 -128 164 -92 567 -362 805 -539 577 -431 1029
                  -846 1544 -1423 72 -79 321 -382 387 -469 97 -127 192 -277 347 -545 317 -551
                  441 -1090 302 -1325 -98 -169 -355 -266 -735 -279 -134 -4 -349 7 -470 24 -41
                  6 -86 12 -100 14 -89 13 -349 64 -435 86 -246 63 -322 87 -565 173 -85 31
                  -204 73 -265 95 -198 70 -531 218 -775 345 -287 148 -351 182 -520 279 -579
                  331 -1028 643 -1525 1061 -246 206 -636 577 -824 782 -35 39 -85 93 -110 120
                  -61 65 -153 172 -215 249 -28 34 -55 66 -60 72 -6 6 -24 28 -41 49 -16 21 -42
                  52 -56 69 -35 41 -212 291 -273 386 -27 41 -57 87 -67 102 -43 62 -163 279
                  -225 406 -60 124 -163 381 -177 442 -50 224 -55 257 -56 367 -2 176 29 273
                  113 358 157 157 505 228 961 195z"
            />
          </g>
          <g
            transform="translate(415.000000,550.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
            id="circleg"
          >
            <path
              id="circle"
              d="M688 1674 c-168 -30 -310 -105 -434 -228 -264 -265 -316 -655 -131
                -986 57 -101 196 -240 297 -297 329 -184 716 -134 980 127 139 137 218 297
                242 486 30 244 -54 485 -232 664 -130 132 -267 204 -446 235 -104 18 -173 18
                -276 -1z"
            />
          </g>
          <g
            transform="translate(295.000000,994.000000) scale(0.100000,-0.100000)"
            fill="#f3e923"
            stroke="none"
            id="d90g"
          >
            <path
              id="d90"
              d="M1917 9925 c-212 -44 -396 -154 -603 -360 -245 -243 -463 -582 -649
                -1005 -20 -47 -43 -99 -51 -116 -25 -58 -131 -348 -164 -449 -17 -55 -38 -116
                -46 -135 -33 -80 -94 -311 -168 -645 -24 -108 -32 -147 -60 -295 -65 -340
                -125 -802 -151 -1168 -15 -211 -25 -912 -17 -1237 7 -278 51 -754 97 -1050 7
                -49 19 -124 25 -165 5 -41 15 -97 20 -125 6 -27 19 -97 30 -155 37 -196 80
                -389 132 -590 29 -116 36 -141 83 -305 41 -140 124 -392 157 -475 16 -41 37
                -93 46 -115 31 -80 156 -350 194 -424 167 -317 326 -542 522 -736 418 -415
                841 -485 1268 -210 289 187 558 525 799 1005 219 438 396 949 498 1435 12 55
                49 230 60 285 6 25 17 83 25 130 8 47 17 99 20 115 44 235 109 760 125 1005 6
                85 16 218 22 295 14 172 7 1048 -9 1285 -27 376 -87 864 -142 1155 -31 167
                -42 221 -64 320 -13 61 -35 164 -50 230 -68 309 -245 829 -396 1160 -337 742
                -747 1202 -1180 1325 -98 28 -278 35 -373 15z m248 -450 c296 -77 629 -485
                910 -1115 109 -244 210 -543 300 -885 15 -55 35 -127 45 -160 20 -64 34 -124
                80 -355 83 -416 141 -864 177 -1365 20 -293 23 -998 5 -1240 -27 -347 -34
                -417 -57 -615 -22 -181 -75 -510 -119 -745 -9 -44 -36 -165 -61 -270 -131
                -553 -261 -929 -460 -1330 -266 -539 -572 -879 -841 -935 -290 -62 -669 298
                -986 935 -44 89 -113 245 -188 430 -47 114 -122 355 -116 371 3 8 2 14 -3 14
                -7 0 -27 56 -81 235 -43 141 -108 397 -135 535 -9 47 -21 105 -27 130 -41 196
                -109 662 -128 880 -6 69 -15 168 -20 221 -24 241 -34 717 -22 1052 7 181 17
                373 22 426 5 53 14 152 20 221 23 263 84 672 154 1030 10 47 23 110 31 140 8
                30 30 125 50 210 83 351 188 698 260 855 33 73 65 146 100 225 58 134 187 378
                264 499 247 389 511 615 726 620 23 1 68 -6 100 -14z"
            />
          </g>
        </svg>
      </section>
    </div>
  );
}
