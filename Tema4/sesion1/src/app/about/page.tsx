'use client'

import Description from "@/app/about/Description";
import {useState} from "react";

export default function AboutPage() {
    const [clicks, setClicks] = useState<number>(0);

    const addClick = () => {

        setClicks(clicks + 1);

        console.log(clicks);

    }
    return (
        <div>
            <p>About</p>
            <Description/>
            <button onClick={addClick}>Hit me!</button>
        </div>
    );
}