import React from "react";

interface IProps {
    fieldName: string;
    onChange: (fieldName: string, value: string) => void;
    value: string;
    label: string;
}

const TextField = (props: IProps) => {
    const handleOnChange = (e: any) => {
        props.onChange(props.fieldName, e.target.value);
    }
    return(
        <React.Fragment>
            <input
                type="text"
                onChange={(e) => handleOnChange(e)}
                value={props.value}
            />
        </React.Fragment>
    )
}

export default TextField