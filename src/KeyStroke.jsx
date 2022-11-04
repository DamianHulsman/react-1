import {useState, useEffect} from 'react'

function KeyStrokeKey({name}) {
    const [pressed, setPressed] = useState(false);
    const handleKeyDown = (e) => {
        if(e.key == name) setPressed(true);
    }
    const handleKeyUp = (e) => {
        if(e.key == name) setPressed(false);
    }
    useEffect(() => {
            window.addEventListener('keydown', handleKeyDown);
            window.addEventListener('keyup', handleKeyUp);
            return () => {
                window.removeEventListener('keydown', handleKeyDown);
                window.removeEventListener('keyup', handleKeyUp);
            }
        }, [])

    return <div className={'keystroke ' + (pressed ? 'pressed' : 'unpressed')}>{name}</div>
}

export default function KeyStroke()
{

    return <table>
        <tbody>
            <tr>
                <td></td>
                <td>
                    <KeyStrokeKey name="w"/>
                </td>
                <td></td>
            </tr>
            <tr>
                <td>
                    <KeyStrokeKey name="a"/>
                </td>
                <td>
                    <KeyStrokeKey name="s"/>
                </td>
                <td>
                    <KeyStrokeKey name="d"/>
                </td>
            </tr>
        </tbody>
    </table>
}