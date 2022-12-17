//{import React from "react"}

export default function preto() {
    return (
        <div className="hello world">
            <p>Hey man</p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<p>Hey man</p>)