import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { BreakingbadApp } from './breakingbad/breakingbad-app.js'
import { UsersApp } from './users/users-app.js'
import usersStore from './users/store/users-store'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 id="app-title">Hello Vite!</h1>
    <div class="card">
     
    </div>
    
  </div>
`
UsersApp( document.querySelector('.card') )
//BreakingbadApp( document.querySelector('.card') )

document.addEventListener('DOMContentLoaded', async () => {
    await usersStore.loadNextPage();
    usersStore.onUsersChanged();
});
