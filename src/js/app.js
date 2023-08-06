import * as flsFunctions from './modules/functions.js'
import * as accordion from './modules/accordion.js'
import * as material from './modules/material.js'
import * as cursor from './modules/cursor.js'
import * as form from './modules/form.js'
import * as timeStock from './modules/timeStock.js'
import * as preload from './modules/preloader.js'
// import * as popup from './modules/popup.js'

let body = document.body
console.log(window.innerHeight);


// popup.popup()
preload.initPreload()
cursor.initCursor()
form.initForm()
timeStock.time()
accordion.initAccordion()
material.initMaterial()

flsFunctions.isWebp() 







