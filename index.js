const modal = document.querySelector(".modal")
const palavraIng = document.querySelector(".palavra-ing")
const palavraPor = document.querySelector(".palavra-por")
const btns = document.querySelectorAll(".Texto button")
const definiçãoport = document.querySelector("#definição-port")
const definiçãoing = document.querySelector("#definição-ing")
const fecharModal = document.querySelector(".fechar-modal")
// var audio = document.getElementById('#audioing'); audio.play();
// var audio = document.getElementById('#audioport'); audio.play()

let audioIng;
let audioPort
btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        modal.style.display = "block"
        if (e.target.textContent === "Tolerate") {
            palavraIng.textContent = "Tolerate"
            palavraPor.textContent = "Tolerar"
            definiçãoport.textContent = "Suportar ou aceitar algo, mesmo que seja desagradável ou difícil."
            definiçãoing.textContent = "To endure or accept something, even if it's unpleasant or challenging."
            audioIng = new Audio("assets/tolerate.mp3")
            audioPort = new Audio("assets/tolerar.mp3")

        } else if (e.target.textContent === "Nonsense") {
            palavraIng.textContent = "Nonsense"
            palavraPor.textContent = "Sem sentido"
            definiçãoing.textContent = "Coisas sem sentido, irracionais ou absurdas."
            definiçãoport.textContent = "Things that are senseless, irrational, or absurd."
            audioIng = new Audio("assets/nonsense.mp3")
            audioPort = new Audio("assets/sem sentido.mp3")

        } else if (e.target.textContent === "Illicit") {
            palavraIng.textContent = "Illicit"
            palavraPor.textContent = "Ilícito"
            definiçãoing.textContent = "Something forbidden by law or morally wrong."
            definiçãoport.textContent = "Algo proibido por lei ou moralmente errado."
            audioIng = new Audio("assets/illicit.mp3")
            audioPort = new Audio("assets/ilicito.mp3")

        } else if (e.target.textContent === "Affairs") {
            palavraIng.textContent = "Affairs"
            palavraPor.textContent = "Assuntos"
            definiçãoing.textContent = "Matters or events, often related to personal life, business, or emotional issues."
            definiçãoport.textContent = "Assuntos ou eventos, geralmente relacionados à vida pessoal, negócios ou questões emocionais."
            audioIng = new Audio("assets/affairs.mp3")
            audioPort = new Audio("assets/assuntos.mp3")

        } else if (e.target.textContent === "Long") {
            palavraIng.textContent = "Long"
            palavraPor.textContent = "Longo"
            definiçãoing.textContent = "Having considerable length in extension, both temporal and physical."
            definiçãoport.textContent = "Comprido em extensão, tanto temporal quanto física."
            audioIng = new Audio("assets/long.mp3")
            audioPort = new Audio("assets/longo.mp3")

        } else if (e.target.textContent === "Live") {
            palavraIng.textContent = "Live"
            palavraPor.textContent = "Viver"
            definiçãoing.textContent = "To be alive; to live actively and consciously."
            definiçãoport.textContent = "Estar vivo; viver de forma ativa e consciente."
            audioIng = new Audio("assets/live.mp3")
            audioPort = new Audio("assets/viver.mp3")


        } else if (e.target.textContent === "New") {
            palavraIng.textContent = "New"
            palavraPor.textContent = "Novo"
            definiçãoing.textContent = "Recent, not previously used or experienced."
            definiçãoport.textContent = "Recente, não usado ou experimentado anteriormente."
            audioIng = new Audio("assets/new.mp3")
            audioPort = new Audio("assets/novo.mp3")

        } else if (e.target.textContent === "Romantics") {
            palavraIng.textContent = "Romantics"
            palavraPor.textContent = "Românticos"
            definiçãoing.textContent = "Individuals who value love, emotion, and idealization in relationships."
            definiçãoport.textContent = " Indivíduos que valorizam o amor, a emoção e a idealização nos relacionamentos."
            audioIng = new Audio("assets/romantics.mp3")
            audioPort = new Audio("assets/romantico.mp3")

        } else if (e.target.textContent === "Lover") {
            palavraIng.textContent = "Lover"
            palavraPor.textContent = "Amante"
            definiçãoing.textContent = "A person who feels affection for another; someone who loves intensely."
            definiçãoport.textContent = "Pessoa que sente amor por outra; alguém que ama intensamente."
            audioIng = new Audio("assets/lover.mp3")
            audioPort = new Audio("assets/amante.mp3")

        } else if (e.target.textContent === "End") {
            palavraIng.textContent = "End"
            palavraPor.textContent = "Fim"
            definiçãoing.textContent = "The final point or termination of something; the conclusion of a situation or event."
            definiçãoport.textContent = "Ponto final ou término de algo; o fim de uma situação ou evento."
            audioIng = new Audio("assets/end.mp3")
            audioPort = new Audio("assets/fim.mp3")
        }
    })
})

fecharModal.addEventListener("click", (e) => {
    modal.style.display = "none"
})
const bntAudioPort = document.querySelector(".bnt-audio-port")
bntAudioPort.addEventListener("click", (e) => {
    audioPort.play()
})
const btnAudioIng = document.querySelector(".btn-audio-ing")
btnAudioIng.addEventListener("click", (e) => {
    audioIng.play()
})