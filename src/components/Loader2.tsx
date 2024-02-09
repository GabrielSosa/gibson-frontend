import { useState, CSSProperties } from "react";
import { GridLoader } from "react-spinners";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

const Loader2 = (props: any) => {

    let [color] = useState("#0351AA");


    return (
        <div className="container-loading" hidden={!props.loading}>
            <GridLoader color={color} loading={props.loading} cssOverride={override} size={15} />
        </div>
    );
};

export default Loader2;
