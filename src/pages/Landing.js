import {Button, Input} from "@douyinfe/semi-ui";
import { IconSearch } from '@douyinfe/semi-icons';
import logoDark from "../assets/logo-dark.png";
import {useNavigate} from "react-router-dom";

function Landing() {
    let navigate = useNavigate();
    return (
        <div className="h-full">
            <div className="text-center inline-block absolute w-full"
                 style={{top: "50%", transform: "translateY(-55%)"}}>
                <div className='w-full md:w-2/5 inline-block font-bold'>
                    <div>
                        <img src={logoDark} className="inline-block w-2/3 md:w-1/2" alt="logo" />
                    </div>
                </div>
                <br/>
                <br/>
                <div className="w-2/5 md:inline-block hidden">
                    <Input showClear placeholder='Enter book number or ISBN' size='large' suffix={<Button icon={<IconSearch />} size="large" aria-label="Search" onClick={() => {navigate(`/search`);}} />}></Input>
                </div>
                <div className="w-9/12 inline-block md:hidden">
                    <Input showClear placeholder='Enter book number or ISBN' size='large' className="mb-3"></Input>
                    <Button icon={<IconSearch />} size="large" block aria-label="Search" onClick={() => {navigate(`/search`);}}>Search</Button>
                </div>
                <br/>
            </div>
        </div>
    );
}

export default Landing;
