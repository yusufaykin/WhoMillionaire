const quizData = [
    {
        question: 'Türkiye’nin sahip olduğu uluslararası telefon kodu nedir?',
        a: '+246',
        b: '+93',
        c: '+359',
        d: '+90',
        e: '+218',
        correct: 'd',
    },
    {
        question: 'Aspirinin ilk kez çıkış yılı nedir?',
        a: '1736',
        b: '1915',
        c: '1899',
        d: '2002',
        e: '1678',
        correct: 'c',
    },
    {
        question: 'Futbol maçlarında oynanan topun FİFA kurallarına göre ağırlığı ne kadar olmalıdır?',
        a: '630 Gram',
        b: '452 Gram',
        c: '513 Gram',
        d: '398 Gram',
        e: '489 Gram',
        correct: 'b',
    },
    {
        question: 'Avustralya adasının en tanınmış hayvanının ismi nedir?',
        a: 'Kanguru',
        b: 'Zürafa',
        c: 'Ayı',
        d: 'Maymun',
        e: 'Ceylan',
        correct: 'a',
    },
    {
        question: ' Endonezya Devleti hangi kıtadadır?',
        a: 'Avrupa',
        b: 'Afrika',
        c: 'Antartika',
        d: 'Avustralya',
        e: 'Asya',
        correct: 'e',
    },
]

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]

    deselecrtedAnswers

    questionEl.innerText = quizData[currentQuiz].question
    a_text.innerText = quizData[currentQuiz].a
    b_text.innerText = quizData[currentQuiz].b
    c_text.innerText = quizData[currentQuiz].c
    d_text.innerText = quizData[currentQuiz].d
    e_text.innerText = quizData[currentQuiz].e
}

function deselecrtedAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    // console.log(answer)

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2> Test tamamlandı, ${score * 20} puan aldınız 😎</h2>
            <button class="submit" onClick="location.reload()"> Tekrar Dene 🤖 </button>
            `
        }
    }
})