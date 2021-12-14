
import { createContext, useContext, useState } from 'react';
import jwt from 'jsonwebtoken';
import axios from 'axios'
const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const tokenUrl = baseUrl + '/api/token/';

const AuthContext = createContext();

export function useAuth() {
    const auth = useContext(AuthContext);
    if (!auth) throw new Error('You forgot AuthProvider!');
    return auth;
}

export function AuthProvider(props) {

    const [state, setState] = useState({
        tokens: null,
        user: null,
        login,
        logout,
    });

    async function login(username, password) {

        const response = await axios.post(tokenUrl, { username, password });

        const decodedAccess = jwt.decode(response.data.access);

        const newState = {
            tokens: response.data,
            user: {
                id: decodedAccess.user_id,
                username: decodedAccess.username,
                email: decodedAccess.email,
                summoner_name: decodedAccess.summoner_name,
                profile_icon: decodedAccess.profile_icon,
                summoner_server: decodedAccess.summoner_server,
                summoner_level: decodedAccess.summoner_level, 
                summoner_rank: decodedAccess.summoner_rank,
                summoner_champion_mastery:decodedAccess.summoner_champion_mastery,
                summoner_match_history: decodedAccess.summoner_match_history,
            },
        }

        setState(prevState => ({ ...prevState, ...newState }));
    }

    function logout() {
        const newState = {
            tokens: null,
            user: null,
        }
        setState(prevState => ({ ...prevState, ...newState }));
    }

    return (
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    );
}

