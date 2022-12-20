import { useState } from 'react';
import testCoverImage from "../assets/testcover.png";
import {Button, Divider, Dropdown, Rating, SplitButtonGroup, Typography} from "@douyinfe/semi-ui";
import { IconTreeTriangleDown } from '@douyinfe/semi-icons';

function BookDetails() {
    const { Paragraph, Title, Text } = Typography;

    const menu = [
        { node: 'title', name: 'Title' },
        { node: 'item', name: 'Edit', onClick: () => console.log('Edit clicked') },
        { node: 'item', name: 'Reset', type: 'secondary' },
        { node: 'divider' },
        { node: 'item', name: 'Create', type: 'tertiary' },
        { node: 'item', name: 'Copy', type: 'warning' },
        { node: 'divider' },
        { node: 'item', name: 'Delete', type: 'danger' },
    ];

    const [btnVisible, setBtnVisible] = useState({
        1: false,
        2: false,
        3: false
    });
    const handleVisibleChange = (key, visible)=>{
        let newBtnVisible = { ...btnVisible };
        newBtnVisible[key] = visible;
        setBtnVisible(newBtnVisible);
    };

    return (
        <div className="h-full text-center">
            <div className="w-11/12 inline-block h-full px-8 text-left">
                <div className="flex h-full flex-col md:flex-row">
                    <div className="md:w-5/12 text-center">
                        <img className="inline-block" src={testCoverImage} alt="test cover" />
                    </div>
                    <div className="md:pl-20 md:pr-10 py-10 flex flex-col flex-1 text-center md:text-left">
                        <div className="flex-1">
                            <div>
                                <Text type="tertiary">ISBN Number</Text>
                            </div>
                            <div className="py-1">
                                <Title>Book Title</Title>
                            </div>
                            <div>
                                <Text type="secondary">Author Name & Year</Text>
                            </div>
                            <div>
                                <Divider margin='12px'/>
                            </div>
                            <div>
                                <Paragraph>Description</Paragraph>
                            </div>
                            <div className="py-3">
                                <Rating size="small" defaultValue={5} />
                            </div>
                        </div>
                        <div>
                            <SplitButtonGroup aria-label="Project operate button group">
                                <Button theme="solid" type="primary" size="large">Download</Button>
                                <Dropdown onVisibleChange={(v)=>handleVisibleChange(1, v)} menu={menu} trigger="click" position="bottomRight">
                                    <Button style={btnVisible[1]?{ background: 'var(--semi-color-primary-hover)', padding: '8px 4px' }:{ padding: '8px 4px' }} theme="solid" type="primary" size="large" icon={<IconTreeTriangleDown size="small" />}></Button>
                                </Dropdown>
                            </SplitButtonGroup>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookDetails;
