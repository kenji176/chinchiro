/**
 * @name coderun
 * @author YourName
 * @description Describe the basic functions. Maybe a support server link.
 * @version 0.0.1
 */

module.exports = class ExamplePlugin {
    getName() {
        return "js runer";
    }
    getDescription() {
        return "Does things with the library";
    }
    getVersion() {
        return "0.0.1";
    }
    getAuthor() {
        return "browser js";
    }
    getSettingsPanel() {
        return ''
    }
    onSwitch() {}
    start() {
        setInterval(() => {
            function main() {
                const codes = document.querySelectorAll("code")
                for (let i = 0; i < codes.length; i++) {
                    if (codes[i].textContent == '@scthorvath1' || codes[i].className == 'inline' || codes[i].id == 'scpath') {
                        if (codes[i].childElementCount == 0) {
                            codes[i].setAttribute('id', 'scpath');
                            codes[i].insertAdjacentHTML('beforeend', '<div id="script"><div style=display:flex;justify-content:flex-end><button class="run_btn" type="button" style=border-radius:20px; class=run_button>Run</button></div></div>');
                        };
                    } else {
                        codes[i].setAttribute('id', 'scpath');
                        codes[i].insertAdjacentHTML('beforeend', '<div id="script"><div style=display:flex;justify-content:flex-end><button class="run_btn" type="button" style=border-radius:20px; class=run_button>Run</button></div></div>');
                    }
                }
                var btns = document.querySelectorAll('.run_btn');
                for (var i = 0; i < btns.length; i++) {
                    btns[i].onclick = (e) => {
                        const code = e.target.parentNode.parentNode.parentNode.textContent.slice(0, -3);
                        eval(code);
                    }
                }
            }
            main()
        }, 1000);
    }
    stop() {
        const e = document.getElementById('script');
        if (e) {
            e.parentNode.removeChild(e);
        }

    }

}
