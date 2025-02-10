import Button from "../component/Button";

const Home= () => {
    return (
        <div>
            <Button
                text={"default"}
                onClick={()=>{
                    alert("default");
                }}
            />
            <Button
                type="positive"
                text={"positive"}
                onClick={()=>{
                    alert("positive");
                }}
            />
            <Button
                type="negative"
                text={"negative"}
                onClick={()=>{
                    alert("negative");
                }}
            />
        </div>
    );
};

export default Home;