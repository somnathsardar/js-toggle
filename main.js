window.onload = function(e){
    let loader = document.getElementById("loader");
    setTimeout(()=>{
        stopAnimation(loader)
        .then(()=>{
            setTimeout(()=>{
                loader.remove();
            }, 1000);
        });
    }, 1000);
}

function stopAnimation(e){
    return new Promise((resolve, reject) =>{
        e.style.transition = '0.8s';
        e.style.opacity = 0;
        resolve(true);
    });
}

function toggleClass(el){
    let className = el.className;
    if(className.includes('off-state')){
        el.classList.remove('off-state');
        el.classList.add('on-state');
    }
    else{
        el.classList.remove('on-state');
        el.classList.add('off-state');
    }

    el = el.querySelector('.circle')
    className = el.className;
    if(className.includes('circle-green')){
        el.classList.remove('circle-green');
        el.classList.add('circle-gray');
    }
    else{
        el.classList.remove('circle-gray');
        el.classList.add('circle-green');
    }
}