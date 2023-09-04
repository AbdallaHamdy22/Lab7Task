import { useParams } from "react-router-dom";

function ProductDetails() {
    const {id } = useParams()
    return (<>
        <h1>Details and its id is { id}</h1>
    </>);
}

export default ProductDetails;