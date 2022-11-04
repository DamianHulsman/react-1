import {useState, useEffect} from 'react'
import head from './minecraft_head.png'

export default function Move() {
    const [x, setX] = useState(window.innerWidth / 2);
    const [y, setY] = useState(window.innerWidth / 2);
    const [over, setOver] = useState(false);

    const handleKeyDown = (e) => {
            // console.log(e);
            const a = 10;
            switch(e.key) {
                case 's':
                    setY(y =>y + a);
                    break;
                case 'a':
                    setX(x => x - a);
                    break;
                case 'w':
                    setY(y => y - a);
                    break;
                case 'd':
                    setX(x => x + a);
                    break;
            }
        }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, []);
    useEffect(() => {
        // console.log(x, y);
        if(x < 0 || y < 0 || x > window.innerWidth || y > window.innerHeight) setOver(true);
        else setOver(false);
    }, [x, y])

    return <div style={{top: y, left: x, position: 'fixed', backgroundColor: over ? 'red' : 'green'}}><img src={head} alt='head'></img></div>
}