let clapSound: HTMLAudioElement;
let boomSound: HTMLAudioElement;
let hihatSound: HTMLAudioElement;
let kickSound: HTMLAudioElement;
let openhatSound: HTMLAudioElement;
let rideSound: HTMLAudioElement;
let snareSound: HTMLAudioElement;
let tinkSound: HTMLAudioElement;
let tomSound: HTMLAudioElement;

const channel1: any[] = [];
const channel2: any[] = [];
const channel3: any[] = [];
const channel4: any[] = [];

let checkBox1: HTMLInputElement;
let checkBox2: HTMLInputElement;
let checkBox3: HTMLInputElement;
let checkBox4: HTMLInputElement;

let chanel1Record: HTMLButtonElement;
let chanel2Record: HTMLButtonElement;
let chanel3Record: HTMLButtonElement;
let chanel4Record: HTMLButtonElement;

let chanel1RecordStart: number;
let chanel2RecordStart: number;
let chanel3RecordStart: number;
let chanel4RecordStart: number;

appStart();

function appStart(): void {
    getChannel()

    document.addEventListener('keypress', onKeyDown);
    getAudioElements();


    playSelectedChannel();
    playAllChannels();

}

function getChannel() {
    checkBox1 = document.querySelector('.checkBox1');
    checkBox2 = document.querySelector('.checkBox2');
    checkBox3 = document.querySelector('.checkBox3');
    checkBox4 = document.querySelector('.checkBox4');

    chanel1Record = document.querySelector('#chanel1Record');
    chanel2Record = document.querySelector('#chanel2Record');
    chanel3Record = document.querySelector('#chanel3Record');
    chanel4Record = document.querySelector('#chanel4Record');
    checkChannel();
}

function checkChannel(): void {
    chanel1Record.addEventListener("click", (ev: Event) => {
        if (checkBox1.checked == false) {

            checkBox1.checked = true;
            chanel1RecordStart = ev.timeStamp;
            console.log(chanel1RecordStart);

        } else if (checkBox1.checked == true) {

            checkBox1.checked = false

        }
        console.log(checkBox1.checked)
    })
    chanel2Record.addEventListener("click", (ev: Event) => {
        if (checkBox2.checked == false) {

            checkBox2.checked = true;
            chanel2RecordStart = ev.timeStamp;
            console.log(chanel2RecordStart);


        } else if (checkBox2.checked == true) {

            checkBox2.checked = false;
        }
        console.log(checkBox2.checked)

    })
    chanel3Record.addEventListener("click", (ev: Event) => {
        if (checkBox3.checked == false) {

            checkBox3.checked = true;
            chanel3RecordStart = ev.timeStamp;
            console.log(chanel3RecordStart);


        } else if (checkBox3.checked == true) {

            checkBox3.checked = false;
        }
        console.log(checkBox3.checked)

    })
    chanel4Record.addEventListener("click", (ev: Event) => {
        if (checkBox4.checked == false) {

            checkBox4.checked = true;
            chanel4RecordStart = ev.timeStamp;
            console.log(chanel4RecordStart);


        } else if (checkBox4.checked == true) {

            checkBox4.checked = false;
        }
        console.log(checkBox4.checked)
    })
}

function playSelectedChannel() {
    const btnChannel1Play = document.querySelector('#chanel1Play');
    btnChannel1Play.addEventListener('click', onChannel1Play);

    const btnChannel2Play = document.querySelector('#chanel2Play');
    btnChannel2Play.addEventListener('click', onChannel2Play);

    const btnChannel3Play = document.querySelector('#chanel3Play');
    btnChannel3Play.addEventListener('click', onChannel3Play);

    const btnChannel4Play = document.querySelector('#chanel4Play');
    btnChannel4Play.addEventListener('click', onChannel4Play);
}

function onChannel1Play(): void {
    channel1.forEach((sound) => {
        setTimeout(() => playSound(sound.key), sound.time - sound.start1Time)
    })
}
function onChannel2Play(): void {
    channel2.forEach((sound) => {
        setTimeout(() => playSound(sound.key), sound.time - sound.start2Time)
    })
}
function onChannel3Play(): void {
    channel3.forEach((sound) => {
        setTimeout(() => playSound(sound.key), sound.time - sound.start3Time)
    })
}
function onChannel4Play(): void {
    channel4.forEach((sound) => {
        setTimeout(() => playSound(sound.key), sound.time - sound.start4Time)
    })
}

function playAllChannels() {
    const playAllChannelsBtn = document.querySelector(".allChannelsPlayBtn");
    playAllChannelsBtn.addEventListener("click", onAllChannels);
}

function onAllChannels() {
    onChannel1Play();
    onChannel2Play();
    onChannel3Play();
    onChannel4Play();
}

function getAudioElements() {
    clapSound = document.querySelector('[data-sound="clap"]');
    boomSound = document.querySelector('[data-sound="boom"]');
    hihatSound = document.querySelector('[data-sound="hihat"]');
    kickSound = document.querySelector('[data-sound="kick"]');;
    openhatSound = document.querySelector('[data-sound="openhat"]');
    rideSound = document.querySelector('[data-sound="ride"]');
    snareSound = document.querySelector('[data-sound="snare"]');
    tinkSound = document.querySelector('[data-sound="tink"]');
    tomSound = document.querySelector('[data-sound="tom"]');
}


function onKeyDown(ev: KeyboardEvent): void {
    const key = ev.key;
    const time = ev.timeStamp;
    const start1Time = chanel1RecordStart;
    const start2Time = chanel2RecordStart;
    const start3Time = chanel3RecordStart;
    const start4Time = chanel4RecordStart;
    // a = document.querySelector('.checkBox1')
    // console.log(a.checked);
    playSound(key);



    if (checkBox1.checked == true) {
        channel1.push({ key, time, start1Time });
        console.log(channel1);

    }
    if (checkBox2.checked == true) {
        channel2.push({ key, time, start2Time });
        console.log(channel2);

    }
    if (checkBox3.checked == true) {
        channel3.push({ key, time, start3Time });
        console.log(channel3);

    }
    if (checkBox4.checked == true) {
        channel4.push({ key, time, start4Time });
        console.log(channel4);

    }


}
function playSound(key: string): void {
    switch (key) {
        case 'a':
            clapSound.currentTime = 0;
            clapSound.play();
            break;
        case 's':
            boomSound.currentTime = 0;
            boomSound.play();
            break;
        case 'd':
            hihatSound.currentTime = 0;
            hihatSound.play();
            break;
        case 'f':
            kickSound.currentTime = 0;
            kickSound.play();
            break;
        case 'g':
            openhatSound.currentTime = 0;
            openhatSound.play();
            break;
        case 'z':
            rideSound.currentTime = 0;
            rideSound.play();
            break;
        case 'x':
            snareSound.currentTime = 0;
            snareSound.play();
            break;
        case 'c':
            tinkSound.currentTime = 0;
            tinkSound.play();
            break;
        case 'v':
            tomSound.currentTime = 0;
            tomSound.play();
            break;

    }
}