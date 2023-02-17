import axios from 'axios';

export async function call() {
    axios.get('http://localhost:5000/').then(res => {
        console.log(res.data);
    });
}