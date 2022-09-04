function main() {
                const codes = document.querySelectorAll("code")
                for (let i = 0; i < codes.length; i++) {
                    if (codes[i].textContent == '@scthorvath1' || codes[i].className == 'inline' || codes[i].id == 'scpath') {
                        if (codes[i].childElementCount == 0 && !codes[i].className == 'inline') {
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
                        eval(code.replaceAll('console.log', 'BdApi.showToast'));
                    }
                }
            }
