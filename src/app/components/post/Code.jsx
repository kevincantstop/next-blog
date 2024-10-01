const Code = ({ code, lang = 'javascript' }) => {
    return (
        <pre className={`language-${lang}`}>
            <code className={`language-${lang}`}>{code.trim()}</code>
        </pre>
    )
}

export default Code;
