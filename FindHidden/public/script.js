let cursorFollow = document.querySelector('#cursor-follow');
        let torchBtn = document.querySelector('#torch-btn');
        let text = 'Pravesh';
        let heading = document.querySelector('#heading');
        let isTorchOn = false;

        document.addEventListener('mousemove', (e) => {
            gsap.to(cursorFollow, {
                left: e.clientX + 'px',
                top: e.clientY + 'px',
            })
        })

        torchBtn.addEventListener('click', (e) => {
            isTorchOn = true;
            if (isTorchOn) {
                gsap.to(cursorFollow, {
                    // background: `rgb(0, 0, 200)`,
                    background: `crimson`,
                })
                let spans = document.querySelectorAll('#heading span')
                spans.forEach(item => {
                    item.addEventListener('mouseover', (e) => {
                        // item.style.color = 'crimson';
                        gsap.to(item, {
                            color: 'crimson',
                        })
                        gsap.from(item, {
                            top: '20px'
                        })
                    })
                    // item.addEventListener('mouseleave', (e) => {
                    //     item.style.color = 'transparent';
                    // })
                });
            }
        })
        let letters = text.split('')
        letters.forEach(item => {
            let elm = document.createElement('span');
            elm.innerHTML = item;
            heading.appendChild(elm);
        });