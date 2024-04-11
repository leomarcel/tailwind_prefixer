"use client";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {Button} from "@/components/ui/button";
import {useState} from "react";

export function InputTransform() {
    const [btnActive, setBtnActive] = useState(false);
    const [validPrefix, setValidPrefix] = useState(false);
    const [prefixText, setPrefixText] = useState("tw-");
    const [initText, setInitText] = useState("");
    const [resultText, setResultText] = useState("");

    let transform = (text: string, prefix: string) => {
        // prefix all classes tailwind
        let reg = /class="([^"]*)"/g
        let classes = text.match(reg)
        if (classes) {
            classes.forEach((c) => {
                let reg = /class="([^"]*)"/g
                let match = reg.exec(c)
                if (match) {
                    let newClasses = match[1].split(" ").map((c) => {
                        return prefix + c
                    }).join(" ")
                    text = text.replace(match[1], newClasses)
                }
            })
        }
        return text
    }

    let _changeInput = (e: { target: { value: string; }; }) => {
        if (prefixText.length <= 0) setValidPrefix(true)
        if (e.target.value.length > 0) setBtnActive(true)
        setInitText(e.target.value)
        setResultText(transform(e.target.value, prefixText));
    }

    let _changePrefix = (e: { target: { value: string; }; }) => {
        if (e.target.value.length > 0) setValidPrefix(false)
        setPrefixText(e.target.value)
        setResultText(transform(initText, e.target.value));
    }

    let _copy = () => {
        navigator.clipboard.writeText(resultText).then(r => {
            // console.log("copied");
        });
    }

    let _clear = () => {
        setInitText("")
        setResultText("")
        setBtnActive(false)
    }

    let _changeResult = (e: { target: { value: string; }; }) => {
        setResultText(e.target.value)
    }

    return (
        <div className="flex flex-col w-full max-w-sm items-center gap-1.5">
            <Input onChange={_changePrefix} value={prefixText} className={"w-20 mb-3 text-gray-200 dark:text-gray-800"} placeholder="tw-" />
            {validPrefix && <div className={"text-red-500"}>Please enter a prefix</div>}
            <Textarea value={initText} onChange={_changeInput} className={"w-full h-40 text-gray-200 dark:text-gray-800"} placeholder="Paste or write your html with non-prefixed tailwind classes" />
            <Textarea value={resultText} onChange={_changeResult} className={"w-full h-40 text-gray-200 dark:text-gray-800"} placeholder="Result" />
            {btnActive && (
                <div className={"items-end"}>
                    <Button onClick={_copy} className={"mr-1 hover:scale-110 active:scale-100 duration-200"}>Past</Button>
                    <Button onClick={_clear} className={"hover:scale-110 active:scale-100 duration-200"}>Clear</Button>
                </div>
            )}
        </div>
    )
}
