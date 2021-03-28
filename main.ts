let detected_count = 0
let detect_flag = 0
let undetected_count = 0
function Human_Dectection () {
    if (muvision.detected(MuId.Mu00, MuVsMessageVisionType.kVisionBody)) {
        detected_count = detected_count + 1
        if (detected_count > 5) {
            detect_flag = 1
            undetected_count = 0
        }
    } else {
        undetected_count = undetected_count + 1
        if (undetected_count > 5) {
            detect_flag = 0
            undetected_count = 0
        }
    }
}
basic.forever(function () {
    if (detect_flag == 1) {
        serial.writeLine("Human has been detected")
    } else {
        serial.writeLine("Human has left")
    }
})
