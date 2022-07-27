const axios = require('axios')

const API = 'http://localhost:3000/api'



const firstLogin = async (req, res) => {
    try{
    const { email, password } = req.body;
    const { data } = await axios.post(`${API}/user/firstuser`, { email, password });
        //store token in localstorage
    window.localStorage.setItem('jwt-admin-store-server', data.token);
    return res.status(200).json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server Error" });
    }
}

const createStore = async (req, res) => {
    try{
    const { name, discount} = req.body;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${window.localStorage.getItem('jwt-admin-store-server')}`
    }
    const { data } = await axios.post(`${API}/stores`, { name, discount }, { headers });
    return res.status(200).json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server Error" });
    }
}

const getStores = async (req, res) => {
    try{
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${window.localStorage.getItem('jwt-admin-store-server')}`
    }
    const { data } = await axios.get(`${API}/stores`, { headers });
    return res.status(200).json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server Error" });
    }
}

const getUsers = async (req, res) => {
    try{
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${window.localStorage.getItem('jwt-admin-store-server')}`
    }
    const { data } = await axios.get(`${API}/users`, { headers });
    return res.status(200).json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server Error" });
    }
}

const createAdmins = async (req, res) => {
    try{
    const { fullName, email, password } = req.body;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${window.localStorage.getItem('jwt-admin-store-server')}`
    }
    const { data } = await axios.post(`${API}/admins`, { fullName, email, password }, { headers });
    return res.status(200).json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server Error" });
    }
}

const deleteAdmin = async (req, res) => {
    try{
    const { id } = req.params;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${window.localStorage.getItem('jwt-admin-store-server')}`
    }
    const { data } = await axios.delete(`${API}/admins/${id}`, { headers });
    return res.status(200).json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server Error" });
    }
}

const formLogin = document.getElementById('login-form');
formLogin.addEventListener('submit', async (e) =>{
    try{
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const { data } = await axios.post(`${API}/signin`, { email, password });
    //store token in localstorage
    window.localStorage.setItem('jwt-admin-store-server', data.token);
    window.location.href = './access/dashboard.html';
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server Error" });
    }
});



