"use client";
import Prism from 'prismjs';

import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-javascript';
import { useEffect } from 'react';

const PrismLoader = () => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);
    return <></>;
}

export default PrismLoader;
