import {Button, Col, Row, Typography} from "@douyinfe/semi-ui";
import testCoverImage from "../assets/testcover.png";
import {useNavigate} from "react-router-dom";

const { Title, Text } = Typography;

const generateCard = (navigate) => {
    return <div className="flex flex-col md:flex-row text-center md:text-left">
        <div className="text-center md:w-1/3">
            <div className="flex flex-col w-full">
                <div></div>
                <div className="flex-1">
                    <img className="max-h-72 inline-block" src={testCoverImage} alt="test cover"/>
                </div>
                <div></div>
            </div>
        </div>
        <div className="h-72 flex-1">
            <div className="md:px-7 py-7 h-full flex flex-col">
                <div>
                    <Text>Author Name</Text>
                </div>
                <div className="flex-1 font-bold">
                    <Title heading={4}>Book Title</Title>
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
    let navigate = useNavigate();
    return (
        <div className="h-full">
            <div className="text-center inline-block w-full">
                <div className="w-11/12 px-8 inline-block text-left">
                    <div className="pt-6 pb-10">
                        <Text>Search result(s) for </Text><span><Text strong>???</Text></span><Text>:</Text>
                    </div>
                    <div>
                        <Row gutter={[64, 64]}>
                            <Col span={12}>
                                {generateCard(navigate)}
                            </Col>
                            <Col span={12}>
                                {generateCard(navigate)}
                            </Col>
                        </Row>
                        <Row gutter={[64, 64]}>
                            <Col span={12}>
                                {generateCard(navigate)}
                            </Col>
                            <Col span={12}>
                                {generateCard(navigate)}
                            </Col>
                        </Row>
                        <Row gutter={[64, 64]}>
                            <Col span={12}>
                                {generateCard(navigate)}
                            </Col>
                            <Col span={12}>
                                {generateCard(navigate)}
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchResults;
