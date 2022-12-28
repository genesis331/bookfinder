import React, {useEffect, useMemo, useState} from "react";
import {Button, Divider, SplitButtonGroup, Typography, Skeleton} from "@douyinfe/semi-ui";
import {useLocation} from "react-router-dom";

const useQuery = () => {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
}

function BookDetails() {
    let query = useQuery();
    const apiUrl = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://bookfinderapi.zixucheah331.ml";
    const { Paragraph, Title, Text } = Typography;

    const [bookData, setBookData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            if (query.get("id")) {
                let results = await fetch(`${apiUrl}/detail?q=${query.get("id")}`);
                results = await results.json();
                return results;
            }
        }
        fetchData().then(async (results) => {
            setBookData(results[0]);
        });
    }, [query, apiUrl]);

    return (
        <div className="h-full text-center">
            <div className="w-11/12 inline-block h-full px-8 text-left">
                <div className="flex h-full flex-col md:flex-row">
                    <div className="md:w-5/12 text-center md:pt-10">
                        <img className="inline-block" src={bookData ? `${apiUrl}/imgproxy?url=https://libgen.is/covers/${bookData.coverurl}` : ""} alt="book cover" />
                    </div>
                    <div className="md:pl-20 md:pr-10 py-10 flex flex-col flex-1 text-center md:text-left">
                        <div className="flex-1">
                            <div>
                                <Text type="tertiary">{bookData ? bookData.identifier : <Skeleton />}</Text>
                            </div>
                            <div className="py-1">
                                <Title>{bookData ? bookData.title : <Skeleton.Title />}</Title>
                            </div>
                            <div>
                                <Text type="secondary">{bookData ? `${bookData.author} (${bookData.year})` : <Skeleton />}</Text>
                            </div>
                            <div>
                                <Divider margin='12px'/>
                            </div>
                            <div>
                                {bookData ? <Paragraph>{bookData.descr}</Paragraph> : <Skeleton.Paragraph />}
                            </div>
                            <div className="py-3"></div>
                        </div>
                        <div>
                            {bookData ? <Button theme="solid" type="primary" size="large" onClick={() => {if (bookData) {window.open(`http://library.lol/main/${bookData.md5}`)}}}>Download</Button> : <Skeleton.Button />}
                            <Text type="tertiary" className="ml-3">{bookData ? `(${bookData.extension})` : ""}</Text>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookDetails;
