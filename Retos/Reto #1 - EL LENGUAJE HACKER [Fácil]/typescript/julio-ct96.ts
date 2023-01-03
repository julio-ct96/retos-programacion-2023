const characters: any = {
    a: "4",
    b: "8",
    c: "(",
    d: "|)",
    e: "3",
    f: "|=",
    g: "6",
    h: "#",
    i: "!",
    j: "7",
    k: "|<",
    l: "1",
    m: "|\/|",
    n: "|\|",
    o: "0",
    p: "|D",
    q: "9",
    r: "2",
    s: "$",
    t: "5",
    u: "|_|",
    v: "\/",
    w: "\/\/",
    x: "%",
    y: "`/",
    z: "7_"
};

function translateToFleet(phrase: string): string {
    for(let i = 0; i <= 9; i++){
        if(phrase.includes(i+'')){
            return 'NUMBERS NOT VALID'
        }
    }

    let transaltedPhrase: string = '';
    const charArray: string[] = phrase.split('');

    charArray.forEach((char: string) => transaltedPhrase += characters[char] ?? " ")

    return transaltedPhrase;
}

console.log(translateToFleet('hola mi nombre es julio'));