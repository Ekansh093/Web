import React, { useState, useEffect } from 'react';
import './postMaster.css';

function PostMaster() {

    const [url, setUrl] = useState("");
    const [method, setMethod] = useState("");
    const [params, setParams] = useState([]);
    const [reqBody, setReqBody] = useState("");
    const [response, setResponse] = useState({
        resBody: "",
        statusCode: null
    });

    const setField = (e, index) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        switch (fieldName) {
            case "url":
                setUrl(fieldValue);
                break;

            case "method":
                setMethod(fieldValue);
                break;

            case "reqBody":
                setReqBody(fieldValue);
                break;

            case "addParam":
                setParams([...params, []]);
                break;

            case "paramKey":
                let tempKeyParams = params;
                tempKeyParams[index][0] = fieldValue;
                setParams([...tempKeyParams]);
                break;

            case "paramValue":
                let tempValueParams = params;
                tempValueParams[index][1] = fieldValue;
                setParams([...tempValueParams]);
                break;

            default:
                break;
        }
    }

    useEffect(() => {
        if (url === '') {
            setParams(prevParams => []);
            return;
        }

        let urlArr = url.split('?');
        if (urlArr.length <= 1) return;
        const paramsArr = urlArr[1].split('&');

        setParams(prevState => []);
        paramsArr.forEach(paramElem => {
            const param = paramElem.split('=');
            setParams(prevState => [...prevState, param]);
        });
    }, [url]);

    useEffect(() => {
        if (url.slice(url.length - 1, url.length) === '=') return;

        let queryParamsStr = "";
        let urlArr = url.split('?')[0];
        if (urlArr.length > 0) {
            params.forEach(param => {
                queryParamsStr += `&${param[0] || ''}=${param[1] || ''}`
            });
            let urlStr = urlArr + '?' + queryParamsStr.replace('&', '');
            if (urlStr.slice(urlStr.length - 1, urlStr.length) === '=') urlStr = urlStr.slice(0, urlStr.length - 1);
            setUrl(urlStr);
        }
    }, [params]);

    const sendRequest = async () => {
        if (url === '' || method === '') return;
        setResponse({
            resBody: "Waiting for response...",
            statusCode: null
        });

        let queryParamsStr = "";
        params.forEach(param => {
            if (param[0] == "" || param[0] == null) return
            queryParamsStr += `&${param[0]}=${param[1]}`
        });
        const urlStr = url + '?' + queryParamsStr.replace('&', '');

        if (method === "GET") {
            await fetch(urlStr)
                .then(res => {
                    setResponse(prevState => {
                        return {
                            ...prevState,
                            statusCode: res.status,
                        }
                    });
                    return res.json();
                }).then(res => {
                    console.log(res);
                    setResponse(prevState => {
                        return {
                            ...prevState,
                            resBody: JSON.stringify(res, null, "\t"),
                        }
                    });
                })
                .catch(error => {
                    console.log('error123');
                });


        } else if (method === "POST") {
            await fetch(urlStr, {
                method: 'POST',
                body: JSON.stringify(reqBody)
            })
                .then(res => {
                    setResponse(prevState => {
                        return {
                            ...prevState,
                            statusCode: res.status,
                        }
                    });
                    return res.json();
                }).then(res => {
                    setResponse(prevState => {
                        return {
                            ...prevState,
                            resBody: JSON.stringify(res, null, "\t"),
                        }
                    });
                });
        }

    }

    const copyToClipBoard = () => {
        const responseElem = document.querySelector("textarea.resArea");
        responseElem.select();
        document.execCommand("copy");
    }

    return (
        <div>
            <h1 className="pm-title">Post Master</h1>

            <section className="pm-body">
                <div className="field">
                    <label htmlFor="url" className="field-name">URL:</label>
                    <input type="text" className="url" name="url" value={url} onChange={e => setField(e)} />
                </div>
                <div className="field">
                    <label htmlFor="method" className="field-name">Method:</label>
                    <div className="field-child">
                        <div className="field-options">
                            <input type="radio" value='GET' name='method' className="requestType" onChange={e => setField(e)} />
                            <label htmlFor="get">GET</label>
                        </div>
                        <div>
                            <input type="radio" value='POST' name='method' className="requestType" onChange={e => setField(e)} />
                            <label htmlFor="get">POST</label>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="params" className="field-name">Params:</label>
                    <div className="params-container">
                        {params.map((param, index) => {
                            return (<div className="params">
                                <input type="text" name="paramKey" placeholder="Key" value={param[0]} className="paramKey" onChange={e => setField(e, index)} />
                                <input type="text" name='paramValue' placeholder="Value" value={param[1]} className="paramValue" onChange={e => setField(e, index)} />
                            </div>)
                        })}
                        <button name="addParam" className="addParam" onClick={setField}>+</button>
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="reqBody" className="field-name">Body:</label>
                    <textarea name="reqBody" cols="30" rows="10" value={reqBody} onChange={e => setField(e)}></textarea>
                </div>
                <div>
                    <button name="submit" id="sendBtn" className="send" onClick={sendRequest}>SEND</button>
                </div>
                <div className="field response">
                    {response.statusCode && (
                        <div className="statusCode">
                            <span>
                                <span style={{ color: "#34495e", fontWeight: "bold" }}>Status: </span>
                                {response.statusCode}</span>
                        </div>)}
                    <label htmlFor="resBody" className="field-name">Response:</label>
                    <i class="fas fa-clipboard fa-2x clipboard" onClick={copyToClipBoard} />
                    {/* <div className="tooltip">Copy</div> */}
                    <textarea name="resBody" cols="50" rows="10" className="resArea" value={response.resBody} onChange={() => false}></textarea>
                </div>
            </section>
        </div>
    )
}

export default PostMaster
