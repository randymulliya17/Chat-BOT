const pertanyaan = document.getElementById('pertanyaan')
const jawaban = document.getElementById('jawaban')
const loaders = document.getElementById('loaders')
const container = document.getElementsByClassName('container')

let init = 0

const botSay = (data) => {
    return [
        "Hallo, Namaku randy bot. Siapa Namamu?",
        `Hallo ${data?.nama}, Berapa usia kamu??`,
        `Ohhh ${data?.usia}, Hobi kamu apa?`,
        `wihh aku juga Hobi ${data?.hobi}, btw kamu punya pacar nda?`,
        `Ohhh ${data?.pacar}, ya udah kalo gitu udahan ya...`,
    ]
}
pertanyaan.innerHTML = botSay()[0]

let usersData = []


function botStart() {
    if(jawaban.value.length < 1) return alert("Silahkan isi jawabannya dulu gaes!")
    init++
    if (init == 1) {
        botDelay({ nama: jawaban.value })
    } else if (init === 2) {
        botDelay({ usia: jawaban.value })
    } else if (init === 3) {
        botDelay({ hobi: jawaban.value })
    } else if (init === 4) {
        botDelay({ pacar: jawaban.value })
    } else if (init === 5) {
        finishing()
    } else {
        botEnd()
    }
}
function botDelay(jawabanUser) {
    loaders.style.display = "block"
    container[0].style.filter = "blur(8px)"
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
        loaders.style.display = "none"
        container[0].style.filter = "none"
    }, [1000])
    usersData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML = `Terimakasi ya ${usersData[0]} sudah mampir ke Kibs Bot 😁, kapan-kapan kita ${usersData[2]} bareng ya!.`
    jawaban.value = "OK"
}
function botEnd() {
    alert(`Terimakasih ${usersData[0]} telah berkunjung, anda akan diarahkan ke halaman utama kembali.`)
    window.location.reload()
}
