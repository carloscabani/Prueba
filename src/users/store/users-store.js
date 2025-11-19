import { loadUsersByPage } from "../use-cases/load-users-by-page.js";

const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async() => {
    try {
        const users = await loadUsersByPage(state.currentPage + 1);
        if (users.length === 0) return;
        
        state.currentPage += 1;
        state.users = users;
        
        console.log('Usuarios cargados:', state.users);
    } catch (error) {
        console.error('Error cargando usuarios:', error);
    }
}

const loadPreviousPage = async() => {
    if (state.currentPage === 1) return;
    const users = await loadUsersByPage(state.currentPage - 1);
    state.users = users;
    state.currentPage -= 1;
}

const onUsersChanged = () => {
    console.log('Página actual:', state.currentPage);
    console.log('Usuarios:', state.users);
}

const reloadPage = async() => {
    const users = await loadUsersByPage(state.currentPage);
    state.users = users;
}

export default {
    loadNextPage,
    loadPreviousPage,
    onUsersChanged,
    reloadPage,
    
    getUsers: () => [...state.users],
    getCurrentPage: () => state.currentPage,
}