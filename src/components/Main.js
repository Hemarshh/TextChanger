import React, { useState } from 'react'

export default function Main(props) {

    const [value, newValue] = useState('');

    const Change = (e) => {
        newValue(e.target.value)
    }

    const UpperCase = () => {
        newValue(value.toUpperCase())
    }

    const LowerCase = () => {
        newValue(value.toLowerCase())
    }

    const clear = () => {
        newValue('')
    }

    const Copy = () => {
        let copy = document.getElementById("text");
        copy.select();
        document.execCommand("copy");
        // navigator.clipboard.writeText(copy.value);
    }



    return (
        <>
            <div className="container text-center" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <br /><br />
                <h1 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Enter the Text</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={Change} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }} value={value} rows="12" id="text"></textarea>
                </div>
                <button disabled={value.length === 0} className="btn btn-primary m-2" onClick={UpperCase}>Convert into UpperText</button>
                <button disabled={value.length === 0} className="btn btn-primary m-2" onClick={LowerCase}>Convert into LowerText</button>
                <button disabled={value.length === 0} className="btn btn-primary m-2" onClick={clear}>Clear</button>
                <button disabled={value.length === 0} className="btn btn-primary m-2" onClick={Copy}>Copy The Text</button>
            </div>
            <div className="container text-center mt-5">
                <h4 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Details</h4>
                <p style={{ color: props.mode === 'light' ? 'black' : 'white' }} id='fm'>{value.split(" ").filter((ele) => { return ele.length !== 0 }).length} words {value.length} characters</p>
            </div>
        </>
    )



}
