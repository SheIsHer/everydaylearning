async function hd() {
    let name = await new Promise(
        resolve => {
            setTimeout(() => {
                resolve('后盾人');
            }, 2000)
        }
    );

    let site = await new Promise((resolve) => {
        setTimeout(() => {
            resolve('houdunren.com');
        }, 2000);
    })
    console.log(site);

    // return new Promise(resolve => {
    //     setTimeout(()=>{
    //         resolve('houdunren');
    //     }, 5000)
    // })
}

hd();