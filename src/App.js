import {useState} from "react";
import logoDark from "./assets/logo-dark.png";
import {Button, Input, Layout, Typography} from "@douyinfe/semi-ui";
import {IconSearch} from "@douyinfe/semi-icons";
import {Link, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Landing from "./pages/Landing";
import SearchResults from "./pages/SearchResults";
import BookDetails from "./pages/BookDetails";
import PageNotFound from "./pages/PageNotFound";

const {Header, Footer, Content} = Layout;
const { Text } = Typography;

function App() {
    let navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");

    const setHeaderSearchValue = (value) => {
        setInputValue(value);
    }

    return (
        <Layout className='h-screen'>
            <Header className="pt-12 pb-10 text-center">
                {
                    useLocation().pathname !== "/" ? <div className="w-11/12 inline-block md:text-left">
                        <div className="flex justify-between px-8 align-middle flex-col md:flex-row">
                            <div>
                                <Link to="/">
                                    <img src={logoDark} className="h-10 inline-block" alt="logo" />
                                </Link>
                            </div>
                            <div className="w-4/12 md:inline-block hidden">
                                <Input showClear size='large' value={inputValue} onChange={(value) => setInputValue(value)} suffix={<Button icon={<IconSearch />} size="large" aria-label="Search" onClick={() => {if (inputValue !== "") {navigate(`/search?q=${inputValue}`);}}} />}></Input>
                            </div>
                            <div className="inline-block md:hidden pt-7">
                                <Input showClear placeholder='Enter book number or ISBN' size='large' className="mb-3" value={inputValue} onChange={(value) => setInputValue(value)}></Input>
                                <Button icon={<IconSearch />} size="large" block aria-label="Search" onClick={() => {if (inputValue !== "") {navigate(`/search?q=${inputValue}`);}}}>Search</Button>
                            </div>
                        </div>
                    </div> : <div></div>
                }
            </Header>
            <Content>
                <Routes>
                    <Route path="/" element={<Landing/>}/>
                    <Route path="/search" element={<SearchResults modifyHeaderValue={setHeaderSearchValue}/>}/>
                    <Route path="/book" element={<BookDetails/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </Content>
            <Footer className="pb-12 pt-20 text-center">
                <Text type="quaternary">Made by genesis331 & LimJY_03</Text>
            </Footer>
        </Layout>
    );
}

export default App;