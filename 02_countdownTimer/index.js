(
    function () {
        const hour = document.querySelector(".hours")
        const minute = document.querySelector(".minutes")
        const second = document.querySelector(".seconds")

        const startButton = document.querySelector('.start')
        const stopButton = document.querySelector('.stop')
        const resetButton = document.querySelector('.reset')

        let intervalId = null
        startButton.addEventListener("click", () => {
            if(hour.value == 0 && minute.value == 0 && second.value == 0) {
                return 
            }

            function startInterval() {
                if(second.value != 0) {
                    second.value = `${second.value < 10 ? "0"+second.value-1 : second.value-1}`
                }
            }
            
            intervalId = setInterval(() => {
                startInterval()
            }, 1000)
            
        })
    }
)()