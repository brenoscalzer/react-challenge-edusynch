import React, { useEffect, useState } from 'react';

import curvedSeparator from '../../images/curved_separator.svg';
import productInfo1 from '../../images/product_info_1.svg';

import Header from './components/header';
import SignUpNow from './components/sign_up_now';
import SignUpNowSmall from './components/sign_up_now_small';
import ProductInfo from './components/product_info';
import Table from '../../components/table';
import Newsletter from './components/newsletter';
import Footer from './components/footer';

import { SeparatorContainer, ContentContainer, Row, TableTitle, TableSizeText } from './styles';
import { listCoins } from '../../services/coins_service';
import { Coin } from '../../utils/types/coin';
import { renderCell } from './components/table_cell';

const columns = [
    {key: 'position', label: '#'},
    {key: 'crypto', label: 'Crypto'},
    {key: 'price', label: 'Price'},
    {key: 'change', label: 'Change'},
    {key: 'trade', label: 'Trade'},
];

const LandingPage = () => {
    const [coins, setCoins] = useState<Coin[]>([]);
    const [tableSize, setTableSize] = useState(4);

    useEffect(() => {
        listCoins().then((res) => {
          setCoins(res);
        });
    }, []);

    return (
        <div style={{ overflowX: 'hidden', width: '100vw' }}>
            <Header />
            <SignUpNow />
            <SeparatorContainer>
                <img src={curvedSeparator} />
            </SeparatorContainer>
            <Row>
                <div>
                    <ContentContainer>
                        <ProductInfo 
                            icon={productInfo1} 
                            title="For your company" 
                            subtitle="Crypto Solutions" 
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam," 
                        />
                        <ProductInfo 
                            icon={productInfo1} 
                            title="For your company" 
                            subtitle="Crypto Solutions" 
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam," 
                        />
                    </ContentContainer>
                    <ContentContainer marginLeft="104px" marginTop="32px">
                        <ProductInfo 
                            icon={productInfo1} 
                            title="For your company" 
                            subtitle="Crypto Solutions" 
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam," 
                        />
                        <ProductInfo 
                            icon={productInfo1} 
                            title="For your company" 
                            subtitle="Crypto Solutions" 
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam," 
                        />
                    </ContentContainer>
                </div>
                <SignUpNowSmall />
            </Row>
            <TableTitle>Top Cryptos</TableTitle>
            <Table columns={columns} data={coins.slice(0, tableSize)} renderCell={renderCell} />
            <TableSizeText onClick={() => setTableSize(tableSize === 4 ? 10 : 4)}>{tableSize === 4 ? 'View more +' : 'View less'}</TableSizeText>
            <Newsletter />
            <Footer />
        </div>
    );
}

export default LandingPage;
