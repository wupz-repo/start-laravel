async function preInit(inputObj) {

}

async function postInit(inputObj) {
    console.log(`\n    .__                                  .__   
    |  | _____ ____________ ___  __ ____ |  |  
    |  | \\__  \\\\_  __ \\__  \\\\  \\/ // __ \\|  |  
    |  |__/ __ \\|  | \\// __ \\\\   /\\  ___/|  |__
    |____(____  /__|  (____  /\\_/  \\___  >____/
              \\/           \\/          \\/      
                                        `)
    console.log(`\n    Welcome to the start-laravel application
     This application requires to open these services: 
         FC : https://fc.console.aliyun.com/
         ACR: https://cr.console.aliyun.com/
     This application can help you quickly deploy the Laravel project:
         Full yaml configuration: https://github.com/devsapp/laravel#%E5%AE%8C%E6%95%B4yaml
         Laravel development docs : https://learnku.com/docs/laravel/8.x
     This application homepage: https://github.com/devsapp/start-laravel\n`)
}

module.exports = {
    postInit,
    preInit
}
