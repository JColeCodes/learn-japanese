function WritingChart({ alphabet }) {
    return (
        <div className='writing-chart'>
            {alphabet.map((char, i) => (
                <ul key={i}>
                    {Object.keys(char).map((key, i) => {
                        return (
                        <li key={i}>
                            <span className='char'>{char[key]}</span>
                            <span className='key'>{key}</span>
                        </li>
                        );
                    })}
                </ul>
            ))}
        </div>
    );
}

export default WritingChart;