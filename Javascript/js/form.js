const data = {
    "response": {
        "pageType": "FORM_PAGE",
        "template": [
            {
                "id": "8_8_144",
                "card": [
                    {
                        "id": "8_8_31_2430",
                        "type": "formCardType",
                        "dataType": "static",
                        "displayOrder": 1,
                        "metaData": {
                            "text": {
                                "metadata": {
                                    "title": "Update Profile Details",
                                    "id": "1",
                                    "description": "",
                                    "count": 10,
                                    "submitText": "Send information to Paytm",
                                    "confirmationMessage": "Please do fill all required fields to submit a ticket"
                                },
                                "items": [
                                    {
                                        "type": "RADIO_BUTTON",
                                        "helpText": "",
                                        "MW_Key": "Details_Corrected",
                                        "title": "Please Select the details you wish to get updated",
                                        "index": 0,
                                        "isRequired": true,
                                        "choiceHasAdditionalInfo": 3,
                                        "choices": [
                                            "Name",
                                            "Date of Birth",
                                            "Gender"
                                        ],
                                        "hasChildren": true,
                                        "children": [
                                            {
                                                "type": "TEXT",
                                                "helpText": "",
                                                "MW_Key": "Correct_Name",
                                                "placeholder": "Name",
                                                "title": "Enter Correct Name",
                                                "index": 0,
                                                "isRequired": true,
                                                "validation": {
                                                    "pattern": "ALPHABETICAL"
                                                }
                                            },
                                            {
                                                "type": "DATE",
                                                "helpText": "",
                                                "MW_Key": "Correct_DoB",
                                                "placeholder": "Date of Birth",
                                                "title": "Enter Correct Date of Birth",
                                                "index": 1,
                                                "isRequired": true,
                                                "validation": {
                                                    "pattern": "ALPHABETICAL"
                                                }
                                            },
                                            {
                                                "type": "TEXT",
                                                "helpText": "",
                                                "MW_Key": "Correct_Gender",
                                                "placeholder": "Gender",
                                                "title": "Enter Correct Gender",
                                                "index": 2,
                                                "isRequired": true,
                                                "validation": {
                                                    "pattern": "ALPHABETICAL"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        "type": "RADIO_BUTTON",
                                        "helpText": "",
                                        "MW_Key": "KYC_document_submitted",
                                        "title": "Kindly upload the KYC document submitted at the time of completing your KYC:",
                                        "index": 1,
                                        "isRequired": true,
                                        "choiceHasAdditionalInfo": 4,
                                        "choices": [
                                            "Aadhaar Card",
                                            "Voter ID",
                                            "Driving License",
                                            "Passport"
                                        ],
                                        "hasChildren": true,
                                        "children": [
                                            {
                                                "type": "FILE_UPLOAD",
                                                "helpText": "",
                                                "MW_Key": "Aadhaar_card_KYC",
                                                "title": "",
                                                "index": 0,
                                                "isRequired": true,
                                                "validation": {
                                                    "size": "2048",
                                                    "type": [
                                                        "pdf",
                                                        "jpg",
                                                        "png"
                                                    ]
                                                },
                                                "uploadText": "Upload scan copy of your Aadhaar card (image upto 2 MB)"
                                            },
                                            {
                                                "type": "FILE_UPLOAD",
                                                "helpText": "",
                                                "MW_Key": "Voter_ID_KYC",
                                                "title": "",
                                                "index": 1,
                                                "isRequired": true,
                                                "validation": {
                                                    "size": "2048",
                                                    "type": [
                                                        "pdf",
                                                        "jpg",
                                                        "png"
                                                    ]
                                                },
                                                "uploadText": "Upload scan copy of your Voter ID (image upto 2 MB)"
                                            },
                                            {
                                                "type": "FILE_UPLOAD",
                                                "helpText": "",
                                                "MW_Key": "Driving_License_KYC",
                                                "title": "",
                                                "index": 2,
                                                "isRequired": true,
                                                "validation": {
                                                    "size": "2048",
                                                    "type": [
                                                        "pdf",
                                                        "jpg",
                                                        "png"
                                                    ]
                                                },
                                                "uploadText": "Upload scan copy of your Driving License (image upto 2 MB)"
                                            },
                                            {
                                                "type": "FILE_UPLOAD",
                                                "helpText": "",
                                                "MW_Key": "Passport_KYC",
                                                "title": "",
                                                "index": 3,
                                                "isRequired": true,
                                                "validation": {
                                                    "size": "2048",
                                                    "type": [
                                                        "pdf",
                                                        "jpg",
                                                        "png"
                                                    ]
                                                },
                                                "uploadText": "Upload scan copy of your Passport (image upto 2 MB)"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "FILE_UPLOAD",
                                        "helpText": "",
                                        "MW_Key": "Error_Screenshot",
                                        "title": "Kindly update Screenshot / Email of Paytm where Details are shown incorrect",
                                        "index": 2,
                                        "isRequired": true,
                                        "validation": {
                                            "size": "2048",
                                            "type": [
                                                "pdf",
                                                "jpg",
                                                "png"
                                            ]
                                        },
                                        "uploadText": "Upload Error Screenshot (image upto 2 MB)"
                                    },
                                    {
                                        "type": "DISPLAY_TEXT",
                                        "title": "Please note that in order to avoid rejection of your request please attach a clear image of your Documents. Photocopy of documents or documents scanned with any Scanner App will not be accepted as a valid verification proof.",
                                        "index": 3
                                    },
                                    {
                                        "type": "CHECKBOX",
                                        "helpText": "",
                                        "MW_Key": "Document_declaration_KYC",
                                        "index": 4,
                                        "title": "",
                                        "isRequired": true,
                                        "choices": [
                                            "Declaration - I accept that I have uploaded documents and provided correct details. In case correct documents are not received, my request may be rejected."
                                        ]
                                    },
                                    {
                                        "type": "TEXT",
                                        "helpText": "",
                                        "MW_Key": "More_Details_Stopped",
                                        "placeholder": "Text Box",
                                        "title": "Please describe your problem:",
                                        "index": 5,
                                        "isRequired": true,
                                        "validation": {
                                            "pattern": "ALPHABETICAL"
                                        }
                                    },
                                    {
                                        "type": "SUBMIT_BUTTON",
                                        "helpText": "",
                                        "title": "Submit Details",
                                        "index": 6
                                    }
                                ],
                                "count": 7
                            },
                            "tileCount": "0"
                        },
                        "header": null,
                        "tile": null
                    }
                ],
                "metaData": {
                    "text": "Form Template"
                }
            }
        ]
    }
};


let btn = document.getElementById("populate");


btn.addEventListener("click", (e) => {


    if (document.getElementById("formId") == undefined) {
        let form = document.createElement("form");
        form.id = "formId";


        const fieldsArray = data.response.template[0].card[0].metaData.text.items;
        console.log(fieldsArray);

        fieldsArray.forEach(function (field) {

            let fieldDiv = document.createElement("div");

            if ((field.title != undefined || field.title != null || field.title != "") && field.type != "SUBMIT_BUTTON") {
                let fieldTitle = field.title;
                let titleElem = document.createElement("h3");
                titleElem.innerHTML = fieldTitle;
                fieldDiv.appendChild(titleElem);
            }


            const type = field.type;
            if (type === "RADIO_BUTTON" || type === "CHECKBOX") {

                if (field.hasChildren != undefined && field.hasChildren == true) {
                    const childArray = field.children;
                    childArray.forEach(function (childField, index) {
                        let inputElem = document.createElement("input");
                        if (type === "RADIO_BUTTON") {
                            inputElem.setAttribute("type", "radio");
                        } else {
                            inputElem.setAttribute("type", "checkbox");
                        }
                        inputElem.setAttribute("name", field.MW_Key);
                        inputElem.setAttribute("value", field.choices[index]);

                        let choiceName = document.createElement("label");
                        choiceName.setAttribute("for", field.choices[index]);
                        choiceName.innerHTML = field.choices[index];

                        let br = document.createElement("br");
                        fieldDiv.appendChild(inputElem);
                        fieldDiv.appendChild(choiceName);
                        fieldDiv.appendChild(br);

                        inputElem.addEventListener("click", function (e) {

                            for(choice of childArray){
                                element = document.getElementById(choice.MW_Key);
                                if(element != undefined){
                                    element.remove();
                                }
                            }

                            if (document.getElementById(childField.MW_Key) == undefined) {
                                // let br2 = document.createElement("br");
                                // choiceName.appendChild(br2);
                                let subChild = document.createElement("input");
                                subChild.setAttribute("type", childField.type);
                                subChild.id = childField.MW_Key;
                                choiceName.appendChild(subChild);
                            }
                        });


                    });
                } else {
                    const choicesArray = field.choices;
                    choicesArray.forEach(function (childField, index) {
                        let inputElem = document.createElement("input");
                        if (type === "RADIO_BUTTON") {
                            inputElem.setAttribute("type", "radio");
                        } else {
                            inputElem.setAttribute("type", "checkbox");
                        }
                        inputElem.setAttribute("name", field.MW_Key);

                        let choiceName = document.createElement("label");
                        choiceName.setAttribute("for", field.choices[index]);
                        choiceName.innerHTML = field.choices[index];

                        let br = document.createElement("br");
                        fieldDiv.appendChild(inputElem);
                        fieldDiv.appendChild(choiceName);
                        fieldDiv.appendChild(br);
                    });
                }
            } else if (type === "TEXT") {
                let inputElem = document.createElement("input");
                inputElem.setAttribute("type", "text");
                inputElem.setAttribute("name", field.MW_Key);
                fieldDiv.appendChild(inputElem);
            }
            else if (type === "FILE_UPLOAD") {
                let inputElem = document.createElement("input");
                inputElem.setAttribute("type", "file");
                inputElem.setAttribute("name", field.MW_Key);
                fieldDiv.appendChild(inputElem);
            }
            else if (type === "SUBMIT_BUTTON") {
                let inputElem = document.createElement("button");
                inputElem.setAttribute("type", "submit");
                inputElem.setAttribute("name", field.MW_Key);
                inputElem.innerHTML = field.title;
                fieldDiv.appendChild(inputElem);
            }






            form.appendChild(fieldDiv);
        });

        document.querySelector("body").appendChild(form);
    }






});