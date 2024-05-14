import { useParams } from "react-router-dom"

const Detail = () => {
    const {id} = useParams();
    console.log(id);

    return (
        <div className="bg-yellow-100 min-h-screen flex justify-center items-center">
            Coin Symbol : {id}
        </div>
    );
};

export default Detail;