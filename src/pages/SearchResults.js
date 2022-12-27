import React, {useEffect, useMemo, useState} from "react";
import {Button, Col, Row, Typography} from "@douyinfe/semi-ui";
import {useLocation, useNavigate} from "react-router-dom";

const apiUrl = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://bookfinderapi.zixucheah331.ml"
const { Title, Text } = Typography;

const useQuery = () => {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
}

const generateCard = async (navigate, data) => {
    return <div className="flex flex-col md:flex-row text-center md:text-left">
        <div className="text-center md:w-1/3">
            <div className="flex flex-col w-full">
                <div></div>
                <div className="flex-1">
                    <img className="max-h-72 inline-block" src={`${apiUrl}/imgproxy?url=https://libgen.is/covers/${data.coverurl}`} alt="test cover"/>
                </div>
                <div></div>
            </div>
        </div>
        <div className="h-72 flex-1">
            <div className="md:px-7 py-7 h-full flex flex-col">
                <div>
                    <Text>{data.author}</Text>
                </div>
                <div className="flex-1 font-bold">
                    <Title heading={4}>{data.title}</Title>
                </div>
                <div>
                    <Button onClick={() => {navigate(`/book`);}}>
                        Read More
                    </Button>
                </div>
            </div>
        </div>
    </div>
}
function SearchResults() {
    let query = useQuery();
    let navigate = useNavigate();

    const [resultCards, setResultCards] = useState(null);
    const [searchQuery, setSearchQuery] = useState("???");

    useEffect(() => {
        setSearchQuery(query.get("q"));
        async function fetchData() {
            if (query.get("q")) {
                let results = await fetch(`${apiUrl}/search?q=${query.get("q")}`);
                results = await results.json();
                return results;
            }
        }
        fetchData().then(async (results) => {
            console.log(results);
            let cards = [];
            for (let i = 0; i < results.length; i++) {
                cards.push(<Col span={12}>{await generateCard(navigate, results[i])}</Col>);
            }
            setResultCards(cards);
        });
    }, [query, navigate]);

    return (
        <div className="h-full">
            <div className="text-center inline-block w-full">
                <div className="w-11/12 px-8 inline-block text-left">
                    <div className="pt-6 pb-10">
                        <Text>Search result(s) for </Text><span><Text strong>{searchQuery}</Text></span><Text>:</Text>
                    </div>
                    <div>
                        <Row gutter={[64, 64]}>
                            {resultCards}
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchResults;
