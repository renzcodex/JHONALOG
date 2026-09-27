const envelope =
    document.getElementById("envelope");

const continueBtn =
    document.getElementById("continueBtn");

const finalScreen =
    document.getElementById("finalScreen");

const restartBtn =
    document.getElementById("restartBtn");

const particles =
    document.getElementById("particles");


/* =========================
   LETTER STATE
========================= */

let letterOpened = false;


/* =========================
   OPEN ENVELOPE
========================= */

envelope.addEventListener("click", function () {

    if (letterOpened) {
        return;
    }

    letterOpened = true;

    envelope.classList.add("open");


    /*
       Wait for the envelope
       animation.
    */

    setTimeout(function () {

        continueBtn.classList.add("show");

    }, 1200);

});


/* =========================
   FLOATING PARTICLES
========================= */

function createParticle() {

    const particle =
        document.createElement("div");

    particle.classList.add("particle");


    particle.style.left =
        Math.random() * 100 + "vw";


    particle.style.animationDuration =
        5 + Math.random() * 7 + "s";


    const size =
        2 + Math.random() * 5;


    particle.style.width =
        size + "px";


    particle.style.height =
        size + "px";


    particles.appendChild(particle);


    setTimeout(function () {

        particle.remove();

    }, 13000);
}


setInterval(
    createParticle,
    300
);


/* =========================
   FINAL REVEAL
========================= */

continueBtn.addEventListener(
    "click",
    function () {

        finalScreen.classList.add(
            "show"
        );

        createExplosion();

    }
);


/* =========================
   EXPLOSION
========================= */

function createExplosion() {

    for (
        let i = 0;
        i < 100;
        i++
    ) {

        const spark =
            document.createElement("div");


        spark.style.position =
            "fixed";

        spark.style.left =
            "50%";

        spark.style.top =
            "50%";


        spark.style.width =
            "4px";

        spark.style.height =
            "4px";


        spark.style.background =
            "white";


        spark.style.borderRadius =
            "50%";


        spark.style.boxShadow =
            "0 0 10px #ff315e";


        spark.style.zIndex =
            "50";


        spark.style.pointerEvents =
            "none";


        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            100 +
            Math.random() *
            500;


        const x =
            Math.cos(angle) *
            distance;


        const y =
            Math.sin(angle) *
            distance;


        spark.animate(

            [
                {
                    transform:
                        "translate(-50%, -50%) scale(1)",

                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )
                        scale(0)`,

                    opacity: 0
                }
            ],

            {
                duration:
                    800 +
                    Math.random() *
                    1200,

                easing:
                    "cubic-bezier(.2,.8,.2,1)"
            }

        );


        document.body.appendChild(
            spark
        );


        setTimeout(
            function () {

                spark.remove();

            },
            2200
        );

    }
}


/* =========================
   RESTART
========================= */

restartBtn.addEventListener(
    "click",
    function () {

        finalScreen.classList.remove(
            "show"
        );


        envelope.classList.remove(
            "open"
        );


        continueBtn.classList.remove(
            "show"
        );


        letterOpened = false;

    }
);